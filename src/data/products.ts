// ─── Modelo de datos de productos ─────────────────────────────────────────
// Fuente: docs/01-source-of-truth-el-triangulo.md
// IMPORTANTE: no publicar precios ni cantidades exactas de lotes sin confirmación comercial.

export type EstadoComercial = "venta-activa" | "proximo-lanzamiento" | "preventa" | "consultar";

export interface ProductStat {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  nombre: string;
  tagline: string;
  descripcion: string;
  estado: EstadoComercial;
  estadoLabel: string;
  stats: ProductStat[];
  ctaPrimario: { label: string; whatsappMsg: string };
  ctaSecundario?: { label: string; href: string };
  imagen: string;
  colorZona: string; // color en el masterplan SVG
}

export const PRODUCTS: Product[] = [
  {
    id: "lotes",
    slug: "lotes",
    nombre: "Lotes",
    tagline: "La puerta de entrada al masterplan",
    descripcion:
      "Lotes residenciales desde 450 m² en un desarrollo con espacios verdes, seguridad electrónica y bajo costo de mantenimiento. La oportunidad activa de ser parte de El Triángulo desde el primer día.",
    estado: "venta-activa",
    estadoLabel: "Venta activa",
    stats: [
      { label: "Superficie desde", value: "450 m²" },
      { label: "Frente promedio", value: "17,30 m" },
      { label: "Profundidad promedio", value: "28 m" },
      { label: "Financiación", value: "12 a 60 meses" },
    ],
    ctaPrimario: {
      label: "Consultar lotes disponibles",
      whatsappMsg:
        "Hola, me interesa conocer la disponibilidad y precios de los lotes en El Triángulo de Open Door.",
    },
    ctaSecundario: { label: "Agendar visita", href: "/contacto" },
    imagen: "/assets/triangulo/lotes-drone-actual.jpg",
    colorZona: "#C8A96E",
  },
  {
    id: "centro-comercial",
    slug: "centro-comercial",
    nombre: "Centro Comercial",
    tagline: "El corazón urbano del masterplan",
    descripcion:
      "Un polo comercial de uso mixto con 15.000 m² totales, más de 9.000 m² construidos y 280 metros lineales de frente comercial. Gastronomía, servicios, salud, coworking y comercio en un mismo lugar caminable.",
    estado: "consultar",
    estadoLabel: "Lanzamiento 2027",
    stats: [
      { label: "Superficie total", value: "15.000 m²" },
      { label: "Construidos", value: "+9.000 m²" },
      { label: "Frente comercial", value: "280 m lineales" },
      { label: "YPF Full", value: "Operativa desde 2023" },
    ],
    ctaPrimario: {
      label: "Consultar oportunidades comerciales",
      whatsappMsg:
        "Hola, me interesa consultar oportunidades comerciales en el Centro Comercial de El Triángulo de Open Door.",
    },
    ctaSecundario: { label: "Hablar con un asesor", href: "/contacto" },
    imagen: "/assets/triangulo/centro-comercial-plaza.jpg",
    colorZona: "#D4835A",
  },
  {
    id: "townhouses",
    slug: "townhouses",
    nombre: "Townhouses",
    tagline: "Vivienda llave en mano con jardín propio",
    descripcion:
      "Residencias bifamiliares tipo dúplex de 140 m² con jardín privado, líneas contemporáneas y acabados de alta calidad. Una solución habitacional completa dentro del masterplan.",
    estado: "proximo-lanzamiento",
    estadoLabel: "Próximo lanzamiento",
    stats: [
      { label: "Superficie", value: "140 m²" },
      { label: "Tipología", value: "Dúplex bifamiliar" },
      { label: "Jardín", value: "Privado" },
      { label: "Entrega", value: "Llave en mano" },
    ],
    ctaPrimario: {
      label: "Recibir novedades del lanzamiento",
      whatsappMsg:
        "Hola, me gustaría recibir novedades sobre el lanzamiento de los Townhouses en El Triángulo de Open Door.",
    },
    imagen: "/assets/triangulo/hero-aerea-masterplan.jpg",
    colorZona: "#6AACB8",
  },
  {
    id: "condominios",
    slug: "condominios",
    nombre: "Condominios",
    tagline: "Vivienda multifamiliar integrada al verde",
    descripcion:
      "Unidades de 1, 2 y 3 dormitorios en 5 edificios de 3 plantas con jardín central, piscina, cocheras privadas y amenities propios. Una forma diferente de vivir dentro del masterplan.",
    estado: "preventa",
    estadoLabel: "Preventa 2028",
    stats: [
      { label: "Tipologías", value: "1, 2 y 3 dorm." },
      { label: "Edificios", value: "5 de 3 plantas" },
      { label: "Amenities", value: "Piscina y gimnasio" },
      { label: "Seguridad", value: "Electrónica" },
    ],
    ctaPrimario: {
      label: "Inscribirme a preventa",
      whatsappMsg:
        "Hola, me interesa inscribirme en la preventa de los Condominios de El Triángulo de Open Door.",
    },
    ctaSecundario: { label: "Solicitar dossier", href: "/contacto" },
    imagen: "/assets/triangulo/condominios-render-01.jpg",
    colorZona: "#B8A0C8",
  },
];
