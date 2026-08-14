import { useMemo, useState } from "react";
import {
  FaArrowUpRightFromSquare,
  FaChevronDown,
  FaGithub,
} from "react-icons/fa6";
import {
  FILTER_OPTIONS,
  GITHUB_PROFILE,
  TIMELINE_STEPS,
  projects,
} from "../data/projectsData";
import { useInView } from "../hooks/useInView";

/* ─── Shared primitives ─────────────────────────────────────────── */

const SectionLabel = ({ children }) => (
  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-400/80">
    {children}
  </p>
);

const TechBadges = ({ items, className = "" }) => (
  <div className={`flex flex-wrap gap-2 ${className}`}>
    {items.map((tech) => (
      <span
        key={tech}
        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/65"
      >
        {tech}
      </span>
    ))}
  </div>
);

const ExternalButton = ({
  href,
  label,
  variant = "secondary",
  icon: Icon = FaGithub,
  prominent = false,
  className = "",
}) => {
  if (!href) return null;

  const base =
    "group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition duration-300";

  const variants = {
    primary:
      "bg-orange-500 text-white shadow-lg shadow-orange-900/25 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-orange-900/40",
    secondary:
      "border border-white/15 bg-white/[0.04] text-white/85 hover:-translate-y-0.5 hover:border-orange-400/35 hover:bg-orange-500/10 hover:text-orange-200",
    live: prominent
      ? "bg-emerald-500/90 text-white shadow-lg shadow-emerald-900/30 hover:-translate-y-0.5 hover:bg-emerald-400"
      : "border border-emerald-400/30 bg-emerald-500/10 text-emerald-300 hover:-translate-y-0.5 hover:bg-emerald-500/20",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant] ?? variants.secondary} ${className}`}
    >
      {Icon !== null && <Icon className="text-sm" />}
      {label}
      <FaArrowUpRightFromSquare className="text-[10px] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
};

const ProjectImage = ({
  src,
  alt,
  fit = "cover",
  overlayLabel,
  aiOverlay = false,
  className = "",
}) => (
  <div className={`group/image relative overflow-hidden ${className}`}>
    {src ? (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`h-full w-full transition duration-500 group-hover/image:scale-[1.04] ${
          fit === "contain" ? "object-contain bg-black/30 p-4" : "object-cover"
        }`}
      />
    ) : (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-800/80 to-slate-900/90">
        <span className="font-mono text-5xl font-black text-orange-500/20">
          {"</>"}
        </span>
      </div>
    )}
    <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-[#070b14]/55 to-transparent" />
    {overlayLabel && (
      <span className="absolute left-4 top-4 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300 backdrop-blur-sm">
        {overlayLabel}
      </span>
    )}
    {aiOverlay && (
      <div
        className="projects-ai-scan pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/image:opacity-100"
        aria-hidden="true"
      />
    )}
  </div>
);

/* ─── Filter ────────────────────────────────────────────────────── */

const ProjectFilter = ({ active, onChange }) => (
  <div className="projects-filter-scroll -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0">
    {FILTER_OPTIONS.map((option) => {
      const isActive = active === option.id;
      return (
        <button
          key={option.id}
          type="button"
          onClick={() => onChange(option.id)}
          className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition duration-300 ${
            isActive
              ? "border-orange-400/40 bg-orange-500/15 text-orange-300 shadow-[0_0_20px_rgba(249,115,22,0.15)]"
              : "border-white/10 bg-white/[0.03] text-white/50 hover:border-white/20 hover:text-white/80"
          }`}
        >
          {option.label}
        </button>
      );
    })}
  </div>
);

/* ─── Pipeline & sentiment visuals ─────────────────────────────── */

const PipelineVisual = ({ steps, visible }) => (
  <div className="mt-5 flex flex-wrap items-center gap-1.5 sm:gap-2">
    {steps.map((step, index) => (
      <div key={step} className="flex items-center gap-1.5 sm:gap-2">
        <span
          className={`projects-pipeline-step rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-[11px] font-medium text-white/70 sm:text-xs ${
            visible ? "is-visible" : ""
          }`}
          style={{ "--step-delay": index }}
        >
          {step}
        </span>
        {index < steps.length - 1 && (
          <span className="text-orange-400/50">→</span>
        )}
      </div>
    ))}
  </div>
);

