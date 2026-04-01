"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { Section } from "../Section";

const HeroSection = ({ onCategoryChange, activeCategory }: any) => {
  const categories = ["Todos", "Mármoles", "Granitos", "Cuarcitas"];

  return (
    <Section
      height="content"
      id="hero"
      className="pt-24 pb-12 bg-gray-50 border-b border-gray-200 md:pt-24 lg:pt-24"
    >
      <div className="container  ">
        <div className="max-w-4xl">
          {/* Badge de confianza */}
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase mb-6">
            <CheckCircle2 className="size-4" />
            Stock disponible para entrega inmediata
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Mármoles y Granitos de <br />
            <span className="text-blue-600">Alta Calidad en Obra.</span>
          </h1>

          <p className="text-lg text-gray-600 mb-10 max-w-2xl">
            Venta e instalación de mesadas, pisos y revestimientos. Trabajamos
            con materiales nacionales e importados con terminaciones de
            precisión.
          </p>

          {/* Filtros como "Botones" de catálogo */}
          <div className="flex flex-col gap-4">
            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">
              Explorar Catálogo
            </span>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => onCategoryChange(cat)}
                  className={`px-6 py-3 rounded-md text-sm font-bold border transition-all ${
                    activeCategory === cat ||
                    (cat === "Todos" && activeCategory === "Todos")
                      ? "bg-gray-900 text-white border-gray-900"
                      : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
