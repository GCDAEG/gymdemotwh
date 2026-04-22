"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Zap, Star, Crown, LucideProps } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "../Section";
import { PlanFlowModal } from "@/components/ui/CartDrawer";

const plans = [
  {
    name: "Básico",
    price: "15.000",
    description: "Ideal para arrancar a moverte.",
    features: [
      "Sala de Musculación",
      "Acceso a Vestuarios",
      "App de Entrenamiento",
      "Sin matrícula",
    ],
    icon: Zap,
    color: "text-zinc-400",
    popular: false,
  },
  {
    name: "Full Pass",
    price: "22.500",
    description: "El más elegido para resultados reales.",
    features: [
      "Musculación + Cardio",
      "Clases Grupales Ilimitadas",
      "Seguimiento de Instructor",
      "Acceso a todas las Sedes",
      "1 Invitado por mes",
    ],
    icon: Star,
    color: "text-emerald-500",
    popular: true,
  },
  {
    name: "Black VIP",
    price: "35.000",
    description: "Experiencia premium sin límites.",
    features: [
      "Todo lo del Plan Full",
      "Plan Nutricional Mensual",
      "Personal Trainer (2 sesiones)",
      "Acceso a Sauna y Spa",
      "Kit de bienvenida de regalo",
    ],
    icon: Crown,
    color: "text-amber-500",
    popular: false,
  },
];

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState<{
    name: string;
    price: string;
    description: string;
    features: string[];
    icon: React.ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;
    color: string;
    popular: boolean;
  } | null>(null);
  const [open, setOpen] = useState(false);
  return (
    <Section id="planes" className=" bg-zinc-950">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Encabezado de Sección */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.4em]">
            Membresías
          </h2>
          <h3 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">
            Elegí tu <span className="text-emerald-500">Nivel.</span>
          </h3>
          <p className="text-zinc-500 max-w-lg mx-auto text-sm font-medium">
            Sin contratos a largo plazo. Cancelás cuando quieras. Empezá hoy
            mismo tu transformación.
          </p>
        </div>
        <PlanFlowModal
          onClose={() => setOpen(false)}
          open={open}
          plan={selectedPlan}
        />
        {/* Grilla de Planes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-[2.5rem] border transition-all duration-500 group ${
                plan.popular
                  ? "bg-zinc-900 border-emerald-500/50 shadow-[0_20px_50px_rgba(16,185,129,0.1)] py-12"
                  : "bg-zinc-950 border-zinc-900 hover:border-zinc-700"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-zinc-950 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                  Más Popular
                </div>
              )}

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <plan.icon className={`size-8 ${plan.color}`} />
                  <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">
                    Al mes
                  </span>
                </div>

                <div>
                  <h4 className="text-2xl font-black text-white uppercase italic">
                    {plan.name}
                  </h4>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="text-4xl font-black text-white">
                      ${plan.price}
                    </span>
                    <span className="text-zinc-600 text-sm font-bold">
                      /ARS
                    </span>
                  </div>
                  <p className="text-zinc-500 text-xs mt-3 font-medium">
                    {plan.description}
                  </p>
                </div>

                <div className="h-px bg-zinc-800 w-full" />

                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-zinc-300"
                    >
                      <div
                        className={`size-5 rounded-full flex items-center justify-center shrink-0 ${plan.popular ? "bg-emerald-500/10" : "bg-zinc-800"}`}
                      >
                        <Check
                          className={`size-3 ${plan.popular ? "text-emerald-500" : "text-zinc-500"}`}
                          strokeWidth={3}
                        />
                      </div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => {
                    setSelectedPlan(plan);
                    setOpen(true);
                  }}
                  className={`w-full h-14 rounded-2xl font-black uppercase text-[11px] tracking-[0.2em] flex items-center justify-center gap-2 transition-all active:scale-95 ${
                    plan.popular
                      ? "bg-emerald-500 hover:bg-emerald-400 text-zinc-950 shadow-xl shadow-emerald-500/20"
                      : "bg-zinc-800 hover:bg-zinc-700 text-white"
                  }`}
                >
                  Elegir Plan
                  {/* Solo mostramos el rayito si es el plan destacado */}
                  {plan.popular && <Zap className="size-4 fill-current" />}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer de sección */}
        <p className="text-center mt-12 text-zinc-600 text-[10px] font-bold uppercase tracking-[0.2em]">
          * Precios sujetos a cambios sin previo aviso. Consultar por grupos
          familiares.
        </p>
      </div>
    </Section>
  );
};

export default PricingSection;
