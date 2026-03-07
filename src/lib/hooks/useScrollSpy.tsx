"use client";

import { useEffect, useState } from "react";

export function useScrollSpy(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY;
      const offset = window.innerHeight * 0.35;

      let currentSection: string | null = null;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;

        const top = el.offsetTop - offset;

        if (scrollY >= top) {
          currentSection = id;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handler, { passive: true });
    handler();

    return () => window.removeEventListener("scroll", handler);
  }, [sectionIds]);

  return activeSection;
}
