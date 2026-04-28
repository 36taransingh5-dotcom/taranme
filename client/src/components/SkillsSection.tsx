/* ============================================================
   DESIGN: Swiss Editorial / Structured Light + Dark
   Skills: bento-style grid with category labels and tag pills
   ============================================================ */
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Code2, Shield, BarChart3, Wrench, Brain, Star } from "lucide-react";

const skillGroups = [
  {
    icon: <Code2 size={18} />,
    label: "Technical",
    description: "Languages & frameworks I'm comfortable with",
    skills: ["Python", "SQL", "Swift", "TypeScript", "Java", "C"],
    wide: false,
  },
  {
    icon: <Shield size={18} />,
    label: "Security & Risk",
    description: "Governance, safety, and systems thinking",
    skills: ["Networks & Security", "AI Safety Evaluation", "Data Pipeline Integrity", "Access Control Principles"],
    wide: false,
  },
  {
    icon: <BarChart3 size={18} />,
    label: "Data & Reporting",
    description: "Structured data and analytical output",
    skills: ["Excel (Advanced)", "SQL Databases", "Structured Reporting", "Process Documentation"],
    wide: false,
  },
  {
    icon: <Wrench size={18} />,
    label: "Tools & Workflow",
    description: "Development and collaboration tools",
    skills: ["Git / GitHub", "Firebase", "Notion", "VS Code", "Figma"],
    wide: false,
  },
  {
    icon: <Brain size={18} />,
    label: "Soft Skills",
    description: "How I think and work",
    skills: ["Methodical", "Detail-focused", "Analytical Thinking", "Clear Written Communication", "Organised Under Pressure"],
    wide: true,
  },
];

const certifications = [
  { title: "Python & AI Summer Camp", org: "Rancho Labs", year: "2024" },
  { title: "Accenture Product Design", org: "Accenture North America", year: "2023" },
  { title: "Introduction to UX Design", org: "Coursera", year: "2023" },
];

function SkillCard({ group, index }: { group: typeof skillGroups[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`rounded-xl p-6 hover:shadow-md transition-all duration-500 ${
        group.wide ? "md:col-span-2" : ""
      } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{
        transitionDelay: `${index * 80}ms`,
        transitionProperty: "opacity, transform, box-shadow",
        border: "1px solid var(--border)",
        background: "var(--surface)",
      }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: "var(--icon-badge-bg)", color: "var(--primary)" }}
        >
          {group.icon}
        </div>
        <div>
          <div className="section-label">{group.label}</div>
          <div
            className="text-xs mt-0.5"
            style={{ color: "var(--body-xlight)", fontFamily: "'Outfit', sans-serif" }}
          >
            {group.description}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span key={skill} className="tag-pill">{skill}</span>
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const { ref, isVisible } = useScrollReveal();
  const { ref: certRef, isVisible: certVisible } = useScrollReveal();

  return (
    <section
      id="skills"
      className="py-24 lg:py-32"
      style={{ background: "var(--surface)" }}
    >
      <div className="container">
        {/* Section header */}
        <div
          ref={ref}
          className={`flex items-center gap-4 mb-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="green-rule h-8" />
          <div>
            <div className="section-label mb-1">04 / Skills</div>
            <h2
              className="font-['Fraunces'] font-bold leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--heading)" }}
            >
              What I know
            </h2>
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {skillGroups.map((group, i) => (
            <SkillCard key={i} group={group} index={i} />
          ))}
        </div>

        {/* Certifications */}
        <div
          ref={certRef}
          className={`transition-all duration-700 ${certVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center gap-3 mb-6">
            <Star size={16} style={{ color: "var(--primary)" }} />
            <span className="section-label">Certifications</span>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="rounded-lg p-4"
                style={{ border: "1px solid var(--border)", background: "var(--surface-white)" }}
              >
                <div
                  className="font-medium text-sm leading-snug mb-1"
                  style={{ color: "var(--heading)", fontFamily: "'Outfit', sans-serif" }}
                >
                  {cert.title}
                </div>
                <div
                  className="text-xs"
                  style={{ color: "var(--primary)", fontFamily: "'Fira Code', monospace" }}
                >
                  {cert.org} · {cert.year}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
