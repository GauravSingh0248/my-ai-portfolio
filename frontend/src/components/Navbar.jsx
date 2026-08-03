import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <>
      <nav className="fixed top-2 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-7xl">
        <div className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-2xl shadow-xl">
          <div className="flex items-center justify-between px-8 py-4">
            {/* Logo */}

            <a
              href="#home"
              className="text-2xl font-black tracking-wider text-gray-800 transition duration-300 hover:scale-105"
            >
              Gaurav<span className="text-orange-500">Singh</span>
            </a>

            {/* Desktop */}

            <ul className="hidden md:flex items-center gap-10">
              {links.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="relative text-gray-700 font-medium transition hover:text-orange-500 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all hover:after:w-full"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* Resume */}

            <div className="hidden md:block">
              <a
                href="/resume.pdf"
                className="rounded-full bg-orange-500 text-white px-6 py-3 hover:bg-orange-600 transition"
              >
                Resume
              </a>
            </div>

            {/* Mobile */}

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-2xl"
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Menu */}

          {open && (
            <div className="md:hidden px-8 pb-6">
              {links.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-3 text-gray-700 hover:text-orange-500"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </a>
              ))}

              <a
                href="/resume.pdf"
                className="mt-3 inline-block bg-orange-500 text-white rounded-full px-6 py-3"
              >
                Resume
              </a>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
