import { useMemo, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import {
  AI_EXPLORING,
  FILTER_OPTIONS,
  LEVEL_STYLES,
  skillCategories,
} from "../data/skillsData";
import { useInView } from "../hooks/useInView";

const SectionHeader = ({ label, title, subtitle, centered = false }) => (
  <div className={centered ? "text-center" : ""}>
    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-400/80">
      {label}
    </p>
    <h2
      className={`mt-3 font-bold tracking-tight text-white ${
        centered ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"
      }`}
    >
      {title}
    </h2>
    {subtitle && (
      <p
        className={`mt-3 text-base leading-7 text-white/45 ${
          centered ? "mx-auto max-w-2xl" : "max-w-2xl"
        }`}
      >
        {subtitle}
      </p>
    )}
  </div>
);

const SkillCard = ({ skill, stagger = 0, visible }) => {
  const Icon = skill.icon;
  const levelClass = LEVEL_STYLES[skill.level] ?? LEVEL_STYLES.Basic;

  return (
    <div
      className={`skills-reveal group relative ${visible ? "is-visible" : ""}`}
      style={{ "--stagger": stagger, "--icon-glow": `${skill.color}66` }}
    >
      <div
        className="relative flex h-full flex-col items-center rounded-2xl border border-white/8 bg-white/3 px-4 py-5 text-center backdrop-blur-sm transition duration-300 hover:-translate-y-1.5 hover:border-orange-400/25 hover:bg-white/[0.06] hover:shadow-[0_12px_40px_rgba(249,115,22,0.08)]"
      >
        <div
          className="skills-card-icon mb-3 flex h-11 w-11 items-center justify-center rounded-xl border border-white/8 bg-white/[0.04]"
          style={{ color: skill.color }}
        >
          <Icon className="text-2xl" />
        </div>
        <p className="text-sm font-semibold text-white/90">{skill.name}</p>
        <span
          className={`mt-2.5 rounded-full border px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide ${levelClass}`}
        >
          {skill.level}
        </span>
        <div
          className="pointer-events-none absolute inset-x-4 top-4 h-16 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
          style={{ backgroundColor: `${skill.color}22` }}
        />
      </div>
    </div>
  );
};

const SkillGrid = ({ skills, visible, startStagger = 0 }) => (
  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
    {skills.map((skill, index) => (
      <SkillCard
        key={`${skill.name}-${index}`}
        skill={skill}
        stagger={startStagger + index}
        visible={visible}
      />
    ))}
  </div>
);

const SkillFilter = ({ active, onChange }) => (
  <div className="skills-filter-scroll -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0">
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

const NeuralBackground = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[1.75rem] opacity-40">
    <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
      {[...Array(12)].map((_, i) => (
        <circle
          key={i}
          className="skills-node fill-purple-400/30"
          style={{
            "--node-delay": i,
            cx: `${10 + (i % 4) * 28}%`,
            cy: `${15 + Math.floor(i / 4) * 35}%`,
            r: 2,
          }}
        />
      ))}
      {[...Array(8)].map((_, i) => (
        <line
          key={`line-${i}`}
          x1={`${15 + (i % 4) * 22}%`}
          y1={`${20 + Math.floor(i / 4) * 40}%`}
          x2={`${35 + (i % 3) * 20}%`}
          y2={`${30 + (i % 2) * 35}%`}
          stroke="rgba(168,85,247,0.15)"
          strokeWidth="1"
        />
      ))}
    </svg>
  </div>
);

const SkillCategory = ({ category, filterActive, globalStagger = 0 }) => {
  const [ref, visible] = useInView();

  if (filterActive !== "all" && filterActive !== category.filterId) {
    return null;
  }

  const isHighlighted = category.highlighted;

  return (
    <section
      ref={ref}
      id={category.id}
      className={`scroll-mt-28 ${isHighlighted ? "relative" : ""}`}
    >
      {isHighlighted && (
        <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-purple-500/10 via-transparent to-orange-500/10 blur-2xl" />
      )}

      <div
        className={`relative ${
          isHighlighted
            ? "rounded-[1.75rem] border border-purple-500/20 bg-gradient-to-br from-purple-500/[0.06] via-white/[0.02] to-orange-500/[0.04] p-6 md:p-8"
            : ""
        }`}
      >
        <div
          className={`skills-reveal mb-8 ${visible ? "is-visible" : ""}`}
          style={{ "--stagger": globalStagger }}
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <SectionHeader
              label={isHighlighted ? "Core Focus" : "Category"}
              title={category.title}
              subtitle={category.description}
            />
            {category.categoryBadge && (
              <span className="shrink-0 rounded-full border border-blue-400/25 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
                {category.categoryBadge}
              </span>
            )}
          </div>
        </div>

        {category.subsections ? (
          <div className="space-y-10">
            {category.subsections.map((subsection, subIndex) => (
              <div key={subsection.title}>
                <h3
                  className={`skills-reveal mb-4 text-sm font-semibold uppercase tracking-[0.25em] ${
                    visible ? "is-visible" : ""
                  } ${isHighlighted ? "text-purple-300/80" : "text-white/35"}`}
                  style={{ "--stagger": globalStagger + subIndex + 1 }}
                >
                  {subsection.title}
                </h3>
                <SkillGrid
                  skills={subsection.skills}
                  visible={visible}
                  startStagger={globalStagger + subIndex * 2}
                />
              </div>
            ))}

            {isHighlighted && (
              <div
                className={`skills-reveal relative mt-10 overflow-hidden rounded-2xl border border-purple-500/20 bg-[#0a0f1e]/80 p-6 md:p-8 ${
                  visible ? "is-visible" : ""
                }`}
                style={{ "--stagger": globalStagger + 4 }}
              >
                <NeuralBackground />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-300/80">
                    Active Exploration
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-white">
                    Where I&apos;m Exploring
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-white/45">
                    Areas I am actively learning and building with — growing
                    depth through projects, not claiming expert status.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {AI_EXPLORING.map((area, i) => (
                      <span
                        key={area}
                        className={`skills-reveal rounded-full border border-purple-400/25 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-200 transition hover:border-purple-400/40 hover:bg-purple-500/15 ${
                          visible ? "is-visible" : ""
                        }`}
                        style={{ "--stagger": globalStagger + 5 + i }}
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <SkillGrid skills={category.skills} visible={visible} startStagger={globalStagger} />
        )}
      </div>
    </section>
  );
};

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [heroRef, heroVisible] = useInView(0.2);
  const [howRef, howVisible] = useInView();
  const [closingRef, closingVisible] = useInView();

  const visibleCategories = useMemo(
    () =>
      skillCategories.filter(
        (cat) => activeFilter === "all" || activeFilter === cat.filterId
      ),
    [activeFilter]
  );

  return (
    <section
      id="skills"
      className="relative scroll-mt-28 min-h-screen overflow-hidden bg-[#070b14] text-white"
    >
      {/* Background effects */}
      <div className="pointer-events-none fixed inset-0">
        <div className="skills-hero-glow absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-orange-500/8 blur-[140px]" />
        <div className="skills-hero-glow absolute right-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-purple-600/6 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-28 pt-28 sm:px-8">
        {/* Hero */}
        <header ref={heroRef} className="mx-auto max-w-3xl text-center">
          <div
            className={`skills-reveal ${heroVisible ? "is-visible" : ""}`}
            style={{ "--stagger": 0 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-400/80">
              Tech Stack
            </p>
          </div>

          <div className="relative mt-5">
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="h-24 w-64 rounded-full bg-orange-500/10 blur-3xl" />
            </div>
            <h1
              className={`skills-reveal relative text-[clamp(2.25rem,6vw,4rem)] font-bold leading-tight tracking-tight text-white ${
                heroVisible ? "is-visible" : ""
              }`}
              style={{ "--stagger": 1 }}
            >
              What I Work With
            </h1>
          </div>

          <p
            className={`skills-reveal mx-auto mt-5 max-w-2xl text-base leading-7 text-white/45 sm:text-lg ${
              heroVisible ? "is-visible" : ""
            }`}
            style={{ "--stagger": 2 }}
          >
            Technologies, tools, and frameworks I use to build, experiment, and
            learn.
          </p>
        </header>

        {/* Filter */}
        <div
          className={`skills-reveal mx-auto mt-12 max-w-4xl sm:mt-14 ${
            heroVisible ? "is-visible" : ""
          }`}
          style={{ "--stagger": 3 }}
        >
          <SkillFilter active={activeFilter} onChange={setActiveFilter} />
        </div>

        {/* Categories */}
        <div className="mt-16 space-y-20 sm:mt-20">
          {visibleCategories.map((category, index) => (
            <SkillCategory
              key={category.id}
              category={category}
              filterActive={activeFilter}
              globalStagger={index}
            />
          ))}
        </div>

        {/* How I Build */}
        {(activeFilter === "all" || activeFilter === "web") && (
          <section ref={howRef} className="mt-24">
            <div
              className={`skills-reveal overflow-hidden rounded-[1.75rem] border border-white/8 bg-gradient-to-br from-white/[0.04] to-transparent p-8 md:p-10 ${
                howVisible ? "is-visible" : ""
              }`}
            >
              <SectionHeader
                label="Web Development"
                title="How I Build"
                subtitle="I have a foundational understanding of modern web development and can build full-stack projects using React, Tailwind, APIs, FastAPI, and databases. I also use AI-assisted development and vibe coding to prototype and build faster while continuously improving my fundamentals."
              />
              <div className="mt-6 flex flex-wrap gap-2">
                {["Fundamentals", "Full-Stack Projects", "AI-Assisted Dev", "Always Improving"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-orange-400/20 bg-orange-500/10 px-3 py-1.5 text-xs font-medium text-orange-300"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </section>
        )}

        {/* Closing */}
        <footer ref={closingRef} className="mt-24 text-center">
          <div
            className={`skills-reveal ${closingVisible ? "is-visible" : ""}`}
            style={{ "--stagger": 0 }}
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Always Learning.
            </h2>
            <p className="mx-auto mt-3 max-w-md text-base text-white/45">
              The stack keeps evolving. So does the way I build.
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center gap-3">
            <div className="skills-pulse-line h-px w-24 bg-gradient-to-r from-transparent via-orange-400/60 to-transparent" />
            <FaChevronDown className="text-orange-400/50" aria-hidden="true" />
            <p className="text-xs uppercase tracking-[0.25em] text-white/25">
              Projects
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Skills;
