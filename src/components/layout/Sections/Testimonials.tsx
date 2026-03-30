"use client";

import { Section } from "@/components/layout/Section";
import { StaggerContainer } from "../../motion/StraggerContainer";
import { FadeIn } from "../../motion/FadeIn";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Video, Quote } from "lucide-react";

type Testimonial = {
  id: number;
  comment: string;
  name: string;
  role: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    comment:
      "La calidad técnica y el ojo artístico que aporta al set son inigualables. Logró capturar la esencia de nuestra marca con una narrativa visual potente.",
    name: "María López",
    role: "Directora Creativa en Vogue",
    avatar: "https://i.pravatar.cc/150?u=maria",
  },
  {
    id: 2,
    comment:
      "Trabajar con él es garantía de profesionalismo. El manejo de la luz y la composición en condiciones extremas fue lo que salvó nuestro rodaje.",
    name: "Carlos Rodríguez",
    role: "Productor Ejecutivo",
    avatar: "https://i.pravatar.cc/150?u=carlos",
  },
  {
    id: 3,
    comment:
      "Más que un camarógrafo, es un narrador. Entiende perfectamente el ritmo del montaje desde la captura inicial. El resultado final superó el brief.",
    name: "Laura Fernández",
    role: "Filmmaker Independiente",
    avatar: "https://i.pravatar.cc/150?u=laura",
  },
];

const Testimonials = () => {
  return (
    <Section id="testimonials" height="content" className="bg-background py-24">
      <div className="mx-auto max-w-7xl flex flex-col gap-12 px-4">
        {/* Cabecera Técnica */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="flex flex-col gap-2">
            <FadeIn className="flex items-center gap-2 text-accent uppercase font-mono text-sm tracking-[0.3em]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Reviews / Feedback
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-white">Críticas de Rodaje</h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.2} className="max-w-md">
            <p className="text-text-secondary text-sm md:text-base border-l border-accent pl-4 italic">
              "El éxito de un proyecto se mide por la visión compartida entre la
              lente y el cliente."
            </p>
          </FadeIn>
        </div>

        {/* Carousel de reseñas */}
        <StaggerContainer>
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={testimonial.id}
                  className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <FadeIn delay={index * 0.1} className="h-full">
                    <div className="group relative bg-card border border-white/5 p-8 h-full flex flex-col justify-between hover:bg-white/[0.02] transition-colors duration-500">
                      {/* Decoración de Claqueta */}
                      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 group-hover:text-accent transition-all">
                        <Video size={40} strokeWidth={1} />
                      </div>

                      <div className="space-y-6">
                        <Quote className="text-accent size-8 opacity-50 fill-current" />
                        <p className="text-lg md:text-xl text-white/90 leading-tight font-light tracking-tight italic">
                          "{testimonial.comment}"
                        </p>
                      </div>

                      <div className="mt-12 flex items-center gap-4">
                        <div className="relative size-14 grayscale group-hover:grayscale-0 transition-all duration-700">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            fill
                            className="object-cover border border-white/20"
                          />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-title text-sm uppercase tracking-wider text-white">
                            {testimonial.name}
                          </span>
                          <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-mono font-bold">
                            {testimonial.role}
                          </span>
                        </div>
                      </div>

                      {/* Línea de tiempo decorativa en el fondo */}
                      <div className="absolute bottom-0 left-0 h-1 bg-accent/20 w-0 group-hover:w-full transition-all duration-700" />
                    </div>
                  </FadeIn>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Controles Estilo Interfaz de Cámara */}
            <div className="flex items-center justify-center md:justify-end gap-2 mt-8">
              <CarouselPrevious className="static translate-y-0 rounded-none bg-transparent border-white/10 hover:bg-accent hover:border-accent text-white" />
              <div className="h-px w-8 bg-white/10 mx-2" />
              <CarouselNext className="static translate-y-0 rounded-none bg-transparent border-white/10 hover:bg-accent hover:border-accent text-white" />
            </div>
          </Carousel>
        </StaggerContainer>
      </div>
    </Section>
  );
};

export default Testimonials;
