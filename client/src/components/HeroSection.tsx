/* ============================================================
   DESIGN: Swiss Editorial / Structured Light + Dark
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
      style={{ background: "var(--background)" }}
    >
      {/* Subtle warm overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 30% 50%, var(--hero-overlay) 0%, transparent 100%)",
        }}
      />
      {/* Atmospheric emerald glow for dark mode depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 60%, color-mix(in oklch, var(--primary) 6%, transparent) 0%, transparent 70%)",
        }}
      />

      <div className="container relative z-10 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-12 lg:gap-8 items-center">
          {/* Left: Text content */}
          <div className="flex flex-col gap-6">
            {/* Status badge */}
            <div className="animate-fade-up opacity-0 delay-100 flex items-center gap-2 w-fit">
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "var(--primary)" }}
              />
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
                    color: "var(--heading)",
                  }}
                >
                  Taran
                  <br />
                  <span style={{ color: "var(--primary)" }}>Pal Singh</span>
                </h1>
              </div>
            </div>

            {/* Rotating tagline */}
            <div className="animate-fade-up opacity-0 delay-300 flex items-baseline gap-3">
              <span
                className="font-['Fraunces'] font-light italic"
                style={{
                  fontSize: "clamp(1.4rem, 3vw, 2rem)",
                  color: "var(--body-light)",
                }}
              >
                I'm a
              </span>
              <span
                className="font-['Fraunces'] font-semibold transition-all duration-300"
                style={{
                  fontSize: "clamp(1.4rem, 3vw, 2rem)",
                  color: "var(--primary)",
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
                color: "var(--body-light)",
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              I am a software engineer and builder focused on shipping real, production-ready applications. Whether I'm migrating core architectures to Python, building structured data pipelines, or developing full-stack web platforms, I write robust code to solve hard engineering problems. I build AI-powered products independently and work across technical and non-technical teams. I've shipped a live iOS app at an accelerator-backed startup, won Best Use of Gemini API at SotonHack 2026, founded a deployed university platform, and consulted for a real client through 180 Degrees Consulting.
            </p>

            {/* Links row */}
            <div className="animate-fade-up opacity-0 delay-500 flex flex-wrap items-center gap-3 mt-2">
              {[
                { href: "https://github.com/36taransingh5-dotcom", icon: <Github size={15} />, label: "GitHub" },
                { href: "https://linkedin.com/in/taran-pal-singh", icon: <Linkedin size={15} />, label: "LinkedIn" },
                { href: "https://sotonhive.tech", icon: <Globe size={15} />, label: "sotonhive.tech" },
                { href: "https://behance.net/techediting", icon: <Palette size={15} />, label: "Behance" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium transition-all duration-200"
                  style={{
                    border: "1px solid var(--border)",
                    color: "var(--body)",
                    background: "var(--link-btn-bg)",
                  }}
                >
                  {link.icon}
                  {link.label}
                </a>
              ))}
              <a
                href="mailto:tps1g25@soton.ac.uk"
                className="flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium transition-colors duration-200"
                style={{
                  background: "var(--primary)",
                  color: "var(--primary-foreground)",
                }}
              >
                <Mail size={15} />
                Email me
              </a>
            </div>

            {/* Scroll cue */}
            <div className="animate-fade-up opacity-0 delay-600 flex items-center gap-2 mt-4">
              <ArrowDown
                size={14}
                className="animate-bounce"
                style={{ color: "var(--primary)" }}
              />
              <span className="section-label">Scroll to explore</span>
            </div>
          </div>

          {/* Right: Abstract visual */}
          <div className="hidden lg:flex justify-end items-center animate-fade-in opacity-0 delay-300">
            <div className="relative w-full max-w-[400px]">
              {/* Decorative border frame */}
              <div
                className="absolute -top-4 -right-4 w-full h-full rounded-xl"
                style={{ zIndex: 0, border: "2px solid color-mix(in oklch, var(--primary) 25%, transparent)" }}
              />
              <img
                src={HERO_IMAGE}
                alt="Abstract geometric composition"
                className="relative z-10 w-full rounded-xl shadow-xl object-cover"
                style={{ aspectRatio: "3/4", maxHeight: "520px" }}
              />
              {/* Floating stat card */}
              <div
                className="absolute -bottom-6 -left-8 z-20 rounded-lg shadow-lg px-4 py-3"
                style={{
                  minWidth: "160px",
                  background: "var(--surface-white)",
                  border: "1px solid var(--border)",
                }}
              >
                <div className="section-label mb-1">Current GPA</div>
                <div
                  className="font-['Fraunces'] font-bold text-2xl"
                  style={{ color: "var(--primary)" }}
                >
                  First Class
                </div>
                <div
                  className="text-xs mt-0.5"
                  style={{ color: "var(--body-muted)" }}
                >
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
