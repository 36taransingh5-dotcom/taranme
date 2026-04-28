/* ============================================================
   DESIGN: Swiss Editorial / Structured Light + Dark
   Contact: clean CTA section + footer with links
   ============================================================ */
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, Github, Linkedin, Globe, MapPin, ArrowUpRight, Palette } from "lucide-react";

export default function ContactSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="py-24 lg:py-32" style={{ background: "var(--surface-white)" }}>
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
                  style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--heading)" }}
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
                  style={{ color: "var(--body)", fontFamily: "'Outfit', sans-serif" }}
                >
                  Whether you're looking for a motivated intern, want to
                  collaborate on a project, or just want to chat about technology,
                  governance, or cricket analytics — I'd love to hear from you.
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--body-muted)", fontFamily: "'Outfit', sans-serif" }}
                >
                  I'm currently available for internship opportunities and part-time
                  roles. I hold a valid UK Student Visa and am permitted to work
                  full time during university vacation periods.
                </p>

                <a
                  href="mailto:tps1g25@soton.ac.uk"
                  className="inline-flex items-center gap-2 w-fit px-6 py-3 rounded-lg font-medium text-sm transition-colors duration-200"
                  style={{
                    background: "var(--primary)",
                    color: "var(--primary-foreground)",
                  }}
                >
                  <Mail size={15} />
                  tps1g25@soton.ac.uk
                  <ArrowUpRight size={13} />
                </a>
                <a
                  href="mailto:36taransingh5@gmail.com"
                  className="inline-flex items-center gap-2 w-fit px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-200"
                  style={{
                    border: "1px solid var(--border)",
                    color: "var(--body)",
                  }}
                >
                  <Mail size={15} />
                  36taransingh5@gmail.com
                  <ArrowUpRight size={13} />
                </a>
              </div>

              {/* Right: Links card */}
              <div
                className="rounded-xl p-6"
                style={{ border: "1px solid var(--border)", background: "var(--surface)" }}
              >
                <div className="section-label mb-5">Find me online</div>
                <div className="flex flex-col gap-4">
                  {[
                    { href: "https://linkedin.com/in/taran-pal-singh", icon: <Linkedin size={16} />, name: "LinkedIn", handle: "linkedin.com/in/taran-pal-singh" },
                    { href: "https://github.com/taran-pal-singh", icon: <Github size={16} />, name: "GitHub", handle: "github.com/taran-pal-singh" },
                    { href: "https://sotonhive.tech", icon: <Globe size={16} />, name: "Hive Platform", handle: "sotonhive.tech" },
                    { href: "https://behance.net/techediting", icon: <Palette size={16} />, name: "Behance", handle: "behance.net/techediting" },
                  ].map((link, i) => (
                    <div key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 group"
                      >
                        <div
                          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ background: "var(--icon-badge-bg)" }}
                        >
                          <span style={{ color: "var(--primary)" }}>{link.icon}</span>
                        </div>
                        <div>
                          <div
                            className="text-sm font-medium transition-colors"
                            style={{ color: "var(--heading)", fontFamily: "'Outfit', sans-serif" }}
                          >
                            {link.name}
                          </div>
                          <div
                            className="text-xs"
                            style={{ color: "var(--body-xlight)", fontFamily: "'Fira Code', monospace" }}
                          >
                            {link.handle}
                          </div>
                        </div>
                        <ArrowUpRight
                          size={13}
                          className="ml-auto transition-colors"
                          style={{ color: "var(--body-xlight)" }}
                        />
                      </a>
                      {i < 3 && (
                        <div className="h-px mt-4" style={{ background: "var(--divider)" }} />
                      )}
                    </div>
                  ))}

                  <div className="h-px" style={{ background: "var(--divider)" }} />

                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "var(--icon-badge-bg)" }}
                    >
                      <MapPin size={16} style={{ color: "var(--primary)" }} />
                    </div>
                    <div>
                      <div
                        className="text-sm font-medium"
                        style={{ color: "var(--heading)", fontFamily: "'Outfit', sans-serif" }}
                      >
                        Location
                      </div>
                      <div
                        className="text-xs"
                        style={{ color: "var(--body-xlight)", fontFamily: "'Fira Code', monospace" }}
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
        className="py-8"
        style={{ borderTop: "1px solid var(--border)", background: "var(--surface)" }}
      >
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="green-rule h-4" />
            <span
              className="font-['Fraunces'] font-semibold text-sm"
              style={{ color: "var(--body)" }}
            >
              Taran Pal Singh
            </span>
          </div>
          <span
            className="text-xs"
            style={{ color: "var(--body-xlight)", fontFamily: "'Fira Code', monospace" }}
          >
            © {new Date().getFullYear()} · Built with care
          </span>
        </div>
      </footer>
    </>
  );
}