const SentimentVisual = ({ visible }) => {
  const sentiments = [
    { label: "Positive", color: "border-emerald-400/30 bg-emerald-500/10 text-emerald-300" },
    { label: "Neutral", color: "border-white/15 bg-white/[0.04] text-white/60" },
    { label: "Negative", color: "border-rose-400/30 bg-rose-500/10 text-rose-300" },
  ];

  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {sentiments.map((item, index) => (
        <span
          key={item.label}
          className={`projects-sentiment-pill rounded-full border px-3 py-1.5 text-xs font-medium ${item.color} ${
            visible ? "is-visible" : ""
          }`}
          style={{ "--step-delay": index }}
        >
          {item.label}
        </span>
      ))}
    </div>
  );
};

/* ─── Card layouts ──────────────────────────────────────────────── */

const ProjectCardBody = ({ project, visible, children }) => (
  <div
    className={`projects-reveal flex h-full flex-col ${visible ? "is-visible" : ""}`}
    style={{ "--stagger": project.stagger ?? 0 }}
  >
    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-400/70">
      {project.categoryLabel}
    </p>
    <h3 className="mt-2 text-xl font-bold text-white transition duration-300 group-hover:-translate-y-0.5 group-hover:text-orange-100 md:text-2xl">
      {project.title}
    </h3>
    <p className="mt-3 flex-1 text-sm leading-6 text-white/45">
      {project.description}
    </p>
    {project.badges?.length > 0 && (
      <div className="mt-4 flex flex-wrap gap-2">
        {project.badges.map((badge) => (
          <span
            key={badge}
            className={`rounded-full border px-3 py-1 text-xs font-medium ${
              badge.includes("Vibe") || badge.includes("AI-Assisted")
                ? "border-purple-400/30 bg-purple-500/10 text-purple-200"
                : badge === "Currently Working"
                  ? "border-orange-400/40 bg-orange-500/15 text-orange-300"
                  : "border-white/15 bg-white/[0.04] text-white/70"
            }`}
          >
            {badge}
          </span>
        ))}
      </div>
    )}
    <TechBadges items={project.technologies} className="mt-4" />
    {children}
    <div className="mt-5 flex flex-wrap gap-3">
      {project.live && (
        <ExternalButton
          href={project.live}
          label="Live Demo ↗"
          variant="live"
          icon={FaArrowUpRightFromSquare}
          prominent
        />
      )}
      {project.github && (
        <ExternalButton
          href={project.github}
          label={project.githubLabel ?? "GitHub ↗"}
          variant={project.live ? "secondary" : "primary"}
        />
      )}
    </div>
  </div>
);

const MilestoneProject = ({ project, visible }) => (
  <article
    className={`projects-reveal group relative overflow-hidden rounded-[1.75rem] border border-orange-400/20 bg-gradient-to-br from-orange-500/[0.08] via-white/[0.02] to-transparent p-6 md:p-8 ${
      visible ? "is-visible" : ""
    }`}
    style={{ "--stagger": project.stagger ?? 0 }}
  >
    <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl" />
    <div className="relative grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
      <div>
        <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">
          <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
          {project.milestone}
        </span>
        <span className="mt-4 block text-xs font-semibold uppercase tracking-[0.3em] text-white/35">
          {project.label}
        </span>
        <ProjectCardBody project={project} visible={true} />
      </div>
      <div className="relative flex min-h-[220px] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#0a0f1a] p-8">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(249,115,22,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.8) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <pre className="relative font-mono text-xs leading-6 text-orange-300/70 sm:text-sm">
          {`class Product {
  string name;
  double price;
};

class ShoppingCart {
  add(Product p);
  remove(int id);
  checkout();
};`}
        </pre>
      </div>
    </div>
  </article>
);

