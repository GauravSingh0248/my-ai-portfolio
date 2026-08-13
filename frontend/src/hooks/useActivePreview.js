import { useEffect, useRef, useState } from "react";

const THRESHOLDS = [0, 0.1, 0.25, 0.4, 0.55, 0.7, 0.85, 1];

/**
 * Tracks the most visible preview card in the viewport focus band.
 * Uses a single global observer so the background always matches the
 * card the user is actually looking at, regardless of section detection.
 */
const useActivePreview = () => {
  const [activeId, setActiveId] = useState(null);
  const ratiosRef = useRef(new Map());

  useEffect(() => {
    const items = document.querySelectorAll("[data-preview-id]");
    if (!items.length) return undefined;

    const pickActive = () => {
      let bestId = null;
      let bestRatio = 0;

      ratiosRef.current.forEach((ratio, id) => {
        if (ratio > bestRatio) {
          bestRatio = ratio;
          bestId = id;
        }
      });

      setActiveId((prev) => (prev === bestId ? prev : bestId));
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.dataset.previewId;
          if (!id) return;

          if (entry.isIntersecting) {
            ratiosRef.current.set(id, entry.intersectionRatio);
          } else {
            ratiosRef.current.delete(id);
          }
        });
        pickActive();
      },
      {
        threshold: THRESHOLDS,
        // Focus on the vertical center band where the user's eye rests while scrolling
        rootMargin: "-22% 0px -28% 0px",
      }
    );

    items.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
      ratiosRef.current.clear();
    };
  }, []);

  return activeId;
};

export default useActivePreview;
