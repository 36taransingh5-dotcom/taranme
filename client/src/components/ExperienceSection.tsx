/* ============================================================
   DESIGN: Swiss Editorial / Structured Light
   Experience: vertical timeline with green rule, role cards
   ============================================================ */
import { useScrollReveal } from "@/hooks/useScrollReveal";

const experiences = [
  {
    role: "Software Developer Intern",
    company: "Film Finder",
    companyNote: "Barclays Eagle Labs / Sky Accelerator / BEO F100 backed",
    period: "Mar 2026",
    type: "Internship",
    bullets: [
      "Worked within a production codebase serving 80+ daily active users.",
      "Led the migration of the core codebase from TypeScript to Swift/SwiftUI, completing the transition within the internship period.",
      "Integrated Firebase and third-party APIs, building structured data pipelines from ingestion to rendered output."
    ],
    tags: ["Swift", "SwiftUI", "Firebase", "APIs"],
  },
  {
    role: "Business Analyst & Operations Support",
    company: "Matek Innovative Solutions",
    companyNote: "Part-time",
    period: "2024 – 2025",
    type: "Part-time",
    bullets: [
      "Built and maintained operational tools including Excel-based trackers and reporting documents, ensuring data accuracy and consistency across business processes.",
      "Managed the company website and digital presence, taking responsibility for content integrity and ensuring information presented to clients was accurate and up to date.",
      "Conducted structured international outreach across the USA, Canada, UK, Indonesia and beyond — maintaining organised records and following consistent processes.",
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
      "Collaborated directly with founders to translate early-stage ideas into compelling visual identities."
    ],
    tags: ["Graphic Design", "Branding", "Pitch Decks"],
  },
  {
    role: "Head of Graphic Design",
    company: "Voice Your Vichaar",
    companyNote: "Led rebranding",
    period: "Jun 2023 – Mar 2024",
    type: "Leadership",
    bullets: [
      "Scaled the visual identity of a youth-led platform, overseeing a design team and owning the full brand system.",
      "Led comprehensive rebranding initiative as Head of Design, increasing visual consistency across all digital touchpoints.",
      "Delivered 30+ social media assets and campaign materials over 10 months."
    ],
    tags: ["Brand Identity", "Design Leadership", "Digital Assets"],
  },
  {
    role: "Graphic Designer",
    company: "Social House Learning",
    companyNote: "EdTech platform",
    period: "Dec 2023 – Feb 2024",
    type: "Internship",
    bullets: [
      "Produced educational content, graphics and digital assets for an EdTech platform serving student audiences across India.",
      "Worked within strict brand guidelines while maintaining creative output across Instagram, pitch decks, and web."
    ],
    tags: ["EdTech", "Content Creation", "Brand Guidelines"],
  },
];

function ExperienceCard({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="grid md:grid-cols-[200px_1fr] gap-6 lg:gap-10">
        {/* Left: Date + type */}
        <div className="flex md:flex-col md:items-end gap-3 md:gap-2 md:pt-1">
          <span
            className="font-['Fira_Code'] text-sm font-medium"
            style={{ color: "oklch(0.38 0.10 155)" }}
          >
            {exp.period}
          </span>
          <span
            className="text-xs px-2 py-0.5 rounded-full border"
            style={{
              background: "oklch(0.93 0.03 155)",
              color: "oklch(0.30 0.08 155)",
              borderColor: "oklch(0.85 0.05 155)",
              fontFamily: "'Fira Code', monospace",
            }}
          >
            {exp.type}
          </span>
        </div>

        {/* Right: Content */}
        <div
          className="rounded-xl p-6 border border-[oklch(0.88_0.010_85)] bg-white hover:shadow-md transition-shadow duration-300"
        >
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h3
                className="font-['Fraunces'] font-semibold text-xl leading-snug"
                style={{ color: "oklch(0.18 0.015 65)" }}
              >
                {exp.role}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span
                  className="text-sm font-medium"
                  style={{ color: "oklch(0.38 0.10 155)", fontFamily: "'Outfit', sans-serif" }}
                >
                  {exp.company}
                </span>
                <span
                  className="text-xs"
                  style={{ color: "oklch(0.60 0.012 65)", fontFamily: "'Outfit', sans-serif" }}
                >
                  · {exp.companyNote}
                </span>
              </div>
            </div>
          </div>

          <ul className="flex flex-col gap-2.5 mb-4">
            {exp.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span
                  className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full"
                  style={{ background: "oklch(0.38 0.10 155)" }}
                />
                <span
                  className="text-sm leading-relaxed"
                  style={{ color: "oklch(0.40 0.012 65)", fontFamily: "'Outfit', sans-serif" }}
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
  );
}

export default function ExperienceSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="experience"
      className="py-24 lg:py-32"
      style={{ background: "oklch(0.985 0.005 85)" }}
    >
      <div className="container">
        {/* Section header */}
        <div
          ref={ref}
          className={`flex items-center gap-4 mb-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="green-rule h-8" />
          <div>
            <div className="section-label mb-1">02 / Experience</div>
            <h2
              className="font-['Fraunces'] font-bold leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "oklch(0.18 0.015 65)" }}
            >
              Where I've worked
            </h2>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col gap-8">
          {/* Vertical line */}
          <div
            className="absolute left-0 md:left-[188px] top-0 bottom-0 w-px hidden md:block"
            style={{ background: "oklch(0.88 0.010 85)" }}
          />

          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
