"use client";
import React from "react";
import { HeroCTAButton } from "@/components/ui/CTAButton";
import { Play, Disc } from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "../Section";

const HeroSection = () => {
  return (
    <Section id="hero" height="screen">
      <div className="h-full w-full pb-20 flex items-end justify-center px-4">
        {/* VIDEO ENGINE: Sustituto de BackgroundVideo */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/30 to-black/95 z-10" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/60 z-10" />
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover grayscale-[0.3] brightness-75 contrast-125"
          >
            <source src="/backgroundvideo.mp4" type="video/mp4" />
          </video>
        </div>

        {/* CAMERA UI OVERLAY (Estilo Visor Profesional) */}
        <div className="absolute inset-0 z-20 pointer-events-none pt-20 p-6 md:p-12 md:pt-20">
          <div className="w-full h-full border border-white/10 relative">
            {/* Esquinas de encuadre */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent/60" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/20" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/20" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/20" />

            {/* Status Bar */}
            <div className="absolute top-4 left-6 flex items-center gap-3">
              <motion.div
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="size-3 rounded-full bg-accent shadow-[0_0_10px_#ef4444]"
              />
              <span className="font-mono text-xs tracking-widest text-white/80 uppercase">
                REC ● 4K RAW
              </span>
            </div>

            <div className="absolute bottom-4 right-6 text-white/30 font-mono text-[10px] tracking-tighter uppercase">
              S-LOG3 | BT.2020 | 23.976 FPS
            </div>
          </div>
        </div>

        {/* CONTENT LAYER */}
        <div className="relative z-30 w-full max-w-7xl mx-auto flex flex-col justify-center gap-10 md:gap-16">
          {/* Title Container: Bold & Cinematic */}
          <div className="flex flex-col gap-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 text-accent uppercase font-bold text-xs tracking-[0.4em]"
            >
              <Disc className="size-4 animate-spin-slow" />
              <span>Director&apos;s Cut 2024</span>
            </motion.div>

            <h1 className="text-white drop-shadow-[0_20px_20px_rgba(0,0,0,0.8)] uppercase">
              CAPTURING <br />
              <span
                className="text-outline text-transparent"
                style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.8)" }}
              >
                PURE STORIES
              </span>
            </h1>
          </div>

          {/* Footer Content */}
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-5 px-1 lg:gap-10 w-full">
            <div className="max-w-md border-l-4 border-accent pl-6">
              <p className="text-slate-100 text-lg md:text-xl font-light leading-relaxed text-balance">
                Transformando visiones en piezas cinematográficas de alto
                impacto. Especialista en narrativa documental y comerciales de
                alta gama.
              </p>
            </div>

            <div className="flex items-center gap-5 lg:gap-10 flex-wrap">
              {/* CTA Button Reemplazado por estilo Filmmaker */}
              <button className="flex items-center gap-3 text-white group cursor-pointer">
                <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:border-accent transition-all duration-500 scale-100 group-hover:scale-110">
                  <Play className="fill-current size-5 group-hover:text-accent" />
                </div>
                <div className="flex flex-col items-start leading-none gap-1">
                  <span className="text-[10px] text-white/40 tracking-[0.2em] font-bold">
                    PLAY REEL
                  </span>
                  <span className="text-sm font-bold tracking-widest border-b border-accent pb-1">
                    REEL 2024
                  </span>
                </div>
              </button>
              <div className="group relative">
                <div className="absolute inset-0 bg-accent/20 blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity" />
                <HeroCTAButton className=" text-black font-black uppercase text-xs tracking-widest rounded-none hover:bg-accent hover:text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Sutil Indicador Lateral: Monitor Marks */}
        <div className="absolute right-0 h-1/2 w-px bg-linear-to-b from-transparent via-white/10 to-transparent top-1/4 z-10 hidden lg:block" />
      </div>
    </Section>
  );
};

export default HeroSection;
