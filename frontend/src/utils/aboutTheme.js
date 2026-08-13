import { getSectionVisual } from "../data/aboutSectionVisuals";

export const textThemes = {
  light: {
    heading: "text-white",
    subheading: "text-white/90",
    body: "text-white/80",
    muted: "text-white/65",
    label: "text-white/55",
    accent: "text-orange-400",
    accentSolid: "text-orange-300",
    divider: "bg-white/30",
    card: "bg-white/10 backdrop-blur-md border border-white/20 shadow-lg shadow-black/10",
    cardHover: "hover:border-orange-400/40",
    tag: "bg-white/15 text-white/90 border border-white/20",
    tagAlt: "bg-orange-500/20 text-orange-200 border border-orange-400/30",
    iconBox: "bg-orange-500/20 text-orange-300",
    iconBoxHover: "group-hover:bg-orange-500 group-hover:text-white",
    progressTrack: "bg-white/15",
    border: "border-white/20",
    borderSubtle: "border-white/10",
    btnSecondary:
      "bg-white/10 hover:bg-white/20 border border-white/25 text-white",
    btnPrimary: "bg-orange-500 hover:bg-orange-600 text-white shadow-orange-900/30",
    ghostNumber: "text-white/15 group-hover:text-orange-400/30",
    profileBorder: "border-white/20",
  },
  dark: {
    heading: "text-gray-900",
    subheading: "text-gray-800",
    body: "text-gray-700",
    muted: "text-gray-600",
    label: "text-gray-500",
    accent: "text-orange-600",
    accentSolid: "text-orange-500",
    divider: "bg-orange-500",
    card: "bg-white/40 backdrop-blur-md border border-white/50 shadow-lg shadow-black/5",
    cardHover: "hover:border-orange-300",
    tag: "bg-white/60 text-gray-700 border border-white/70",
    tagAlt: "bg-sky-100 text-sky-700 border border-sky-200",
    iconBox: "bg-orange-100 text-orange-600",
    iconBoxHover: "group-hover:bg-orange-500 group-hover:text-white",
    progressTrack: "bg-gray-200/80",
    border: "border-gray-200",
    borderSubtle: "border-gray-200/80",
    btnSecondary:
      "bg-white/80 hover:bg-white border border-gray-200 text-gray-800 hover:text-orange-600",
    btnPrimary: "bg-orange-500 hover:bg-orange-600 text-white shadow-orange-200/50",
    ghostNumber: "text-gray-200 group-hover:text-orange-100",
    profileBorder: "border-gray-200",
  },
};

export const getTheme = (sectionId) => {
  const visual = getSectionVisual(sectionId);
  return textThemes[visual.textTheme] ?? textThemes.light;
};

export const sectionEnterClass = "about-section-enter";
