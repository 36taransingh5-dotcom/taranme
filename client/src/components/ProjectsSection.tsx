/* ============================================================
   DESIGN: Swiss Editorial / Structured Light + Dark
   Projects: premium accordion rows — slim bars that expand on hover
   with image reveal, description, tags, and links
   ============================================================ */
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { ExternalLink, Trophy, Zap, Globe, ArrowUpRight } from "lucide-react";

const HIVE_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663604994993/edvFmTWCitkDz4cU6bGtJf/project-hive-P4C6B6cCkrgtp6F8qSJzdv.webp";
const AI_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663604994993/edvFmTWCitkDz4cU6bGtJf/project-ai-safety-m4YEgYH6dWwgtqrXmfEB2h.webp";
const GW_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663604994993/edvFmTWCitkDz4cU6bGtJf/project-groundwire-eo5fFcEyetkbHvNj2Ug97j.webp";
import CLAROS_IMG from "@/assets/claros.png";

const projects = [
  {
    title: "Hive",
    subtitle: "University Event Discovery Platform",
    period: "Jan 2026 – Present",
    image: HIVE_IMG,
    badge: { icon: <Globe size={12} />, label: "Live Platform" },
    link: "https://sotonhive.tech",
    description:
      "Sole developer of a live platform serving the University of Southampton student body. Responsible for the full system including data integrity, access controls, and reliable uptime. Awarded a £100 grant by the University of Southampton Impact Lab.",
    tags: ["SQL", "TypeScript", "Full-Stack", "Impact Lab Grant"],
    highlight: "£100 Impact Lab Grant",
  },
  {
    title: "AI Safety Evaluator",
    subtitle: "LLM Moderation Framework",
    period: "Feb 2026",
    image: AI_IMG,
    badge: { icon: <Zap size={12} />, label: "Personal Project" },
    link: null,
    description:
      "Built a Python framework to detect unsafe and non-compliant LLM outputs, including malicious instructions and prohibited content. Developed automated testing scripts to stress-test models against defined safety guardrails.",
    tags: ["Python", "AI Safety", "LLM", "Automated Testing"],
    highlight: "AI Governance Focus",
  },
  {
    title: "GroundWire",
    subtitle: "Circuit-to-RPG Simulator",
    period: "Apr 2026",
    image: GW_IMG,
    badge: { icon: <Trophy size={12} />, label: "Hackathon Winner" },
    link: null,
    description:
      "Built a structured data pipeline under time pressure — parsing unstructured input, applying deterministic logic (Kirchhoff's laws), and generating a validated output. Winner of Best Use of Gemini API at SotonHack 2026.",
    tags: ["Gemini API", "Python", "Data Pipeline", "SotonHack 2026"],
    highlight: "Best Use of Gemini API",
  },
  {
    title: "Claros",
    subtitle: "Aftermarket Parts AI System",
    period: "2026 - Present",
    image: CLAROS_IMG,
    badge: { icon: <Globe size={12} />, label: "Live Platform" },
    link: "https://claros-neon.vercel.app/",
    description:
      "AI-powered identification and search system for aftermarket truck and trailer parts. Combines LLM reasoning with structured parts data to reduce manual lookup time in industrial supply chains.",
    tags: ["Next.js", "AI Systems", "LLM reasoning"],
    highlight: "Industrial Supply Chain AI",
  },
];

