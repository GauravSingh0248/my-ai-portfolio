import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import {
  getFooterShellClass,
  isDarkRoute,
} from "../utils/shellTheme";

const Footer = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const isDarkFooter = isDarkRoute(pathname);

  const socials = [
    {
      icon: FaGithub,
      href: "https://github.com/gauravsingh0248",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/gauravsingh0248",
      label: "LinkedIn",
    },
    {
      icon: FaEnvelope,
      href: "mailto:officialgaurav0408@gmail.com",
      label: "Email",
    },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const shellClass = getFooterShellClass(isDarkFooter, scrolled);
  const headingClass = isDarkFooter ? "text-white" : "text-gray-900";
  const mutedTextClass = isDarkFooter ? "text-white/55" : "text-gray-500";
  const iconBtnClass = isDarkFooter
    ? "border-white/10 bg-white/5 text-white/80 hover:border-orange-500/40 hover:bg-orange-500/20 hover:text-orange-300"
    : "border-gray-200 bg-white text-gray-600 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-500";

  const goHomeTop = (e) => {
    e.preventDefault();
    if (pathname !== "/") {
      navigate("/");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={`w-full transition-all duration-500 ${shellClass}`}>
      <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8">
        <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <div className="flex items-center justify-center gap-3 sm:flex-1 sm:justify-start">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                aria-label={label}
                className={`flex h-10 w-10 items-center justify-center rounded-xl border text-base transition-all duration-300 hover:-translate-y-0.5 ${iconBtnClass}`}
              >
                <Icon />
              </a>
            ))}
          </div>

          <div className="text-center sm:flex-1">
            <Link
              to="/"
              onClick={goHomeTop}
              className="group inline-flex items-center gap-2.5 transition-transform duration-300 hover:scale-[1.02]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-amber-400 text-xs font-black text-white shadow-lg shadow-orange-500/30">
                GS
              </span>
              <span className={`text-lg font-bold tracking-tight ${headingClass}`}>
                Gaurav
                <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                  Singh
                </span>
              </span>
            </Link>

            <p className={`mt-1 text-xs ${mutedTextClass}`}>
              Software Developer · AI Enthusiast
            </p>
          </div>

          <div className="flex sm:flex-1 sm:justify-end">
            <button
              onClick={scrollToTop}
              className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-orange-500/40"
            >
              <span className="relative z-10 flex items-center gap-2">
                Back to Top
                <FaArrowUp className="transition-transform duration-300 group-hover:-translate-y-0.5" />
              </span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
            </button>
          </div>
        </div>

        <p className={`mt-5 text-center text-xs tracking-wide ${mutedTextClass}`}>
          © {new Date().getFullYear()} Gaurav Singh · All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
