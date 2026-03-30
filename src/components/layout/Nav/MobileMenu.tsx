"use client";
import React, { useState, useEffect } from "react";
import { NavSection } from "@/lib/sections";
import Link from "next/link";
import { Waves, X, Disc, Camera, CameraIcon } from "lucide-react";
import { useLenis } from "lenis/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { HiBars3BottomRight } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  sections: NavSection[];
  activeSection: string | null;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ sections, activeSection }) => {
  const [open, setOpen] = useState(false);
  const lenis = useLenis();

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [open]);

  const handleScroll = (id: string) => {
    setOpen(false);
    setTimeout(() => {
      lenis?.scrollTo(`#${id}`, { offset: -20, duration: 1.5 });
    }, 300); // Esperar a que cierre la animación
  };

  return (
    <>
      {/* HEADER FIJO */}
      <nav className="fixed top-0 left-0 w-full h-20 z-100 flex px-6 py-2 backdrop-blur-lg border-b border-white/5 lg:hidden">
        <div className="p-2 w-full flex justify-between items-center bg-card/60 border border-white/5">
          <Link href="/" className="flex items-center gap-2 text-white">
            <div className="p-1.5 bg-accent/20 rounded">
              <CameraIcon className="size-5 text-accent" strokeWidth={2.5} />
            </div>
            <span className="text-lg font-black tracking-tighter uppercase">
              RODRI<span className="text-accent">GO</span>
            </span>
          </Link>

          <Button
            variant="ghost"
            onClick={() => setOpen(true)}
            className="text-white p-0 hover:bg-transparent"
          >
            <HiBars3BottomRight className="size-8 text-accent" />
          </Button>
        </div>
      </nav>

      {/* FULLSCREEN MENU OVERLAY */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-110 bg-background flex flex-col p-8"
          >
            {/* UI de Cámara decorativa en las esquinas */}
            <div className="absolute inset-4 border border-white/5 pointer-events-none">
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-accent" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-accent" />
            </div>

            <div className="flex justify-between items-center z-10">
              <div className="flex items-center gap-2 text-accent/50 font-mono text-[10px] tracking-[0.3em]">
                <Disc className="size-3 animate-spin-slow" />
                <span>MENU_SYSTEM_V.01</span>
              </div>
              <Button
                variant="ghost"
                onClick={() => setOpen(false)}
                className="text-white hover:bg-accent/10 rounded-full"
              >
                <X className="size-8" />
              </Button>
            </div>

            <ul className="flex flex-col justify-center flex-1 gap-6 relative z-10">
              {sections.map((sec, i) => {
                const isActive = activeSection === sec.id;
                return (
                  <motion.li
                    key={sec.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                  >
                    <button
                      onClick={() => handleScroll(sec.id)}
                      className={cn(
                        "text-4xl font-black uppercase italic tracking-tighter transition-all text-left flex items-baseline gap-4",
                        isActive
                          ? "text-accent scale-105"
                          : "text-white/40 hover:text-white",
                      )}
                    >
                      <span className="text-xs font-mono not-italic opacity-30">
                        0{i + 1}
                      </span>
                      {sec.label}
                      {isActive && (
                        <motion.div
                          layoutId="active-dot"
                          className="size-3 rounded-full bg-accent animate-pulse"
                        />
                      )}
                    </button>
                  </motion.li>
                );
              })}
            </ul>

            {/* Footer del Menú */}
            <div className="mt-auto pt-8 border-t border-white/5 flex flex-col gap-4 z-10">
              <div className="flex justify-between text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">
                <span>Status: Ready</span>
                <span>Battery: 88%</span>
              </div>
              <Button
                className="w-full h-14 bg-white text-black font-black uppercase tracking-widest rounded-none"
                onClick={() => handleScroll("contact")}
              >
                Start a Project
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
