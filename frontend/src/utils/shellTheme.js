export const isDarkRoute = (pathname) =>
  pathname === "/" || pathname === "/projects";

export const getNavShellClass = (isDark, scrolled) => {
  if (isDark) {
    return scrolled
      ? "border-b border-white/10 bg-neutral-950/85 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
      : "border-b border-white/5 bg-neutral-950/50 backdrop-blur-xl";
  }

  return scrolled
    ? "border-b border-gray-200/80 bg-white/85 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-2xl"
    : "border-b border-gray-200/60 bg-white/75 backdrop-blur-xl";
};

export const getFooterShellClass = (isDark, scrolled) => {
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
  if (pathname === "/about") return "bg-gray-100";
  if (pathname === "/contact") return "bg-cyan-50";
  return "bg-white";
};
