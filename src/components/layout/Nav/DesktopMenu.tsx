"use client";
import React from "react";
import { NavSection } from "@/lib/sections";
import { cn } from "@/lib/utils";
import { Waves, Disc, CameraIcon } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLenis } from "lenis/react";

interface DesktopMenuProps {
  sections: NavSection[];
  activeSection: string | null;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({
  sections,
  activeSection,
}) => {
  const lenis = useLenis();

  return (
    <nav className="fixed top-0 left-0 w-full z-100 h-24 hidden lg:flex items-center justify-center px-10 pointer-events-none">
      <div className="w-full max-w-350 flex items-center justify-between pointer-events-auto">
        {/* LOGO: Cinematic Branding */}
        <Link
          href="/"
          className="group flex items-center gap-3 text-white transition-all duration-500 hover:-translate-y-0.5"
        >
          <div className="relative p-2.5 bg-accent/10 border border-accent/20 rounded-none group-hover:bg-accent group-hover:text-white transition-all">
            <CameraIcon className="size-6" strokeWidth={2.5} />
            {/* Esquinas de cámara decorativas en el logo */}
            <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-accent opacity-50" />
            <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-accent opacity-50" />
          </div>
          <span className="text-2xl font-black italic tracking-tighter uppercase">
            RODRI
            <span className="text-accent group-hover:text-white transition-colors">
              GO
            </span>
          </span>
        </Link>

        {/* NAVIGATION: Control Deck */}
        <div className="flex items-center gap-1 bg-card/60 backdrop-blur-xl border border-white/5 px-2 py-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
          <ul className="flex items-center gap-1">
            {sections.map((s, i) => {
              const isActive = activeSection === s.id;
              return (
                <li key={s.id} className="relative">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      lenis?.scrollTo(`#${s.id}`, {
                        offset: -80,
                        duration: 1.8, // Scroll más cinematográfico
                      });
                    }}
                    className={cn(
                      "relative px-6 py-2.5 text-[11px] font-mono font-bold uppercase tracking-[0.2em] transition-all duration-300 z-10 flex items-center gap-2",
                      isActive
                        ? "text-white"
                        : "text-white/40 hover:text-white",
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="rec-dot"
                        className="size-2 bg-accent rounded-full animate-rec shadow-[0_0_8px_#ef4444]"
                      />
                    )}
                    {s.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-white/5 -z-10 border-b-2 border-accent"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* CALL TO ACTION: Film Button */}
        <div className="flex items-center gap-8">
          <div className="hidden lg:flex flex-col items-end leading-none">
            <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">
              Mastering Frame
            </span>
            <span className="text-[10px] font-mono text-accent uppercase font-bold animate-pulse">
              23.976 FPS
            </span>
          </div>

          <button
            onClick={() => lenis?.scrollTo("#contact")}
            className="group relative overflow-hidden px-8 py-3 bg-white text-black text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-500 hover:bg-accent hover:text-white"
          >
            <div className="relative z-10 flex items-center gap-2">
              <Disc className="size-3 group-hover:animate-spin-slow" />
              Start Recording
            </div>
          </button>
        </div>
      </div>

      {/* Lineas de Visor Periféricas (Decorativo) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-10 left-10 w-20 h-px bg-white/20" />
        <div className="absolute top-10 left-10 w-px h-20 bg-white/20" />
        <div className="absolute top-10 right-10 w-20 h-px bg-white/20" />
        <div className="absolute top-10 right-10 w-px h-20 bg-white/20" />
      </div>
    </nav>
  );
};

export default DesktopMenu;
