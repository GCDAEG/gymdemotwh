import React from "react";
import { Section } from "../Section";
import Image from "next/image";

interface ExampleMessageProps {}

const ExampleMessage: React.FC<ExampleMessageProps> = ({}) => {
  return (
    <Section height="content" className="bg-gray-900 py-2 md:py-2 lg:py-2">
      <div className="h-32 w-full text-gray-200 justify-evenly items-center flex flex-col md:flex-row">
        <p>Informacion falsa y de relleno.</p>
        <a
          href="https://tuwebhoy-chi.vercel.app/"
          target="_blank"
          className="w-52 h-12 relative"
        >
          <Image
            src={"https://tuwebhoy-chi.vercel.app/twhlogo.svg"}
            alt={"tuwebhoy"}
            fill
            className="object-container  border-white/20"
          />
        </a>
      </div>
    </Section>
  );
};

export default ExampleMessage;
