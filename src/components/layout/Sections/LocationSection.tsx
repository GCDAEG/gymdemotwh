"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  MapPin,
  Clock,
  MessageCircle,
  Mail,
  ArrowUpRight,
  Navigation,
} from "lucide-react";
import { siteConfig } from "@/lib/site/siteConfig";

const ContactSection = () => {
  const { brand } = siteConfig;
  const WHATSAPP_NUMBER = "5493446000000"; // Reemplazar con el real

  return (
    <section
      id="contacto"
      className="py-24 bg-zinc-950 relative overflow-hidden"
    >
      {/* Luz de fondo sutil */}
      <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* ENCABEZADO */}
        <div className="mb-16">
          <h2 className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.4em] mb-4 flex items-center gap-2">
            <MapPin className="size-4" /> Dónde Encontrarnos
          </h2>
          <h3 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">
            Vení a <span className="text-emerald-500">Conocernos.</span>
          </h3>
        </div>

        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
          {/* COLUMNA IZQUIERDA: Info y Horarios (Ocupa 5 columnas) */}
          <div className="lg:col-span-5 flex flex-col gap-4 lg:gap-6">
            {/* Tarjeta de Horarios */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="size-10 bg-emerald-500/10 rounded-xl flex items-center justify-center">
                  <Clock className="size-5 text-emerald-500" />
                </div>
                <h4 className="text-xl font-black text-white italic uppercase">
                  Horarios
                </h4>
              </div>

              <ul className="space-y-4">
                <li className="flex justify-between items-center border-b border-zinc-800 pb-4">
                  <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest">
                    Lunes a Viernes
                  </span>
                  <span className="text-sm font-black text-white">
                    07:00 - 23:00
                  </span>
                </li>
                <li className="flex justify-between items-center border-b border-zinc-800 pb-4">
                  <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest">
                    Sábados
                  </span>
                  <span className="text-sm font-black text-white">
                    09:00 - 18:00
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest">
                    Domingos
                  </span>
                  <span className="text-xs font-black text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full uppercase tracking-widest">
                    Cerrado
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Tarjeta de Contacto Rápido */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl flex flex-col gap-4"
            >
              <button
                onClick={() =>
                  window.open(
                    `https://wa.me/${WHATSAPP_NUMBER}?text=Hola! Me gustaría hacerles una consulta.`,
                    "_blank",
                  )
                }
                className="w-full bg-[#25d366] hover:bg-[#20bd5a] text-zinc-950 p-4 rounded-2xl font-black uppercase text-xs tracking-widest transition-all active:scale-95 flex items-center justify-center gap-3 shadow-lg shadow-[#25d366]/20"
              >
                <MessageCircle className="size-5" /> Chat por WhatsApp
              </button>

              <button
                onClick={() =>
                  (window.location.href = "mailto:contacto@tugimnasio.com")
                }
                className="w-full bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 text-white p-4 rounded-2xl font-bold uppercase text-xs tracking-widest transition-all active:scale-95 flex items-center justify-center gap-3"
              >
                <Mail className="size-4 text-zinc-400" /> Enviar Correo
              </button>
            </motion.div>
          </div>

          {/* COLUMNA DERECHA: Mapa / Fachada (Ocupa 7 columnas) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7 relative bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden min-h-[400px] lg:min-h-full group"
          >
            {/* Imagen del mapa o fachada (Mejor que un iframe que rompe el modo oscuro) */}
            <Image
              src="https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1200&auto=format&fit=crop"
              alt="Ubicación del Gimnasio"
              fill
              className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            />

            {/* Gradiente oscuro para que el texto resalte */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />

            {/* Info Flotante de Ubicación */}
            <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
              <div>
                <div className="size-12 bg-emerald-500 rounded-2xl flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                  <MapPin className="size-6 text-zinc-950" />
                </div>
                <h4 className="text-2xl font-black text-white italic uppercase tracking-tight mb-2">
                  Sede Central
                </h4>
                <p className="text-zinc-400 font-medium text-sm">
                  Av. Rocamora 1234, Gualeguaychú <br /> Entre Ríos, Argentina.
                </p>
              </div>

              <button
                onClick={() =>
                  window.open(
                    "https://maps.google.com/?q=Gualeguaychú,Entre+Rios",
                    "_blank",
                  )
                }
                className="bg-white hover:bg-zinc-200 text-zinc-950 px-6 py-4 rounded-2xl font-black text-[11px] uppercase tracking-widest transition-all active:scale-95 flex items-center gap-2 shrink-0"
              >
                <Navigation className="size-4" /> Cómo Llegar{" "}
                <ArrowUpRight className="size-4 ml-1 opacity-50" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
