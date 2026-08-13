import React from "react";
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
  FaDatabase,
  FaGlobe,
  FaRobot,
  FaCloud,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
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
      technologies: ["DSA", "Algorithms", "Problem Solving", "300+ Problems"],
    },
    {
      number: "03",
      icon: <FaGlobe />,
      title: "Web Development",
      description:
        "I moved into web development and started building responsive and interactive applications.",
      technologies: ["React", "JavaScript", "Tailwind", "Node.js"],
    },
    {
      number: "04",
      icon: <FaBrain />,
      title: "Machine Learning",
      description:
        "Curiosity about intelligent systems led me toward machine learning, deep learning and practical AI projects.",
      technologies: ["Python", "Scikit-learn", "TensorFlow", "OpenCV"],
    },
    {
      number: "05",
      icon: <FaRobot />,
      title: "Generative AI",
      description:
        "I began exploring modern AI systems including LLMs, Transformers, RAG and techniques for working with generative models.",
      technologies: ["LLMs", "RAG", "Transformers", "PEFT"],
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
      number: "300+",
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
      number: "01+",
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
    {
      name: "Generative AI",
      progress: 80,
    },
    {
      name: "Machine Learning",
      progress: 75,
    },
    {
      name: "Full Stack Development",
      progress: 70,
    },
    {
      name: "AI Agents",
      progress: 60,
    },
    {
      name: "Cloud & DevOps",
      progress: 50,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-100 via-cyan-50 to-blue-100 text-gray-800 overflow-hidden">
      {/* =========================================================
          HERO SECTION
      ========================================================= */}

      <section className="relative min-h-[85vh] flex items-center px-6 pt-32 pb-20">
        {/* Background Decorations */}

        <div className="absolute top-20 left-[-100px] w-80 h-80 bg-orange-300/20 rounded-full blur-3xl" />

        <div className="absolute bottom-10 right-[-100px] w-96 h-96 bg-cyan-300/30 rounded-full blur-3xl" />

        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-blue-300/20 rounded-full blur-3xl" />

        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-32 left-[10%] w-2 h-2 rounded-full bg-orange-400" />
          <div className="absolute top-[30%] right-[15%] w-3 h-3 rounded-full bg-cyan-400" />
          <div className="absolute bottom-[20%] left-[20%] w-2 h-2 rounded-full bg-blue-400" />
          <div className="absolute bottom-[15%] right-[25%] w-2 h-2 rounded-full bg-orange-400" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* LEFT */}

          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[2px] bg-orange-500" />

              <span className="text-orange-500 tracking-[5px] text-sm font-semibold">
                ABOUT ME
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.95] tracking-tight text-gray-800">
              THE STORY
              <br />
              <span className="text-orange-500">BEHIND</span>
              <br />
              GAURAV
            </h1>

            <p className="mt-8 text-gray-600 text-lg max-w-xl leading-8">
              I'm a Computer Science student and developer who enjoys
              transforming ideas into real-world applications through code,
              technology and creativity.
            </p>

            <p className="mt-4 text-gray-500 max-w-xl leading-7">
              My journey has taken me from programming and DSA to web
              development, machine learning and generative AI. I'm always
              curious about what I can learn and build next.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/projects"
                className="group px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white transition flex items-center gap-3 font-semibold shadow-lg shadow-orange-200"
              >
                Explore My Work
                <FaArrowRight className="group-hover:translate-x-1 transition" />
              </Link>

              <Link
                to="/contact"
                className="px-6 py-3 rounded-full bg-white/70 backdrop-blur-md border border-white/70 text-gray-700 hover:text-orange-500 hover:border-orange-300 transition shadow-sm"
              >
                Let's Connect
              </Link>
            </div>
          </div>

          {/* CHARACTER CARD */}

          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Glow */}

              <div className="absolute inset-10 bg-orange-300/30 blur-3xl rounded-full" />

              <div className="relative bg-white/70 backdrop-blur-xl border border-white/80 rounded-[2rem] p-8 shadow-2xl shadow-blue-200/40">
                {/* Top */}

                <div className="flex justify-between items-center">
                  <span className="text-xs tracking-[4px] text-orange-500 font-semibold">
                    CHARACTER PROFILE
                  </span>

                  <span className="text-xs font-semibold text-gray-400">
                    LV. 03
                  </span>
                </div>

                {/* Avatar */}

                <div className="relative w-32 h-32 mx-auto mt-8">
                  <div className="absolute inset-0 rounded-full bg-orange-200 blur-xl opacity-70" />

                  <div className="relative w-full h-full rounded-full border-4 border-white bg-gradient-to-br from-orange-100 via-cyan-100 to-blue-100 flex items-center justify-center shadow-lg">
                    <FaLaptopCode className="text-5xl text-orange-500" />
                  </div>
                </div>

                <h2 className="text-3xl font-black text-center mt-7">
                  Gaurav Singh
                </h2>

                <p className="text-center text-gray-500 mt-2">
                  Computer Science Student
                </p>

                {/* Stats */}

                <div className="mt-8 space-y-4">
                  <ProfileRow label="CLASS" value="CSE" />

                  <ProfileRow label="ROLE" value="Software Engineer" />

                  <ProfileRow label="FOCUS" value="AI + ML" />

                  <ProfileRow label="LEVEL" value="Learning & Building" />

                  <div className="flex justify-between items-center pt-1">
                    <span className="text-gray-400 text-sm">STATUS</span>

                    <span className="text-green-500 text-sm font-semibold">
                      ● ONLINE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================= */}

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            number="01"
            title="INTRODUCTION"
            subtitle="Who I am and what drives me."
          />

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mt-14">
            <div className="bg-white/60 backdrop-blur-xl border border-white/70 rounded-3xl p-8 md:p-10 shadow-xl shadow-blue-100/40">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-500 flex items-center justify-center">
                  <FaBrain />
                </div>

                <h3 className="text-2xl font-bold">Who am I?</h3>
              </div>

              <p className="text-gray-600 leading-8">
                I'm a Computer Science student who enjoys solving problems,
                building applications and exploring new technologies.
              </p>

              <p className="text-gray-500 leading-8 mt-5">
                I started with programming and problem solving, then gradually
                explored web development, machine learning, deep learning and
                generative AI.
              </p>

              <p className="text-gray-500 leading-8 mt-5">
                I enjoy the process of taking an idea, breaking it into smaller
                problems and turning it into something useful.
              </p>
            </div>

            {/* INFO CARDS */}

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
        </div>
      </section>

      {/* =========================================================
          EDUCATION
      ========================================================= */}

      <section className="py-24 px-6 bg-white/30">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            number="02"
            title="EDUCATION"
            subtitle="Where my foundation was built."
          />

          <div className="max-w-5xl mx-auto mt-16">
            <div className="relative">
              {/* Timeline */}

              <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-orange-400 via-orange-300 to-transparent" />

              {/* Education Card */}

              <div className="relative grid md:grid-cols-2 gap-8 md:gap-16">
                <div className="md:text-right md:pr-12 pl-14 md:pl-0">
                  <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-500 text-sm font-semibold">
                    2023 — 2027
                  </span>

                  <h3 className="text-2xl md:text-3xl font-black mt-5">
                    B.Tech
                  </h3>

                  <h4 className="text-lg font-semibold text-gray-600 mt-1">
                    Computer Science & Engineering
                  </h4>

                  <p className="text-orange-500 font-medium mt-3">
                    Graphic Era Hill University
                  </p>

                  <p className="text-gray-500 leading-7 mt-5">
                    Building a strong foundation in computer science, software
                    development, algorithms and modern technologies.
                  </p>
                </div>

                <div className="relative md:pl-12 pl-14">
                  {/* Timeline Dot */}

                  <div className="absolute left-[15px] md:left-[-7px] top-3 w-4 h-4 rounded-full bg-orange-500 border-4 border-white shadow-lg shadow-orange-300" />

                  <div className="bg-white/70 backdrop-blur-xl border border-white/80 rounded-3xl p-7 shadow-xl shadow-blue-100/40">
                    <FaGraduationCap className="text-4xl text-orange-500 mb-5" />

                    <h3 className="font-bold text-xl">Core Foundation</h3>

                    <p className="text-gray-500 leading-7 mt-4">
                      Data Structures & Algorithms, DBMS, Operating Systems,
                      Computer Networks, Object-Oriented Programming and
                      Software Engineering.
                    </p>

                    <div className="flex flex-wrap gap-2 mt-5">
                      {["DSA", "DBMS", "OS", "Networks", "OOP"].map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 rounded-full bg-sky-100 text-sky-600 text-xs font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TECHNICAL JOURNEY
      ========================================================= */}

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            number="03"
            title="TECHNICAL JOURNEY"
            subtitle="From programming to intelligent systems."
          />

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {journey.map((item) => (
              <div
                key={item.number}
                className="group relative bg-white/65 backdrop-blur-xl border border-white/80 rounded-3xl p-7 shadow-lg shadow-blue-100/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-200/40 hover:border-orange-200 transition-all duration-300"
              >
                {/* Number */}

                <div className="absolute top-5 right-6 text-5xl font-black text-gray-100 group-hover:text-orange-100 transition">
                  {item.number}
                </div>

                {/* Icon */}

                <div className="relative w-14 h-14 rounded-2xl bg-orange-100 text-orange-500 flex items-center justify-center text-xl group-hover:bg-orange-500 group-hover:text-white transition">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold mt-6">{item.title}</h3>

                <p className="text-gray-500 text-sm leading-7 mt-3">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-sky-100 text-sky-600 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          ACHIEVEMENTS
      ========================================================= */}

      <section className="py-24 px-6 bg-white/30">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            number="04"
            title="ACHIEVEMENTS"
            subtitle="Milestones unlocked along the journey."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {achievements.map((item) => (
              <div
                key={item.title}
                className="group bg-white/70 backdrop-blur-xl border border-white/80 rounded-3xl p-7 shadow-lg shadow-blue-100/30 hover:-translate-y-2 hover:border-orange-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-500 flex items-center justify-center text-xl group-hover:bg-orange-500 group-hover:text-white transition">
                  {item.icon}
                </div>

                <p className="text-4xl font-black text-gray-800 mt-7">
                  {item.number}
                </p>

                <h3 className="font-bold text-lg mt-2">{item.title}</h3>

                <p className="text-gray-500 text-sm leading-6 mt-3">
                  {item.description}
                </p>

                <div className="mt-5 text-orange-500 text-xs font-bold tracking-widest">
                  ACHIEVEMENT UNLOCKED
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          EXPERIENCE
      ========================================================= */}

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            number="05"
            title="EXPERIENCE"
            subtitle="Real-world missions and challenges."
          />

          <div className="max-w-5xl mx-auto mt-14">
            <div className="relative bg-white/70 backdrop-blur-xl border border-white/80 rounded-[2rem] p-8 md:p-10 shadow-xl shadow-blue-100/40 overflow-hidden">
              {/* Decorative Circle */}

              <div className="absolute -right-20 -top-20 w-64 h-64 bg-orange-200/30 rounded-full blur-2xl" />

              <div className="relative">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-4 py-2 rounded-full bg-orange-100 text-orange-500 text-xs font-bold tracking-widest">
                        MISSION 01
                      </span>

                      <span className="px-3 py-1 rounded-full bg-green-100 text-green-600 text-xs font-semibold">
                        COMPLETED
                      </span>
                    </div>

                    <h3 className="text-3xl font-black mt-6">
                      Software Engineering Intern
                    </h3>

                    <p className="text-orange-500 font-semibold mt-2">
                      Digistay
                    </p>
                  </div>

                  <div className="w-16 h-16 rounded-2xl bg-orange-100 text-orange-500 flex items-center justify-center text-2xl">
                    <FaBriefcase />
                  </div>
                </div>

                <div className="border-t border-gray-200 mt-8 pt-7">
                  <p className="text-gray-500 leading-8">
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
                        className="px-4 py-2 rounded-full bg-sky-100 text-sky-600 text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CURRENT LEARNING
      ========================================================= */}

      <section className="py-24 px-6 bg-white/30">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            number="06"
            title="CURRENT LEARNING"
            subtitle="The next skills I'm working toward."
          />

          <div className="max-w-4xl mx-auto mt-14 bg-white/70 backdrop-blur-xl border border-white/80 rounded-3xl p-8 md:p-10 shadow-xl shadow-blue-100/40">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-500 flex items-center justify-center">
                <FaRocket />
              </div>

              <div>
                <h3 className="font-bold text-xl">Current Quest</h3>

                <p className="text-gray-500 text-sm">
                  Constantly learning. Constantly improving.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              {learning.map((item) => (
                <div key={item.name}>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold text-gray-700">
                      {item.name}
                    </span>

                    <span className="text-orange-500 font-semibold text-sm">
                      {item.progress}%
                    </span>
                  </div>

                  <div className="h-3 rounded-full bg-gray-100 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-orange-500 to-orange-400 transition-all duration-1000"
                      style={{
                        width: `${item.progress}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BEYOND THE CODE
      ========================================================= */}

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            number="07"
            title="BEYOND THE CODE"
            subtitle="The things that make me more than just a developer."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            <HobbyCard
              icon={<FaGamepad />}
              title="Gaming"
              text="Relaxing, competing and exploring virtual worlds."
            />

            <HobbyCard
              icon={<FaMusic />}
              title="Music"
              text="Music is part of my daily routine and a source of creativity."
            />

            <HobbyCard
              icon={<FaFilm />}
              title="Anime"
              text="Stories, characters and worlds that inspire creativity."
            />

            <HobbyCard
              icon={<FaBrain />}
              title="Learning"
              text="Always curious about new technologies, ideas and possibilities."
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          PHILOSOPHY
      ========================================================= */}

      <section className="relative py-28 px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-100/30 via-transparent to-cyan-100/40 pointer-events-none" />

        <div className="relative max-w-5xl mx-auto text-center">
          <span className="text-orange-500 tracking-[5px] text-sm font-semibold">
            08 — MY PHILOSOPHY
          </span>

          <h2 className="mt-8 text-4xl sm:text-5xl lg:text-7xl font-black leading-tight text-gray-800">
            LEARN.
            <span className="text-orange-500"> BUILD.</span>
            <br />
            BREAK.
            <span className="text-orange-500"> IMPROVE.</span>
          </h2>

          <p className="mt-8 text-gray-500 text-lg max-w-2xl mx-auto leading-8">
            I believe the best way to understand technology is to build with it,
            make mistakes, learn from them and keep moving forward.
          </p>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="px-6 pb-32">
        <div className="relative max-w-5xl mx-auto overflow-hidden rounded-[2rem] bg-white/70 backdrop-blur-xl border border-white/80 shadow-2xl shadow-blue-200/40 p-10 md:p-16 text-center">
          {/* Background Decoration */}

          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-orange-200/30 blur-3xl" />

          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-cyan-200/30 blur-3xl" />

          <div className="relative">
            <FaRocket className="mx-auto text-orange-500 text-4xl mb-6" />

            <p className="text-orange-500 tracking-[4px] text-sm font-semibold">
              END OF THIS CHAPTER
            </p>

            <h2 className="text-4xl sm:text-5xl font-black mt-5 text-gray-800">
              BUT THE JOURNEY
              <span className="text-orange-500"> CONTINUES...</span>
            </h2>

            <p className="text-gray-500 mt-5 max-w-xl mx-auto">
              Want to see what I've built or create something together?
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link
                to="/projects"
                className="px-7 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white transition font-semibold flex items-center gap-3 shadow-lg shadow-orange-200"
              >
                View Projects
                <FaArrowRight />
              </Link>

              <Link
                to="/contact"
                className="px-7 py-3 rounded-full bg-white border border-gray-200 hover:border-orange-300 hover:text-orange-500 transition font-semibold"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

/* =============================================================
   SECTION TITLE
============================================================= */

const SectionTitle = ({ number, title, subtitle }) => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <span className="text-orange-500 font-mono font-bold text-sm">
          {number}
        </span>

        <span className="h-[2px] w-10 bg-orange-500" />

        <span className="text-gray-400 text-sm tracking-[4px] font-semibold">
          {title}
        </span>
      </div>

      <h2 className="text-4xl sm:text-5xl font-black mt-5 text-gray-800">
        {title}
      </h2>

      <p className="text-gray-500 mt-3">{subtitle}</p>
    </div>
  );
};

/* =============================================================
   PROFILE ROW
============================================================= */

const ProfileRow = ({ label, value }) => {
  return (
    <div className="flex justify-between items-center border-b border-gray-200 pb-3">
      <span className="text-gray-400 text-sm">{label}</span>

      <span className="font-semibold text-gray-700 text-sm">{value}</span>
    </div>
  );
};

/* =============================================================
   INFO CARD
============================================================= */

const InfoCard = ({ icon, title, value }) => {
  return (
    <div className="group bg-white/65 backdrop-blur-xl border border-white/80 rounded-3xl p-6 shadow-lg shadow-blue-100/30 hover:-translate-y-2 hover:border-orange-200 transition-all duration-300">
      <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-500 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition">
        {icon}
      </div>

      <p className="text-gray-400 text-sm mt-5">{title}</p>

      <p className="text-xl font-black text-gray-800 mt-1">{value}</p>
    </div>
  );
};

/* =============================================================
   HOBBY CARD
============================================================= */

const HobbyCard = ({ icon, title, text }) => {
  return (
    <div className="group bg-white/65 backdrop-blur-xl border border-white/80 rounded-3xl p-7 shadow-lg shadow-blue-100/30 hover:-translate-y-2 hover:bg-orange-500 hover:border-orange-500 transition-all duration-300">
      <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-500 flex items-center justify-center text-2xl group-hover:bg-white group-hover:text-orange-500 transition">
        {icon}
      </div>

      <h3 className="text-xl font-bold mt-6 text-gray-800 group-hover:text-white transition">
        {title}
      </h3>

      <p className="text-gray-500 group-hover:text-white/90 mt-3 text-sm leading-7 transition">
        {text}
      </p>
    </div>
  );
};

export default About;
