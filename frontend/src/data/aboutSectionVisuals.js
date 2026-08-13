import aboutPageBg from "../assets/AboutPage/aboutPage.png";
import educationBg from "../assets/AboutPage/bg_frames/ezgif-frame-001.jpg";
import technicalBg from "../assets/AboutPage/bg_frames/ezgif-frame-120.jpg";
import achievementsBg from "../assets/AboutPage/bg_frames/ezgif-frame-150.jpg";
import experienceBg from "../assets/AboutPage/bg_frames/ezgif-frame-050.jpg";
import beyondBg from "../assets/AboutPage/bg_frames/ezgif-frame-170.jpg";
import philosophyBg from "../assets/AboutPage/bg_frames/ezgif-frame-197.jpg";

/**
 * Visual configuration per About page section.
 * Falls back to aboutPage.png when no dedicated scene is assigned.
 */
export const sectionVisuals = {
  hero: {
    image: aboutPageBg,
    position: "center left",
    mobilePosition: "25% center",
    textTheme: "dark",
    textPosition: "right",
    overlay:
      "linear-gradient(270deg, rgba(255,255,255,0.42) 0%, rgba(255,255,255,0.12) 38%, transparent 72%)",
  },
  introduction: {
    image: aboutPageBg,
    position: "center left",
    mobilePosition: "30% center",
    textTheme: "dark",
    textPosition: "right",
    overlay:
      "linear-gradient(270deg, rgba(255,255,255,0.38) 0%, rgba(255,255,255,0.1) 45%, transparent 100%)",
  },
  education: {
    image: educationBg,
    position: "center",
    mobilePosition: "center",
    textTheme: "light",
    textPosition: "right",
    overlay:
      "linear-gradient(270deg, rgba(0,0,0,0.52) 0%, rgba(0,0,0,0.18) 45%, transparent 100%)",
  },
  technicalJourney: {
    image: technicalBg,
    position: "center left",
    mobilePosition: "center",
    textTheme: "light",
    textPosition: "right",
    overlay:
      "linear-gradient(270deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)",
  },
  achievements: {
    image: achievementsBg,
    position: "center left",
    mobilePosition: "center",
    textTheme: "light",
    textPosition: "center",
    overlay:
      "radial-gradient(ellipse at center, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.12) 55%, transparent 100%)",
  },
  experience: {
    image: experienceBg,
    position: "center",
    mobilePosition: "center",
    textTheme: "light",
    textPosition: "left",
    overlay:
      "linear-gradient(90deg, rgba(0,0,0,0.48) 0%, rgba(0,0,0,0.12) 55%, transparent 100%)",
  },
  currentLearning: {
    image: aboutPageBg,
    position: "center left",
    mobilePosition: "30% center",
    textTheme: "dark",
    textPosition: "right",
    overlay:
      "linear-gradient(270deg, rgba(255,255,255,0.38) 0%, rgba(255,255,255,0.1) 45%, transparent 100%)",
  },
  beyondCode: {
    image: beyondBg,
    position: "center",
    mobilePosition: "center",
    textTheme: "light",
    textPosition: "left",
    overlay:
      "linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)",
  },
  philosophy: {
    image: philosophyBg,
    position: "center",
    mobilePosition: "center",
    textTheme: "dark",
    textPosition: "center",
    overlay:
      "radial-gradient(ellipse at center, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
  },
  finalCta: {
    image: aboutPageBg,
    position: "center",
    mobilePosition: "40% center",
    textTheme: "dark",
    textPosition: "center",
    overlay:
      "radial-gradient(ellipse at center, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.08) 55%, transparent 100%)",
  },
};

export const DEFAULT_SECTION = "hero";

export const getSectionVisual = (sectionId) =>
  sectionVisuals[sectionId] ?? sectionVisuals[DEFAULT_SECTION];
