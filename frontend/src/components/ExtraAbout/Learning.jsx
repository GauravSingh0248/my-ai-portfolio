import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaBrain,
  FaCode,
  FaCloud,
  FaRobot,
  FaDatabase,
  FaProjectDiagram,
  FaSearch,
  FaChevronRight,
} from "react-icons/fa";

import genAiHero from "../../assets/AboutPage/Learning/genAi.jpg";
import genAiStack from "../../assets/AboutPage/Learning/genAi2.png";
import genAiPortrait from "../../assets/AboutPage/Learning/genAi3.jpg";

const stackItems = [
  {
    icon: FaCode,
    name: "LangChain",
    accent: "#f97316",
    glow: "rgba(249,115,22,0.18)",
    description:
      "Structuring LLM applications with prompts, chains, retrievers, tools, memory, structured outputs, and agents — moving beyond simple API calls.",
  },
  {
    icon: FaProjectDiagram,
    name: "LangGraph",
    accent: "#a855f7",
    glow: "rgba(168,85,247,0.18)",
    description:
      "Designing stateful, multi-step AI workflows and agentic systems — nodes, edges, state, tool execution, and controllable agent behavior.",
  },
  {
    icon: FaSearch,
    name: "LangSmith",
    accent: "#38bdf8",
    glow: "rgba(56,189,248,0.18)",
    description:
      "Tracing, debugging, evaluating, and monitoring LLM apps — because building AI is as much about understanding behavior as making it work.",
  },
];

const whyItems = [
  {
    title: "From models to applications",
    text: "Generative AI lets models generate, reason, summarize, and interact with information in ways that plug directly into real software systems.",
  },
  {
    title: "Understanding AI agents",
    text: "Agents use tools, maintain state, make decisions, and execute multi-step workflows — a layer beyond traditional chatbots.",
  },
  {
    title: "Practical engineering",
    text: "Data pipelines, retrieval, APIs, evaluation, observability, deployment, and scalability — the full stack of AI engineering.",
  },
  {
    title: "Building useful systems",
    text: "Real problems over AI demos. My portfolio chatbot combines personal data, backend dev, and Generative AI into one practical app.",
  },
];

const awsTags = [
  "AWS",
  "Cloud Computing",
  "ML Infrastructure",
  "Model Deployment",
  "Cloud Storage",
  "APIs",
  "Monitoring",
  "Scalable AI Systems",
];

