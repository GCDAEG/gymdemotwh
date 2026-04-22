"use client";
import React from "react";
import { NavSection } from "@/lib/sections";
import { Dumbbell, Locate, Zap } from "lucide-react";
import Link from "next/link";
import { useLenis } from "lenis/react";
// import { CartDrawer } from "@/components/ui/CartDrawer";
import { siteConfig } from "@/lib/site/siteConfig";
import { motion } from "framer-motion";

const DesktopMenu = ({
  sections,
  activeSection,
}: {
  sections: NavSection[];
  activeSection: string | null;
}) => {
  const lenis = useLenis();
  const { brand } = siteConfig;

  return (
    <nav className="fixed top-0 left-0 w-full h-20 hidden lg:flex items-center bg-zinc-950 backdrop-blur-xl border-b border-zinc-900 z-[100] px-4 lg:px-8">
      <div className="max-w-6xl w-full mx-auto  flex justify-between items-center">
        {/* LOGO - Estilo Gym Premium */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="size-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.2)] group-hover:scale-110 transition-all duration-300">
            <Dumbbell className="size-6 text-zinc-950" strokeWidth={2.5} />
          </div>
          <span className="text-xl font-black tracking-tighter text-white uppercase italic">
            {brand.name}
            <span className="text-emerald-500">{brand.suffix}</span>
          </span>
        </Link>

        {/* NAVEGACIÓN - Minimalista y Deportiva */}
        <ul className="flex items-center gap-5">
          {sections.map((s) => (
            <li key={s.id} className="relative h-full py-2">
              <button
                onClick={() => lenis?.scrollTo(`#${s.id}`, { offset: -80 })}
                className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                  activeSection === s.id
                    ? "text-emerald-500"
                    : "text-zinc-500 hover:text-white"
                }`}
              >
                {s.label}
              </button>

              {/* Indicador de Sección Activa - Estilo Neón */}
              {activeSection === s.id && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)] rounded-full"
                />
              )}
            </li>
          ))}
        </ul>

        {/* ACCIONES FINALES */}
        <div className="flex items-center gap-8">
          <div className="hidden xl:flex flex-col items-end">
            <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">
              Gualeguaychú, ER
            </span>
            <span className="text-[11px] font-black text-white">
              ABIERTO AHORA
            </span>
          </div>

          <div className="h-8 w-px bg-zinc-800" />

          <div className="flex items-center gap-4">
            {/* <CartDrawer /> */}
            <button
              onClick={() => lenis?.scrollTo("#contacto")}
              className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 px-5 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all active:scale-95 flex items-center gap-2"
            >
              <Zap size={14} className="fill-current" />
              Unirme
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DesktopMenu;
