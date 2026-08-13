import React, { useEffect, useRef, useState } from "react";
import {
  FaGraduationCap,
  FaCode,
  FaTrophy,
  FaBriefcase,
  FaBrain,
  FaGamepad,
  FaMusic,
  FaFilm,
  FaArrowRight,
  FaRocket,
  FaLaptopCode,
  FaGlobe,
  FaRobot,
  FaCloud,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import aboutPageBg from "../assets/AboutPage/aboutPage.png";

const sections = [
  "hero",
  "introduction",
  "education",
  "technicalJourney",
  "achievements",
  "experience",
  "currentLearning",
  "beyondCode",
  "philosophy",
  "finalCta",
];

const About = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const sectionRefs = useRef({});

  const journey = [
    {
      number: "01",
      icon: <FaCode />,
      title: "Programming",
      description:
        "My journey started with programming and building a strong foundation in problem solving and logical thinking.",
      technologies: ["C", "C++", "Java", "Python"],
    },
    {
      number: "02",
      icon: <FaBrain />,
      title: "Data Structures & Algorithms",
      description:
        "I started solving algorithmic problems to improve my problem-solving skills and understand how efficient solutions are designed.",
      technologies: ["DSA", "Algorithms", "Problem Solving", "500+ Problems"],
    },
    {
      number: "03",
      icon: <FaGlobe />,
      title: "Web Development",
      description:
        "I moved into web development and started building responsive and interactive applications.",
      technologies: ["HTML", "CSS", "React", "Tailwind"],
    },
    {
      number: "04",
      icon: <FaBrain />,
      title: "Machine Learning",
      description:
        "Curiosity about intelligent systems led me toward machine learning, deep learning and practical AI projects.",
      technologies: [
        "Python",
        "Scikit-learn",
        "TensorFlow",
        "OpenCV",
        "FastAPI",
        "Pydantic",
      ],
    },
    {
      number: "05",
      icon: <FaRobot />,
      title: "Generative AI",
      description:
        "I began exploring modern AI systems including LLMs, Transformers, RAG and techniques for working with generative models.",
      technologies: [
        "LLMs",
        "RAG",
        "Transformers",
        "Agents",
        "LangChain",
        "LangGraph",
        "LangSmith",
      ],
    },
    {
      number: "06",
      icon: <FaCloud />,
      title: "AI & Intelligent Systems",
      description:
        "Currently exploring AI agents, intelligent workflows, cloud technologies and ways to combine AI with real applications.",
      technologies: ["AI Agents", "APIs", "Cloud", "Automation"],
    },
  ];

  const achievements = [
    {
      icon: <FaCode />,
      number: "500+",
      title: "Coding Problems",
      description:
        "Problems solved across different coding and competitive programming platforms.",
    },
    {
      icon: <FaRocket />,
      number: "10+",
      title: "Projects",
      description:
        "Academic, personal and experimental projects built while learning.",
    },
    {
      icon: <FaTrophy />,
      number: "10+",
      title: "Hackathon",
      description:
        "Participated in hackathons and collaborative development challenges.",
    },
    {
      icon: <FaBriefcase />,
      number: "01",
      title: "Internship",
      description:
        "Gained practical software engineering experience in a professional environment.",
    },
  ];

  const learning = [
    { name: "Generative AI", progress: 80 },
    { name: "Machine Learning", progress: 75 },
    { name: "Full Stack Development", progress: 40 },
    { name: "AI Agents", progress: 60 },
    { name: "Cloud & DevOps", progress: 2 },
  ];

  /*
   * Detect the section currently occupying the viewport.
   * This is intentionally simple — no frame animation and no
   * continuous scroll calculations.
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.dataset.section);
        }
      },
      {
        threshold: [0.2, 0.4, 0.6],
        rootMargin: "-10% 0px -10% 0px",
      },
    );

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const registerSection = (section) => (element) => {
    if (element) {
      sectionRefs.current[section] = element;
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#075da8]">
      {/* =========================================================
          FIXED CINEMATIC BACKGROUND
      ========================================================= */}

      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        <img
          src={aboutPageBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Main readability gradient */}
        <div
          className="
            absolute inset-0
            bg-linear-to-r
            from-black/35
            via-black/10
            to-transparent
          "
        />

        {/* Bottom readability */}
        <div
          className="
            absolute inset-0
            bg-linear-to-t
            from-black/25
            via-transparent
            to-transparent
          "
        />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="relative z-10">
        {/* =======================================================
            HERO
        ======================================================= */}

        <section
          ref={registerSection("hero")}
          data-section="hero"
          className="
            relative min-h-screen
            flex items-center
            px-6
            pt-28 pb-20
          "
        >
          <div
            className="
              max-w-7xl
              mx-auto
              w-full
              flex
              justify-end
            "
          >
            <div
              className="
                w-full
                lg:w-[52%]
                text-right
                text-white
                transition-all
                duration-700
              "
            >
              <div className="flex items-center justify-end gap-3 mb-6">
                <span className="w-12 h-0.5 bg-orange-400" />

                <span className="text-orange-300 tracking-[5px] text-sm font-bold drop-shadow-lg">
                  ABOUT ME
                </span>
              </div>

              <h1
                className="
                  text-5xl
                  sm:text-6xl
                  lg:text-7xl
                  xl:text-8xl
                  font-black
                  leading-[0.9]
                  tracking-tight
                  drop-shadow-[0_4px_18px_rgba(0,0,0,0.55)]
                "
              >
                THE STORY
                <br />
                <span className="text-orange-300">BEHIND</span>
                <br />
                GAURAV
              </h1>

              <p
                className="
                  mt-8
                  text-white/95
                  text-lg
                  max-w-xl
                  ml-auto
                  leading-8
                  drop-shadow-[0_3px_10px_rgba(0,0,0,0.65)]
                "
              >
                I'm a Computer Science student and developer who enjoys
                transforming ideas into real-world applications through code,
                technology and creativity.
              </p>

              <p
                className="
                  mt-4
                  text-white/80
                  max-w-xl
                  ml-auto
                  leading-7
                  drop-shadow-[0_3px_8px_rgba(0,0,0,0.65)]
                "
              >
                My journey has taken me from programming and DSA to web
                development, machine learning and generative AI. I'm always
                curious about what I can learn and build next.
              </p>

              <div className="flex flex-wrap gap-4 mt-8 justify-end">
                <Link
                  to="/projects"
                  className="
                    group
                    px-6 py-3
                    rounded-full
                    bg-orange-500
                    hover:bg-orange-600
                    text-white
                    transition
                    flex items-center gap-3
                    font-semibold
                    shadow-xl shadow-black/20
                  "
                >
                  Explore My Work
                  <FaArrowRight className="group-hover:translate-x-1 transition" />
                </Link>

                <Link
                  to="/contact"
                  className="
                    px-6 py-3
                    rounded-full
                    bg-black/20
                    hover:bg-black/35
                    backdrop-blur-md
                    border border-white/40
                    text-white
                    transition
                    font-semibold
                  "
                >
                  Let's Connect
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =======================================================
            INTRODUCTION
        ======================================================= */}

        <CinematicSection
          id="introduction"
          refCallback={registerSection("introduction")}
          number="01"
          title="INTRODUCTION"
          subtitle="Who I am and what drives me."
          active={activeSection === "introduction"}
        >
          <div className="grid lg:grid-cols-2 gap-8">
            <GlassPanel>
              <div className="flex items-center gap-4 mb-6">
                <IconBox icon={<FaBrain />} />

                <h3 className="text-2xl font-bold">Who am I?</h3>
              </div>

              <p className="text-white/90 leading-8">
                I'm a Computer Science student who enjoys solving problems,
                building applications and exploring new technologies.
              </p>

              <p className="text-white/70 leading-8 mt-5">
                I started with programming and problem solving, then gradually
                explored web development, machine learning, deep learning and
                generative AI.
              </p>

              <p className="text-white/70 leading-8 mt-5">
                I enjoy the process of taking an idea, breaking it into smaller
                problems and turning it into something useful.
              </p>
            </GlassPanel>

            <div className="grid grid-cols-2 gap-5">
              <InfoCard icon={<FaCode />} title="Developer" value="Building" />

              <InfoCard
                icon={<FaBrain />}
                title="Problem Solver"
                value="500+"
              />

              <InfoCard
                icon={<FaRobot />}
                title="AI Enthusiast"
                value="Learning"
              />

              <InfoCard
                icon={<FaGraduationCap />}
                title="Student"
                value="2023 → 2027"
              />
            </div>
          </div>
        </CinematicSection>

        {/* =======================================================
    EDUCATION
======================================================= */}

        <CinematicSection
          id="education"
          refCallback={registerSection("education")}
          number="02"
          title="EDUCATION"
          subtitle="From school foundations to computer science."
          active={activeSection === "education"}
        >
          <div className="max-w-5xl mx-auto mt-14">
            {/* Education Timeline */}
            <div className="relative">
              {/* Vertical timeline */}
              <div
                className="
          hidden
          md:block
          absolute
          left-1/2
          top-0
          bottom-0
          w-0.5
          bg-linear-to-b
          from-orange-400
          via-orange-300/50
          to-transparent
          -translate-x-1/2
        "
              />

              {/* ===================================================
          12TH
      =================================================== */}

              <div className="relative grid md:grid-cols-2 gap-8 md:gap-16 mb-16">
                {/* Left side */}
                <div className="md:text-right">
                  <span
                    className="
              inline-block
              px-4
              py-2
              rounded-full
              bg-orange-500/80
              text-white
              text-sm
              font-semibold
              shadow-lg
            "
                  >
                    12th Grade
                  </span>

                  <h3 className="text-3xl font-black mt-5">Senior Secondary</h3>

                  <p className="text-orange-300 font-semibold mt-2">
                    Class XII
                  </p>

                  <p className="text-white/70 leading-7 mt-5">
                    Completed my senior secondary education, building the
                    academic foundation that led me toward Computer Science and
                    Engineering.
                  </p>
                </div>

                {/* Right side */}
                <GlassPanel>
                  <div className="flex items-center gap-4">
                    <IconBox icon={<FaGraduationCap />} />

                    <div>
                      <p className="text-orange-300 text-xs font-bold tracking-widest">
                        Saigrace Academy International Dehradun
                      </p>

                      <h3 className="text-xl font-bold mt-1">Class XII</h3>
                    </div>
                  </div>

                  <p className="text-white/70 leading-7 mt-6">
                    Developed an interest in computer science and problem
                    solving, which became the foundation for my journey into
                    technology.
                  </p>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {["PCM", "Computer Science", "Problem Solving"].map(
                      (item) => (
                        <span
                          key={item}
                          className="
                  px-3
                  py-1
                  rounded-full
                  bg-white/10
                  border
                  border-white/20
                  text-white/85
                  text-xs
                  font-medium
                "
                        >
                          {item}
                        </span>
                      ),
                    )}
                  </div>
                </GlassPanel>

                {/* Timeline dot */}
                <div
                  className="
            hidden
            md:flex
            absolute
            left-1/2
            top-8
            -translate-x-1/2
            w-5
            h-5
            rounded-full
            bg-orange-400
            border-4
            border-white/20
            shadow-lg
            shadow-orange-500/40
          "
                />
              </div>

              {/* ===================================================
          B.TECH
      =================================================== */}

              <div className="relative grid md:grid-cols-2 gap-8 md:gap-16">
                {/* Left side */}
                <GlassPanel className="md:order-1">
                  <div className="flex items-center gap-4">
                    <IconBox icon={<FaLaptopCode />} />

                    <div>
                      <p className="text-orange-300 text-xs font-bold tracking-widest">
                        CURRENT JOURNEY
                      </p>

                      <h3 className="text-xl font-bold mt-1">B.Tech — CSE</h3>
                    </div>
                  </div>

                  <p className="text-white/70 leading-7 mt-6">
                    Building a strong foundation in computer science, software
                    development, algorithms, artificial intelligence and modern
                    technologies.
                  </p>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {[
                      "DSA",
                      "DBMS",
                      "OS",
                      "Computer Networks",
                      "OOP",
                      "AI / ML",
                    ].map((item) => (
                      <span
                        key={item}
                        className="
                  px-3
                  py-1
                  rounded-full
                  bg-white/10
                  border
                  border-white/20
                  text-white/85
                  text-xs
                  font-medium
                "
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </GlassPanel>

                {/* Right side */}
                <div className="md:text-left md:order-2">
                  <span
                    className="
              inline-block
              px-4
              py-2
              rounded-full
              bg-orange-500/80
              text-white
              text-sm
              font-semibold
              shadow-lg
            "
                  >
                    2023 — 2027
                  </span>

                  <h3 className="text-3xl font-black mt-5">B.Tech</h3>

                  <h4 className="text-lg font-semibold mt-1 text-white/85">
                    Computer Science & Engineering
                  </h4>

                  <p className="text-orange-300 font-medium mt-3">
                    Graphic Era Hill University
                  </p>

                  <p className="text-white/70 leading-7 mt-5">
                    Currently pursuing my Bachelor's degree in Computer Science
                    and Engineering while exploring software development,
                    machine learning, generative AI and intelligent systems.
                  </p>
                </div>

                {/* Timeline dot */}
                <div
                  className="
            hidden
            md:flex
            absolute
            left-1/2
            top-8
            -translate-x-1/2
            w-5
            h-5
            rounded-full
            bg-orange-400
            border-4
            border-white/20
            shadow-lg
            shadow-orange-500/40
          "
                />
              </div>
            </div>
          </div>
        </CinematicSection>

        {/* =======================================================
            TECHNICAL JOURNEY
        ======================================================= */}

        <CinematicSection
          id="technicalJourney"
          refCallback={registerSection("technicalJourney")}
          number="03"
          title="TECHNICAL JOURNEY"
          subtitle="From programming to intelligent systems."
          active={activeSection === "technicalJourney"}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {journey.map((item) => (
              <GlassPanel key={item.number}>
                <div className="text-5xl font-black text-white/10 absolute top-5 right-6">
                  {item.number}
                </div>

                <IconBox icon={item.icon} />

                <h3 className="text-xl font-bold mt-6">{item.title}</h3>

                <p className="text-white/70 text-sm leading-7 mt-3">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-3 py-1
                        rounded-full
                        bg-white/10
                        border border-white/15
                        text-white/85
                        text-xs
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </GlassPanel>
            ))}
          </div>
        </CinematicSection>

        {/* =======================================================
            ACHIEVEMENTS
        ======================================================= */}

        <CinematicSection
          id="achievements"
          refCallback={registerSection("achievements")}
          number="04"
          title="ACHIEVEMENTS"
          subtitle="Milestones unlocked along the journey."
          active={activeSection === "achievements"}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((item) => (
              <GlassPanel key={item.title}>
                <IconBox icon={item.icon} />

                <p className="text-4xl font-black mt-7">{item.number}</p>

                <h3 className="font-bold text-lg mt-2">{item.title}</h3>

                <p className="text-white/70 text-sm leading-6 mt-3">
                  {item.description}
                </p>

                <div className="mt-5 text-orange-300 text-xs font-bold tracking-widest">
                  ACHIEVEMENT UNLOCKED
                </div>
              </GlassPanel>
            ))}
          </div>
        </CinematicSection>
        {/* =======================================================
    EXPERIENCE
======================================================= */}

        <CinematicSection
          id="experience"
          refCallback={registerSection("experience")}
          number="05"
          title="EXPERIENCE"
          subtitle="Real-world missions, collaboration and contribution."
          active={activeSection === "experience"}
        >
          <div className="grid lg:grid-cols-2 gap-6">
            {/* =====================================================
        INTERNSHIP
    ===================================================== */}

            <GlassPanel className="h-full">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-4 py-2 rounded-full bg-orange-500/70 text-white text-xs font-bold tracking-widest">
                      MISSION 01
                    </span>

                    <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-200 text-xs font-semibold border border-green-300/30">
                      COMPLETED
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-5 mt-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black">
                        Software Engineering Intern
                      </h3>

                      <p className="text-orange-300 font-semibold mt-2">
                        Digistay
                      </p>
                    </div>

                    <IconBox icon={<FaBriefcase />} large />
                  </div>

                  <div className="border-t border-white/15 mt-8 pt-7">
                    <p className="text-white/80 leading-8">
                      Gained practical experience in software engineering,
                      development workflows and building solutions in a
                      professional environment.
                    </p>

                    <div className="flex flex-wrap gap-3 mt-6">
                      {[
                        "Software Development",
                        "Problem Solving",
                        "Teamwork",
                        "Professional Experience",
                      ].map((item) => (
                        <span
                          key={item}
                          className="
                    px-4 py-2
                    rounded-full
                    bg-white/10
                    border border-white/15
                    text-white/80
                    text-sm
                  "
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </GlassPanel>

            {/* =====================================================
        OPEN SOURCE
    ===================================================== */}

            <GlassPanel className="h-full">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-4 py-2 rounded-full bg-orange-500/70 text-white text-xs font-bold tracking-widest">
                      MISSION 02
                    </span>

                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 text-xs font-semibold border border-blue-300/30">
                      CONTRIBUTOR
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-5 mt-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black">
                        Open Source Contributor
                      </h3>

                      <p className="text-orange-300 font-semibold mt-2">
                        Open Source Projects
                      </p>
                    </div>

                    <IconBox icon={<FaGithub />} large />
                  </div>

                  <div className="border-t border-white/15 mt-8 pt-7">
                    <p className="text-white/80 leading-8">
                      Contributing to open-source projects, exploring
                      collaborative development and learning how real-world
                      software is built, reviewed and improved by the developer
                      community.
                    </p>

                    <div className="flex flex-wrap gap-3 mt-6">
                      {[
                        "Open Source",
                        "Git & GitHub",
                        "Collaboration",
                        "Code Review",
                        "Community",
                      ].map((item) => (
                        <span
                          key={item}
                          className="
                    px-4 py-2
                    rounded-full
                    bg-white/10
                    border border-white/15
                    text-white/80
                    text-sm
                  "
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </GlassPanel>
          </div>
        </CinematicSection>

        {/* =======================================================
            CURRENT LEARNING
        ======================================================= */}

        <CinematicSection
          id="currentLearning"
          refCallback={registerSection("currentLearning")}
          number="06"
          title="CURRENT LEARNING"
          subtitle="The next skills I'm working toward."
          active={activeSection === "currentLearning"}
        >
          <GlassPanel className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <IconBox icon={<FaRocket />} />

              <div>
                <h3 className="font-bold text-xl">Current Quest</h3>

                <p className="text-white/60 text-sm">
                  Constantly learning. Constantly improving.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              {learning.map((item) => (
                <div key={item.name}>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold">{item.name}</span>

                    <span className="text-orange-300 font-semibold text-sm">
                      {item.progress}%
                    </span>
                  </div>

                  <div className="h-3 rounded-full bg-white/15 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-linear-to-r from-orange-500 to-orange-300"
                      style={{
                        width: `${item.progress}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>
        </CinematicSection>

        {/* =======================================================
            BEYOND THE CODE
        ======================================================= */}

        <CinematicSection
          id="beyondCode"
          refCallback={registerSection("beyondCode")}
          number="07"
          title="BEYOND THE CODE"
          subtitle="The things that make me more than just a developer."
          active={activeSection === "beyondCode"}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <HobbyCard
              to="/extra-about/gaming"
              icon={<FaGamepad />}
              title="Gaming"
              text="Relaxing, competing and exploring virtual worlds."
            />

            <HobbyCard
              to="/extra-about/music"
              icon={<FaMusic />}
              title="Music"
              text="Music is part of my daily routine and a source of creativity."
            />

            <HobbyCard
              to="/extra-about/movie-anime"
              icon={<FaFilm />}
              title="Movie/Anime"
              text="Stories, characters and worlds that inspire creativity."
            />

            <HobbyCard
              to="/extra-about/learning"
              icon={<FaBrain />}
              title="Learning"
              text="Always curious about new technologies, ideas and possibilities."
            />
          </div>
        </CinematicSection>

        {/* =======================================================
            PHILOSOPHY
        ======================================================= */}

        <CinematicSection
          id="philosophy"
          refCallback={registerSection("philosophy")}
          number="08"
          title="MY PHILOSOPHY"
          subtitle="The mindset behind my journey."
          active={activeSection === "philosophy"}
          className="min-h-[75vh] flex items-center"
        >
          <div className="max-w-5xl mx-auto text-center">
            <span className="text-orange-300 tracking-[5px] text-sm font-semibold">
              08 — MY PHILOSOPHY
            </span>

            <h2
              className="
                mt-8
                text-4xl
                sm:text-5xl
                lg:text-7xl
                font-black
                leading-tight
              "
            >
              LEARN.
              <span className="text-orange-300"> BUILD.</span>
              <br />
              BREAK.
              <span className="text-orange-300"> IMPROVE.</span>
            </h2>

            <p className="mt-8 text-white/80 text-lg max-w-2xl mx-auto leading-8">
              I believe the best way to understand technology is to build with
              it, make mistakes, learn from them and keep moving forward.
            </p>
          </div>
        </CinematicSection>

        {/* =======================================================
            FINAL CTA
        ======================================================= */}

        <CinematicSection
          id="finalCta"
          refCallback={registerSection("finalCta")}
          number=""
          title=""
          subtitle=""
          active={activeSection === "finalCta"}
          className="pb-32"
        >
          <GlassPanel className="max-w-5xl mx-auto text-center">
            <FaRocket className="mx-auto text-orange-300 text-4xl mb-6" />

            <p className="text-orange-300 tracking-[4px] text-sm font-semibold">
              END OF THIS CHAPTER
            </p>

            <h2 className="text-4xl sm:text-5xl font-black mt-5">
              BUT THE JOURNEY
              <span className="text-orange-300"> CONTINUES...</span>
            </h2>

            <p className="text-white/70 mt-5 max-w-xl mx-auto">
              Want to see what I've built or create something together?
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link
                to="/projects"
                className="
                  px-7 py-3
                  rounded-full
                  bg-orange-500
                  hover:bg-orange-600
                  text-white
                  transition
                  font-semibold
                  flex items-center gap-3
                  shadow-xl
                "
              >
                View Projects
                <FaArrowRight />
              </Link>

              <Link
                to="/contact"
                className="
                  px-7 py-3
                  rounded-full
                  bg-white/10
                  backdrop-blur-md
                  border border-white/30
                  hover:bg-white/20
                  text-white
                  transition
                  font-semibold
                "
              >
                Contact Me
              </Link>
            </div>
          </GlassPanel>
        </CinematicSection>
      </div>
    </main>
  );
};

/* =============================================================
   CINEMATIC SECTION
============================================================= */

const CinematicSection = ({
  id,
  refCallback,
  number,
  title,
  subtitle,
  children,
  className = "",
}) => {
  return (
    <section
      ref={refCallback}
      data-section={id}
      className={`
        relative
        min-h-[75vh]
        py-24
        md:py-32
        px-6
        flex
        items-center
        ${className}
      `}
    >
      <div className="max-w-7xl mx-auto w-full">
        {title && (
          <div className="mb-12 md:mb-16 text-right text-white">
            <div className="flex items-center justify-end gap-4">
              <span className="text-orange-300 font-mono font-bold text-sm">
                {number}
              </span>

              <span className="h-0.5 w-10 bg-orange-300" />

              <span className="text-white/70 text-sm tracking-[4px] font-semibold">
                {title}
              </span>
            </div>

            <h2
              className="
                text-4xl
                sm:text-5xl
                font-black
                mt-5
                drop-shadow-[0_4px_12px_rgba(0,0,0,0.55)]
              "
            >
              {title}
            </h2>

            <p className="text-white/70 mt-3 drop-shadow-lg">{subtitle}</p>
          </div>
        )}

        {children}
      </div>
    </section>
  );
};

/* =============================================================
   GLASS PANEL
============================================================= */

const GlassPanel = ({ children, className = "" }) => {
  return (
    <div
      className={`
        relative
        rounded-3xl
        p-7
        md:p-8

        bg-black/20
        backdrop-blur-md

        border
        border-white/20

        shadow-2xl
        shadow-black/20

        text-white

        transition-all
        duration-300

        hover:bg-black/25
        hover:border-white/30

        ${className}
      `}
    >
      {children}
    </div>
  );
};

/* =============================================================
   ICON BOX
============================================================= */

const IconBox = ({ icon, large = false }) => {
  return (
    <div
      className={`
        rounded-2xl
        flex
        items-center
        justify-center
        bg-orange-500/80
        text-white
        shadow-lg
        shadow-black/20

        ${large ? "w-16 h-16 text-2xl" : "w-12 h-12 text-xl"}
      `}
    >
      {icon}
    </div>
  );
};

/* =============================================================
   INFO CARD
============================================================= */

const InfoCard = ({ icon, title, value }) => {
  return (
    <div
      className="
        group
        rounded-3xl
        p-6

        bg-black/20
        backdrop-blur-md

        border
        border-white/20

        text-white

        shadow-xl

        hover:bg-black/30
        hover:-translate-y-1

        transition-all
        duration-300
      "
    >
      <IconBox icon={icon} />

      <p className="text-white/55 text-sm mt-5">{title}</p>

      <p className="text-xl font-black mt-1">{value}</p>
    </div>
  );
};

/* =============================================================
   HOBBY CARD
============================================================= */

const HobbyCard = ({ to, icon, title, text }) => {
  return (
    <Link
      to={to}
      className="
        group
        block
        rounded-3xl
        p-7

        bg-black/20
        backdrop-blur-md

        border
        border-white/20

        text-white

        shadow-xl

        hover:bg-orange-500/80
        hover:-translate-y-2
        hover:border-orange-300/50

        transition-all
        duration-300

        cursor-pointer
      "
    >
      <div className="flex items-center justify-between">
        <IconBox icon={icon} />

        <FaArrowRight
          className="
          text-white
          opacity-0
          group-hover:opacity-100
          group-hover:translate-x-1
          transition-all
          duration-300
        "
        />
      </div>

      <h3 className="text-xl font-bold mt-6">{title}</h3>

      <p
        className="
          text-white/70
          group-hover:text-white
          mt-3
          text-sm
          leading-7
          transition
        "
      >
        {text}
      </p>

      <div
        className="
          mt-5
          text-orange-300
          group-hover:text-white
          text-xs
          font-bold
          tracking-widest
          transition
        "
      >
        EXPLORE →
      </div>
    </Link>
  );
};
export default About;