const FeaturedProject = ({ project, visible, reverse = false }) => (
  <article
    className={`projects-reveal group overflow-hidden rounded-[1.75rem] border border-white/8 bg-white/[0.02] backdrop-blur-sm transition duration-300 hover:-translate-y-1.5 hover:border-orange-400/25 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)] ${
      visible ? "is-visible" : ""
    }`}
    style={{ "--stagger": project.stagger ?? 0 }}
  >
    <div
      className={`grid lg:grid-cols-2 ${reverse ? "[&>*:first-child]:lg:order-2" : ""}`}
    >
      <ProjectImage
        src={project.image}
        alt={project.title}
        fit={project.imageFit}
        overlayLabel={project.overlayLabel}
        aiOverlay={project.layout === "featured-ai"}
        className="min-h-[240px] lg:min-h-[360px]"
      />
      <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10">
        <ProjectCardBody project={project} visible={true} />
      </div>
    </div>
  </article>
);

const StandardProjectCard = ({ project, visible }) => (
  <article
    className={`projects-reveal group flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] transition duration-300 hover:-translate-y-1.5 hover:border-orange-400/25 hover:shadow-[0_16px_48px_rgba(0,0,0,0.3)] ${
      visible ? "is-visible" : ""
    }`}
    style={{ "--stagger": project.stagger ?? 0 }}
  >
    <ProjectImage
      src={project.image}
      alt={project.title}
      fit={project.imageFit}
      className="aspect-[16/10]"
    />
    <div className="flex flex-1 flex-col p-5 md:p-6">
      <ProjectCardBody project={project} visible={true}>
        {project.pipeline && (
          <PipelineVisual steps={project.pipeline} visible={visible} />
        )}
        {project.layout === "sentiment" && (
          <SentimentVisual visible={visible} />
        )}
      </ProjectCardBody>
    </div>
  </article>
);

const InProgressProject = ({ project, visible }) => (
  <article
    className={`projects-reveal group relative overflow-hidden rounded-[1.75rem] border border-purple-500/25 bg-gradient-to-br from-purple-500/[0.08] via-[#0a0f1a] to-orange-500/[0.05] p-6 md:p-8 ${
      visible ? "is-visible" : ""
    }`}
    style={{ "--stagger": project.stagger ?? 0 }}
  >
    <div className="projects-glow-pulse pointer-events-none absolute -right-16 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-purple-500/15 blur-3xl" />
    <div className="projects-neural-grid pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
    <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
      <div>
        <span className="projects-glow-pulse inline-flex items-center gap-2 rounded-full border border-purple-400/35 bg-purple-500/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-purple-200">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-purple-400" />
          Currently Building...
        </span>
        <ProjectCardBody project={project} visible={true} />
      </div>
      <div className="relative min-h-[260px] overflow-hidden rounded-2xl border border-purple-500/20">
        <ProjectImage
          src={project.image}
          alt={project.title}
          fit={project.imageFit}
          className="h-full min-h-[260px]"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 via-transparent to-orange-500/10" />
      </div>
    </div>
  </article>
);

const ProjectRenderer = ({ project, index, filterKey }) => {
  const [ref, visible] = useInView(0.08);
  const featuredReverse = index % 2 === 1;

  const projectWithStagger = { ...project, stagger: index };

  if (project.layout === "milestone") {
    return (
      <div
        ref={ref}
        key={`${filterKey}-${project.id}`}
        className="projects-filter-item"
        style={{ "--stagger": index }}
      >
        <MilestoneProject project={projectWithStagger} visible={visible} />
      </div>
    );
  }

  if (project.layout === "in-progress") {
    return (
      <div
        ref={ref}
        key={`${filterKey}-${project.id}`}
        className="projects-filter-item"
        style={{ "--stagger": index }}
      >
        <InProgressProject project={projectWithStagger} visible={visible} />
      </div>
    );
  }

  if (project.layout === "featured" || project.layout === "featured-ai") {
    return (
      <div
        ref={ref}
        key={`${filterKey}-${project.id}`}
        className="projects-filter-item"
        style={{ "--stagger": index }}
      >
        <FeaturedProject
          project={projectWithStagger}
          visible={visible}
          reverse={featuredReverse}
        />
      </div>
    );
  }

  return (
    <div
      ref={ref}
      key={`${filterKey}-${project.id}`}
      className="projects-filter-item h-full"
      style={{ "--stagger": index }}
    >
      <StandardProjectCard project={projectWithStagger} visible={visible} />
    </div>
  );
};

