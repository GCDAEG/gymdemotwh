"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  X,
  Check,
  Send,
  ChevronLeft,
  Target,
  Clock,
  User,
  Zap,
  LucideProps,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site/siteConfig";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = "5493446000000";

export const PlanFlowModal = ({
  plan,
  open,
  onClose,
}: {
  plan: {
    name: string;
    price: string;
    description: string;
    features: string[];
    icon: React.ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;
    color: string;
    popular: boolean;
  } | null;
  open: boolean;
  onClose: () => void;
}) => {
  const { brand } = siteConfig;
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: "", goal: "", schedule: "" });

  if (!plan) return null;

  const generateMessage = () => {
    return `⚡ *NUEVA INSCRIPCIÓN* ⚡\n\nHola, quiero arrancar a entrenar:\n\n🔥 *PLAN:* ${plan.name}\n💰 *Precio:* $${Number(plan.price).toLocaleString("es-AR")}/mes\n\n👤 *Nombre:* ${form.name}\n🎯 *Objetivo:* ${form.goal}\n⏰ *Turno:* ${form.schedule}\n\n¿Me pasan los datos para abonar y empezar?`;
  };

  const handleSend = () => {
    const message = generateMessage();
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
    onClose();
    setTimeout(() => setStep(1), 500); // Reset después de cerrar
  };

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  // Variantes de animación para deslizar el contenido
  const slideVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: { opacity: 0, x: -20, transition: { duration: 0.2 } },
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            className="w-full max-w-md bg-zinc-950 rounded-[2rem] border border-zinc-800 overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh]"
          >
            {/* PROGRESS BAR */}
            <div className="absolute top-0 left-0 w-full h-1 bg-zinc-900">
              <motion.div
                className="h-full bg-emerald-500"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* HEADER */}
            <div className="flex items-center justify-between p-5 border-b border-zinc-900/50 pt-6">
              <div className="flex items-center gap-3">
                {step > 1 && (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="p-1 text-zinc-500 hover:text-white transition-colors"
                  >
                    <ChevronLeft size={24} />
                  </button>
                )}
                <div>
                  <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest leading-none mb-1">
                    Paso {step} de {totalSteps}
                  </p>
                  <h3 className="font-black text-white italic text-lg leading-none uppercase">
                    Plan {plan.name}
                  </h3>
                </div>
              </div>
              <button
                onClick={onClose}
                className="size-8 flex items-center justify-center bg-zinc-900 rounded-full text-zinc-500 hover:text-white transition-colors"
              >
                <X size={18} strokeWidth={3} />
              </button>
            </div>

            {/* BODY DINÁMICO */}
            <div className="p-6 overflow-y-auto flex-1">
              <AnimatePresence mode="wait">
                {/* PASO 1: NOMBRE */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    variants={slideVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <div className="size-12 bg-zinc-900 rounded-2xl flex items-center justify-center mb-4">
                        <User className="size-6 text-emerald-500" />
                      </div>
                      <h4 className="text-2xl font-black text-white italic uppercase tracking-tight">
                        ¿Cómo te llamás?
                      </h4>
                      <p className="text-sm text-zinc-400 font-medium">
                        Necesitamos tu nombre para registrarte en el sistema.
                      </p>
                    </div>
                    <input
                      autoFocus
                      className="w-full p-5 rounded-2xl bg-zinc-900 border border-zinc-800 text-white font-bold text-lg focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-zinc-600 placeholder:font-medium"
                      placeholder="Ej: Gonzalo"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      onKeyDown={(e) =>
                        e.key === "Enter" && form.name.trim() && setStep(2)
                      }
                    />
                    <Button
                      onClick={() => setStep(2)}
                      disabled={!form.name.trim()}
                      className="w-full h-14 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black uppercase tracking-widest text-xs rounded-xl disabled:opacity-50"
                    >
                      Continuar <ChevronRight className="size-4 ml-1" />
                    </Button>
                  </motion.div>
                )}

                {/* PASO 2: OBJETIVO */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    variants={slideVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <div className="size-12 bg-zinc-900 rounded-2xl flex items-center justify-center mb-4">
                        <Target className="size-6 text-emerald-500" />
                      </div>
                      <h4 className="text-2xl font-black text-white italic uppercase tracking-tight">
                        ¿Cuál es tu objetivo?
                      </h4>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        "Ganar músculo",
                        "Bajar peso",
                        "Rendimiento",
                        "Salud / Bienestar",
                      ].map((g) => (
                        <button
                          key={g}
                          onClick={() => {
                            setForm({ ...form, goal: g });
                            setStep(3);
                          }}
                          className="flex flex-col items-center justify-center text-center p-4 h-24 bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-emerald-500 hover:bg-zinc-800 transition-all active:scale-95 group"
                        >
                          <span className="font-bold text-zinc-300 group-hover:text-white text-sm">
                            {g}
                          </span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* PASO 3: HORARIO */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    variants={slideVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <div className="size-12 bg-zinc-900 rounded-2xl flex items-center justify-center mb-4">
                        <Clock className="size-6 text-emerald-500" />
                      </div>
                      <h4 className="text-2xl font-black text-white italic uppercase tracking-tight">
                        ¿Cuándo venís?
                      </h4>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      {[
                        "Turno Mañana (7hs - 12hs)",
                        "Turno Tarde (13hs - 17hs)",
                        "Turno Noche (18hs - 22hs)",
                        "Flexible / Rotativo",
                      ].map((s) => (
                        <button
                          key={s}
                          onClick={() => {
                            setForm({ ...form, schedule: s });
                            setStep(4);
                          }}
                          className="flex items-center p-5 bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-emerald-500 transition-all active:scale-95 text-left group"
                        >
                          <span className="font-bold text-zinc-300 group-hover:text-white flex-1">
                            {s}
                          </span>
                          <ChevronRight className="size-4 text-zinc-600 group-hover:text-emerald-500 transition-colors" />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* PASO 4: PREVIEW Y ENVÍO */}
                {step === 4 && (
                  <motion.div
                    key="step4"
                    variants={slideVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <div className="size-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-4">
                        <Zap className="size-6 text-emerald-500" />
                      </div>
                      <h4 className="text-2xl font-black text-white italic uppercase tracking-tight">
                        ¡Todo Listo!
                      </h4>
                      <p className="text-sm text-zinc-400 font-medium">
                        Revisá tu solicitud antes de enviarla al gimnasio.
                      </p>
                    </div>

                    {/* Falso ticket de WhatsApp */}
                    <div className="bg-[#111b21] p-5 rounded-2xl text-[13px] text-zinc-200 whitespace-pre-line border border-zinc-800 shadow-inner font-medium">
                      {generateMessage()}
                    </div>

                    <Button
                      onClick={handleSend}
                      className="w-full h-14 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 rounded-xl font-black uppercase text-xs tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 active:scale-95"
                    >
                      <Send className="size-4" /> Enviar Inscripción
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
