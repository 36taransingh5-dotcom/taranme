/* ============================================================
   DESIGN: Swiss Editorial / Structured Light
   Projects: horizontal card row with image, hover overlay reveal
   ============================================================ */
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExternalLink, Trophy, Zap, Globe } from "lucide-react";

const HIVE_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663604994993/edvFmTWCitkDz4cU6bGtJf/project-hive-P4C6B6cCkrgtp6F8qSJzdv.webp";
const AI_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663604994993/edvFmTWCitkDz4cU6bGtJf/project-ai-safety-m4YEgYH6dWwgtqrXmfEB2h.webp";
const GW_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663604994993/edvFmTWCitkDz4cU6bGtJf/project-groundwire-eo5fFcEyetkbHvNj2Ug97j.webp";

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
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`group relative rounded-2xl overflow-hidden border border-[oklch(0.88_0.010_85)] bg-white transition-all duration-700 hover:shadow-xl hover:-translate-y-1 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: "200px" }}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Badge */}
        <div
          className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium"
          style={{
            background: "oklch(0.38 0.10 155 / 0.9)",
            color: "white",
            fontFamily: "'Fira Code', monospace",
            backdropFilter: "blur(4px)",
          }}
        >
          {project.badge.icon}
          {project.badge.label}
        </div>

        {/* Period */}
        <div
          className="absolute bottom-3 right-3 text-xs"
          style={{
            color: "rgba(255,255,255,0.8)",
            fontFamily: "'Fira Code', monospace",
          }}
        >
          {project.period}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        <div>
          <h3
            className="font-['Fraunces'] font-semibold text-xl leading-snug"
            style={{ color: "oklch(0.18 0.015 65)" }}
          >
            {project.title}
          </h3>
          <p
            className="text-sm mt-0.5"
            style={{ color: "oklch(0.38 0.10 155)", fontFamily: "'Outfit', sans-serif" }}
          >
            {project.subtitle}
          </p>
        </div>

        <p
          className="text-sm leading-relaxed"
          style={{ color: "oklch(0.42 0.012 65)", fontFamily: "'Outfit', sans-serif" }}
        >
          {project.description}
        </p>

        {/* Highlight */}
        <div
          className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium"
          style={{
            background: "oklch(0.93 0.03 155)",
            color: "oklch(0.30 0.08 155)",
            fontFamily: "'Fira Code', monospace",
          }}
        >
          <Trophy size={11} />
          {project.highlight}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="tag-pill">{tag}</span>
          ))}
        </div>

        {/* Link */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium mt-1 w-fit"
            style={{ color: "oklch(0.38 0.10 155)", fontFamily: "'Outfit', sans-serif" }}
          >
            <ExternalLink size={13} />
            Visit live site
          </a>
        )}
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-24 lg:py-32 bg-white">
      <div className="container">
        {/* Section header */}
        <div
          ref={ref}
          className={`flex items-center gap-4 mb-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="green-rule h-8" />
          <div>
            <div className="section-label mb-1">03 / Projects</div>
            <h2
              className="font-['Fraunces'] font-bold leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "oklch(0.18 0.015 65)" }}
            >
              What I've built
            </h2>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
