"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Calendar, Activity, Users } from "lucide-react";
import { useLenis } from "lenis/react";

// Nota: Ya no uso el componente <Section height="content"> genérico,
// lo armo directamente con el tag <section> para tener control milimétrico del alto.

const WebHeroSection = () => {
  const lenis = useLenis();

  return (
    <section
      id="hero"
      // Calculamos el alto exacto de la pantalla menos el Navbar (80px)
      // Agregamos pt-20 para empujar el contenido por debajo del nav fixed
      className="bg-zinc-950 relative w-full min-h-[calc(100vh-80px)] flex items-center pt-20 lg:pt-0 overflow-hidden"
    >
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* CONTENEDOR PRINCIPAL: Alineado al centro verticalmente */}
      <div className="container mx-auto max-w-6xl w-full px-4 lg:px-8 py-8 lg:py-12 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
        {/* COLUMNA IZQUIERDA: Textos y CTAs */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full lg:w-[55%] flex flex-col items-start space-y-6 z-10"
        >
          {/* Badge */}
          <div className="flex items-center gap-2 bg-zinc-900/80 border border-zinc-800 px-3 py-1.5 rounded-full">
            <Activity className="size-4 text-emerald-500" />
            <span className="text-[11px] font-bold text-zinc-300 uppercase tracking-widest">
              Centro de Alto Rendimiento
            </span>
          </div>

          {/* Headline Titánico */}
          <div className="space-y-3">
            <h1 className="text-5xl sm:text-6xl xl:text-[5rem] font-black text-white leading-[1.05] tracking-tight">
              SUPERÁ TUS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                LÍMITES HOY.
              </span>
            </h1>
            <p className="text-base xl:text-lg text-zinc-400 max-w-lg leading-relaxed font-medium">
              Entrenamiento funcional, musculación y clases guiadas. Unite a la
              comunidad más fuerte y transformá tu rutina.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto pt-2">
            <button
              onClick={() => lenis?.scrollTo("#planes", { offset: -80 })}
              className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-zinc-950 px-8 py-3.5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all hover:-translate-y-1 shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
            >
              Asociate Ahora <ChevronRight className="size-5" />
            </button>
            <button
              onClick={() => lenis?.scrollTo("#clases", { offset: -80 })}
              className="w-full sm:w-auto bg-transparent hover:bg-zinc-900 border border-zinc-800 text-white px-8 py-3.5 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="size-5 text-zinc-400" /> Ver Grilla
            </button>
          </div>

          {/* Social Proof */}
          <div className="pt-6 mt-2 border-t border-zinc-800/50 flex items-center gap-6 w-full">
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white">500+</span>
              <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                Socios
              </span>
            </div>
            <div className="w-px h-8 bg-zinc-800" />
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white flex items-center gap-1.5">
                4.9{" "}
                <span className="text-emerald-500 text-lg leading-none">★</span>
              </span>
              <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                Reseñas
              </span>
            </div>
          </div>
        </motion.div>

        {/* COLUMNA DERECHA: Imagen principal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-[45%] relative z-10 hidden sm:block"
          // Ocultamos la imagen en pantallas MUY chicas (móviles viejos) para asegurar que el texto entre sin scroll.
        >
          {/* Ajustamos el aspect ratio para que sea un poco más apaisado y no empuje el layout hacia abajo */}
          <div className="relative aspect-video lg:aspect-[4/5] xl:aspect-[3/4] w-full max-h-[60vh] rounded-[2rem] overflow-hidden border border-zinc-800/50 shadow-2xl group mx-auto">
            <Image
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop"
              alt="Entrenamiento en gimnasio"
              fill
              priority
              className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent" />

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-6 left-6 right-6 bg-zinc-900/80 backdrop-blur-md border border-zinc-700 p-3 sm:p-4 rounded-2xl flex items-center gap-4"
            >
              <div className="size-10 sm:size-12 bg-emerald-500/20 rounded-xl flex items-center justify-center shrink-0">
                <Users className="size-5 sm:size-6 text-emerald-500" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-white leading-none mb-1">
                  Clases Guiadas
                </p>
                <p className="text-[10px] sm:text-xs text-zinc-400 font-medium line-clamp-1">
                  Musculación y Crossfit
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WebHeroSection;