function ProjectRow({
  project,
  index,
  isOpen,
  onToggle,
}: {
  project: (typeof projects)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const { ref, isVisible } = useScrollReveal();
  const num = String(index + 1).padStart(2, "0");

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        className="relative overflow-hidden rounded-xl transition-all duration-500"
        style={{
          border: isOpen
            ? "1px solid var(--primary)"
            : "1px solid var(--border)",
          background: "var(--surface-white)",
          boxShadow: isOpen
            ? "0 8px 32px color-mix(in oklch, var(--primary) 8%, transparent)"
            : "none",
        }}
      >
        {/* Left accent bar — visible on hover/open */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-500"
          style={{
            background: "var(--primary)",
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? "scaleY(1)" : "scaleY(0)",
            transformOrigin: "top",
          }}
        />

        {/* ── Header Row ── */}
        <button
          onClick={onToggle}
          className="w-full flex items-center gap-4 sm:gap-6 px-5 sm:px-8 py-5 sm:py-6 text-left transition-colors duration-300 group/btn"
          style={{
            background: "transparent",
          }}
        >
          {/* Index number */}
          <span
            className="font-['Fraunces'] font-light text-2xl sm:text-3xl transition-colors duration-300 w-8 flex-shrink-0"
            style={{
              color: isOpen ? "var(--primary)" : "var(--body-xlight)",
            }}
          >
            {num}
          </span>

          {/* Title + subtitle */}
          <div className="flex-1 min-w-0">
            <h3
              className="font-['Fraunces'] font-semibold text-lg sm:text-xl lg:text-2xl transition-colors duration-300 truncate"
              style={{
                color: isOpen ? "var(--primary)" : "var(--heading)",
              }}
            >
              {project.title}
            </h3>
            <p
              className="text-xs sm:text-sm mt-0.5 truncate transition-opacity duration-300"
              style={{
                color: "var(--body-light)",
                fontFamily: "'Outfit', sans-serif",
                opacity: isOpen ? 0.7 : 1,
              }}
            >
              {project.subtitle}
            </p>
          </div>

          {/* Period */}
          <div
            className="text-xs font-medium hidden md:block flex-shrink-0 transition-opacity duration-300"
            style={{
              color: "var(--body-xlight)",
              fontFamily: "'Fira Code', monospace",
            }}
          >
            {project.period}
          </div>

          {/* Badge pill */}
          <div
            className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-medium flex-shrink-0 transition-all duration-300"
            style={{
              background: isOpen
                ? "var(--primary)"
                : "var(--icon-badge-bg)",
              color: isOpen
                ? "var(--primary-foreground)"
                : "var(--tag-text)",
              fontFamily: "'Fira Code', monospace",
            }}
          >
            {project.badge.icon}
            {project.badge.label}
          </div>

          {/* Toggle indicator */}
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500"
            style={{
              background: isOpen
                ? "var(--primary)"
                : "var(--icon-badge-bg)",
              color: isOpen
                ? "var(--primary-foreground)"
                : "var(--primary)",
              transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="9" y1="3" x2="9" y2="15" />
              <line x1="3" y1="9" x2="15" y2="9" />
            </svg>
          </div>
        </button>

        {/* ── Expandable Content ── */}
        <div
          className="grid transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)]"
          style={{
            gridTemplateRows: isOpen ? "1fr" : "0fr",
          }}
        >
          <div className="overflow-hidden">
            <div className="px-5 sm:px-8 pb-6 sm:pb-8 pt-2">
              {/* Thin divider */}
              <div
                className="w-full h-px mb-6"
                style={{ background: "var(--divider)" }}
              />

              <div className="grid md:grid-cols-[1fr_1.2fr] gap-6 lg:gap-8">
                {/* Image */}
                <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700"
                    style={{
                      transform: isOpen ? "scale(1)" : "scale(1.1)",
                    }}
                  />
                  {/* Subtle gradient */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(135deg, color-mix(in oklch, var(--primary) 10%, transparent) 0%, transparent 50%)",
                    }}
                  />
                </div>

                {/* Content text */}
                <div className="flex flex-col gap-4 justify-center">
                  <p
                    className="text-sm lg:text-base leading-relaxed"
                    style={{
                      color: "var(--body-light)",
                      fontFamily: "'Outfit', sans-serif",
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Highlight bar */}
                  <div
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-xs font-medium w-fit"
                    style={{
                      background: "var(--icon-badge-bg)",
                      color: "var(--tag-text)",
                      fontFamily: "'Fira Code', monospace",
                      border: "1px solid var(--tag-border)",
                    }}
                  >
                    <Trophy
                      size={13}
                      style={{ color: "var(--primary)" }}
                    />
                    {project.highlight}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-semibold mt-1 w-fit px-4 py-2 rounded-lg transition-all duration-300 hover:gap-3"
                      style={{
                        color: "var(--primary-foreground)",
                        background: "var(--primary)",
                        fontFamily: "'Outfit', sans-serif",
                      }}
                    >
                      Visit live site
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const { ref, isVisible } = useScrollReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="py-24 lg:py-32"
      style={{ background: "var(--surface-white)" }}
    >
      <div className="container">
        {/* Section header */}
        <div
          ref={ref}
          className={`flex items-center gap-4 mb-14 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <span className="green-rule h-8" />
          <div>
            <div className="section-label mb-1">03 / Projects</div>
            <h2
              className="font-['Fraunces'] font-bold leading-tight"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "var(--heading)",
              }}
            >
              What I've built
            </h2>
          </div>
        </div>

        {/* Accordion rows */}
        <div className="flex flex-col gap-3">
          {projects.map((project, i) => (
            <ProjectRow
              key={i}
              project={project}
              index={i}
              isOpen={openIndex === i}
              onToggle={() =>
                setOpenIndex(openIndex === i ? null : i)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
