const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-28 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-28 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
          About Me
        </span>
        <h1 className="mt-4 text-4xl font-black text-gray-800 sm:text-5xl">
          Who I Am
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          I'm Gaurav Singh, a Computer Science student passionate about building
          modern, intelligent, and meaningful digital experiences. I enjoy
          working across software development and AI/ML.
        </p>
      </div>
    </section>
  );
};

export default About;
