/* ============================================================
   DESIGN: Cinematic Minimalist Portal with Swiss Editorial Colors
   - Base: warm white (#FAF9F6) and forest green (#2D6A4F)
   - SVG mask zoom reveal on scroll
   - Glassmorphic cards with blur and scale animations
   - Auto-advance trigger at 30% scroll
   ============================================================ */
import { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";

interface PortalIntroProps {
  onComplete: () => void;
}

export default function PortalIntro({ onComplete }: PortalIntroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const maskGroupRef = useRef<SVGGElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);
  const introUIRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAutoAdvancing, setIsAutoAdvancing] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / (docHeight * 0.5), 1);

      setScrollProgress(progress);

      // Mask group scale: 1x to 220x with cubic easing
      if (maskGroupRef.current) {
        const scale = 1 + progress * 219;
        maskGroupRef.current.setAttribute(
          "transform",
          `translate(-50%, -50%) scale(${scale})`
        );
      }

      // Curtain fade out at 85% completion
      if (curtainRef.current) {
        const curtainOpacity = Math.max(1 - progress / 0.85, 0);
        curtainRef.current.style.opacity = curtainOpacity.toString();
      }

      // Intro UI fade and translate up
      if (introUIRef.current) {
        const introOpacity = Math.max(1 - progress / 0.2, 0);
        const introTranslate = -60 * (progress / 0.2);
        introUIRef.current.style.opacity = introOpacity.toString();
        introUIRef.current.style.transform = `translateY(${introTranslate}px)`;
      }

      // Content reveal: opacity, scale, blur
      if (contentRef.current) {
        const contentOpacity = Math.max((progress - 0.15) / 0.4, 0);
        const contentScale = 0.95 + contentOpacity * 0.05;
        const contentBlur = 40 * (1 - contentOpacity);
        contentRef.current.style.opacity = contentOpacity.toString();
        contentRef.current.style.transform = `scale(${contentScale})`;
        contentRef.current.style.filter = `blur(${contentBlur}px)`;
      }

      // Progress bar
      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${progress * 100}%`;
      }

      // Auto-advance trigger at 30%
      if (progress >= 0.3 && !isAutoAdvancing) {
        setIsAutoAdvancing(true);
        setTimeout(() => {
          window.scrollTo({
            top: docHeight * 0.5,
            behavior: "smooth",
          });
          setTimeout(onComplete, 1000);
        }, 500);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isAutoAdvancing, onComplete]);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen overflow-hidden"
      style={{ background: "oklch(0.985 0.005 85)" }}
    >
      {/* SVG Curtain with Mask */}
      <div
        ref={curtainRef}
        className="fixed inset-0 z-40 pointer-events-none transition-opacity duration-300"
        style={{
          background: "oklch(0.985 0.005 85)",
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0"
        >
          <defs>
            <mask id="portalMask">
              <rect width="1000" height="1000" fill="white" />
              <g
                ref={maskGroupRef}
                id="mask-group"
                style={{
                  transformOrigin: "center",
                  transformBox: "fill-box",
                }}
              >
                <text
                  x="500"
                  y="500"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="150"
                  fontWeight="900"
                  fontFamily="'Fraunces', serif"
                  fill="black"
                  letterSpacing="-0.05em"
                >
                  TARAN
                </text>
              </g>
            </mask>
          </defs>
          <rect
            width="1000"
            height="1000"
            fill="oklch(0.38 0.10 155)"
            mask="url(#portalMask)"
          />
        </svg>
      </div>

      {/* Intro UI: Scroll Cue */}
      <div
        ref={introUIRef}
        className="fixed inset-0 z-30 flex flex-col items-center justify-center pointer-events-none transition-all duration-300"
      >
        <div className="flex flex-col items-center gap-4">
          <div
            className="w-6 h-10 border-2 rounded-full flex items-start justify-center p-2"
            style={{ borderColor: "oklch(0.38 0.10 155)" }}
          >
            <div
              className="w-1 h-2 rounded-full animate-bounce"
              style={{ background: "oklch(0.38 0.10 155)" }}
            />
          </div>
          <span
            className="text-xs font-medium tracking-widest uppercase"
            style={{
              color: "oklch(0.38 0.10 155)",
              fontFamily: "'Fira Code', monospace",
            }}
          >
            Scroll to unveil
          </span>
        </div>
      </div>

      {/* Hidden Content (revealed through portal) */}
      <div
        ref={contentRef}
        className="relative z-20 w-full min-h-screen flex items-center justify-center pointer-events-none"
        style={{
          pointerEvents: scrollProgress < 0.9 ? "none" : "auto",
        }}
      >
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text content */}
            <div className="flex flex-col gap-6">
              <div>
                <h1
                  className="font-['Fraunces'] font-bold leading-[0.9] tracking-tight"
                  style={{
                    fontSize: "clamp(2.5rem, 8vw, 5rem)",
                    color: "oklch(0.18 0.015 65)",
                  }}
                >
                  Taran
                  <br />
                  <span style={{ color: "oklch(0.38 0.10 155)" }}>
                    Pal Singh
                  </span>
                </h1>
                <p
                  className="mt-3 text-lg leading-relaxed"
                  style={{
                    color: "oklch(0.45 0.012 65 / 0.4)",
                    fontFamily: "'Outfit', sans-serif",
                  }}
                >
                  First-year CS student at Southampton
                </p>
              </div>

              <p
                className="text-base leading-relaxed max-w-[480px]"
                style={{
                  color: "oklch(0.35 0.012 65)",
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                I build real software, think carefully about how systems fail,
                and care deeply about the governance and safety of technology.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={onComplete}
                  className="rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-200 border"
                  style={{
                    background: "oklch(0.38 0.10 155)",
                    color: "oklch(0.98 0.005 85)",
                    borderColor: "oklch(0.38 0.10 155)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "oklch(0.32 0.10 155)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "oklch(0.38 0.10 155)";
                  }}
                >
                  Explore Portfolio
                </button>
                <button
                  className="rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-200 border"
                  style={{
                    background: "transparent",
                    color: "oklch(0.38 0.10 155)",
                    borderColor: "oklch(0.38 0.10 155 / 0.5)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "oklch(0.38 0.10 155)";
                    e.currentTarget.style.background = "oklch(0.93 0.03 155)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      "oklch(0.38 0.10 155 / 0.5)";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Right: Glassmorphic Card */}
            <div className="relative hidden md:flex items-center justify-center">
              {/* Ambient blur circles */}
              <div
                className="absolute w-64 h-64 rounded-full opacity-20 blur-3xl"
                style={{
                  background: "oklch(0.85 0.05 155)",
                  top: "-20%",
                  right: "-10%",
                }}
              />
              <div
                className="absolute w-48 h-48 rounded-full opacity-15 blur-3xl"
                style={{
                  background: "oklch(0.38 0.10 155)",
                  bottom: "-10%",
                  left: "-5%",
                }}
              />

              {/* Card */}
              <div
                className="relative z-10 rounded-2xl p-8 border backdrop-blur-3xl"
                style={{
                  background: "oklch(1 0 0 / 0.1)",
                  borderColor: "oklch(1 0 0 / 0.2)",
                  aspectRatio: "1 / 1",
                  maxWidth: "380px",
                }}
              >
                <div className="flex flex-col gap-6 h-full justify-between">
                  <div>
                    <div
                      className="text-xs font-medium tracking-widest uppercase mb-2"
                      style={{
                        color: "oklch(0.38 0.10 155)",
                        fontFamily: "'Fira Code', monospace",
                      }}
                    >
                      Current Status
                    </div>
                    <h3
                      className="font-['Fraunces'] font-bold text-3xl leading-snug"
                      style={{ color: "oklch(0.18 0.015 65)" }}
                    >
                      First Class
                    </h3>
                    <p
                      className="text-sm mt-1"
                      style={{
                        color: "oklch(0.52 0.012 65)",
                        fontFamily: "'Outfit', sans-serif",
                      }}
                    >
                      University of Southampton
                    </p>
                  </div>

                  <div>
                    <div
                      className="text-xs font-medium tracking-widest uppercase mb-3"
                      style={{
                        color: "oklch(0.38 0.10 155)",
                        fontFamily: "'Fira Code', monospace",
                      }}
                    >
                      Focus Areas
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["AI Safety", "Systems", "Governance"].map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-full border"
                          style={{
                            background: "oklch(0.93 0.03 155)",
                            color: "oklch(0.30 0.08 155)",
                            borderColor: "oklch(0.85 0.05 155)",
                            fontFamily: "'Fira Code', monospace",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-4 border-t border-[oklch(1_0_0/0.1)]">
                    <ArrowDown
                      size={14}
                      style={{ color: "oklch(0.38 0.10 155)" }}
                    />
                    <span
                      className="text-xs font-medium"
                      style={{
                        color: "oklch(0.38 0.10 155)",
                        fontFamily: "'Fira Code', monospace",
                      }}
                    >
                      Scroll or click to continue
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div
        className="fixed bottom-0 left-0 h-1 z-50 transition-all duration-100"
        ref={progressBarRef}
        style={{ background: "oklch(0.38 0.10 155)" }}
      />

      {/* Scroll spacer to enable scrolling */}
      <div style={{ height: "300vh" }} />
    </div>
  );
}
