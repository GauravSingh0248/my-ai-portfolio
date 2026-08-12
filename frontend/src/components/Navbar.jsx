import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { getNavShellClass, isDarkRoute } from "../utils/shellTheme";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isDarkNav = isDarkRoute(pathname);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navLinkClass = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 ${
      isActive
        ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30"
        : isDarkNav
          ? "text-white/65 hover:bg-white/10 hover:text-white"
          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
    }`;

  const shellClass = getNavShellClass(isDarkNav, scrolled);

  const logoTextClass = isDarkNav ? "text-white" : "text-gray-900";
  const pillClass = isDarkNav
    ? "border-white/10 bg-white/5"
    : "border-gray-200/80 bg-gray-50/80";
  const mobileBtnClass = isDarkNav
    ? "border-white/10 bg-white/5 text-white hover:bg-white/10"
    : "border-gray-200 bg-gray-50 text-gray-800 hover:bg-gray-100";

  const goHomeTop = (e) => {
    e.preventDefault();
    if (pathname !== "/") {
      navigate("/");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${shellClass}`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
          <Link
            to="/"
            onClick={goHomeTop}
            className="group flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02]"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 text-sm font-black text-white shadow-lg shadow-orange-500/30">
              GS
            </span>
            <span
              className={`text-lg font-bold tracking-tight sm:text-xl ${logoTextClass}`}
            >
              Gaurav
              <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                Singh
              </span>
            </span>
          </Link>

          <ul
            className={`hidden items-center gap-1 rounded-full border p-1 md:flex ${pillClass}`}
          >
            {links.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  className={navLinkClass}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <a
              href="/resume.pdf"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-orange-500/40"
            >
              <span className="relative z-10">Resume</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            className={`flex h-10 w-10 items-center justify-center rounded-xl border text-lg transition md:hidden ${mobileBtnClass}`}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />

      <div
        className={`fixed top-[4.25rem] right-0 z-40 w-full max-w-sm border-l p-6 shadow-2xl backdrop-blur-2xl transition-all duration-300 md:hidden ${
          isDarkNav
            ? "border-white/10 bg-neutral-950/95"
            : "border-gray-200 bg-white/95"
        } ${open ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-full opacity-0"}`}
      >
        <ul className="space-y-1">
          {links.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `block rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-orange-500/20 text-orange-500"
                      : isDarkNav
                        ? "text-white/70 hover:bg-white/5 hover:text-white"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`
                }
                onClick={() => setOpen(false)}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <a
          href="/resume.pdf"
          className="mt-6 flex w-full items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/25"
        >
          Download Resume
        </a>
      </div>
    </>
  );
};

export default Navbar;
