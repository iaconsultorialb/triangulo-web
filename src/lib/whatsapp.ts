// ─── Helpers de WhatsApp ───────────────────────────────────────────────────
import { CONTACTO } from "@/data/site";

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${CONTACTO.whatsapp}?text=${encoded}`;
}

export const WHATSAPP_MSGS = {
  default:
    "Hola, me interesa recibir más información sobre El Triángulo de Open Door.",
  lotes:
    "Hola, me interesa conocer la disponibilidad de lotes en El Triángulo de Open Door.",
  comercial:
    "Hola, me interesa consultar oportunidades comerciales en El Triángulo de Open Door.",
  townhouses:
    "Hola, me gustaría recibir novedades sobre los Townhouses de El Triángulo de Open Door.",
  condominios:
    "Hola, me interesa la preventa de los Condominios de El Triángulo de Open Door.",
  visita:
    "Hola, me gustaría agendar una visita al proyecto El Triángulo de Open Door.",
  inversion:
    "Hola, me interesa hablar con un asesor de inversión sobre El Triángulo de Open Door.",
} as const;
