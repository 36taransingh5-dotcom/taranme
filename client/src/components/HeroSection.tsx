/* ============================================================
   DESIGN: Swiss Editorial / Structured Light
   Hero: asymmetric 60/40 split, left-anchored text, right abstract visual
   Dot-grid background, vertical green rule, word-by-word fade-up
   ============================================================ */
import { useEffect, useState } from "react";
import { Github, Linkedin, Globe, Mail, ArrowDown, Palette } from "lucide-react";

import HERO_IMAGE from "@/assets/profile.jpg";

const words = ["Builder.", "Analyst.", "Developer."];

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % words.length);
        setVisible(true);
      }, 350);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden dot-grid-bg"
    >
      {/* Subtle warm overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 30% 50%, oklch(0.985 0.005 85 / 0.85) 0%, transparent 100%)",
        }}
      />

      <div className="container relative z-10 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-12 lg:gap-8 items-center">
          {/* Left: Text content */}
          <div className="flex flex-col gap-6">
            {/* Status badge */}
            <div className="animate-fade-up opacity-0 delay-100 flex items-center gap-2 w-fit">
              <span className="w-2 h-2 rounded-full bg-[oklch(0.38_0.10_155)] animate-pulse" />
              <span className="section-label">
                First-year CS @ University of Southampton
              </span>
            </div>

            {/* Name */}
            <div className="flex items-start gap-4">
              <span className="green-rule h-20 mt-1 hidden sm:block flex-shrink-0" />
              <div>
                <h1
                  className="animate-fade-up opacity-0 delay-200 font-['Fraunces'] font-bold leading-[1.05] tracking-tight"
                  style={{
                    fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
                    color: "oklch(0.18 0.015 65)",
                  }}
                >
                  Taran
                  <br />
                  <span style={{ color: "oklch(0.38 0.10 155)" }}>Pal Singh</span>
                </h1>
              </div>
            </div>

            {/* Rotating tagline */}
            <div className="animate-fade-up opacity-0 delay-300 flex items-baseline gap-3">
              <span
                className="font-['Fraunces'] font-light italic"
                style={{
                  fontSize: "clamp(1.4rem, 3vw, 2rem)",
                  color: "oklch(0.45 0.012 65)",
                }}
              >
                I'm a
              </span>
              <span
                className="font-['Fraunces'] font-semibold transition-all duration-300"
                style={{
                  fontSize: "clamp(1.4rem, 3vw, 2rem)",
                  color: "oklch(0.38 0.10 155)",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(-8px)",
                }}
              >
                {words[wordIndex]}
              </span>
            </div>

            {/* Bio */}
            <p
              className="animate-fade-up opacity-0 delay-400 max-w-[520px] leading-relaxed"
              style={{
                fontSize: "1.05rem",
                color: "oklch(0.45 0.012 65)",
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              I build real software, think carefully about how systems fail, and
              care deeply about the governance and safety of technology. Currently
              on track for a First at Southampton — and always working on
              something.
            </p>

            {/* Links row */}
            <div className="animate-fade-up opacity-0 delay-500 flex flex-wrap items-center gap-3 mt-2">
              <a
                href="https://github.com/taran-pal-singh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-md border border-[oklch(0.88_0.010_85)] text-sm font-medium text-[oklch(0.35_0.012_65)] hover:border-[oklch(0.38_0.10_155)] hover:text-[oklch(0.38_0.10_155)] transition-all duration-200 bg-white/60"
              >
                <Github size={15} />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/taran-pal-singh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-md border border-[oklch(0.88_0.010_85)] text-sm font-medium text-[oklch(0.35_0.012_65)] hover:border-[oklch(0.38_0.10_155)] hover:text-[oklch(0.38_0.10_155)] transition-all duration-200 bg-white/60"
              >
                <Linkedin size={15} />
                LinkedIn
              </a>
              <a
                href="https://sotonhive.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-md border border-[oklch(0.88_0.010_85)] text-sm font-medium text-[oklch(0.35_0.012_65)] hover:border-[oklch(0.38_0.10_155)] hover:text-[oklch(0.38_0.10_155)] transition-all duration-200 bg-white/60"
              >
                <Globe size={15} />
                sotonhive.tech
              </a>
              <a
                href="https://behance.net/techediting"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-md border border-[oklch(0.88_0.010_85)] text-sm font-medium text-[oklch(0.35_0.012_65)] hover:border-[oklch(0.38_0.10_155)] hover:text-[oklch(0.38_0.10_155)] transition-all duration-200 bg-white/60"
              >
                <Palette size={15} />
                Behance
              </a>
              <a
                href="mailto:tps1g25@soton.ac.uk"
                className="flex items-center gap-2 px-4 py-2.5 rounded-md bg-[oklch(0.38_0.10_155)] text-[oklch(0.98_0.005_85)] text-sm font-medium hover:bg-[oklch(0.32_0.10_155)] transition-colors duration-200"
              >
                <Mail size={15} />
                Email me
              </a>
            </div>

            {/* Scroll cue */}
            <div className="animate-fade-up opacity-0 delay-600 flex items-center gap-2 mt-4">
              <ArrowDown
                size={14}
                className="text-[oklch(0.38_0.10_155)] animate-bounce"
              />
              <span className="section-label">Scroll to explore</span>
            </div>
          </div>

          {/* Right: Abstract visual */}
          <div className="hidden lg:flex justify-end items-center animate-fade-in opacity-0 delay-300">
            <div className="relative w-full max-w-[400px]">
              {/* Decorative border frame */}
              <div
                className="absolute -top-4 -right-4 w-full h-full rounded-xl border-2 border-[oklch(0.38_0.10_155/0.25)]"
                style={{ zIndex: 0 }}
              />
              <img
                src={HERO_IMAGE}
                alt="Abstract geometric composition"
                className="relative z-10 w-full rounded-xl shadow-xl object-cover"
                style={{ aspectRatio: "3/4", maxHeight: "520px" }}
              />
              {/* Floating stat card */}
              <div
                className="absolute -bottom-6 -left-8 z-20 bg-white rounded-lg shadow-lg px-4 py-3 border border-[oklch(0.88_0.010_85)]"
                style={{ minWidth: "160px" }}
              >
                <div className="section-label mb-1">Current GPA</div>
                <div
                  className="font-['Fraunces'] font-bold text-2xl"
                  style={{ color: "oklch(0.38 0.10 155)" }}
                >
                  First Class
                </div>
                <div className="text-xs text-[oklch(0.52_0.012_65)] mt-0.5">
                  University of Southampton
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
