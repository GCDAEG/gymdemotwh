"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  height?: "screen" | "content";
  lazy?: boolean;
  animate?: "fade" | "none";
  threshold?: number;
};

export function Section({
  id,
  children,
  className,
  height = "content",
  lazy = false,
  animate = "none",
  threshold = 0.1,
}: SectionProps) {
  const ref = useRef<HTMLElement>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-80px",
    amount: threshold,
  });

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "relative w-full px-5 md:px-6 lg:px-28",
        height === "screen" && "min-h-[calc(100vh-var(--navbar-height))]",
        className,
      )}
    >
      <div className={cn(animate === "fade" && isInView && "animate-fade-in")}>
        {!lazy || isInView ? children : null}
      </div>
    </section>
  );
}
