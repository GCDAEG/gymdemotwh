"use client";
import {
  CameraIcon,
  Disc,
  ArrowUpRight,
  Monitor,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
} from "lucide-react";
import { Button } from "../ui/button";
import { useLenis } from "lenis/react";
import { sections } from "@/lib/sections";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { motion } from "framer-motion";

export function FooterSection() {
  const lenis = useLenis();

  return (
    <footer className="bg-background text-white border-t border-white/5 pt-24 pb-12 px-6 md:px-12 lg:px-24 flex flex-col gap-16 overflow-hidden">
      {/* SECCIÓN SUPERIOR: Big Brand & CTA */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="flex flex-col gap-8">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="p-2 bg-accent/10 border border-accent/20 group-hover:bg-accent transition-all duration-500">
              <CameraIcon className="size-8 text-accent group-hover:text-white" />
            </div>
            <span className="text-5xl font-black italic tracking-tighter uppercase leading-none">
              RODRI<span className="text-accent">GO</span>
            </span>
          </Link>
          <h3 className="text-2xl md:text-4xl font-light leading-tight text-white/60 max-w-lg">
            Transformando ideas en{" "}
            <span className="text-white font-bold italic">
              experiencias visuales
            </span>{" "}
            de alto impacto.
          </h3>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              onClick={() => lenis?.scrollTo("#contact")}
              className="bg-white text-black hover:bg-accent hover:text-white rounded-none px-8 py-6 h-auto font-black uppercase tracking-widest text-xs"
            >
              Iniciar Proyecto <ArrowUpRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>

        {/* Info Grid (Estilo Credits) */}
        <div className="grid grid-cols-2 gap-12">
          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-accent font-mono text-xs tracking-[0.4em] uppercase">
              Navigation
            </h4>
            <ul className="flex flex-col gap-4 text-sm font-mono uppercase tracking-wider">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() =>
                      lenis?.scrollTo(`#${section.id}`, { offset: -96 })
                    }
                    className="text-white/40 hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <span className="size-1 bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connection */}
          <div className="flex flex-col gap-6">
            <h4 className="text-accent font-mono text-xs tracking-[0.4em] uppercase">
              Connection
            </h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex items-center gap-3 text-white/60 hover:text-white transition-colors">
                <Mail className="size-4 text-accent" />
                <span className="font-mono text-xs">hello@rodrigo.pro</span>
              </li>
              <li className="flex items-center gap-3 text-white/60 hover:text-white transition-colors">
                <Phone className="size-4 text-accent" />
                <span className="font-mono text-xs">+54 9 345 1234567</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <MapPin className="size-4 text-accent" />
                <span className="font-mono text-xs tracking-tight">
                  Entre Ríos, ARG
                </span>
              </li>
            </ul>
            <div className="flex gap-4 mt-2">
              <Link
                href="#"
                className="p-3 border border-white/10 hover:border-accent transition-colors"
              >
                <Instagram className="size-5" />
              </Link>
              <Link
                href="#"
                className="p-3 border border-white/10 hover:border-accent transition-colors"
              >
                <Facebook className="size-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* MARQUESINA DE "CLIENTES / PARTNERS" (Decorativo Cine) */}
      <div className="w-full border-y border-white/5 py-8 opacity-20 hover:opacity-100 transition-opacity duration-700">
        <div className="flex overflow-hidden gap-12 select-none font-black italic text-4xl md:text-6xl tracking-tighter uppercase whitespace-nowrap">
          <div className="flex gap-12 animate-marquee">
            <span>Netflix</span> <span className="text-accent">●</span>
            <span>Sony Pictures</span> <span className="text-accent">●</span>
            <span>Red Bull</span> <span className="text-accent">●</span>
            <span>Adobe</span> <span className="text-accent">●</span>
            <span>National Geographic</span>{" "}
            <span className="text-accent">●</span>
          </div>
          {/* Duplicado para loop infinito */}
          <div className="flex gap-12 animate-marquee" aria-hidden="true">
            <span>Netflix</span> <span className="text-accent">●</span>
            <span>Sony Pictures</span> <span className="text-accent">●</span>
            <span>Red Bull</span> <span className="text-accent">●</span>
            <span>Adobe</span> <span className="text-accent">●</span>
            <span>National Geographic</span>{" "}
            <span className="text-accent">●</span>
          </div>
        </div>
      </div>

      {/* BARRA DE ESTADO FINAL */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-4">
        <div className="flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">
          <div className="flex items-center gap-2">
            <Disc className="size-3 animate-spin-slow text-accent" />
            <span>Enc: Prores 422 HQ</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 border-l border-white/10 pl-6">
            <Monitor className="size-3" />
            <span>Rec: 60 FPS</span>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end gap-1">
          <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest text-center">
            Copyright ©2026 Rodrigo Filmmaking | Production Code: RG-026
          </p>
          <p className="text-[9px] font-mono text-accent/40 uppercase tracking-[0.2em]">
            Crafted for performance by{" "}
            <span className="text-white/60">TUWEBHOY</span>
          </p>
        </div>
      </div>

      {/* Estilos para la marquesina (Si no los tienes en tu tailwind config) */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </footer>
  );
}
