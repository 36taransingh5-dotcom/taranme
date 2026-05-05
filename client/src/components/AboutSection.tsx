/* ============================================================
   DESIGN: Swiss Editorial / Structured Light + Dark
   About: two-column layout, personal profile + education card
   ============================================================ */
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { GraduationCap, Award, Users, Trophy, ShieldCheck, Sparkles } from "lucide-react";

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-24 lg:py-32" style={{ background: "var(--surface-white)" }}>
      <div className="container">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-14">
            <span className="green-rule h-8" />
            <div>
              <div className="section-label mb-1">01 / About</div>
              <h2
                className="font-['Fraunces'] font-bold leading-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--heading)" }}
              >
                Who I am
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16">
            {/* Left: Profile text */}
            <div className="flex flex-col gap-6">
              <p
                className="leading-relaxed text-[1.05rem]"
                style={{ color: "var(--body)", fontFamily: "'Outfit', sans-serif" }}
              >
                I'm a first-year Computer Science student at the University of Southampton, currently on track for a First Class (70%+). Builder of real, deployed systems: a live iOS app at an accelerator-backed startup, a hackathon-winning circuit simulator, and a university discovery platform with real users.
              </p>
              <p
                className="leading-relaxed text-[1.05rem]"
                style={{ color: "var(--body)", fontFamily: "'Outfit', sans-serif" }}
              >
                Detail-oriented and methodical by nature, with a grounding in compliance, governance, security, and AI safety alongside full-stack engineering and AI-accelerated development workflows. Strong communicator with experience pitching to high-profile investors and consulting for real clients.
              </p>

            </div>

            {/* Right: Education + highlights */}
            <div className="flex flex-col gap-5">
              {/* Unified Education Card */}
              <div
                className="rounded-xl p-6 flex flex-col gap-6"
                style={{ border: "1px solid var(--border)", background: "var(--surface)" }}
              >
                {/* Southampton */}
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: "var(--icon-badge-bg)" }}
                  >
                    <GraduationCap size={18} style={{ color: "var(--primary)" }} />
                  </div>
                  <div>
                    <div className="section-label mb-1">Education</div>
                    <div
                      className="font-['Fraunces'] font-semibold text-lg leading-snug"
                      style={{ color: "var(--heading)" }}
                    >
                      BSc Computer Science
                    </div>
                    <div
                      className="text-sm mt-0.5"
                      style={{ color: "var(--primary)", fontFamily: "'Outfit', sans-serif" }}
                    >
                      University of Southampton
                    </div>
                    <div
                      className="text-xs mt-1"
                      style={{ color: "var(--body-muted)", fontFamily: "'Fira Code', monospace" }}
                    >
                      Sep 2025 – Present · First Class (70%+)
                    </div>
                  </div>
                </div>

                <div className="w-full h-px opacity-60" style={{ background: "var(--border)" }} />

                {/* buildspace */}
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: "var(--icon-badge-bg)" }}
                  >
                    <Sparkles size={18} style={{ color: "var(--primary)" }} />
                  </div>
                  <div>
                    <div className="section-label mb-1">Accelerator</div>
                    <div
                      className="font-['Fraunces'] font-semibold text-lg leading-snug"
                      style={{ color: "var(--heading)" }}
                    >
                      Nights & Weekends s5
                    </div>
                    <div
                      className="text-sm mt-0.5"
                      style={{ color: "var(--primary)", fontFamily: "'Outfit', sans-serif" }}
                    >
                      buildspace
                    </div>
                    <div
                      className="text-xs mt-1"
                      style={{ color: "var(--body-muted)", fontFamily: "'Fira Code', monospace" }}
                    >
                      Jun 2024
                    </div>
                  </div>
                </div>

                <div className="w-full h-px opacity-60" style={{ background: "var(--border)" }} />

                {/* High School */}
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: "var(--icon-badge-bg)" }}
                  >
                    <GraduationCap size={18} style={{ color: "var(--primary)" }} />
                  </div>
                  <div>
                    <div className="section-label mb-1">High School</div>
                    <div
                      className="font-['Fraunces'] font-semibold text-lg leading-snug"
                      style={{ color: "var(--heading)" }}
                    >
                      Delhi Public School, Dwarka
                    </div>
                    <div
                      className="text-sm mt-0.5"
                      style={{ color: "var(--primary)", fontFamily: "'Outfit', sans-serif" }}
                    >
                      PCM + Economics
                    </div>
                    <div
                      className="text-xs mt-1"
                      style={{ color: "var(--body-muted)", fontFamily: "'Fira Code', monospace" }}
                    >
                      2013 – 2025
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Milestones & Certifications Bento */}
          <div className="mt-20 lg:mt-24">
            <div className="flex items-center gap-4 mb-8">
              <span className="green-rule h-8" />
              <div>
                <h3
                  className="font-['Fraunces'] font-bold leading-tight text-2xl"
                  style={{ color: "var(--heading)" }}
                >
                  Milestones & Additional Education
                </h3>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Card 1: Honors & Awards */}
              <div
                className="rounded-xl p-6 flex flex-col"
                style={{ border: "1px solid var(--border)", background: "var(--surface)" }}
              >
                <div className="flex items-center gap-2.5 mb-5">
                  <Trophy size={18} style={{ color: "var(--primary)" }} />
                  <span className="font-['Fraunces'] font-semibold text-lg" style={{ color: "var(--heading)" }}>Pitching & Honors</span>
                </div>
                <ul className="flex flex-col gap-3">
                  {[
                    "Finalist — Masters' Union CEO Challenge S2",
                    "Semi Finalist — Silicone Valley Challenge",
                    "2nd Runner Up — Startup Weekend",
                    "Runner Up — YEB Innovation Pitch",
                    "Finalist — Mesa High School Pitch"
                  ].map((award, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full" style={{ background: "var(--primary)" }} />
                      <span className="text-sm" style={{ color: "var(--body)", fontFamily: "'Outfit', sans-serif" }}>{award}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card 2: Certifications */}
              <div
                className="rounded-xl p-6 flex flex-col"
                style={{ border: "1px solid var(--border)", background: "var(--surface)" }}
              >
                <div className="flex items-center gap-2.5 mb-5">
                  <ShieldCheck size={18} style={{ color: "var(--primary)" }} />
                  <span className="font-['Fraunces'] font-semibold text-lg" style={{ color: "var(--heading)" }}>Certifications</span>
                </div>
                <ul className="flex flex-col gap-3">
                  {[
                    "Young Entrepreneurs Bootcamp",
                    "Accenture NA — Product Design",
                    "Python and AI Summer Camp",
                    "Intro to UX Design",
                    "On-Premise Sales Virtual Experience"
                  ].map((cert, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full" style={{ background: "var(--primary)" }} />
                      <span className="text-sm" style={{ color: "var(--body)", fontFamily: "'Outfit', sans-serif" }}>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
