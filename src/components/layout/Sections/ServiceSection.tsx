"use client";
import { Section } from "@/components/layout/Section";
import { SimpleCTAButton } from "@/components/ui/CTAButton";
import {
  Video,
  Clapperboard,
  Dribbble,
  Layers,
  Maximize,
  Zap,
  Mic2,
  Settings2,
} from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const filmmakerServices = [
  {
    title: "Cinematografía 4K/6k",
    code: "CAM-01",
    icon: <Video className="size-full" />,
    description:
      "Captura de alta gama con sensores Full Frame. Narrativa visual adaptada a comerciales, documentales y videoclips.",
  },
  {
    title: "Post-Producción & Color",
    code: "POST-02",
    icon: <Layers className="size-full" />,
    description:
      "Corrección de color profesional en DaVinci Resolve. Edición rítmica y montaje narrativo de alto impacto.",
  },
  {
    title: "Dirección de Fotografía",
    code: "DIR-03",
    icon: <Clapperboard className="size-full" />,
    description:
      "Diseño de iluminación y estética visual. Control total sobre la atmósfera y el lenguaje de la luz en set.",
  },
  {
    title: "Drone & Aerial Shots",
    code: "AIR-04",
    icon: <Maximize className="size-full" />,
    description:
      "Perspectivas únicas con drones 4K. Operación certificada para tomas aéreas dinámicas y cinematográficas.",
  },
] as const;

const ServiceSection = () => {
  return (
    <Section id="services" height="content" className="bg-background">
      <div className="flex flex-col gap-20 max-w-7xl mx-auto">
        {/* Cabecera Brutalista */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-accent font-mono text-sm tracking-[0.4em] uppercase">
              <Settings2 className="size-4" />
              <span>Production Capabilities</span>
            </div>
            <h2 className="text-white leading-none">
              Servicios <br />
              <span className="text-outline text-transparent">Técnicos</span>
            </h2>
          </div>
          <p className="max-w-sm text-text-secondary text-base md:text-lg font-light leading-relaxed">
            Soluciones integrales de video desde la conceptualización hasta la
            exportación final en formatos profesionales.
          </p>
        </div>

        {/* Grid de Servicios (Estilo Technical Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {filmmakerServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-background p-10 md:p-12 relative overflow-hidden transition-all duration-500 hover:bg-card"
            >
              {/* Marca de esquina decorativa */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-accent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Código técnico flotante */}
              <span className="absolute top-6 right-6 text-[10px] font-mono text-accent opacity-40 tracking-widest uppercase">
                {service.code}
              </span>

              {/* Icono a la izquierda */}
              <div className="flex flex-col gap-8">
                <div className="size-14 text-white group-hover:text-accent transition-colors duration-500 p-2 border border-white/10 group-hover:border-accent">
                  {service.icon}
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white group-hover:translate-x-2 transition-transform">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary text-base leading-relaxed max-w-sm">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Botón flotante 'Know more' al estilo visor */}
              <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-[10px] font-bold text-white uppercase tracking-widest">
                <Zap className="size-3 fill-accent text-accent" />
                <span>Full Equipment List</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section Estilo End Credits */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between border-y border-white/5 py-12 px-8 gap-8">
          <div className="flex items-center gap-6">
            <div className="flex -space-x-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="size-12 rounded-full border-2 border-background bg-card flex items-center justify-center"
                >
                  <Mic2 className="size-5 text-accent" />
                </div>
              ))}
            </div>
            <h4 className="text-lg md:text-2xl font-bold uppercase tracking-tighter text-white">
              ¿Listo para el próximo rodaje?
            </h4>
          </div>
          <SimpleCTAButton className="w-fit px-12 py-6 bg-white text-black hover:bg-accent hover:text-white transition-all scale-100 hover:scale-105" />
        </div>
      </div>
    </Section>
  );
};

export default ServiceSection;
