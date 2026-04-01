"use client";
import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import {
  ShoppingBag,
  X,
  Trash2,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const CartDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart, removeFromCart, totalPrice, clearCart } = useCart();
  const WHATSAPP_NUMBER = "5493446123456";

  const handleCheckout = () => {
    if (cart.length === 0) return;

    const productList = cart
      .map((item) => `• ${item.title} - ${item.price}`)
      .join("\n");

    const message = `*SOLICITUD DE PRESUPUESTO - MARMOLES ARG* 🏛️\n\nHola, me interesa consultar por los siguientes materiales:\n\n${productList}\n\n*TOTAL ESTIMADO:* $${totalPrice.toLocaleString()}\n\n_Quedo a la espera de su asesoramiento técnico._`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="group relative flex items-center justify-center p-2 text-gray-600 hover:text-blue-600 transition-colors"
      >
        <ShoppingBag className="size-6" strokeWidth={2} />
        <AnimatePresence>
          {cart.length > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute top-1 right-1 size-4 bg-blue-600 text-[9px] text-white flex items-center justify-center rounded-full font-bold shadow-sm"
            >
              {cart.length}
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[120] bg-black/40 backdrop-blur-sm"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-full max-w-md z-[130] bg-white shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    Tu Selección
                  </span>
                  <h2 className="text-xl font-bold text-gray-900">
                    Materiales
                  </h2>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-900"
                >
                  <X className="size-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center gap-4 text-gray-300">
                    <ShoppingBag className="size-16" strokeWidth={1} />
                    <p className="text-sm font-bold uppercase tracking-widest">
                      No hay materiales seleccionados
                    </p>
                  </div>
                ) : (
                  cart.map((item, index) => (
                    <motion.div
                      key={`${item.id}-${index}`}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-between items-center p-4 border border-gray-100 rounded-lg bg-gray-50/50 group"
                    >
                      <div className="flex flex-col gap-1">
                        <span className="text-[9px] font-bold text-blue-600 uppercase tracking-widest">
                          {item.category}
                        </span>
                        <h4 className="text-sm font-bold text-gray-900">
                          {item.title}
                        </h4>
                        <span className="text-xs font-semibold text-gray-500">
                          {item.price}
                        </span>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-gray-300 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="size-5" />
                      </button>
                    </motion.div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-6 bg-gray-50 border-t border-gray-100 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                      Total Estimado
                    </span>
                    <span className="text-2xl font-black text-gray-900">
                      ${totalPrice.toLocaleString()}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <Button
                      onClick={handleCheckout}
                      className="w-full h-14 bg-blue-600 text-white rounded-md font-bold uppercase text-xs tracking-widest flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-md"
                    >
                      Solicitar Presupuesto
                      <MessageCircle className="size-4 fill-white" />
                    </Button>

                    <button
                      onClick={clearCart}
                      className="w-full text-[10px] uppercase tracking-widest font-bold text-gray-400 hover:text-red-500 transition-colors"
                    >
                      Limpiar lista
                    </button>
                  </div>

                  <p className="text-[10px] text-center text-gray-400 font-medium leading-relaxed">
                    Al solicitar presupuesto, nos pondremos en contacto vía
                    WhatsApp para coordinar medidas, cortes y logística de
                    instalación.
                  </p>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
