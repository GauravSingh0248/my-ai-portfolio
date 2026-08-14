import { HiMoon, HiSun } from "react-icons/hi";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = ({ className = "" }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggleTheme}
      className={`theme-toggle group relative flex h-9 w-[4.25rem] shrink-0 items-center rounded-full border p-1 transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${className}`}
    >
      <span
        aria-hidden="true"
        className={`theme-toggle-thumb absolute top-1 left-1 flex h-7 w-7 items-center justify-center rounded-full shadow-md transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          isDark ? "translate-x-[calc(100%+0.25rem)]" : "translate-x-0"
        }`}
      >
        {isDark ? (
          <HiMoon className="h-4 w-4 text-indigo-200" />
        ) : (
          <HiSun className="h-4 w-4 text-amber-500" />
        )}
      </span>

      <span className="pointer-events-none flex w-full items-center justify-between px-1.5">
        <HiSun
          className={`h-3.5 w-3.5 transition-all duration-300 ${
            isDark ? "scale-75 opacity-30" : "scale-100 opacity-80 text-amber-500"
          }`}
          aria-hidden="true"
        />
        <HiMoon
          className={`h-3.5 w-3.5 transition-all duration-300 ${
            isDark ? "scale-100 opacity-80 text-indigo-200" : "scale-75 opacity-30"
          }`}
          aria-hidden="true"
        />
      </span>
    </button>
  );
};

export default ThemeToggle;
