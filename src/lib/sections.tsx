export type NavSection = {
  id: string;
  label: string;
  href?: string;
};

export const sections: NavSection[] = [
  {
    id: "hero",
    label: "Inicio",
  },
  {
    id: "planes",
    label: "Planes", // O "Productos" / "Materiales"
  },
  {
    id: "clases",
    label: "Clases",
  },
  {
    id: "instalaciones",
    label: "instalaciones",
  },
  {
    id: "contacto",
    label: "Contacto",
  },
];
