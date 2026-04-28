/* ============================================================
   DESIGN: Minimal Professional Portal + Dark
   - Clean fade transition from quote to portfolio
   - Subtle scroll indicator
   - Atmospheric dark mode with emerald glow
   ============================================================ */
import { useEffect, useRef, useState } from "react";

interface PortalIntroProps {
  onComplete: () => void;
}

export default function PortalIntro({ onComplete }: PortalIntroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const docHeight =
            document.documentElement.scrollHeight - window.innerHeight;
          const progress = Math.min(scrollTop / (docHeight * 0.4), 1);

          setScrollProgress(progress);

          // Quote fade out
          if (quoteRef.current) {
            quoteRef.current.style.opacity = (1 - progress).toString();
            quoteRef.current.style.pointerEvents =
              progress > 0.5 ? "none" : "auto";
          }

          // Content fade in
          if (contentRef.current) {
            contentRef.current.style.opacity = progress.toString();
            contentRef.current.style.pointerEvents =
              progress < 0.1 ? "none" : "auto";
          }

          // Scroll indicator fade
          if (scrollIndicatorRef.current) {
            scrollIndicatorRef.current.style.opacity = (
              Math.max(1 - progress * 2, 0)
            ).toString();
          }

          // Auto-advance at 25% scroll
          if (progress >= 0.25 && !hasScrolled) {
            setHasScrolled(true);
            setTimeout(() => {
              window.scrollTo({
                top: docHeight * 0.4,
                behavior: "smooth",
              });
              setTimeout(onComplete, 800);
            }, 300);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled, onComplete]);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      {/* Atmospheric background glow — visible in dark mode */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 40%, color-mix(in oklch, var(--primary) 8%, transparent) 0%, transparent 70%)",
        }}
      />
      {/* Subtle dot-grid texture */}
      <div
        className="fixed inset-0 pointer-events-none z-0 dot-grid-bg opacity-40"
      />

      {/* Quote Section */}
      <div
        ref={quoteRef}
        className="fixed inset-0 z-40 flex flex-col items-center justify-center pointer-events-auto transition-opacity duration-300"
        style={{
          opacity: 1,
        }}
      >
        <div className="container flex flex-col items-center justify-center text-center gap-8">
          {/* Vertical line accent */}
          <div
            className="w-0.5 h-12"
            style={{ background: "var(--primary)" }}
          />

          {/* Quote */}
          <div className="max-w-2xl">
            <p
              className="font-['Fraunces'] font-light italic leading-tight"
              style={{
                fontSize: "clamp(1.8rem, 5vw, 3.2rem)",
                color: "var(--heading)",
              }}
            >
              "Build{" "}
              <span style={{ color: "var(--primary)" }}>robust systems.</span>{" "}
              Craft{" "}
              <span style={{ color: "var(--primary)" }}>elegant experiences.</span>"
            </p>
          </div>

          {/* Vertical line accent */}
          <div
            className="w-0.5 h-12"
            style={{ background: "var(--primary)" }}
          />
        </div>
      </div>

      {/* Content Section (Hidden, revealed on scroll) */}
      <div
        ref={contentRef}
        className="fixed inset-0 z-30 flex items-center justify-center pointer-events-none transition-opacity duration-300"
        style={{
          opacity: 0,
        }}
      >
        <div className="container text-center">
          <div className="mb-6 flex justify-center">
            <span className="green-rule h-8" />
          </div>
          <h1
            className="font-['Fraunces'] font-bold leading-tight"
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
              color: "var(--heading)",
            }}
          >
            Taran Pal Singh
          </h1>
          <p
            className="mt-4 text-base"
            style={{
              color: "var(--primary)",
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            First-year CS Student · Builder · Analyst
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 pointer-events-none transition-opacity duration-300"
      >
        <span
          className="text-xs font-medium tracking-widest uppercase"
          style={{
            color: "var(--primary)",
            fontFamily: "'Fira Code', monospace",
          }}
        >
          Scroll
        </span>
        <div
          className="w-px h-6 animate-pulse"
          style={{ background: "var(--primary)" }}
        />
      </div>

      {/* Scroll spacer */}
      <div style={{ height: "250vh" }} />
    </div>
  );
}