const Learning = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050508] text-white">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-orange-500/8 blur-[120px]" />
        <div className="absolute -right-20 top-1/2 h-80 w-80 rounded-full bg-purple-600/8 blur-[110px]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-cyan-500/6 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-28 pt-28 sm:px-8">
        {/* Nav */}
        <div className="mb-16 flex items-center justify-between">
          <Link
            to="/about"
            className="group inline-flex items-center gap-2.5 rounded-full border border-white/8 bg-white/2 px-4 py-2.5 text-sm text-white/50 backdrop-blur-xl transition duration-300 hover:border-white/20 hover:text-white"
          >
            <FaArrowLeft className="text-xs transition-transform group-hover:-translate-x-0.5" />
            Back to About
          </Link>

          <div className="hidden items-center gap-2 rounded-full border border-white/8 bg-white/2 px-4 py-2 text-xs font-medium tracking-wide text-white/40 sm:flex">
            <FaBrain className="text-orange-400/70" />
            Always learning
          </div>
        </div>

        {/* Hero — split with image */}
        <section className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-400/80">
              Current journey
            </p>

            <h1 className="mt-5 text-[clamp(2.75rem,7vw,5rem)] font-light leading-[0.95] tracking-tight">
              Learning
              <span className="block font-semibold italic text-white/90">
                by building.
              </span>
            </h1>

            <p className="mt-8 max-w-lg text-base leading-7 text-white/45 sm:text-lg">
              I believe learning is not just collecting technologies — it is
              understanding how they work, experimenting with them, and using
              them to build something meaningful.
            </p>

            <a
              href="#genai-focus"
              className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-orange-400/80 transition hover:text-orange-300"
            >
              Explore my GenAI path
              <FaChevronRight className="text-xs transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-orange-500/20 via-purple-500/10 to-cyan-500/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 shadow-2xl shadow-black/40">
              <img
                src={genAiHero}
                alt="Learning and exploring Generative AI"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-400">
                  Generative AI
                </p>
                <p className="mt-1 text-sm text-white/60">
                  From theory to production-ready systems
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Current Focus */}
        <section id="genai-focus" className="mt-28">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-400/80">
                Current Focus
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Exploring Generative AI
              </h2>
            </div>
            <p className="max-w-sm text-sm text-white/40">
              LLMs → RAG → Agents → Production
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
            <div className="space-y-5 rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-8 backdrop-blur-md md:p-10">
              <p className="text-lg leading-8 text-white/70">
                One of my main areas of learning right now is{" "}
                <span className="font-semibold text-white">
                  Generative Artificial Intelligence
                </span>
                . I am particularly interested in understanding how modern
                Large Language Models work and how these models can be
                transformed from simple chat interfaces into useful applications
                and autonomous systems.
              </p>
              <p className="text-lg leading-8 text-white/70">
                Rather than learning only from theory, I want a strong practical
                understanding by building around LLMs, RAG, tool calling,
                memory, workflows, and AI agents.
              </p>
              <p className="text-lg leading-8 text-white/70">
                My goal is the complete journey from an LLM response to a
                production-ready AI system — retrieval, context, agent
                reasoning, workflow orchestration, evaluation, and improvement.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10">
              <img
                src={genAiPortrait}
                alt="Generative AI concept"
                className="h-full min-h-[280px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#050508]/60 via-transparent to-transparent" />
            </div>
          </div>
        </section>

        {/* GenAI Stack */}
        <section className="mt-28">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-purple-400/80">
              Generative AI Stack
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Technologies I am exploring
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="absolute -inset-6 rounded-full bg-purple-500/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0a0f1e] p-6">
                <img
                  src={genAiStack}
                  alt="Generative AI technology stack"
                  className="w-full object-contain"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-1">
              {stackItems.map(({ icon: Icon, name, accent, glow, description }) => (
                <div
                  key={name}
                  className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.05]"
                  style={{
                    boxShadow: `0 0 0 0 ${glow}`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 8px 40px ${glow}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 0 0 ${glow}`;
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                      style={{ backgroundColor: `${accent}18` }}
                    >
                      <Icon className="text-xl" style={{ color: accent }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{name}</h3>
                      <p className="mt-2 leading-7 text-white/55">{description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Project */}
        <section className="mt-28">
          <div className="relative overflow-hidden rounded-[2rem] border border-orange-400/20">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{ backgroundImage: `url(${genAiHero})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-[#050508]/90 to-[#050508]/95" />

            <div className="relative flex flex-col gap-8 p-8 md:flex-row md:items-start md:p-12">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-orange-400/20 bg-orange-400/10 backdrop-blur-sm">
                <FaRobot className="text-3xl text-orange-400" />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-400">
                  Building while learning
                </p>
                <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                  An AI-powered portfolio
                </h2>

                <div className="mt-6 space-y-5 text-lg leading-8 text-white/70">
                  <p>
                    I am actively applying these technologies while building my
                    personal portfolio — integrating a{" "}
                    <span className="font-semibold text-white">
                      RAG-based chatbot
                    </span>{" "}
                    that answers questions about my education, skills, projects,
                    and journey using retrieved context instead of hard-coded
                    responses.
                  </p>
                  <p>
                    This project covers{" "}
                    <span className="text-white">
                      embeddings, vector search, retrieval, prompt engineering,
                      RAG pipelines, tool usage, agents, and evaluation
                    </span>{" "}
                    — demonstrating I can design and build working AI
                    applications, not just talk about them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why GenAI */}
        <section className="mt-28">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-400/80">
              Why Generative AI?
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Why I chose this field
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {whyItems.map(({ title, text }) => (
              <div
                key={title}
                className="group rounded-2xl border border-white/8 bg-white/[0.03] p-7 transition duration-300 hover:border-white/15 hover:bg-white/[0.05]"
              >
                <h3 className="text-xl font-bold transition group-hover:text-orange-300">
                  {title}
                </h3>
                <p className="mt-3 leading-7 text-white/55">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* AWS */}
        <section className="mt-28">
          <div className="rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-8 backdrop-blur-md md:p-12">
            <div className="flex flex-col gap-8 md:flex-row md:items-start">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-yellow-400/20 bg-yellow-400/10">
                <FaCloud className="text-3xl text-yellow-400" />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/80">
                  Next Learning Goal
                </p>
                <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                  AWS & Cloud for Machine Learning
                </h2>

                <div className="mt-6 space-y-5 text-lg leading-8 text-white/70">
                  <p>
                    Alongside Generative AI, I am planning to dive deeper into{" "}
                    <span className="font-semibold text-white">
                      AWS services for Machine Learning and AI
                    </span>{" "}
                    — moving from local development to reliable, scalable
                    cloud-based systems.
                  </p>
                  <p>
                    My goal is to connect Python, machine learning, backend
                    development, APIs, and Generative AI with cloud
                    infrastructure to build and deploy production-oriented AI
                    applications.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-2.5">
                  {awsTags.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60 transition hover:border-yellow-400/30 hover:text-white/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="mt-28 text-center">
          <div className="mx-auto max-w-2xl rounded-[1.75rem] border border-white/8 bg-gradient-to-b from-white/[0.04] to-transparent px-8 py-12">
            <FaDatabase className="mx-auto text-4xl text-cyan-400" />
            <h2 className="mt-6 text-3xl font-bold md:text-4xl">
              Learn → Build → Experiment → Improve
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/50">
              Understand the fundamentals, build something with it, experiment
              with its limitations, then improve. The strongest understanding
              comes from turning concepts into working systems.
            </p>
          </div>
        </section>

        {/* Closing tagline */}
        <section className="mt-28 text-center">
          <p className="text-sm text-white/35">
            Always learning. Always building. Always curious.
          </p>
        </section>
      </div>
    </main>
  );
};

export default Learning;
