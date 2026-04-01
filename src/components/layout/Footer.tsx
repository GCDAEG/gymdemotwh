"use client";
import {
  ArrowUpRight,
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  Hammer,
  Truck,
} from "lucide-react";
import { Button } from "../ui/button";
import { useLenis } from "lenis/react";
import { sections } from "@/lib/sections";
import Link from "next/link";

export function FooterSection() {
  const lenis = useLenis();

  return (
    <footer className="bg-white text-gray-900 border-t border-gray-200 pt-20 pb-10 px-6 md:px-12 lg:px-20 flex flex-col gap-16 overflow-hidden">
      {/* SECCIÓN SUPERIOR */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="flex flex-col gap-8">
          <Link href="/" className="group">
            <span className="text-3xl font-black tracking-tighter uppercase">
              MARMOLES <span className="text-blue-600">ARG</span>
            </span>
          </Link>

          <h3 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight max-w-md">
            Transformamos la piedra en <br />
            <span className="text-gray-400">el alma de tu hogar.</span>
          </h3>

          <div className="flex flex-wrap gap-4">
            <Button
              onClick={() => lenis?.scrollTo("#contact")}
              className="bg-blue-600 text-white hover:bg-gray-900 rounded-md px-8 py-6 h-auto font-bold uppercase tracking-widest text-xs transition-all"
            >
              Pedir Presupuesto <ArrowUpRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>

        {/* Directorio de Enlaces */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
          {/* Navegación */}
          <div className="flex flex-col gap-6">
            <h4 className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-400">
              Empresa
            </h4>
            <ul className="flex flex-col gap-4 text-sm font-bold">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() =>
                      lenis?.scrollTo(`#${section.id}`, { offset: -70 })
                    }
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto Real */}
          <div className="flex flex-col gap-6">
            <h4 className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-400">
              Contacto
            </h4>
            <ul className="flex flex-col gap-5">
              <li className="flex flex-col gap-1">
                <span className="text-[9px] font-bold uppercase text-gray-400">
                  Ventas
                </span>
                <span className="text-sm font-semibold italic">
                  info@marmolesarg.com.ar
                </span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-[9px] font-bold uppercase text-gray-400">
                  WhatsApp
                </span>
                <span className="text-sm font-semibold">+54 9 3446 000000</span>
              </li>
            </ul>
          </div>

          {/* Redes */}
          <div className="flex flex-col gap-6">
            <h4 className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-400">
              Seguinos
            </h4>
            <div className="flex gap-3">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="size-10 border border-gray-200 rounded-md flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
                >
                  <Icon className="size-4" strokeWidth={2} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MARQUESINA DE MATERIALES */}
      <div className="w-full border-y border-gray-100 py-8 select-none">
        <div className="flex overflow-hidden gap-12 font-black text-xl md:text-2xl tracking-tighter uppercase whitespace-nowrap text-gray-200">
          <div className="flex gap-12 animate-marquee items-center">
            <span>Mármol Carrara</span>{" "}
            <div className="size-2 bg-blue-600 rounded-full" />
            <span>Granito Negro</span>{" "}
            <div className="size-2 bg-blue-600 rounded-full" />
            <span>Mesadas de Cocina</span>{" "}
            <div className="size-2 bg-blue-600 rounded-full" />
            <span>Cuarcitas Naturales</span>{" "}
            <div className="size-2 bg-blue-600 rounded-full" />
            <span>Instalación en Obra</span>{" "}
            <div className="size-2 bg-blue-600 rounded-full" />
          </div>
          <div
            className="flex gap-12 animate-marquee items-center"
            aria-hidden="true"
          >
            <span>Mármol Carrara</span>{" "}
            <div className="size-2 bg-blue-600 rounded-full" />
            <span>Granito Negro</span>{" "}
            <div className="size-2 bg-blue-600 rounded-full" />
            <span>Mesadas de Cocina</span>{" "}
            <div className="size-2 bg-blue-600 rounded-full" />
            <span>Cuarcitas Naturales</span>{" "}
            <div className="size-2 bg-blue-600 rounded-full" />
            <span>Instalación en Obra</span>{" "}
            <div className="size-2 bg-blue-600 rounded-full" />
          </div>
        </div>
      </div>

      {/* FOOTER FINAL */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-gray-100 pt-10">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
            <ShieldCheck className="size-3 text-blue-600" />
            <span>Materiales Certificados</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
            <Truck className="size-3 text-blue-600" />
            <span>Logística Propia</span>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end gap-1">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            © 2026 Marmoles Arg | Gualeguaychú, Entre Ríos
          </p>
          <p className="text-[9px] font-bold text-gray-300 uppercase tracking-widest hover:text-blue-600 transition-colors cursor-pointer">
            Diseño por TUWEBHOY
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </footer>
  );
}
