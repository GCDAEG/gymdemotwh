"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { StaggerContainer } from "../../motion/StraggerContainer";
import { FadeIn } from "../../motion/FadeIn";

import { Section } from "@/components/layout/Section";

const faqs = [
  {
    question: "¿En qué áreas del derecho se especializa el estudio?",
    answer:
      "Nuestro estudio brinda asesoramiento en diversas áreas del derecho, incluyendo derecho civil, laboral, comercial y de familia. Analizamos cada caso de manera personalizada para ofrecer la mejor estrategia legal posible.",
  },
  {
    question: "¿Cómo puedo solicitar una consulta inicial?",
    answer:
      "Podés contactarnos a través del formulario de la página, por teléfono o por WhatsApp. Coordinaremos una consulta inicial para conocer tu situación y orientarte sobre los pasos legales a seguir.",
  },
  {
    question: "¿La primera consulta tiene costo?",
    answer:
      "Dependiendo del tipo de caso, la consulta inicial puede ser gratuita o tener un costo reducido. Durante ese primer contacto evaluamos tu situación y te explicamos claramente las opciones disponibles.",
  },
  {
    question: "¿Cuánto puede tardar la resolución de un caso?",
    answer:
      "El tiempo depende del tipo de proceso legal y de la complejidad del caso. Algunos asuntos pueden resolverse en pocos meses, mientras que otros requieren procedimientos más extensos ante la justicia.",
  },
  {
    question: "¿Ofrecen asesoramiento legal a empresas?",
    answer:
      "Sí. Brindamos asesoramiento legal preventivo y representación jurídica para empresas y emprendedores, ayudando a resolver conflictos legales y a tomar decisiones seguras desde el punto de vista jurídico.",
  },
  {
    question: "¿Cómo se calculan los honorarios profesionales?",
    answer:
      "Los honorarios se determinan según la naturaleza del caso, su complejidad y el trabajo requerido. Siempre informamos los costos de manera transparente antes de comenzar cualquier gestión.",
  },
];

const FAQS = () => {
  return (
    <Section height="content" id="faq">
      <StaggerContainer
        className={`min-h-5xl w-full flex flex-col justify-center text-center space-y-12 py-24  px-4 md:px-6 lg:px-28`}
      >
        <FadeIn>
          <h3 className={`text-3xl md:text-4xl font-extrabold font-poppins `}>
            ¿Tenes dudas?
          </h3>
        </FadeIn>

        <FadeIn delay={0.2} className={`flex justify-center `}>
          <div className="w-full max-w-3xl text-foreground/70">
            <Accordion type="single" collapsible className="w-full text-start">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b-accent"
                >
                  <AccordionTrigger className={`md:text-xl pl-2 `}>
                    {faq.question}
                  </AccordionTrigger>

                  <AccordionContent className="pl-2 md:text-lg">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </FadeIn>
      </StaggerContainer>
    </Section>
  );
};

export default FAQS;
