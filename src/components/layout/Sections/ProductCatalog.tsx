"use client";
import { Section } from "@/components/layout/Section";
import {
  ShoppingCart,
  Maximize2,
  Box,
  ArrowRight,
  ShieldCheck,
  MapPin,
  Scaling,
} from "lucide-react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

// Datos adaptados a Marmolería
interface Product {
  id: string;
  title: string;
  category: string;
  origin: string; // Ej: Italia, Brasil, Argentina
  finish: string; // Ej: Pulido, Leather, Mate
  price: string;
  status: "Disponible" | "Stock Bajo" | "A Pedido";
  thickness: string; // Ej: 2cm, 3cm
}

const stoneProducts: Product[] = [
  {
    id: "MAR-01",
    title: "Mármol Carrara",
    category: "Mármoles",
    origin: "Italia",
    finish: "Pulido Espejo",
    price: "$280 /m²",
    status: "Disponible",
    thickness: "2 cm",
  },
  {
    id: "GRA-02",
    title: "Granito Negro Boreal",
    category: "Granitos",
    origin: "Argentina",
    finish: "Leather",
    price: "$145 /m²",
    status: "Stock Bajo",
    thickness: "2 cm",
  },
  {
    id: "CUA-03",
    title: "Cuarcita Taj Mahal",
    category: "Cuarcitas",
    origin: "Brasil",
    finish: "Apomazado",
    price: "$450 /m²",
    status: "Disponible",
    thickness: "2 cm",
  },
  {
    id: "TRA-04",
    title: "Travertino Nacional",
    category: "Mármoles",
    origin: "Argentina",
    finish: "Mate Tapado",
    price: "$95 /m²",
    status: "A Pedido",
    thickness: "2 cm",
  },
];

interface ProductCatalogProps {
  activeCategory: string;
}

const ProductCatalog: React.FC<ProductCatalogProps> = ({ activeCategory }) => {
  const WHATSAPP_NUMBER = "5493446123456";
  const { addToCart } = useCart();

  const handleWhatsAppOrder = (productTitle: string, productId: string) => {
    const message = `Hola! 👋 Me interesa el material: ${productTitle} (Ref: ${productId}). ¿Podrían pasarme presupuesto por una mesada?`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  const filteredProducts = stoneProducts.filter(
    (product) =>
      activeCategory === "Todos" || product.category === activeCategory,
  );

  return (
    <Section id="catalog" height="content" className="bg-white py-20">
      <div className="flex flex-col gap-10 max-w-7xl mx-auto ">
        {/* GRID DE PRODUCTOS */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="group flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all"
              >
                {/* Visualizador de Color/Textura (Placeholder) */}
                <div className="h-48 bg-gray-100 flex items-center justify-center relative overflow-hidden">
                  <Box className="size-12 text-gray-200 group-hover:scale-110 transition-transform" />
                  <div className="absolute top-3 left-3">
                    <span
                      className={cn(
                        "text-[10px] font-bold uppercase px-2 py-1 rounded bg-white shadow-sm border",
                        product.status === "Disponible"
                          ? "text-green-600 border-green-100"
                          : "text-orange-600 border-orange-100",
                      )}
                    >
                      {product.status}
                    </span>
                  </div>
                </div>

                {/* Info del Material */}
                <div className="p-5 flex-1 flex flex-col">
                  <div className="mb-4">
                    <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">
                      {product.category}
                    </p>
                    <h3 className="text-xl font-bold text-gray-900 leading-tight">
                      {product.title}
                    </h3>
                  </div>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="size-3.5 text-gray-400" />
                      <span>
                        Origen: <strong>{product.origin}</strong>
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Scaling className="size-3.5 text-gray-400" />
                      <span>
                        Espesor: <strong>{product.thickness}</strong>
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Maximize2 className="size-3.5 text-gray-400" />
                      <span>Terminación: {product.finish}</span>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <div className="flex items-end justify-between mb-4">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-gray-400 uppercase font-bold">
                          Precio Ref.
                        </span>
                        <span className="text-2xl font-black text-gray-900">
                          {product.price}
                        </span>
                      </div>
                      <button
                        onClick={() =>
                          handleWhatsAppOrder(product.title, product.id)
                        }
                        className="p-3 bg-gray-100 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                        title="Consultar por WhatsApp"
                      >
                        <ArrowRight className="size-5" />
                      </button>
                    </div>

                    <button
                      onClick={() =>
                        addToCart({
                          id: product.id,
                          title: product.title,
                          price: product.price,
                          category: product.category,
                        })
                      }
                      className="w-full py-3 bg-gray-900 text-white rounded-md text-sm font-bold hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
                    >
                      <ShoppingCart className="size-4" />
                      Añadir a mi Selección
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* BANNER DE GARANTÍA */}
        <div className="bg-blue-50 border border-blue-100 rounded-xl px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center flex-col md:flex-row gap-5 text-center md:text-left">
            <div className="size-12 bg-blue-600 rounded-full flex items-center justify-center shrink-0">
              <ShieldCheck className="size-6 text-white" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-blue-900">
                Calidad de Exportación Certificada
              </h4>
              <p className="text-sm text-blue-700/70">
                Todas nuestras placas son revisadas para evitar fisuras y
                asegurar vetas uniformes.
              </p>
            </div>
          </div>
          <button
            onClick={() =>
              window.open(`https://wa.me/${WHATSAPP_NUMBER}`, "_blank")
            }
            className="whitespace-nowrap px-8 py-4 bg-white text-blue-600 border border-blue-200 font-bold rounded-lg hover:bg-blue-600 hover:text-white transition-all shadow-sm"
          >
            Hablar con un Asesor
          </button>
        </div>
      </div>
    </Section>
  );
};

export default ProductCatalog;
