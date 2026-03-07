export type NavSection = {
  id: string;
  label: string;
  href?: string;
};

export const sections: NavSection[] = [
  { id: "hero", label: "Inicio" },
  { id: "features", label: "Características" },
  { id: "steps", label: "Pasos" },
  { id: "projects", label: "Proyectos" },
  { id: "faq", label: "Preguntas" },
  {
    id: "domain-guide",
    href: "/guide",
    label: "Guía de dominios",
  },
];
