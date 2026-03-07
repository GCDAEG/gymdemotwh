"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
//icons
import { Gavel } from "lucide-react";
import DesktopMenu from "./Nav/DesktopMenu";
import MobileMenu from "./Nav/MobileMenu";
import { motion } from "framer-motion";
import { useWindowScroll } from "react-use";
import { Banner } from "./Nav/banner";
import { useActiveSection } from "@/lib/hooks/useActiveSection";
import { useScrollSpy } from "@/lib/hooks/useScrollSpy";

const sections = [
  { id: "hero", label: "Inicio" },
  { id: "stats", label: "Stats" },
  {
    id: "practice",
    label: "Áreas de Práctica",
  },
  {
    id: "about",
    label: "Resultados",
  },
  { id: "faq", label: "Preguntas" },
];

export function NavbarBase() {
  const ref = useRef<HTMLElement>(null);
  const { y } = useWindowScroll();
  const isScrolled = y >= 70;
  /* ---------------------------------------------
     Scroll to section
  --------------------------------------------- */
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth" });
  };
  /* ---------------------------------------------
     Sección activa (limpio)
  --------------------------------------------- */
  const activeSection = useScrollSpy(sections.map((s) => s.id));
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       const visible = entries.find((e) => e.isIntersecting);
  //       if (visible) setActiveSection(visible.target.id);
  //     },
  //     {
  //       threshold: 0.6,
  //     },
  //   );

  //   sections.forEach((s) => {
  //     const el = document.getElementById(s.id);
  //     if (el) observer.observe(el);
  //   });

  //   return () => observer.disconnect();
  // }, []);

  return (
    <motion.nav
      layout
      ref={ref}
      className={cn(
        "sticky top-0 z-50 w-full transition-all bg-card h-24 ",
        isScrolled ? "shadow-sm" : "",
      )}
    >
      <Banner isScrolled={isScrolled} />
      <DesktopMenu
        sections={sections}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isScrolled={isScrolled}
      />
      <MobileMenu
        sections={sections}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isScrolled={isScrolled}
      />
    </motion.nav>
  );
}