/* ─── GitHub CTA ────────────────────────────────────────────────── */

const GitHubCTA = () => {
  const [ref, visible] = useInView();

  return (
    <section ref={ref} className="mt-24">
      <div
        className={`projects-reveal relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-8 md:p-12 ${
          visible ? "is-visible" : ""
        }`}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(249,115,22,0.8) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative mx-auto max-w-2xl text-center">
          <FaGithub className="mx-auto text-4xl text-orange-400/80" />
          <h2 className="mt-5 text-2xl font-bold text-white md:text-3xl">
            More on GitHub
          </h2>
          <p className="mt-3 text-base leading-7 text-white/45">
            Explore my repositories, experiments, algorithms, and ongoing
            projects.
          </p>
          <ExternalButton
            href={GITHUB_PROFILE}
            label="Visit GitHub Profile ↗"
            variant="primary"
            className="mt-7"
          />
        </div>
      </div>
    </section>
  );
};

/* ─── Timeline ──────────────────────────────────────────────────── */

const ProjectTimeline = () => {
  const [ref, visible] = useInView(0.1);

  return (
    <section ref={ref} className="mt-24">
      <div
        className={`projects-reveal mb-12 text-center ${visible ? "is-visible" : ""}`}
      >
        <SectionLabel>Journey</SectionLabel>
        <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">
          How the journey evolved
        </h2>
      </div>

      <div className="relative mx-auto max-w-3xl">
        <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-orange-400/60 via-orange-400/20 to-transparent md:left-1/2 md:-translate-x-1/2" />

        {TIMELINE_STEPS.map((item, index) => (
          <div
            key={item.step}
            className={`projects-timeline-node relative mb-10 pl-12 md:mb-14 md:pl-0 ${
              visible ? "is-visible" : ""
            } ${index % 2 === 0 ? "md:pr-[52%] md:text-right" : "md:pl-[52%] md:text-left"}`}
            style={{ "--node-delay": index }}
          >
            <span className="absolute left-2.5 top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-orange-400/60 bg-[#070b14] md:left-1/2 md:-translate-x-1/2">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
            </span>
            <span className="font-mono text-xs font-bold text-orange-400/70">
              {item.step}
            </span>
            <h3 className="mt-1 text-lg font-bold text-white">{item.phase}</h3>
            <p className="mt-1 text-sm font-medium text-orange-300/80">
              {item.project}
            </p>
            <p className="mt-1 text-xs text-white/40">{item.tech}</p>
            {index < TIMELINE_STEPS.length - 1 && (
              <span
                className={`mt-3 block text-orange-400/40 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                aria-hidden="true"
              >
                ↓
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

/* ─── Hero background ───────────────────────────────────────────── */

const HeroBackground = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="projects-hero-glow absolute left-1/4 top-0 h-[420px] w-[420px] rounded-full bg-orange-500/8 blur-[120px]" />
    <div className="projects-hero-glow absolute right-1/4 top-1/3 h-[320px] w-[320px] rounded-full bg-purple-600/6 blur-[100px]" />
    <div
      className="absolute inset-0 opacity-[0.025]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    />
    {[...Array(6)].map((_, i) => (
      <span
        key={i}
        className="projects-float-dot absolute h-1 w-1 rounded-full bg-orange-400/30"
        style={{
          left: `${12 + i * 15}%`,
          top: `${20 + (i % 3) * 22}%`,
          "--dot-delay": i,
        }}
      />
    ))}
    <span className="absolute right-[8%] top-[18%] font-mono text-[10px] text-white/[0.04]">
      {"const journey = build();"}
    </span>
    <span className="absolute left-[6%] bottom-[28%] font-mono text-[10px] text-white/[0.04]">
      {"model.train()"}
    </span>
  </div>
);

/* ─── Main page ─────────────────────────────────────────────────── */

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [heroRef, heroVisible] = useInView(0.2);
  const [filterAnimKey, setFilterAnimKey] = useState(0);

  const filteredProjects = useMemo(
    () =>
      projects.filter(
        (project) =>
          activeFilter === "all" || project.filters.includes(activeFilter)
      ),
    [activeFilter]
  );

  const featuredProjects = filteredProjects.filter(
    (p) =>
      p.layout === "featured" ||
      p.layout === "featured-ai" ||
      p.layout === "milestone" ||
      p.layout === "in-progress"
  );

  const gridProjects = filteredProjects.filter(
    (p) =>
      p.layout !== "featured" &&
      p.layout !== "featured-ai" &&
      p.layout !== "milestone" &&
      p.layout !== "in-progress"
  );

  const handleFilterChange = (id) => {
    setActiveFilter(id);
    setFilterAnimKey((k) => k + 1);
  };

  return (
    <section
      id="projects"
      className="relative scroll-mt-28 min-h-screen overflow-hidden bg-[#070b14] text-white"
    >
      <HeroBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-28 pt-28 sm:px-8">
        {/* Hero */}
        <header ref={heroRef} className="mx-auto max-w-3xl text-center">
          <div
            className={`projects-reveal ${heroVisible ? "is-visible" : ""}`}
            style={{ "--stagger": 0 }}
          >
            <SectionLabel>Projects</SectionLabel>
          </div>

          <h1
            className={`projects-reveal mt-5 text-[clamp(2.25rem,6vw,4rem)] font-bold leading-tight tracking-tight ${
              heroVisible ? "is-visible" : ""
            }`}
            style={{ "--stagger": 1 }}
          >
            Things I&apos;ve Built
          </h1>

          <p
            className={`projects-reveal mx-auto mt-5 max-w-2xl text-base leading-7 text-white/45 sm:text-lg ${
              heroVisible ? "is-visible" : ""
            }`}
            style={{ "--stagger": 2 }}
          >
            From my first C++ project to full-stack applications, open-source
            contributions, and AI/ML systems.
          </p>

          <p
            className={`projects-reveal mx-auto mt-3 max-w-xl text-sm leading-6 text-white/30 ${
              heroVisible ? "is-visible" : ""
            }`}
            style={{ "--stagger": 3 }}
          >
            Building, experimenting, learning, and turning ideas into working
            software.
          </p>

          <div
            className={`projects-reveal mt-10 flex flex-col items-center gap-2 ${
              heroVisible ? "is-visible" : ""
            }`}
            style={{ "--stagger": 4 }}
          >
            <div className="projects-scroll-line h-8 w-px bg-gradient-to-b from-orange-400/60 to-transparent" />
            <FaChevronDown className="projects-scroll-bounce text-orange-400/50" />
          </div>
        </header>

        {/* Filter */}
        <div
          className={`projects-reveal mx-auto mt-14 max-w-4xl ${
            heroVisible ? "is-visible" : ""
          }`}
          style={{ "--stagger": 5 }}
        >
          <ProjectFilter active={activeFilter} onChange={handleFilterChange} />
        </div>

        {/* Projects showcase */}
        <div
          key={filterAnimKey}
          className="projects-filter-grid mt-16 space-y-10 sm:mt-20 sm:space-y-14"
        >
          {featuredProjects.map((project, index) => (
            <ProjectRenderer
              key={`${filterAnimKey}-${project.id}`}
              project={project}
              index={index}
              filterKey={filterAnimKey}
            />
          ))}

          {gridProjects.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {gridProjects.map((project, index) => (
                <ProjectRenderer
                  key={`${filterAnimKey}-${project.id}`}
                  project={project}
                  index={featuredProjects.length + index}
                  filterKey={filterAnimKey}
                />
              ))}
            </div>
          )}

          {filteredProjects.length === 0 && (
            <p className="py-16 text-center text-white/40">
              No projects in this category yet.
            </p>
          )}
        </div>

        <ProjectTimeline />
        <GitHubCTA />
      </div>
    </section>
  );
};

export default Projects;
