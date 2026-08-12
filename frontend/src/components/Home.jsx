import { Link } from "react-router-dom";
import { FaArrowRight, FaGithub, FaLinkedinIn } from "react-icons/fa";
import narutoImage from "../assets/HomePageImages/naruto-uzumaki-1.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#1e1e1e] text-white"
    >
      <div
        className="absolute top-19 left-0 right-0 bottom-0 bg-cover bg-[center_28%] bg-no-repeat"
        style={{
          backgroundImage: `url(${narutoImage})`,
        }}
      />

      {/* Dark overlay */}
      <div className="absolute -top-24 left-0 right-0 bottom-0 bg-black/45" />

      {/* Warm orange atmospheric overlay */}
      <div className="absolute -top-24 left-0 right-0 bottom-0 bg-gradient-to-r from-black/70 via-black/30 to-black/20" />

      {/* Content — pt clears fixed navbar; no items-center so text stays below nav */}
      <div className="relative z-10 mx-auto flex min-h-screen w-[92%] max-w-7xl flex-col justify-center pb-12 pt-32 md:pt-36">
        <div className="max-w-3xl">
          {/* Small intro */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-orange-500" />

            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
              Welcome to my world
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Hi, I'm
            <br />
            <span className="text-orange-500 drop-shadow-lg">Gaurav Singh</span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-base leading-7 text-white/75 sm:text-lg">
            Computer Science student passionate about building modern,
            intelligent and meaningful digital experiences.
          </p>

          {/* Roles */}
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/20 bg-black/20 px-5 py-2 text-sm font-medium backdrop-blur-md">
              Software Developer
            </span>

            <span className="rounded-full border border-orange-400/30 bg-orange-500/20 px-5 py-2 text-sm font-medium text-orange-300 backdrop-blur-md">
              AI / ML Enthusiast
            </span>
          </div>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="group flex items-center gap-3 rounded-full bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-orange-900/30 transition duration-300 hover:-translate-y-1 hover:bg-orange-600"
            >
              Explore My Work
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              to="/contact"
              className="rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-orange-400 hover:bg-orange-500/20"
            >
              Let's Talk
            </Link>
          </div>

          {/* Socials */}
          <div className="mt-10 flex items-center gap-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/20 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-orange-400 hover:bg-orange-500"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/20 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-orange-400 hover:bg-orange-500"
            >
              <FaLinkedinIn />
            </a>

            <span className="ml-2 h-px w-12 bg-white/30" />

            <span className="text-xs font-medium uppercase tracking-[0.25em] text-white/50">
              Scroll to explore
            </span>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/50 md:flex">
        <span className="h-8 w-px bg-white/30" />
        Scroll
      </div>
    </section>
  );
};

export default Home;
