/* ============================================================
   DESIGN: Swiss Editorial / Structured Light
   Contact: clean CTA section + footer with links
   ============================================================ */
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, Github, Linkedin, Globe, MapPin, ArrowUpRight, Palette } from "lucide-react";

export default function ContactSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="py-24 lg:py-32 bg-white">
        <div className="container">
          <div
            ref={ref}
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {/* Section header */}
            <div className="flex items-center gap-4 mb-14">
              <span className="green-rule h-8" />
              <div>
                <div className="section-label mb-1">05 / Contact</div>
                <h2
                  className="font-['Fraunces'] font-bold leading-tight"
                  style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "oklch(0.18 0.015 65)" }}
                >
                  Let's talk
                </h2>
              </div>
            </div>

            <div className="grid lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-start">
              {/* Left: CTA text */}
              <div className="flex flex-col gap-6">
                <p
                  className="text-[1.1rem] leading-relaxed max-w-[520px]"
                  style={{ color: "oklch(0.35 0.012 65)", fontFamily: "'Outfit', sans-serif" }}
                >
                  Whether you're looking for a motivated intern, want to
                  collaborate on a project, or just want to chat about technology,
                  governance, or cricket analytics — I'd love to hear from you.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "oklch(0.52 0.012 65)", fontFamily: "'Outfit', sans-serif" }}
                >
                  I'm currently available for internship opportunities and part-time
                  roles. I hold a valid UK Student Visa and am permitted to work
                  full time during university vacation periods.
                </p>

                <a
                  href="mailto:tps1g25@soton.ac.uk"
                  className="inline-flex items-center gap-2 w-fit px-6 py-3 rounded-lg bg-[oklch(0.38_0.10_155)] text-[oklch(0.98_0.005_85)] font-medium text-sm hover:bg-[oklch(0.32_0.10_155)] transition-colors duration-200"
                >
                  <Mail size={15} />
                  tps1g25@soton.ac.uk
                  <ArrowUpRight size={13} />
                </a>
                <a
                  href="mailto:36taransingh5@gmail.com"
                  className="inline-flex items-center gap-2 w-fit px-6 py-2.5 rounded-lg border border-[oklch(0.88_0.010_85)] text-[oklch(0.35_0.012_65)] font-medium text-sm hover:border-[oklch(0.38_0.10_155)] hover:text-[oklch(0.38_0.10_155)] transition-all duration-200"
                >
                  <Mail size={15} />
                  36taransingh5@gmail.com
                  <ArrowUpRight size={13} />
                </a>
              </div>

              {/* Right: Links card */}
              <div
                className="rounded-xl p-6 border border-[oklch(0.88_0.010_85)]"
                style={{ background: "oklch(0.985 0.005 85)" }}
              >
                <div className="section-label mb-5">Find me online</div>
                <div className="flex flex-col gap-4">
                  <a
                    href="https://linkedin.com/in/taran-pal-singh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "oklch(0.93 0.03 155)" }}
                    >
                      <Linkedin size={16} style={{ color: "oklch(0.38 0.10 155)" }} />
                    </div>
                    <div>
                      <div
                        className="text-sm font-medium group-hover:text-[oklch(0.38_0.10_155)] transition-colors"
                        style={{ color: "oklch(0.18 0.015 65)", fontFamily: "'Outfit', sans-serif" }}
                      >
                        LinkedIn
                      </div>
                      <div
                        className="text-xs"
                        style={{ color: "oklch(0.55 0.012 65)", fontFamily: "'Fira Code', monospace" }}
                      >
                        linkedin.com/in/taran-pal-singh
                      </div>
                    </div>
                    <ArrowUpRight size={13} className="ml-auto text-[oklch(0.75_0.012_65)] group-hover:text-[oklch(0.38_0.10_155)] transition-colors" />
                  </a>

                  <div
                    className="h-px"
                    style={{ background: "oklch(0.92 0.006 85)" }}
                  />

                  <a
                    href="https://github.com/taran-pal-singh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "oklch(0.93 0.03 155)" }}
                    >
                      <Github size={16} style={{ color: "oklch(0.38 0.10 155)" }} />
                    </div>
                    <div>
                      <div
                        className="text-sm font-medium group-hover:text-[oklch(0.38_0.10_155)] transition-colors"
                        style={{ color: "oklch(0.18 0.015 65)", fontFamily: "'Outfit', sans-serif" }}
                      >
                        GitHub
                      </div>
                      <div
                        className="text-xs"
                        style={{ color: "oklch(0.55 0.012 65)", fontFamily: "'Fira Code', monospace" }}
                      >
                        github.com/taran-pal-singh
                      </div>
                    </div>
                    <ArrowUpRight size={13} className="ml-auto text-[oklch(0.75_0.012_65)] group-hover:text-[oklch(0.38_0.10_155)] transition-colors" />
                  </a>

                  <div
                    className="h-px"
                    style={{ background: "oklch(0.92 0.006 85)" }}
                  />

                  <a
                    href="https://sotonhive.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "oklch(0.93 0.03 155)" }}
                    >
                      <Globe size={16} style={{ color: "oklch(0.38 0.10 155)" }} />
                    </div>
                    <div>
                      <div
                        className="text-sm font-medium group-hover:text-[oklch(0.38_0.10_155)] transition-colors"
                        style={{ color: "oklch(0.18 0.015 65)", fontFamily: "'Outfit', sans-serif" }}
                      >
                        Hive Platform
                      </div>
                      <div
                        className="text-xs"
                        style={{ color: "oklch(0.55 0.012 65)", fontFamily: "'Fira Code', monospace" }}
                      >
                        sotonhive.tech
                      </div>
                    </div>
                    <ArrowUpRight size={13} className="ml-auto text-[oklch(0.75_0.012_65)] group-hover:text-[oklch(0.38_0.10_155)] transition-colors" />
                  </a>

                  <div
                    className="h-px"
                    style={{ background: "oklch(0.92 0.006 85)" }}
                  />

                  <a
                    href="https://behance.net/techediting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "oklch(0.93 0.03 155)" }}
                    >
                      <Palette size={16} style={{ color: "oklch(0.38 0.10 155)" }} />
                    </div>
                    <div>
                      <div
                        className="text-sm font-medium group-hover:text-[oklch(0.38_0.10_155)] transition-colors"
                        style={{ color: "oklch(0.18 0.015 65)", fontFamily: "'Outfit', sans-serif" }}
                      >
                        Behance
                      </div>
                      <div
                        className="text-xs"
                        style={{ color: "oklch(0.55 0.012 65)", fontFamily: "'Fira Code', monospace" }}
                      >
                        behance.net/techediting
                      </div>
                    </div>
                    <ArrowUpRight size={13} className="ml-auto text-[oklch(0.75_0.012_65)] group-hover:text-[oklch(0.38_0.10_155)] transition-colors" />
                  </a>

                  <div
                    className="h-px"
                    style={{ background: "oklch(0.92 0.006 85)" }}
                  />

                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "oklch(0.93 0.03 155)" }}
                    >
                      <MapPin size={16} style={{ color: "oklch(0.38 0.10 155)" }} />
                    </div>
                    <div>
                      <div
                        className="text-sm font-medium"
                        style={{ color: "oklch(0.18 0.015 65)", fontFamily: "'Outfit', sans-serif" }}
                      >
                        Location
                      </div>
                      <div
                        className="text-xs"
                        style={{ color: "oklch(0.55 0.012 65)", fontFamily: "'Fira Code', monospace" }}
                      >
                        Southampton, UK
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-8 border-t border-[oklch(0.88_0.010_85)]"
        style={{ background: "oklch(0.985 0.005 85)" }}
      >
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="green-rule h-4" />
            <span
              className="font-['Fraunces'] font-semibold text-sm"
              style={{ color: "oklch(0.35 0.012 65)" }}
            >
              Taran Pal Singh
            </span>
          </div>
          <span
            className="text-xs"
            style={{ color: "oklch(0.60 0.012 65)", fontFamily: "'Fira Code', monospace" }}
          >
            © {new Date().getFullYear()} · Built with care
          </span>
        </div>
      </footer>
    </>
  );
}
