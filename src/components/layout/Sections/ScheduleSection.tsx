"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Users, Zap, Filter } from "lucide-react";
import { cn } from "@/lib/utils";

const DAYS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

const SCHEDULE = [
  {
    time: "08:00",
    activity: "Crossfit",
    coach: "Lucas R.",
    day: "Lunes",
    intensity: "Alta",
  },
  {
    time: "09:00",
    activity: "Funcional",
    coach: "Santi G.",
    day: "Lunes",
    intensity: "Media",
  },
  {
    time: "10:00",
    activity: "Yoga",
    coach: "Ana P.",
    day: "Lunes",
    intensity: "Baja",
  },
  {
    time: "18:00",
    activity: "Boxeo",
    coach: "Marcos T.",
    day: "Lunes",
    intensity: "Alta",
  },
  {
    time: "19:00",
    activity: "Crossfit",
    coach: "Lucas R.",
    day: "Lunes",
    intensity: "Alta",
  },
  // Martes
  {
    time: "08:00",
    activity: "Funcional",
    coach: "Santi G.",
    day: "Martes",
    intensity: "Media",
  },
  {
    time: "18:00",
    activity: "HIIT",
    coach: "Valen M.",
    day: "Martes",
    intensity: "Alta",
  },
  {
    time: "19:00",
    activity: "Musculación Guiada",
    coach: "Santi G.",
    day: "Martes",
    intensity: "Media",
  },
  // ... Agregar más según necesites
];

const ScheduleSection = () => {
  const [activeDay, setActiveDay] = useState("Lunes");

  const filteredSchedule = SCHEDULE.filter((item) => item.day === activeDay);

  return (
    <section id="clases" className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* ENCABEZADO */}
        <div className="flex flex-col justify-between gap-6 mb-12">
          <div className="space-y-4">
            <h2 className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.4em]">
              Cronograma
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter">
              Grilla de <span className="text-emerald-500">Clases.</span>
            </h3>
          </div>

          {/* SELECTOR DE DÍAS (Horizontal Scroll en Mobile) */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0 w-full justify-end">
            {DAYS.map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={cn(
                  "px-5 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap border",
                  activeDay === day
                    ? "bg-emerald-500 text-zinc-950 border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                    : "bg-zinc-900 text-zinc-500 border-zinc-800 hover:border-zinc-700",
                )}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* CONTENEDOR DE LA GRILLA */}
        <div className="bg-zinc-900/30 border border-zinc-900 rounded-[2.5rem] overflow-hidden backdrop-blur-sm">
          <div className="grid grid-cols-1 divide-y divide-zinc-900">
            {/* Header de Tabla (Solo Desktop) */}
            <div className="hidden md:grid grid-cols-4 p-6 bg-zinc-900/50 text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em]">
              <span>Horario</span>
              <span>Disciplina</span>
              <span>Coach</span>
              <span className="text-right">Intensidad</span>
            </div>

            {/* Filas Dinámicas */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDay}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {filteredSchedule.length > 0 ? (
                  filteredSchedule.map((item, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-1 md:grid-cols-4 items-center p-6 hover:bg-white/5 transition-colors group"
                    >
                      {/* Horario */}
                      <div className="flex items-center gap-3 mb-4 md:mb-0">
                        <div className="size-10 bg-zinc-800 rounded-xl flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                          <Clock className="size-5 text-emerald-500" />
                        </div>
                        <span className="text-xl font-black text-white italic">
                          {item.time}
                        </span>
                      </div>

                      {/* Disciplina */}
                      <div className="mb-2 md:mb-0">
                        <span className="text-sm font-bold text-zinc-300 md:text-white uppercase tracking-wider">
                          {item.activity}
                        </span>
                      </div>

                      {/* Coach */}
                      <div className="flex items-center gap-2 mb-4 md:mb-0">
                        <Users className="size-4 text-zinc-600" />
                        <span className="text-xs font-medium text-zinc-500">
                          {item.coach}
                        </span>
                      </div>

                      {/* Intensidad (Badge) */}
                      <div className="flex md:justify-end">
                        <span
                          className={cn(
                            "px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter border",
                            item.intensity === "Alta"
                              ? "bg-red-500/10 text-red-500 border-red-500/20"
                              : item.intensity === "Media"
                                ? "bg-orange-500/10 text-orange-500 border-orange-500/20"
                                : "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
                          )}
                        >
                          {item.intensity}
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-20 text-center text-zinc-600 uppercase font-black text-xs tracking-widest">
                    No hay clases programadas para este día.
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* BOTÓN DE ACCIÓN RÁPIDA */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() =>
              window.open(
                `https://wa.me/5493446000000?text=Hola! Me gustaría reservar una clase de prueba de ${activeDay}`,
                "_blank",
              )
            }
            className="flex items-center gap-3 bg-zinc-100 hover:bg-white text-zinc-950 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all active:scale-95 shadow-xl shadow-white/5"
          >
            <Zap size={16} className="fill-current" />
            Reservar mi lugar hoy
          </button>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
