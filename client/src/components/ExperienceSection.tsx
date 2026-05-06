/* ============================================================
   DESIGN: Swiss Editorial / Structured Light + Dark
   Experience: compact accordion rows, click to expand
   ============================================================ */
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    role: "Consultant",
    company: "180 Degrees Consulting (UoS)",
    companyNote: "World's largest student-run consultancy",
    period: "2025 – Present",
    type: "Consulting",
    bullets: [
      "Leading a live client engagement with OpenSight.",
      "Providing strategic recommendations as part of a competitive, selected team.",
    ],
    tags: ["Consulting", "Strategy", "Client Engagement"],
  },
  {
    role: "Software Developer Intern",
    company: "Film Finder",
    companyNote: "Barclays Eagle Labs / Sky Accelerator",
    period: "Mar 2026",
    type: "Internship",
    bullets: [
      "Led the migration of the core codebase from TypeScript to Swift/SwiftUI on a live app with 80+ daily active users.",
      "Integrated Firebase and third-party APIs, building structured data pipelines from ingestion to rendered output.",
      "Worked within an agile workflow utilizing Git/GitHub version control, iterative delivery, and peer code review.",
    ],
    tags: ["Swift", "SwiftUI", "Firebase", "MVVM", "APIs"],
  },
  {
    role: "Business Analyst & Operations Support",
    company: "Matek Innovative Solutions",
    companyNote: "Part-time",
    period: "2024 – 2025",
    type: "Part-time",
    bullets: [
      "Built and maintained operational tools including Excel-based trackers and reporting documents.",
      "Managed the company website and digital presence, ensuring content accuracy for clients.",
      "Conducted structured international outreach across the USA, Canada, UK, Indonesia and beyond.",
    ],
    tags: ["Excel", "Data Reporting", "Operations", "Outreach"],
  },
  {
    role: "Graphic Designer",
    company: "ThinkStartup",
    companyNote: "Startup visual assets",
    period: "Jul 2024 – Sep 2024",
    type: "Contract",
    bullets: [
      "Designed visual assets and brand collateral for startup-focused campaigns, delivering 10+ design briefs in 3 months.",
      "Created pitch deck visuals and social media templates used across multiple cohort startups.",
      "Collaborated directly with founders to translate early-stage ideas into compelling visual identities.",
    ],
    tags: ["Graphic Design", "Branding", "Pitch Decks"],
  },
  {
    role: "Head of Graphic Design",
    company: "Voice Your Vichaar",
    companyNote: "Community Platform",
    period: "2023 – 2024",
    type: "Leadership",
    bullets: [
      "Led visual identity and content strategy for a growing community platform.",
      "Produced creative deliverables to brief, overseeing the full brand system.",
    ],
    tags: ["Brand Identity", "Design Leadership"],
  },
  {
    role: "Graphic Designer",
    company: "Social House Learning",
    companyNote: "EdTech platform",
    period: "Dec 2023 – Feb 2024",
    type: "Internship",
    bullets: [
      "Produced educational content, graphics and digital assets for an EdTech platform serving student audiences across India.",
      "Worked within strict brand guidelines maintaining creative output across Instagram, pitch decks, and web.",
    ],
    tags: ["EdTech", "Content Creation", "Brand Guidelines"],
  },
];

function ExperienceRow({
  exp,
  index,
  isOpen,
  onToggle,
}: {
  exp: (typeof experiences)[0];
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
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div
        className="relative overflow-hidden rounded-xl transition-all duration-500"
        style={{
          border: isOpen ? "1px solid var(--primary)" : "1px solid var(--border)",
          background: "var(--surface-white)",
          boxShadow: isOpen
            ? "0 8px 32px color-mix(in oklch, var(--primary) 8%, transparent)"
            : "none",
        }}
      >
        {/* Left accent bar */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-500"
          style={{
            background: "var(--primary)",
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? "scaleY(1)" : "scaleY(0)",
            transformOrigin: "top",
          }}
        />

        {/* Header row */}
        <button
          onClick={onToggle}
          className="w-full flex items-center gap-4 sm:gap-6 px-5 sm:px-8 py-4 sm:py-5 text-left transition-colors duration-300"
          style={{ background: "transparent" }}
        >
          {/* Index */}
          <span
            className="font-['Fraunces'] font-light text-xl sm:text-2xl transition-colors duration-300 w-8 flex-shrink-0"
            style={{ color: isOpen ? "var(--primary)" : "var(--body-xlight)" }}
          >
            {num}
          </span>

          {/* Role + company */}
          <div className="flex-1 min-w-0">
            <h3
              className="font-['Fraunces'] font-semibold text-base sm:text-lg transition-colors duration-300 truncate"
              style={{ color: isOpen ? "var(--primary)" : "var(--heading)" }}
            >
              {exp.role}
            </h3>
            <p
              className="text-xs sm:text-sm mt-0.5 truncate"
              style={{
                color: "var(--body-light)",
                fontFamily: "'Outfit', sans-serif",
                opacity: isOpen ? 0.7 : 1,
              }}
            >
              {exp.company} · {exp.companyNote}
            </p>
          </div>

          {/* Period */}
          <div
            className="text-xs font-medium hidden md:block flex-shrink-0"
            style={{ color: "var(--body-xlight)", fontFamily: "'Fira Code', monospace" }}
          >
            {exp.period}
          </div>

          {/* Type badge */}
          <div
            className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-medium flex-shrink-0 transition-all duration-300"
            style={{
              background: isOpen ? "var(--primary)" : "var(--icon-badge-bg)",
              color: isOpen ? "var(--primary-foreground)" : "var(--tag-text)",
              fontFamily: "'Fira Code', monospace",
            }}
          >
            {exp.type}
          </div>

          {/* Toggle */}
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500"
            style={{
              background: isOpen ? "var(--primary)" : "var(--icon-badge-bg)",
              color: isOpen ? "var(--primary-foreground)" : "var(--primary)",
              transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="9" y1="3" x2="9" y2="15" />
              <line x1="3" y1="9" x2="15" y2="9" />
            </svg>
          </div>
        </button>

        {/* Expandable content */}
        <div
          className="grid transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)]"
          style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
        >
          <div className="overflow-hidden">
            <div className="px-5 sm:px-8 pb-5 pt-1">
              <div className="w-full h-px mb-4" style={{ background: "var(--divider)" }} />
              <ul className="flex flex-col gap-2 mb-4">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span
                      className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full"
                      style={{ background: "var(--primary)" }}
                    />
                    <span
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--body-light)", fontFamily: "'Outfit', sans-serif" }}
                    >
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">
                {exp.tags.map((tag) => (
                  <span key={tag} className="tag-pill">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  const { ref, isVisible } = useScrollReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="experience"
      className="py-24 lg:py-32"
      style={{ background: "var(--surface)" }}
    >
      <div className="container">
        {/* Section header */}
        <div
          ref={ref}
          className={`flex items-center gap-4 mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="green-rule h-8" />
          <div>
            <div className="section-label mb-1">02 / Experience</div>
            <h2
              className="font-['Fraunces'] font-bold leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--heading)" }}
            >
              Where I've worked
            </h2>
          </div>
        </div>

        {/* Accordion rows */}
        <div className="flex flex-col gap-3">
          {experiences.map((exp, i) => (
            <ExperienceRow
              key={i}
              exp={exp}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
