/* ============================================================
   DESIGN: Swiss Editorial / Structured Light
   Navbar: sticky top, blur backdrop, forest green active dot
   ============================================================ */
import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[oklch(0.985_0.005_85/0.92)] backdrop-blur-md shadow-sm border-b border-[oklch(0.88_0.010_85)]"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Logo / Name */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group"
        >
          <span className="green-rule h-5 opacity-80 group-hover:opacity-100 transition-opacity" />
          <span
            className="font-['Fraunces'] font-semibold text-[1.05rem] tracking-tight"
            style={{ color: "oklch(0.18 0.015 65)" }}
          >
            Taran Pal Singh
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;
            return (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                  isActive
                    ? "text-[oklch(0.38_0.10_155)]"
                    : "text-[oklch(0.45_0.012_65)] hover:text-[oklch(0.18_0.015_65)]"
                }`}
              >
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[oklch(0.38_0.10_155)]" />
                )}
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* CTA */}
        <a
          href="mailto:tps1g25@soton.ac.uk"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium bg-[oklch(0.38_0.10_155)] text-[oklch(0.98_0.005_85)] hover:bg-[oklch(0.32_0.10_155)] transition-colors duration-200"
        >
          Get in touch
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-[oklch(0.38_0.10_155)] transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-[oklch(0.38_0.10_155)] transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-[oklch(0.38_0.10_155)] transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[oklch(0.985_0.005_85/0.97)] backdrop-blur-md border-t border-[oklch(0.88_0.010_85)] px-6 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-left py-2 text-sm font-medium text-[oklch(0.35_0.012_65)] hover:text-[oklch(0.38_0.10_155)] transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a
            href="mailto:tps1g25@soton.ac.uk"
            className="mt-2 inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium bg-[oklch(0.38_0.10_155)] text-[oklch(0.98_0.005_85)]"
          >
            Get in touch
          </a>
        </div>
      )}
    </header>
  );
}
