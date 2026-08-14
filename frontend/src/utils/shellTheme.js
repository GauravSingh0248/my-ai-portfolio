export const isMusicRoute = (pathname) =>
  pathname.startsWith("/extra-about/music");

export const isGamingRoute = (pathname) =>
  pathname.startsWith("/extra-about/gaming");

export const isMovieRoute = (pathname) =>
  pathname.startsWith("/extra-about/movie-anime");

export const isLearningRoute = (pathname) =>
  pathname.startsWith("/extra-about/learning");

export const isDarkRoute = (pathname) =>
  pathname === "/" ||
  pathname === "/projects" ||
  pathname === "/skills" ||
  isMusicRoute(pathname) ||
  isGamingRoute(pathname) ||
  isMovieRoute(pathname) ||
  isLearningRoute(pathname);

export const getNavShellClass = (isDark, scrolled, pathname = "") => {
  if (isMusicRoute(pathname)) {
    return scrolled
      ? "border-b border-[#282828] bg-[#121212]/98 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl"
      : "border-b border-[#282828]/80 bg-[#121212]/90 backdrop-blur-xl";
  }

  if (isGamingRoute(pathname)) {
    return scrolled
      ? "border-b border-white/10 bg-[#050508]/98 shadow-[0_8px_32px_rgba(0,0,0,0.55)] backdrop-blur-xl"
      : "border-b border-white/8 bg-[#050508]/88 backdrop-blur-xl";
  }

  if (isMovieRoute(pathname)) {
    return scrolled
      ? "border-b border-amber-500/15 bg-[#030308]/98 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-xl"
      : "border-b border-white/8 bg-[#030308]/90 backdrop-blur-xl";
  }

  if (isLearningRoute(pathname)) {
    return scrolled
      ? "border-b border-orange-500/15 bg-[#050508]/98 shadow-[0_8px_32px_rgba(0,0,0,0.55)] backdrop-blur-xl"
      : "border-b border-white/8 bg-[#050508]/88 backdrop-blur-xl";
  }

  if (pathname === "/skills") {
    return scrolled
      ? "border-b border-orange-500/15 bg-[#070b14]/98 shadow-[0_8px_32px_rgba(0,0,0,0.55)] backdrop-blur-xl"
      : "border-b border-white/8 bg-[#070b14]/88 backdrop-blur-xl";
  }

  if (isDark) {
    return scrolled
      ? "border-b border-white/10 bg-neutral-950/85 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
      : "border-b border-white/5 bg-neutral-950/50 backdrop-blur-xl";
  }

  return scrolled
    ? "border-b border-gray-200/80 bg-white/85 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-2xl"
    : "border-b border-gray-200/60 bg-white/75 backdrop-blur-xl";
};

export const getFooterShellClass = (isDark, scrolled, pathname = "") => {
  if (isMusicRoute(pathname)) {
    return scrolled
      ? "border-t border-[#282828] bg-[#181818]/98 shadow-[0_-8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl"
      : "border-t border-[#282828]/80 bg-[#181818]/95 backdrop-blur-xl";
  }

  if (isGamingRoute(pathname)) {
    return scrolled
      ? "border-t border-white/10 bg-[#050508]/98 shadow-[0_-8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl"
      : "border-t border-white/8 bg-[#050508]/95 backdrop-blur-xl";
  }

  if (isMovieRoute(pathname)) {
    return scrolled
      ? "border-t border-amber-500/15 bg-[#030308]/98 shadow-[0_-8px_32px_rgba(0,0,0,0.55)] backdrop-blur-xl"
      : "border-t border-white/8 bg-[#030308]/95 backdrop-blur-xl";
  }

  if (isLearningRoute(pathname)) {
    return scrolled
      ? "border-t border-orange-500/15 bg-[#050508]/98 shadow-[0_-8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl"
      : "border-t border-white/8 bg-[#050508]/95 backdrop-blur-xl";
  }

  if (pathname === "/skills") {
    return scrolled
      ? "border-t border-orange-500/15 bg-[#070b14]/98 shadow-[0_-8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl"
      : "border-t border-white/8 bg-[#070b14]/95 backdrop-blur-xl";
  }

  if (isDark) {
    return scrolled
      ? "border-t border-white/10 bg-neutral-950/85 shadow-[0_-12px_40px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
      : "border-t border-white/5 bg-neutral-950/50 backdrop-blur-xl";
  }

  return scrolled
    ? "border-t border-gray-200/80 bg-white/85 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] backdrop-blur-2xl"
    : "border-t border-gray-200/60 bg-white/75 backdrop-blur-xl";
};

export const getLayoutBgClass = (pathname) => {
  if (pathname === "/") return "bg-[#1e1e1e]";
  if (pathname === "/projects") return "bg-gray-900";
  if (pathname === "/skills") return "bg-[#070b14]";
  if (isMusicRoute(pathname)) return "bg-[#121212]";
  if (isGamingRoute(pathname)) return "bg-[#050508]";
  if (isMovieRoute(pathname)) return "bg-[#030308]";
  if (isLearningRoute(pathname)) return "bg-[#050508]";
  if (pathname === "/about") return "bg-gray-100";
  if (pathname === "/contact") return "bg-cyan-50";
  return "bg-white";
};
