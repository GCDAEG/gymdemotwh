"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X, MessageCircleWarning, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function WhatsAppChatInput() {
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const WHATSAPP_NUMBER = "5493446000000"; // Tu número configurado

  const handleSend = () => {
    if (!message.trim()) return;
    const encoded = encodeURIComponent(message.trim());
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank");
    setMessage("");
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    if (!isOpen) return;
    const input = containerRef.current?.querySelector("input");
    if (input instanceof HTMLInputElement) input.focus();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className="fixed bottom-6 right-6 z-[150] flex flex-col items-end gap-3"
    >
      {/* Tooltip de "Hablemos" que aparece solo cuando el chat está cerrado */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 5 }}
            className="bg-zinc-900 border border-zinc-800 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-xl shadow-2xl flex items-center gap-2 mb-[-8px] mr-2"
          >
            <span className="relative flex size-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full size-2 bg-emerald-500"></span>
            </span>
            ¿Dudas? Escribinos
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-3">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="flex items-center gap-2 bg-zinc-950/95 backdrop-blur-xl border border-zinc-800 shadow-[0_0_40px_rgba(0,0,0,0.5)] rounded-[1.25rem] px-3 py-2 min-w-[280px] max-w-[400px]"
            >
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ej: ¿Hay lugar en Crossfit hoy?"
                className="border-0 bg-transparent text-white focus-visible:ring-0 focus-visible:ring-offset-0 text-sm placeholder:text-zinc-600 font-medium h-10"
              />

              <Button
                onClick={handleSend}
                disabled={!message.trim()}
                size="icon"
                className={cn(
                  "h-10 w-10 rounded-xl transition-all shrink-0",
                  message.trim()
                    ? "bg-emerald-500 text-zinc-950 hover:bg-emerald-400 shadow-lg shadow-emerald-500/20 active:scale-90"
                    : "bg-zinc-900 text-zinc-700",
                )}
              >
                <Send className="size-4" strokeWidth={2.5} />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsOpen((v) => !v)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={cn(
            "size-14 rounded-[1.25rem] flex items-center justify-center shadow-2xl transition-colors duration-300 border",
            isOpen
              ? "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white"
              : "bg-[#25D366] border-[#25D366] text-white hover:bg-[#20ba5a] shadow-[#25d366]/30",
          )}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isOpen ? "close" : "chat"}
              initial={{ opacity: 0, rotate: -45, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 45, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? (
                <X className="size-6" strokeWidth={2.5} />
              ) : (
                <MessageCircleWarning className="size-6" strokeWidth={2.5} />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
}
