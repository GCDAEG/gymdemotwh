import HeroSection from "../components/layout/Sections/HeroSection";
import FAQS from "../components/layout/Sections/FAQs";
import StatsSection from "../components/layout/Sections/StatsSection";
import PracticeArea from "../components/layout/Sections/PracticeArea";
import WhyChooseUs from "../components/layout/Sections/WhyChooseUs";
import WhatsAppChatInput from "@/components/ui/WhatsAppChatInput";
// export const roboto = Roboto({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-roboto",
// });

// export const lora = Lora({
//   subsets: ["latin"],
//   display: "optional",
//   variable: "--font-lora",
// });

// export const montserrat = Montserrat({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-montserrat",
// });

// export const title = lora.className;
// export const titleH2 = montserrat.className;
// export const base = roboto.className;

export default function Home() {
  return (
    <main className={`min-h-screen w-full font-base bg-background`}>
      <HeroSection />
      <StatsSection />
      <PracticeArea />
      <WhyChooseUs />
      <FAQS />
      <WhatsAppChatInput />
    </main>
  );
}
