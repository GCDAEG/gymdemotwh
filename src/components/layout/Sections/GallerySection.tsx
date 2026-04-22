"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Camera, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Constantes de imágenes de alta calidad de Unsplash (orientadas a gimnasio premium)
const IMAGES = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1400&auto=format&fit=crop",
    alt: "Sala de Musculación Principal",
    colSpan: "col-span-12 md:col-span-8",
    rowSpan: "row-span-2",
    tag: "Zona de Fuerza",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
    alt: "Zona de Pesos Libres",
    colSpan: "col-span-12 md:col-span-4",
    rowSpan: "row-span-1",
    tag: "Pesos Libres",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
    alt: "Clase de Funcional",
    colSpan: "col-span-12 md:col-span-4",
    rowSpan: "row-span-1",
    tag: "Área Funcional",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1400&auto=format&fit=crop",
    alt: "Área de Cardio",
    colSpan: "col-span-12 md:col-span-6",
    rowSpan: "row-span-1",
    tag: "Cardio",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1574680093668-250c1e274b7a?q=80&w=1400&auto=format&fit=crop",
    alt: "Estudio de Yoga y Relax",
    colSpan: "col-span-12 md:col-span-6",
    rowSpan: "row-span-1",
    tag: "Estudio",
  },
];

const GallerySection = () => {
  return (
    <section id="instalaciones" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        {/* ENCABEZADO */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4">
            <h2 className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.4em] flex items-center gap-2">
              <Camera className="size-4" /> Nuestras Instalaciones
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter">
              El Lugar de tu <span className="text-emerald-500">Cambio.</span>
            </h3>
          </div>

          <button className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors group">
            Ver Tour Virtual
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* BENTO GRID GALLERY */}
        <div className="grid grid-cols-12 gap-4 auto-rows-[250px] md:auto-rows-[300px]">
          {IMAGES.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.32, 0.72, 0, 1], // Easing elegante
              }}
              viewport={{ once: true, margin: "-50px" }}
              className={cn(
                "relative rounded-3xl overflow-hidden group cursor-pointer border border-zinc-900/50 bg-zinc-900",
                img.colSpan,
                img.rowSpan,
              )}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay y Tag (Aparece on hover en Desktop, siempre visible abajo en Mobile) */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-6 left-6 translate-y-0 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-100 md:opacity-0 group-hover:opacity-100">
                <span className="bg-emerald-500/90 text-zinc-950 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg backdrop-blur-sm shadow-xl">
                  {img.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTÓN MOBILE (Solo se ve en celus) */}
        <button className="mt-8 w-full md:hidden flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors border border-zinc-800 p-4 rounded-xl">
          Ver Tour Virtual <ArrowRight className="size-4" />
        </button>
      </div>
    </section>
  );
};

export default GallerySection;
