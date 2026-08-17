// ─── Steps del masterplan interactivo ─────────────────────────────────────
// Fuente: docs/03-referencia-andermatt-transiciones-masterplan.md
// Preparado para evolucionar a ScrollMasterplan sticky inspirado en Andermatt.

export interface MasterplanStat {
  label: string;
  value: string;
}

export interface MasterplanStep {
  id: string;
  label: string;
  eyebrow: string;
  title: string;
  body: string;
  stats?: MasterplanStat[];
  cta?: { label: string; whatsappMsg: string };
  // IDs de capas SVG a iluminar en esta sección
  layerIds: string[];
  // Color activo de la zona en el masterplan
  activeColor: string;
}

export const MASTERPLAN_STEPS: MasterplanStep[] = [
  {
    id: "overview",
    label: "Visión general",
    eyebrow: "El Triángulo de Open Door",
    title: "Un desarrollo urbano-natural de uso mixto",
    body: "17 hectáreas en Open Door, Luján, con vivienda, servicios, espacios verdes y conectividad estratégica integrados en un mismo masterplan.",
    stats: [
      { label: "Hectáreas", value: "17 ha" },
      { label: "Productos", value: "4" },
      { label: "Venta activa", value: "Lotes" },
      { label: "Ubicación", value: "Open Door" },
    ],
    layerIds: ["zona-lotes", "zona-comercial", "zona-townhouses", "zona-condominios", "zona-verde"],
    activeColor: "#016241",
  },
  {
    id: "lotes",
    label: "Lotes",
    eyebrow: "Venta activa",
    title: "Lotes residenciales desde 450 m²",
    body: "La puerta de entrada al masterplan. Parcelas con diseño urbanístico moderno, áreas verdes, senderos peatonales y seguridad electrónica. Bajo costo de mantenimiento.",
    stats: [
      { label: "Superficie desde", value: "450 m²" },
      { label: "Frente promedio", value: "17,30 m" },
      { label: "Financiación", value: "Hasta 60 meses" },
    ],
    cta: {
      label: "Consultar lotes disponibles",
      whatsappMsg:
        "Hola, me interesa conocer la disponibilidad de lotes en El Triángulo de Open Door.",
    },
    layerIds: ["zona-lotes"],
    activeColor: "#C8A96E",
  },
  {
    id: "comercial",
    label: "Centro Comercial",
    eyebrow: "Lanzamiento 2027",
    title: "Un pueblo suburbano caminable",
    body: "15.000 m² totales con gastronomía, salud, coworking, gimnasio, tiendas y servicios. YPF Full operativa desde 2023 como ancla estratégica.",
    stats: [
      { label: "Superficie total", value: "15.000 m²" },
      { label: "Frente comercial", value: "280 m" },
      { label: "Construidos", value: "+9.000 m²" },
    ],
    cta: {
      label: "Consultar oportunidades comerciales",
      whatsappMsg:
        "Hola, me interesa consultar oportunidades en el Centro Comercial de El Triángulo.",
    },
    layerIds: ["zona-comercial"],
    activeColor: "#D4835A",
  },
  {
    id: "verde",
    label: "Espacios verdes",
    eyebrow: "Placemaking",
    title: "Plazas, encuentro y escala humana",
    body: "Plazas públicas, senderos peatonales y espacios de encuentro integrados al masterplan. Un barrio abierto donde la naturaleza no es decoración, es infraestructura.",
    layerIds: ["zona-verde"],
    activeColor: "#5A9E6E",
    cta: {
      label: "Ver ubicación y entorno",
      whatsappMsg: "Hola, me gustaría conocer más sobre El Triángulo de Open Door.",
    },
  },
  {
    id: "townhouses",
    label: "Townhouses",
    eyebrow: "Próximo lanzamiento",
    title: "Dúplex de 140 m² con jardín privado",
    body: "Residencias bifamiliares llave en mano para quienes quieren vivir El Triángulo con una solución habitacional resuelta. Líneas contemporáneas y acabados de calidad.",
    stats: [
      { label: "Superficie", value: "140 m²" },
      { label: "Jardín", value: "Privado" },
    ],
    cta: {
      label: "Recibir novedades",
      whatsappMsg:
        "Hola, me gustaría recibir novedades sobre los Townhouses de El Triángulo de Open Door.",
    },
    layerIds: ["zona-townhouses"],
    activeColor: "#6AACB8",
  },
  {
    id: "condominios",
    label: "Condominios",
    eyebrow: "Preventa 2028",
    title: "1, 2 y 3 dormitorios con amenities propios",
    body: "5 edificios de 3 plantas con jardín central, piscina y cocheras privadas. Unidades de 1, 2 y 3 dormitorios integradas al verde del masterplan.",
    stats: [
      { label: "Edificios", value: "5 de 3 plantas" },
      { label: "Amenities", value: "Piscina y gimnasio" },
    ],
    cta: {
      label: "Inscribirme a preventa",
      whatsappMsg:
        "Hola, me interesa la preventa de los Condominios de El Triángulo de Open Door.",
    },
    layerIds: ["zona-condominios"],
    activeColor: "#B8A0C8",
  },
  {
    id: "accesos",
    label: "Accesos",
    eyebrow: "Conectividad estratégica",
    title: "Entre Luján y Pilar, a ~50 min de CABA",
    body: "Intersección de Ruta Provincial 192 y Av. Juan de Dios Filiberto. Acceso central desde la rotonda, bulevar hacia el interior del masterplan, iluminación LED y fibra óptica.",
    stats: [
      { label: "Distancia a CABA", value: "~50 min" },
      { label: "Acceso", value: "Ruta Prov. 192" },
    ],
    cta: {
      label: "Agendar visita",
      whatsappMsg:
        "Hola, me gustaría agendar una visita a El Triángulo de Open Door.",
    },
    layerIds: ["zona-accesos"],
    activeColor: "#8EA8B4",
  },
];
