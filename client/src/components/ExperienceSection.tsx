/* ============================================================
   DESIGN: Swiss Editorial / Structured Light + Dark
   Experience: vertical timeline with green rule, compact role cards
   ============================================================ */
import { useScrollReveal } from "@/hooks/useScrollReveal";

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
      "Conducted structured international outreach across the USA, Canada, UK and Indonesia.",
    ],
    tags: ["Excel", "Data Reporting", "Operations", "Outreach"],
  },
  {
    role: "Graphic Designer",
    company: "ThinkStartup",
    companyNote: "Startup visual assets",
    period: "Jul – Sep 2024",
    type: "Contract",
    bullets: [
      "Delivered 10+ design briefs in 3 months — pitch decks, brand collateral, and social media templates.",
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
      "Led visual identity and content strategy, overseeing the full brand system.",
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
      "Produced educational content and digital assets within strict brand guidelines across Instagram, pitch decks, and web.",
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
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="grid md:grid-cols-[160px_1fr] gap-4 md:gap-6">
        {/* Left: Date + type */}
        <div className="flex md:flex-col md:items-end gap-3 md:gap-1.5 md:pt-1">
          <span
            className="font-['Fira_Code'] text-xs font-medium"
            style={{ color: "var(--primary)" }}
          >
            {exp.period}
          </span>
          <span
            className="text-[10px] px-2 py-0.5 rounded-full w-fit"
            style={{
              background: "var(--tag-bg)",
              color: "var(--tag-text)",
              border: "1px solid var(--tag-border)",
              fontFamily: "'Fira Code', monospace",
            }}
          >
            {exp.type}
          </span>
        </div>

        {/* Right: Content */}
        <div
          className="rounded-xl p-4 transition-shadow duration-300 hover:shadow-sm"
          style={{
            border: "1px solid var(--border)",
            background: "var(--surface-white)",
          }}
        >
          <div className="mb-3">
            <h3
              className="font-['Fraunces'] font-semibold text-base leading-snug"
              style={{ color: "var(--heading)" }}
            >
              {exp.role}
            </h3>
            <div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
              <span
                className="text-sm font-medium"
                style={{ color: "var(--primary)", fontFamily: "'Outfit', sans-serif" }}
              >
                {exp.company}
              </span>
              <span
                className="text-xs"
                style={{ color: "var(--body-xlight)", fontFamily: "'Outfit', sans-serif" }}
              >
                · {exp.companyNote}
              </span>
            </div>
          </div>

          <ul className="flex flex-col gap-1.5 mb-3">
            {exp.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2">
                <span
                  className="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full"
                  style={{ background: "var(--primary)" }}
                />
                <span
                  className="text-xs leading-relaxed"
                  style={{ color: "var(--body-light)", fontFamily: "'Outfit', sans-serif" }}
                >
                  {b}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1">
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
      className="py-16 lg:py-24"
      style={{ background: "var(--surface)" }}
    >
      <div className="container">
        {/* Section header */}
        <div
          ref={ref}
          className={`flex items-center gap-4 mb-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
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

        {/* Timeline */}
        <div className="relative flex flex-col gap-5">
          {/* Vertical line */}
          <div
            className="absolute left-0 md:left-[176px] top-0 bottom-0 w-px hidden md:block"
            style={{ background: "var(--border)" }}
          />
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
