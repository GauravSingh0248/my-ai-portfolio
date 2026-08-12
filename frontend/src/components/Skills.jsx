const skills = [
  "JavaScript",
  "React",
  "Python",
  "Tailwind CSS",
  "Node.js",
  "Machine Learning",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="scroll-mt-28 min-h-screen bg-white px-4 py-28 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
          Skills
        </span>
        <h1 className="mt-4 text-4xl font-black text-gray-800 sm:text-5xl">
          What I Work With
        </h1>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-orange-200 bg-orange-50 px-6 py-3 text-sm font-semibold text-orange-600"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
