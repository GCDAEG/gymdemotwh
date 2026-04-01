"use client";
import React, { useState, useEffect } from "react";
import { NavSection } from "@/lib/sections";
import Link from "next/link";
import { X, Menu, Phone, ChevronRight } from "lucide-react";
import { useLenis } from "lenis/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { CartDrawer } from "@/components/ui/CartDrawer";

interface MobileMenuProps {
  sections: NavSection[];
  activeSection: string | null;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ sections, activeSection }) => {
  const [open, setOpen] = useState(false);
  const lenis = useLenis();

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [open]);

  const handleScroll = (id: string) => {
    setOpen(false);
    setTimeout(() => {
      lenis?.scrollTo(`#${id}`, { offset: -70, duration: 1.2 });
    }, 300);
  };

  return (
    <>
      {/* HEADER MÓVIL ESTÁNDAR */}
      <nav className="fixed top-0 left-0 w-full h-16 z-[100] flex items-center px-4 bg-white border-b border-gray-200 lg:hidden">
        <div className="w-full flex justify-between items-center">
          <Link
            href="/"
            className="text-lg font-black tracking-tight text-gray-900"
          >
            MARMOLES <span className="text-blue-600 uppercase">Arg</span>
          </Link>

          <div className="flex items-center gap-3">
            <CartDrawer />
            <Button
              variant="ghost"
              onClick={() => setOpen(true)}
              className="p-2 h-auto hover:bg-gray-100"
            >
              <Menu className="size-6 text-gray-900" />
            </Button>
          </div>
        </div>
      </nav>

      {/* MENÚ LATERAL DESPLEGABLE */}
      <AnimatePresence>
        {open && (
          <>
            {/* Fondo oscuro traslúcido */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[110] bg-black/40 backdrop-blur-sm"
            />

            {/* Panel del Menú */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm z-[120] bg-white shadow-xl flex flex-col"
            >
              {/* Header del Menú */}
              <div className="flex justify-between items-center p-6 border-b border-gray-100">
                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                  Navegación
                </span>
                <Button
                  variant="ghost"
                  onClick={() => setOpen(false)}
                  className="p-2 h-auto"
                >
                  <X className="size-6 text-gray-900" />
                </Button>
              </div>

              {/* Enlaces de Secciones */}
              <ul className="flex flex-col p-4 flex-1">
                {sections.map((sec) => {
                  const isActive = activeSection === sec.id;
                  return (
                    <li key={sec.id}>
                      <button
                        onClick={() => handleScroll(sec.id)}
                        className={cn(
                          "w-full flex items-center justify-between p-4 text-lg font-bold transition-all rounded-lg",
                          isActive
                            ? "bg-blue-50 text-blue-600"
                            : "text-gray-700 active:bg-gray-50",
                        )}
                      >
                        {sec.label}
                        <ChevronRight
                          className={cn(
                            "size-5 opacity-30",
                            isActive && "opacity-100",
                          )}
                        />
                      </button>
                    </li>
                  );
                })}
              </ul>

              {/* Footer del Menú con Contacto Directo */}
              <div className="p-6 bg-gray-50 space-y-4">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Atención Inmediata
                  </p>
                  <p className="text-sm font-semibold text-gray-900">
                    Lunes a Sábado — 8:00 a 19:00
                  </p>
                </div>

                <Button
                  className="w-full h-14 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                  onClick={() => handleScroll("contact")}
                >
                  <Phone className="size-4" />
                  Presupuesto por WhatsApp
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
