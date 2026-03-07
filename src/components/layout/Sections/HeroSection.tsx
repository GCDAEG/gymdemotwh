import React from "react";

import BackgroundVideo from "../../ui/backgroundVIdeo";
import { Button } from "../../ui/button";
// interface HeroSectionProps {}

const HeroSection = ({}) => {
  return (
    <BackgroundVideo
      className={`flex bg-red-500/30 items-end`}
      src="/backgroundvideo.mp4"
      overlay={"gradient"}
      id="hero"
    >
      {/* Por que no puedo lograr que esta linea ocupe todo el contenedor? (Esta linea es para la IA)*/}
      <div className="flex w-full">
        <div className=" w-full flex justify-end md:justify-center flex-col gap-12 md:text-center pb-5">
          <div className="flex flex-col gap-5 flex-1 justify-end items-center text-accent/85">
            <h1>Defendemos lo que más importa</h1>
            <p className={`text-xl`}>Tu futuro. Tu libertad. Tu familia.</p>
          </div>
          <div className="w-full">
            <Button
              variant={"ghost"}
              className={`rounded-xs text-xl border-2 border-primary text-primary bg-primary/5 h-12 w-52 cursor-pointer hover:bg-primary/90 hover:text-black `}
            >
              Consultar
            </Button>
            {/* <Button className="rounded-xs bg-transparent h-12 w-32 text-foreground">
                Read more
              </Button> */}
          </div>
        </div>

        {/* <div className="absolute inset-0 -z-10 w-full h-full bg-[url('/heroimg.jpg')] bg-center bg-cover">
            <div className="absolute top-0 let-0 h-full w-full bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
          </div> */}
      </div>
    </BackgroundVideo>
  );
};

export default HeroSection;
