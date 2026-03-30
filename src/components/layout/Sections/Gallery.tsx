"use client";
import { Section } from "@/components/layout/Section";
import { SimpleCTAButton } from "@/components/ui/CTAButton";
import React, { useState, useEffect } from "react";
import { X, Maximize2, Monitor, Aperture } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const galleryImages = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/2604792/pexels-photo-2604792.jpeg",
    alt: "Production Shot 01",
    ratio: "aspect-video",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1518780664697-55e3ad937233",
    alt: "Location Scouting",
    ratio: "aspect-square",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/14851450/pexels-photo-14851450.jpeg",
    alt: "Color Grading Test",
    ratio: "aspect-[9/16]",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
    alt: "Cinematic Framing",
    ratio: "aspect-video",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
    alt: "Set Lighting",
    ratio: "aspect-[21/9]",
  }, // Anamórfico
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    alt: "Frame 24fps",
    ratio: "aspect-video",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryImages)[0] | null
  >(null);

  // Bloquear scroll al abrir modal
  useEffect(() => {
    if (selectedImage) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [selectedImage]);

  return (
    <Section
      id="gallery"
      height="content"
      className="bg-background py-24 border-t border-white/5"
    >
      <div className="flex flex-col gap-16">
        {/* Header Estilo "Slate" */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-l-2 border-accent pl-6">
          <div className="flex flex-col gap-2">
            <span className="text-accent font-mono text-xs tracking-[0.5em] uppercase">
              Visual Archives
            </span>
            <h2 className="text-white">Storyboard & Frames</h2>
          </div>
          <p className="max-w-md text-text-secondary text-sm md:text-base italic">
            "Cada fotograma es una decisión técnica convertida en emoción
            visual. Selección de proyectos 2024-2026."
          </p>
        </div>

        {/* Grid Cinematográfico */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-auto gap-1 md:gap-2">
          {galleryImages.map((image, i) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(image)}
              className={`group relative overflow-hidden bg-muted cursor-crosshair border border-white/5 ${image.ratio} sm:first:col-span-2 lg:first:col-span-2 lg:last:col-span-2 sm:last:row-span-1`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.8] group-hover:grayscale-0 contrast-125 brightness-75 group-hover:brightness-100"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Overlay: Data del monitor */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between p-4">
                <div className="flex justify-between items-start">
                  <div className="text-[10px] text-accent font-mono tracking-widest bg-black/80 px-2 py-1 flex items-center gap-1.5 border-l-2 border-accent uppercase">
                    <Monitor className="size-3" /> Monitor Rec.
                  </div>
                  <Maximize2 className="text-white size-5 opacity-50" />
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-xs text-white/50 font-mono uppercase tracking-[0.2em]">
                    Frame #00{image.id}
                  </span>
                  <span className="text-sm text-white font-bold tracking-widest uppercase">
                    {image.alt}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer de la galería */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between border-y border-white/10 py-12 px-8 gap-8">
          <div className="flex items-center gap-4">
            <Aperture className="text-accent size-10 animate-spin-slow opacity-50" />
            <h4 className="text-white text-xl md:text-3xl font-bold uppercase tracking-tighter">
              ¿Tenés un proyecto en mente?
            </h4>
          </div>
          <SimpleCTAButton className="w-fit px-12 py-6 bg-white text-black hover:bg-accent hover:text-white transition-all scale-100 hover:scale-105" />
        </div>
      </div>

      {/* --- MODAL / VISOR PROFESIONAL --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-1000 flex items-center justify-center cursor-zoom-out select-none overflow-hidden"
            onClick={() => setSelectedImage(null)}
          >
            {/* Decoración del visor (Focus Marks) */}
            <div className="absolute inset-8 border border-white/10 pointer-events-none z-10">
              <div className="absolute top-1/2 left-0 w-8 h-px bg-accent/50" />
              <div className="absolute top-1/2 right-0 w-8 h-px bg-accent/50" />
              <div className="absolute top-0 left-1/2 w-px h-8 bg-accent/50" />
              <div className="absolute bottom-0 left-1/2 w-px h-8 bg-accent/50" />
            </div>

            <button
              className="absolute top-8 right-8 text-white/40 hover:text-accent transition-colors z-20 group"
              onClick={() => setSelectedImage(null)}
            >
              <X
                size={40}
                strokeWidth={1}
                className="group-hover:rotate-90 transition-transform duration-300"
              />
            </button>

            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="relative w-[95vw] h-[85vh] flex justify-center items-center overflow-hidden"
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain p-4 md:p-12 contrast-125"
                priority
              />

              {/* Data del visor en el modal */}
              <div className="absolute bottom-12 left-12 hidden md:flex flex-col gap-1 font-mono text-[10px] text-white/50 tracking-widest uppercase">
                <span>Res: 4096 x 1744</span>
                <span>Aspect: 2.35:1 Anamorphic</span>
                <span className="text-accent font-bold">
                  Bitrate: 422 10-bit
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Gallery;
