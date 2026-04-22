"use client";
import {
  Instagram,
  Facebook,
  Dumbbell,
  ArrowRight,
  MapPin,
  Phone,
  Zap,
} from "lucide-react";
import { useLenis } from "lenis/react";
import { sections } from "@/lib/sections";
import Link from "next/link";
import { siteConfig } from "@/lib/site/siteConfig";

export function FooterSection() {
  const lenis = useLenis();
  const { brand } = siteConfig;

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pb-8 relative overflow-hidden">
      {/* Luz de acento sutil */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full pt-16 relative z-10">
        {/* 1. CAJA CTA SUPERIOR - Estilo Gym Energy */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 mb-20 shadow-2xl mx-4 lg:mx-0 relative overflow-hidden group">
          {/* Fondo decorativo del CTA */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-10 group-hover:scale-105 transition-transform duration-1000" />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-transparent" />

          <div className="text-center md:text-left max-w-xl relative z-10">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-3 italic uppercase tracking-tight">
              ¿Listo para tu{" "}
              <span className="text-emerald-500">Transformación?</span>
            </h3>
            <p className="text-zinc-400 font-medium text-sm md:text-base">
              No dejes para mañana el entrenamiento que podés hacer hoy. Reservá
              tu clase de prueba gratuita y conocé nuestras instalaciones.
            </p>
          </div>
          <button
            onClick={() => lenis?.scrollTo("#planes", { offset: -80 })}
            className="relative z-10 whitespace-nowrap px-8 py-5 bg-emerald-500 text-zinc-950 font-black text-xs uppercase tracking-[0.2em] rounded-2xl hover:bg-emerald-400 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center gap-3 active:scale-95 w-full md:w-auto justify-center"
          >
            <Zap className="size-4 fill-current" />
            Empezar Ahora
            <ArrowRight className="size-4" />
          </button>
        </div>

        {/* 2. GRILLA DE NAVEGACIÓN (4 Columnas) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 px-6 lg:px-0">
          {/* Columna 1: Marca y Descripción */}
          <div className="flex flex-col gap-6">
            <Link
              href="/"
              className="flex items-center gap-3 group w-fit"
              onClick={() => lenis?.scrollTo(0)}
            >
              <div className="size-10 bg-emerald-500/10 rounded-xl flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-500 transition-all duration-300">
                <Dumbbell
                  className="size-5 text-emerald-500 group-hover:text-zinc-950"
                  strokeWidth={2.5}
                />
              </div>
              <span className="text-xl font-black tracking-tighter text-white uppercase italic">
                {brand.name}
                <span className="text-emerald-500">{brand.suffix}</span>
              </span>
            </Link>
            <p className="text-sm text-zinc-400 font-medium leading-relaxed">
              El centro de alto rendimiento más completo de la ciudad. Entrená
              con máquinas de última generación y coaches profesionales.
            </p>
            {/* Redes Sociales */}
            <div className="flex gap-3">
              {[Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="size-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-emerald-500 hover:text-zinc-950 hover:border-emerald-500 transition-all"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Columna 2: Secciones */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.2em] mb-2">
              Navegación
            </h4>
            <ul className="flex flex-col gap-3">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() =>
                      lenis?.scrollTo(`#${section.id}`, { offset: -80 })
                    }
                    className="text-sm text-zinc-400 font-bold hover:text-white transition-colors text-left uppercase tracking-widest"
                  >
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Servicios */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.2em] mb-2">
              Entrenamiento
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-zinc-400 font-bold uppercase tracking-widest">
              <li>Musculación</li>
              <li>Crossfit & HIIT</li>
              <li>Clases Funcionales</li>
              <li>Personal Trainer</li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.2em] mb-2">
              Sede Central
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-zinc-400 font-medium">
                <Phone className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  +54 9 3446 00-0000
                  <br />
                  <span className="text-xs text-zinc-600 font-bold uppercase tracking-widest mt-1 block">
                    Lun a Vie: 07:00 a 23:00
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm text-zinc-400 font-medium">
                <MapPin className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  Av. Rocamora 1234
                  <br />
                  <span className="text-xs text-zinc-600 font-bold uppercase tracking-widest mt-1 block">
                    Gualeguaychú, ER
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* 3. LÍNEA DIVISORIA Y COPYRIGHT */}
        <div className="border-t border-zinc-900 pt-8 px-6 lg:px-0 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">
            © {new Date().getFullYear()} {brand.name || "Tu Gimnasio"}. Todos
            los derechos reservados.
          </p>
          <a
            href="https://tuwebhoy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 hover:text-emerald-500 transition-colors flex items-center gap-1"
          >
            Powered by <span className="text-white">TUWEBHOY</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
