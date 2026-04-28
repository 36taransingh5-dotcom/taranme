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

              {/* Interests row */}
              <div className="flex flex-wrap gap-2 mt-2">
                {["AI Governance", "Technology Policy", "Cricket Analytics", "AI Safety", "Systems Security"].map((interest) => (
                  <span key={interest} className="tag-pill">{interest}</span>
                ))}
              </div>
            </div>

            {/* Right: Education + highlights */}
            <div className="flex flex-col gap-5">
              {/* Education card */}
              <div
                className="rounded-xl p-6"
                style={{ border: "1px solid var(--border)", background: "var(--surface)" }}
              >
                <div className="flex items-start gap-3">
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
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {["Programming I (Python, C)", "Programming II (Java)", "Algorithmics", "Data Management", "Computer Systems", "Networks & Security", "Software Modelling & Design", "Professional Development"].map((mod) => (
                        <span key={mod} className="tag-pill" style={{ fontSize: "0.65rem" }}>{mod}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Award card */}
              <div
                className="rounded-xl p-5"
                style={{ border: "1px solid var(--border)", background: "var(--surface)" }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: "var(--icon-badge-bg)" }}
                  >
                    <Award size={18} style={{ color: "var(--primary)" }} />
                  </div>
                  <div>
                    <div className="section-label mb-1">Recent Award</div>
                    <div
                      className="font-['Fraunces'] font-semibold leading-snug"
                      style={{ color: "var(--heading)" }}
                    >
                      Best Use of Gemini API
                    </div>
                    <div
                      className="text-sm mt-0.5"
                      style={{ color: "var(--body-muted)", fontFamily: "'Outfit', sans-serif" }}
                    >
                      SotonHack 2026 · 15+ competing teams
                    </div>
                  </div>
                </div>
              </div>

              {/* Consulting card */}
              <div
                className="rounded-xl p-5"
                style={{ border: "1px solid var(--border)", background: "var(--surface)" }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: "var(--icon-badge-bg)" }}
                  >
                    <Users size={18} style={{ color: "var(--primary)" }} />
                  </div>
                  <div>
                    <div className="section-label mb-1">Extracurricular</div>
                    <div
                      className="font-['Fraunces'] font-semibold leading-snug"
                      style={{ color: "var(--heading)" }}
                    >
                      Consultant, 180° Consulting
                    </div>
                    <div
                      className="text-sm mt-0.5"
                      style={{ color: "var(--body-muted)", fontFamily: "'Outfit', sans-serif" }}
                    >
                      Live client engagement with OpenSight
                    </div>
                  </div>
                </div>
              </div>

              {/* High School Leadership card */}
              <div
                className="rounded-xl p-5"
                style={{ border: "1px solid var(--border)", background: "var(--surface)" }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: "var(--icon-badge-bg)" }}
                  >
                    <Users size={18} style={{ color: "var(--primary)" }} />
                  </div>
                  <div>
                    <div className="section-label mb-1">Previous Leadership</div>
                    <div
                      className="font-['Fraunces'] font-semibold leading-snug"
                      style={{ color: "var(--heading)" }}
                    >
                      VP of Ecophoria & President of Environment Council
                    </div>
                    <div
                      className="text-sm mt-0.5"
                      style={{ color: "var(--body-muted)", fontFamily: "'Outfit', sans-serif" }}
                    >
                      DPS Dwarka · 4+ Years Leadership Growth
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

              {/* Card 3: Additional Education */}
              <div
                className="rounded-xl p-6 flex flex-col md:col-span-2 lg:col-span-1"
                style={{ border: "1px solid var(--border)", background: "var(--surface)" }}
              >
                <div className="flex items-center gap-2.5 mb-5">
                  <Sparkles size={18} style={{ color: "var(--primary)" }} />
                  <span className="font-['Fraunces'] font-semibold text-lg" style={{ color: "var(--heading)" }}>More Background</span>
                </div>
                <div className="flex flex-col gap-5">
                  <div>
                    <div className="font-medium text-[0.95rem]" style={{ color: "var(--heading)" }}>buildspace</div>
                    <div className="text-sm mt-0.5" style={{ color: "var(--body-light)", fontFamily: "'Outfit', sans-serif" }}>
                      Nights & Weekends s5 · Jun 2024
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-[0.95rem]" style={{ color: "var(--heading)" }}>Delhi Public School, Dwarka</div>
                    <div className="text-sm mt-0.5" style={{ color: "var(--body-light)", fontFamily: "'Outfit', sans-serif" }}>
                      PCM + Economics · 2013 – 2025
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
