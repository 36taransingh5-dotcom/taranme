/* ============================================================
   DESIGN: Minimal Professional Portal
   - Clean fade transition from quote to portfolio
   - Subtle scroll indicator
   - No flashy animations, just elegant simplicity
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
      style={{ background: "oklch(0.985 0.005 85)" }}
    >
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
            style={{ background: "oklch(0.38 0.10 155)" }}
          />

          {/* Quote */}
          <div className="max-w-2xl">
            <p
              className="font-['Fraunces'] font-light italic leading-tight"
              style={{
                fontSize: "clamp(1.8rem, 5vw, 3.2rem)",
                color: "oklch(0.18 0.015 65)",
              }}
            >
              "Good engineering isn't just about making things work—it's about
              making them work{" "}
              <span style={{ color: "oklch(0.38 0.10 155)" }}>safely</span> and{" "}
              <span style={{ color: "oklch(0.38 0.10 155)" }}>reliably.</span>"
            </p>
          </div>

          {/* Vertical line accent */}
          <div
            className="w-0.5 h-12"
            style={{ background: "oklch(0.38 0.10 155)" }}
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
              color: "oklch(0.18 0.015 65)",
            }}
          >
            Taran Pal Singh
          </h1>
          <p
            className="mt-4 text-base"
            style={{
              color: "oklch(0.38 0.10 155)",
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
            color: "oklch(0.38 0.10 155)",
            fontFamily: "'Fira Code', monospace",
          }}
        >
          Scroll
        </span>
        <div
          className="w-px h-6 animate-pulse"
          style={{ background: "oklch(0.38 0.10 155)" }}
        />
      </div>

      {/* Scroll spacer */}
      <div style={{ height: "250vh" }} />
    </div>
  );
}
