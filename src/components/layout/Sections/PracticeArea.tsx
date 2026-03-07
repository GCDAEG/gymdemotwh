import { Section } from "@/components/layout/Section";
import { StaggerContainer } from "@/components/motion/StraggerContainer";
import {
  Gavel,
  Globe,
  Globe2,
  GraduationCap,
  HandIcon,
  Users,
} from "lucide-react";
import React from "react";
import { BsBank } from "react-icons/bs";

const lawServices = [
  {
    title: "Civil Law",
    icon: <BsBank className="size-full" />,
    description:
      "Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non",
  },
  {
    title: "Family Law",
    icon: <Users className="size-full" />,
    description:
      "Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non",
  },
  {
    title: "Business Law",
    icon: <HandIcon className="size-full" />,
    description:
      "Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non",
  },
  {
    title: "Education Law",
    icon: <GraduationCap className="size-full" />,
    description:
      "Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non",
  },
  {
    title: "Criminal Law",
    icon: <Gavel className="size-full" />,
    description:
      "Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non",
  },
  {
    title: "Cyber Law",
    icon: <Globe className="size-full" />,
    description:
      "Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non",
  },
] as const;

const PracticeArea = ({}) => {
  return (
    <Section id="practice" height="screen" className="py-16 md:py-20 lg:py-24">
      <StaggerContainer>
        <div className="w-full h-fit  rounded-full flex justify-center items-center mb-14">
          <h2>Áreas de Práctica</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-28 flex-col items-center text-foreground bg-background">
          {lawServices.map((service) => (
            <div
              key={service.title}
              className="group h-full relative rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-all duration-300"
            >
              {/* Icono centrado arriba */}
              <div className="relative pt-10 pb-6 flex justify-center">
                {/* Aquí pondrías el icono correspondiente, ej con lucide-react */}
                {/* <Landmark className="w-16 h-16 text-amber-500" /> */}
                <div className="w-20 h-20 p-2  rounded-[80%] flex items-center justify-center border-4 border-primary/50 text-primary">
                  <div className="w-5/6 text-foreground">{service.icon}</div>
                </div>
              </div>

              {/* Contenido */}
              <div className={`relative px-3 lg:px-4 pb-10 text-center `}>
                <h3
                  className={`text-2xl md:text-2xl font-bold mb-4  whitespace-nowrap`}
                >
                  {service.title.toUpperCase()}
                </h3>
                <p className=" text-primary-foreground/70 text-base mb-8 min-h-20">
                  {service.description}
                </p>

                <button
                  className="
          inline-block px-8 py-3 text-sm font-semibold
          border border-accent-foreground text-primary-foreground
          rounded-lg hover:bg-primary/80  hover:text-black
          transition-all duration-300
        "
                >
                  LEARN MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </StaggerContainer>
    </Section>
  );
};

export default PracticeArea;
