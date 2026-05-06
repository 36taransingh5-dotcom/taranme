import React, { createContext, useContext, useEffect, useRef, useState } from "react";

const PLAYLIST = [
  { src: "bg-music.mp3",   title: "I Thought The Future Would Be Cooler", artist: "YACHT" },
  { src: "bg-music-2.mp3", title: "Surreal",                               artist: "Flawed Mangoes" },
];

interface AudioContextType {
  isPlaying: boolean;
  togglePlay: () => void;
  currentTime: number;
  duration: number;
  seek: (time: number) => void;
  nextTrack: () => void;
  trackIndex: number;
  track: typeof PLAYLIST[0];
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [trackIndex, setTrackIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const loadTrack = (index: number, autoplay: boolean) => {
    const baseUrl = import.meta.env.BASE_URL || "/";
    const base = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
    const path = `${base}${PLAYLIST[index].src}`;

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = path;
      audioRef.current.load();
      if (autoplay) {
        audioRef.current.play().catch((e) => console.error("Error playing audio", e));
        setIsPlaying(true);
      }
      setCurrentTime(0);
    }
  };

  useEffect(() => {
    const baseUrl = import.meta.env.BASE_URL || "/";
    const base = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
    const path = `${base}${PLAYLIST[0].src}`;

    audioRef.current = new Audio(path);
    audioRef.current.loop = false;

    const updateTime = () => setCurrentTime(audioRef.current?.currentTime || 0);
    const updateDuration = () => setDuration(audioRef.current?.duration || 0);
    const onEnded = () => {
      setTrackIndex((prev) => {
        const next = (prev + 1) % PLAYLIST.length;
        setTimeout(() => loadTrack(next, true), 0);
        return next;
      });
    };

    audioRef.current.addEventListener("timeupdate", updateTime);
    audioRef.current.addEventListener("loadedmetadata", updateDuration);
    audioRef.current.addEventListener("ended", onEnded);

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", updateTime);
        audioRef.current.removeEventListener("loadedmetadata", updateDuration);
        audioRef.current.removeEventListener("ended", onEnded);
        audioRef.current.pause();
      }
    };
  }, []);

  // Sync duration when track changes
  useEffect(() => {
    const onLoaded = () => setDuration(audioRef.current?.duration || 0);
    audioRef.current?.addEventListener("loadedmetadata", onLoaded);
    return () => audioRef.current?.removeEventListener("loadedmetadata", onLoaded);
  }, [trackIndex]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((e) => console.error("Error playing audio", e));
    }
    setIsPlaying(!isPlaying);
  };

  const seek = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const nextTrack = () => {
    const next = (trackIndex + 1) % PLAYLIST.length;
    setTrackIndex(next);
    loadTrack(next, isPlaying);
  };

  return (
    <AudioContext.Provider value={{
      isPlaying, togglePlay, currentTime, duration, seek,
      nextTrack, trackIndex, track: PLAYLIST[trackIndex],
    }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) throw new Error("useAudio must be used within AudioProvider");
  return context;
}
