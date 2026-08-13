import { Link } from "react-router-dom";
import { FaArrowLeft, FaBrain } from "react-icons/fa";

const Learning = () => (
  <main className="relative min-h-screen overflow-hidden bg-[#050b18] text-white">
    <div className="relative z-10 mx-auto max-w-4xl px-6 pt-32 pb-24 text-center">
      <Link
        to="/about"
        className="mb-12 inline-flex items-center gap-3 text-white/60 transition hover:text-white"
      >
        <FaArrowLeft />
        Back to About
      </Link>
      <FaBrain className="mx-auto text-5xl text-orange-400" />
      <h1 className="mt-8 text-5xl font-black">Learning</h1>
      <p className="mx-auto mt-6 max-w-xl leading-8 text-white/65">
        Always curious about new technologies, ideas and possibilities.
      </p>
    </div>
  </main>
);

export default Learning;
