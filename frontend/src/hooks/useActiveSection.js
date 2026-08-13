import { useEffect, useRef, useState } from "react";

const THRESHOLDS = [0, 0.25, 0.4, 0.5, 0.6, 0.75, 1];

/**
 * Tracks the most visible About section using IntersectionObserver.
 * Picks the section with the highest intersection ratio to avoid rapid switching.
 */
const useActiveSection = (defaultSection = "hero") => {
  const [activeSection, setActiveSection] = useState(defaultSection);
  const ratiosRef = useRef(new Map());

  useEffect(() => {
    const sections = document.querySelectorAll("[data-section]");
    if (!sections.length) return undefined;

    const pickActive = () => {
      let bestSection = defaultSection;
      let bestRatio = 0;

      ratiosRef.current.forEach((ratio, section) => {
        if (ratio > bestRatio) {
          bestRatio = ratio;
          bestSection = section;
        }
      });

      if (bestRatio >= 0.35) {
        setActiveSection((prev) =>
          prev === bestSection ? prev : bestSection
        );
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const section = entry.target.dataset.section;
          if (!section) return;

          if (entry.isIntersecting) {
            ratiosRef.current.set(section, entry.intersectionRatio);
          } else {
            ratiosRef.current.delete(section);
          }
        });
        pickActive();
      },
      { threshold: THRESHOLDS, rootMargin: "-10% 0px -10% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [defaultSection]);

  return activeSection;
};

export default useActiveSection;
