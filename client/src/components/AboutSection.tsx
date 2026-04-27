/* ============================================================
   DESIGN: Swiss Editorial / Structured Light
   About: two-column layout, personal profile + education card
   ============================================================ */
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { GraduationCap, Award, Users } from "lucide-react";

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
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
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "oklch(0.18 0.015 65)" }}
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
                style={{ color: "oklch(0.35 0.012 65)", fontFamily: "'Outfit', sans-serif" }}
              >
                I'm a first-year Computer Science student at the University of Southampton, currently on track for a First Class (70%+). Builder of real, deployed systems: a live iOS app at an accelerator-backed startup, a hackathon-winning circuit simulator, and a university discovery platform with real users.
              </p>
              <p
                className="leading-relaxed text-[1.05rem]"
                style={{ color: "oklch(0.35 0.012 65)", fontFamily: "'Outfit', sans-serif" }}
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
                className="rounded-xl p-6 border border-[oklch(0.88_0.010_85)] bg-[oklch(0.985_0.005_85)]"
              >
                <div className="flex items-start gap-3">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: "oklch(0.93 0.03 155)" }}
                  >
                    <GraduationCap size={18} style={{ color: "oklch(0.38 0.10 155)" }} />
                  </div>
                  <div>
                    <div className="section-label mb-1">Education</div>
                    <div
                      className="font-['Fraunces'] font-semibold text-lg leading-snug"
                      style={{ color: "oklch(0.18 0.015 65)" }}
                    >
                      BSc Computer Science
                    </div>
                    <div
                      className="text-sm mt-0.5"
                      style={{ color: "oklch(0.38 0.10 155)", fontFamily: "'Outfit', sans-serif" }}
                    >
                      University of Southampton
                    </div>
                    <div
                      className="text-xs mt-1"
                      style={{ color: "oklch(0.52 0.012 65)", fontFamily: "'Fira Code', monospace" }}
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
                className="rounded-xl p-5 border border-[oklch(0.88_0.010_85)] bg-[oklch(0.985_0.005_85)]"
              >
                <div className="flex items-start gap-3">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: "oklch(0.93 0.03 155)" }}
                  >
                    <Award size={18} style={{ color: "oklch(0.38 0.10 155)" }} />
                  </div>
                  <div>
                    <div className="section-label mb-1">Recent Award</div>
                    <div
                      className="font-['Fraunces'] font-semibold leading-snug"
                      style={{ color: "oklch(0.18 0.015 65)" }}
                    >
                      Best Use of Gemini API
                    </div>
                    <div
                      className="text-sm mt-0.5"
                      style={{ color: "oklch(0.52 0.012 65)", fontFamily: "'Outfit', sans-serif" }}
                    >
                      SotonHack 2026 · 15+ competing teams
                    </div>
                  </div>
                </div>
              </div>

              {/* Consulting card */}
              <div
                className="rounded-xl p-5 border border-[oklch(0.88_0.010_85)] bg-[oklch(0.985_0.005_85)]"
              >
                <div className="flex items-start gap-3">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: "oklch(0.93 0.03 155)" }}
                  >
                    <Users size={18} style={{ color: "oklch(0.38 0.10 155)" }} />
                  </div>
                  <div>
                    <div className="section-label mb-1">Extracurricular</div>
                    <div
                      className="font-['Fraunces'] font-semibold leading-snug"
                      style={{ color: "oklch(0.18 0.015 65)" }}
                    >
                      Consultant, 180° Consulting
                    </div>
                    <div
                      className="text-sm mt-0.5"
                      style={{ color: "oklch(0.52 0.012 65)", fontFamily: "'Outfit', sans-serif" }}
                    >
                      Live client engagement with OpenSight
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
