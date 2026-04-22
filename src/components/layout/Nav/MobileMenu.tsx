"use client";
import React, { useState, useEffect } from "react";
import { NavSection } from "@/lib/sections";
import Link from "next/link";
import { X, Menu, Zap, ChevronRight, Dumbbell, Trophy } from "lucide-react";
import { useLenis } from "lenis/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/site/siteConfig";

interface MobileMenuProps {
  sections: NavSection[];
  activeSection: string | null;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ sections, activeSection }) => {
  const [open, setOpen] = useState(false);
  const lenis = useLenis();
  const { brand } = siteConfig;

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  const handleScroll = (id: string) => {
    setOpen(false);
    // Ejecución rápida para que la web se sienta "veloz" como un atleta
    lenis?.scrollTo(`#${id}`, { offset: -80, duration: 1.2 });
  };

  return (
    <>
      {/* --- NAVBAR TOP (GYM STYLE) --- */}
      <nav className="fixed top-0 left-0 w-full h-20 z-[100] flex items-center px-4 bg-zinc-950/95 backdrop-blur-md border-b border-zinc-900 lg:hidden">
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            href="/"
            className="flex items-center gap-2 active:scale-95 transition-transform"
            onClick={() => setOpen(false)}
          >
            <div className="bg-emerald-500 p-1.5 rounded-lg shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              <Dumbbell className="text-zinc-950 size-5" strokeWidth={2.5} />
            </div>
            <h2 className="text-lg font-black tracking-tighter text-white uppercase italic">
              {brand.name}
              <span className="text-emerald-500">{brand.suffix}</span>
            </h2>
          </Link>

          <button
            onClick={() => setOpen(true)}
            className="size-11 flex items-center justify-center rounded-xl bg-zinc-900 text-white border border-zinc-800 active:bg-zinc-800 transition-colors"
          >
            <Menu className="size-6" />
          </button>
        </div>
      </nav>

      {/* --- DRAWER --- */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[110] bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
              className="fixed top-0 right-0 h-dvh w-[85%] max-w-xs z-[120] bg-zinc-950 flex flex-col border-l border-zinc-900 shadow-2xl"
            >
              {/* Header */}
              <div className="p-6 flex items-center justify-between border-b border-zinc-900">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.3em] mb-1">
                    Keep Training
                  </span>
                  <h3 className="text-xl font-black text-white italic uppercase">
                    Menú.
                  </h3>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="size-10 flex items-center justify-center bg-zinc-900 text-zinc-400 rounded-xl active:bg-emerald-500 active:text-zinc-950 transition-all"
                >
                  <X className="size-5" strokeWidth={3} />
                </button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 px-4 py-6 overflow-y-auto no-scrollbar">
                <ul className="space-y-2">
                  {sections.map((sec) => {
                    const isActive = activeSection === sec.id;
                    return (
                      <li key={sec.id}>
                        <button
                          onClick={() => handleScroll(sec.id)}
                          className={cn(
                            "w-full flex items-center justify-between p-4 rounded-xl transition-all",
                            isActive
                              ? "bg-emerald-500 text-zinc-950 font-black shadow-lg shadow-emerald-500/20"
                              : "text-zinc-400 font-bold hover:bg-zinc-900 hover:text-white",
                          )}
                        >
                          <span className="text-xs uppercase tracking-widest">
                            {sec.label}
                          </span>
                          <ChevronRight
                            className={cn(
                              "size-4",
                              isActive ? "text-zinc-950" : "text-zinc-700",
                            )}
                            strokeWidth={3}
                          />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Footer CTA (Venta Directa) */}
              <div className="p-6 bg-zinc-900/50 border-t border-zinc-900 space-y-6">
                <div className="flex items-center gap-4 px-1">
                  <div className="size-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                    <Trophy size={20} className="text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest leading-none mb-1">
                      ¿Primera vez?
                    </p>
                    <p className="text-xs font-bold text-white">
                      Clase de prueba gratis.
                    </p>
                  </div>
                </div>

                <Button
                  className="w-full h-14 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black uppercase text-[11px] tracking-[0.2em] rounded-xl flex items-center justify-center gap-3 active:scale-95 transition-all shadow-lg shadow-emerald-500/10"
                  onClick={() => handleScroll("contacto")}
                >
                  <Zap className="size-4 fill-current" />
                  ¡Empezar Ya!
                </Button>

                <p className="text-center text-[9px] text-zinc-600 font-bold uppercase tracking-widest">
                  Gualeguaychú • Entre Ríos
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
