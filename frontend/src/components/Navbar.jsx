import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  getNavShellClass,
  isGamingRoute,
  isLearningRoute,
  isMovieRoute,
  isMusicRoute,
  resolveIsDark,
} from "../utils/shellTheme";
import { useTheme } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";

import resume from "../assets/Resume/resume.pdf";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { theme } = useTheme();

  const isAboutPage = pathname === "/about";
  const isMusicPage = isMusicRoute(pathname);
  const isGamingPage = isGamingRoute(pathname);
  const isMoviePage = isMovieRoute(pathname);
  const isLearningPage = isLearningRoute(pathname);
  const isDarkNav = resolveIsDark(pathname, theme);
  const isAboutLight = isAboutPage && !isDarkNav;

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  /* ---------------------------------------------------------
     Close mobile menu when route changes
  --------------------------------------------------------- */
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  /* ---------------------------------------------------------
     Detect scroll
  --------------------------------------------------------- */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* ---------------------------------------------------------
     Prevent body scroll when mobile menu is open
  --------------------------------------------------------- */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* ---------------------------------------------------------
     Desktop navigation links
  --------------------------------------------------------- */
  const navLinkClass = ({ isActive }) =>
    `
      rounded-full
      px-4
      py-2
      text-sm
      font-medium
      tracking-wide
      transition-all
      duration-300

      ${
        isActive
          ? isMusicPage
            ? "bg-[#1DB954] text-black shadow-lg shadow-[#1DB954]/30"
            : isGamingPage
              ? "bg-violet-500 text-white shadow-lg shadow-violet-500/30"
              : isMoviePage
                ? "bg-amber-500 text-black shadow-lg shadow-amber-500/30"
                : isLearningPage
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30"
                : "bg-orange-500 text-white shadow-lg shadow-orange-500/30"
          : isAboutLight
            ? "text-slate-700 hover:bg-white/30 hover:text-slate-900"
            : isMusicPage
              ? "text-[#b3b3b3] hover:bg-[#282828] hover:text-white"
              : isGamingPage
                ? "text-white/45 hover:bg-white/[0.06] hover:text-white"
                : isMoviePage
                  ? "text-white/45 hover:bg-white/[0.06] hover:text-white"
                  : isLearningPage
                    ? "text-white/45 hover:bg-white/[0.06] hover:text-white"
                  : isDarkNav
                  ? "text-white/65 hover:bg-white/10 hover:text-white"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
      }
    `;

  /* ---------------------------------------------------------
     NAVBAR SHELL
     
     About page gets its own transparent glass style.
     Other pages continue using your existing theme system.
  --------------------------------------------------------- */

  const normalShellClass = getNavShellClass(isDarkNav, scrolled, pathname);

  const aboutShellClass = scrolled
    ? `
      bg-white/40
      backdrop-blur-2xl
      border-b
      border-white/40
      shadow-lg
      shadow-black/10
    `
    : `
      bg-white/20
      backdrop-blur-xl
      border-b
      border-white/30
    `;

  const shellClass = isAboutLight ? aboutShellClass : normalShellClass;

  /* ---------------------------------------------------------
     Logo
  --------------------------------------------------------- */

  const logoTextClass = isAboutLight
    ? "text-slate-800"
    : isMusicPage
      ? "text-white"
      : isGamingPage
        ? "text-white"
        : isMoviePage
          ? "text-white"
          : isLearningPage
            ? "text-white"
          : isDarkNav
          ? "text-white"
          : "text-gray-900";

  /* ---------------------------------------------------------
     Desktop navigation pill
  --------------------------------------------------------- */

  const pillClass = isAboutLight
    ? `
      border-white/30
      bg-white/20
      backdrop-blur-md
    `
    : isMusicPage
      ? "border-[#282828] bg-[#181818]"
      : isGamingPage
        ? "border-white/8 bg-white/[0.03]"
        : isMoviePage
          ? "border-white/10 bg-white/[0.03]"
          : isLearningPage
            ? "border-white/8 bg-white/[0.03]"
          : isDarkNav
          ? "border-white/10 bg-white/5"
          : "border-gray-200/80 bg-gray-50/80";

  /* ---------------------------------------------------------
     Mobile button
  --------------------------------------------------------- */

  const mobileBtnClass = isAboutLight
    ? `
      border-white/30
      bg-white/25
      backdrop-blur-md
      text-slate-800
      hover:bg-white/40
    `
    : isMusicPage
      ? "border-[#282828] bg-[#181818] text-white hover:bg-[#282828]"
      : isGamingPage
        ? "border-white/8 bg-white/[0.04] text-white hover:bg-white/[0.08]"
        : isMoviePage
          ? "border-white/10 bg-white/[0.04] text-white hover:bg-white/[0.08]"
          : isLearningPage
            ? "border-white/8 bg-white/[0.04] text-white hover:bg-white/[0.08]"
          : isDarkNav
          ? "border-white/10 bg-white/5 text-white hover:bg-white/10"
          : "border-gray-200 bg-gray-50 text-gray-800 hover:bg-gray-100";

  /* ---------------------------------------------------------
     Go Home
  --------------------------------------------------------- */

  const goHomeTop = (e) => {
    e.preventDefault();

    if (pathname !== "/") {
      navigate("/");
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <nav
        className={`
          fixed
          top-0
          left-0
          right-0
          z-50
          w-full

          transition-all
          duration-500

          ${shellClass}
        `}
      >
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            items-center
            justify-between
            px-5
            py-3.5
            sm:px-8
          "
        >
          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            to="/"
            onClick={goHomeTop}
            className="
              group
              flex
              items-center
              gap-3
              transition-transform
              duration-300
              hover:scale-[1.02]
            "
          >
            <span
              className={`
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-xl
                text-sm
                font-black
                text-white
                shadow-lg
                ${
                  isMusicPage
                    ? "bg-[#1DB954] text-black shadow-[#1DB954]/30"
                    : isGamingPage
                      ? "bg-linear-to-br from-violet-500 to-cyan-400 shadow-violet-500/30"
                      : isMoviePage
                        ? "bg-linear-to-br from-amber-500 to-orange-500 shadow-amber-500/30"
                        : isLearningPage
                          ? "bg-linear-to-br from-orange-500 to-purple-500 shadow-orange-500/30"
                        : "bg-linear-to-br from-orange-500 to-amber-400 shadow-orange-500/30"
                }
              `}
            >
              GS
            </span>

            <span
              className={`
                text-lg
                font-bold
                tracking-tight
                sm:text-xl
                ${logoTextClass}
              `}
            >
              Gaurav
              <span
                className={
                  isMusicPage
                    ? "text-[#1DB954]"
                    : isGamingPage
                      ? "text-violet-400"
                      : isMoviePage
                        ? "text-amber-400"
                        : isLearningPage
                          ? "text-orange-400"
                        : "bg-linear-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent"
                }
              >
                Singh
              </span>
            </span>
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <ul
            className={`
              hidden
              items-center
              gap-1
              rounded-full
              border
              p-1
              md:flex

              ${pillClass}
            `}
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

          {/* =================================================
              THEME + RESUME
          ================================================= */}

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle
              className={
                isAboutLight
                  ? "theme-toggle--about"
                  : isMusicPage
                    ? "theme-toggle--music"
                    : isGamingPage
                      ? "theme-toggle--gaming"
                      : isMoviePage
                        ? "theme-toggle--movie"
                        : isLearningPage
                          ? "theme-toggle--learning"
                          : isDarkNav
                            ? "theme-toggle--dark"
                            : "theme-toggle--light"
              }
            />

            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className={
                isMusicPage
                  ? `
                group
                relative
                overflow-hidden
                rounded-full
                bg-[#1DB954]
                px-5
                py-2.5
                text-sm
                font-bold
                text-black
                shadow-lg
                shadow-[#1DB954]/25
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#1ed760]
                hover:shadow-[#1DB954]/40
              `
                  : isGamingPage
                    ? `
                group
                relative
                overflow-hidden
                rounded-full
                bg-linear-to-r
                from-violet-500
                to-cyan-400
                px-5
                py-2.5
                text-sm
                font-semibold
                text-white
                shadow-lg
                shadow-violet-500/25
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-violet-500/40
              `
                    : isMoviePage
                      ? `
                group
                relative
                overflow-hidden
                rounded-full
                bg-linear-to-r
                from-amber-500
                to-orange-500
                px-5
                py-2.5
                text-sm
                font-semibold
                text-black
                shadow-lg
                shadow-amber-500/25
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-amber-500/40
              `
                      : isLearningPage
                        ? `
                group
                relative
                overflow-hidden
                rounded-full
                bg-linear-to-r
                from-orange-500
                to-purple-500
                px-5
                py-2.5
                text-sm
                font-semibold
                text-white
                shadow-lg
                shadow-orange-500/25
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-orange-500/40
              `
                      : `
                group
                relative
                overflow-hidden
                rounded-full
                bg-linear-to-r
                from-orange-500
                to-amber-500
                px-5
                py-2.5
                text-sm
                font-semibold
                text-white
                shadow-lg
                shadow-orange-500/25
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-orange-500/40
              `
              }
            >
              <span className="relative z-10">Resume</span>

              <span
                className="
                  absolute
                  inset-0
                  -translate-x-full
                  bg-linear-to-r
                  from-transparent
                  via-white/25
                  to-transparent
                  transition-transform
                  duration-500
                  group-hover:translate-x-full
                "
              />
            </a>
          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            className={`
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              text-lg
              transition
              md:hidden

              ${mobileBtnClass}
            `}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* =====================================================
          MOBILE OVERLAY
      ===================================================== */}

      <div
        className={`
          fixed
          inset-0
          z-40
          bg-black/60
          backdrop-blur-sm
          transition-opacity
          duration-300
          md:hidden

          ${open ? "opacity-100" : "pointer-events-none opacity-0"}
        `}
        onClick={() => setOpen(false)}
      />

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <div
        className={`
          fixed
          top-17
          right-0
          z-40
          w-full
          max-w-sm
          border-l
          p-6
          shadow-2xl
          backdrop-blur-2xl
          transition-all
          duration-300
          md:hidden

          ${
            isAboutLight
              ? `
                border-white/30
                bg-white/70
              `
              : isMusicPage
                ? `
                  border-[#282828]
                  bg-[#181818]/98
                `
                : isGamingPage
                  ? `
                  border-white/8
                  bg-[#050508]/98
                `
                : isMoviePage
                  ? `
                  border-white/10
                  bg-[#030308]/98
                `
                : isLearningPage
                  ? `
                  border-white/8
                  bg-[#050508]/98
                `
              : isDarkNav
                ? `
                  border-white/10
                  bg-neutral-950/95
                `
                : `
                  border-gray-200
                  bg-white/95
                `
          }

          ${
            open
              ? "translate-x-0 opacity-100"
              : "pointer-events-none translate-x-full opacity-0"
          }
        `}
      >
        <ul className="space-y-1">
          {links.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `
                    block
                    rounded-xl
                    px-4
                    py-3
                    text-sm
                    font-medium
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? isMusicPage
                          ? "bg-[#1DB954]/20 text-[#1DB954]"
                          : isGamingPage
                            ? "bg-violet-500/20 text-violet-300"
                            : isMoviePage
                              ? "bg-amber-500/20 text-amber-300"
                              : isLearningPage
                                ? "bg-orange-500/20 text-orange-300"
                              : "bg-orange-500/20 text-orange-500"
                        : isAboutLight
                          ? "text-slate-700 hover:bg-white/30 hover:text-slate-900"
                          : isMusicPage
                            ? "text-[#b3b3b3] hover:bg-[#282828] hover:text-white"
                            : isGamingPage
                              ? "text-white/45 hover:bg-white/6 hover:text-white"
                              : isMoviePage
                                ? "text-white/45 hover:bg-white/6 hover:text-white"
                                : isLearningPage
                                  ? "text-white/45 hover:bg-white/6 hover:text-white"
                                : isDarkNav
                                ? "text-white/70 hover:bg-white/5 hover:text-white"
                                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }
                  `
                }
                onClick={() => setOpen(false)}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center justify-between gap-4">
          <span
            className={`text-sm font-medium ${
              isAboutLight
                ? "text-slate-600"
                : isDarkNav
                  ? "text-white/60"
                  : "text-gray-500"
            }`}
          >
            Theme
          </span>
          <ThemeToggle
            className={
              isAboutLight
                ? "theme-toggle--about"
                : isMusicPage
                  ? "theme-toggle--music"
                  : isGamingPage
                    ? "theme-toggle--gaming"
                    : isMoviePage
                      ? "theme-toggle--movie"
                      : isLearningPage
                        ? "theme-toggle--learning"
                        : isDarkNav
                          ? "theme-toggle--dark"
                          : "theme-toggle--light"
            }
          />
        </div>

        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className={
            isMusicPage
              ? `
            mt-6
            inline-block
            rounded-full
            bg-[#1DB954]
            px-5
            py-2.5
            text-sm
            font-bold
            text-black
            shadow-lg
            shadow-[#1DB954]/25
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-[#1ed760]
          `
              : isGamingPage
                ? `
            mt-6
            inline-block
            rounded-full
            bg-linear-to-r
            from-violet-500
            to-cyan-400
            px-5
            py-2.5
            text-sm
            font-semibold
            text-white
            shadow-lg
            shadow-violet-500/25
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:shadow-violet-500/40
          `
                : isMoviePage
                  ? `
            mt-6
            inline-block
            rounded-full
            bg-linear-to-r
            from-amber-500
            to-orange-500
            px-5
            py-2.5
            text-sm
            font-semibold
            text-black
            shadow-lg
            shadow-amber-500/25
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:shadow-amber-500/40
          `
                  : isLearningPage
                    ? `
            mt-6
            inline-block
            rounded-full
            bg-linear-to-r
            from-orange-500
            to-purple-500
            px-5
            py-2.5
            text-sm
            font-semibold
            text-white
            shadow-lg
            shadow-orange-500/25
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:shadow-orange-500/40
          `
                  : `
            mt-6
            inline-block
            rounded-full
            bg-linear-to-r
            from-orange-500
            to-amber-500
            px-5
            py-2.5
            text-sm
            font-semibold
            text-white
            shadow-lg
            shadow-orange-500/25
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:shadow-orange-500/40
          `
          }
        >
          Download Resume
        </a>
      </div>
    </>
  );
};

export default Navbar;
