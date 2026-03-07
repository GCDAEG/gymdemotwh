import { Roboto, Lora, Montserrat } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto", // ← agregamos variable
});

export const lora = Lora({
  subsets: ["latin"],
  display: "optional",
  variable: "--font-lora",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});