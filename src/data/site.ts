// ─── Constantes globales del sitio ────────────────────────────────────────
// Fuente: docs/01-source-of-truth-el-triangulo.md

export const SITE = {
  name: "El Triangulo",
  fullName: "El Triangulo de Open Door",
  slogan: "Donde la naturaleza y lo urbano se encuentran.",
  tagline:
    "Un desarrollo urbano-natural en Open Door que combina vivienda, servicios, espacios verdes y conectividad estratégica.",
  url: "https://www.eltriangulodeopendoor.com",
  // Datos validados - no modificar sin confirmar en fuente comercial
  data: {
    hectareas: "17",
    ubicacion: "Open Door, Luján",
    productos: "4",
    ventaActiva: "Lotes",
  },
} as const;

export const CONTACTO = {
  whatsapp: "+5491122968397",
  whatsappDisplay: "+54 9 11-2296-8397",
  telefono: "(02323) 1530-0598",
  email: "ventas@eltriangulodeopendoor.com",
  instagram: "https://instagram.com/eltriangulodeopendoor",
  linkedin: "https://linkedin.com/company/eltriangulodeopendoor",
} as const;

export const NAV_ITEMS = [
  { label: "Inicio", href: "/" },
  { label: "Masterplan", href: "/masterplan" },
  { label: "Lotes", href: "/lotes" },
  { label: "Centro Comercial", href: "/centro-comercial" },
  { label: "Ubicación", href: "/ubicacion" },
  { label: "Contacto", href: "/contacto" },
] as const;

export const NAV_SECONDARY = [
  { label: "Townhouses", href: "/townhouses" },
  { label: "Condominios", href: "/condominios" },
  { label: "Preguntas frecuentes", href: "/faq" },
  { label: "Historia del proyecto", href: "/historia" },
  { label: "Avances de obra", href: "/avances" },
] as const;

export const DESARROLLADORES = {
  desarrolla: "Estudio Arquitectónico Santiago Cordeyro y Raíces Propiedades",
  comercializa: "Raíces Propiedades",
  diseno: "Estudio Arquitectónico Santiago Cordeyro",
} as const;
