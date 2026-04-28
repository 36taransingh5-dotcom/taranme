/* ============================================================
   DESIGN: Swiss Editorial / Structured Light + Dark
   Navbar: sticky top, blur backdrop, forest green active dot
   ============================================================ */
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

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
  const { theme, toggleTheme } = useTheme();

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
          ? "backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
      style={scrolled ? { background: "var(--navbar-bg)", borderBottom: "1px solid var(--border)" } : undefined}
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
            style={{ color: "var(--heading)" }}
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
                className="relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md"
                style={{
                  color: isActive ? "var(--primary)" : "var(--body-light)",
                }}
              >
                {isActive && (
                  <span
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ background: "var(--primary)" }}
                  />
                )}
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md transition-colors duration-200 border"
            style={{
              color: "var(--primary)",
              borderColor: "var(--border)",
              background: "var(--surface-card)",
            }}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          {/* CTA */}
          <a
            href="mailto:tps1g25@soton.ac.uk"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            style={{
              background: "var(--primary)",
              color: "var(--primary-foreground)",
            }}
          >
            Get in touch
          </a>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center gap-2">
          {/* Mobile theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md transition-colors duration-200"
            style={{ color: "var(--primary)" }}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          <button
            className="flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              style={{ background: "var(--primary)" }}
            />
            <span
              className={`block w-5 h-0.5 transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`}
              style={{ background: "var(--primary)" }}
            />
            <span
              className={`block w-5 h-0.5 transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              style={{ background: "var(--primary)" }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden backdrop-blur-md px-6 py-4 flex flex-col gap-2"
          style={{
            background: "var(--navbar-bg)",
            borderTop: "1px solid var(--border)",
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-left py-2 text-sm font-medium transition-colors"
              style={{ color: "var(--body)" }}
            >
              {link.label}
            </button>
          ))}
          <a
            href="mailto:tps1g25@soton.ac.uk"
            className="mt-2 inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium"
            style={{
              background: "var(--primary)",
              color: "var(--primary-foreground)",
            }}
          >
            Get in touch
          </a>
        </div>
      )}
    </header>
  );
}
