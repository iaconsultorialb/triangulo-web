"use client";

import { useState } from "react";
import { Home, TrendingUp, Store, MapPin } from "lucide-react";
import Button from "../ui/Button";
import { buildWhatsAppUrl, WHATSAPP_MSGS } from "@/lib/whatsapp";
import { motion } from "framer-motion";

const interests = [
  {
    id: "vivir",
    icon: Home,
    label: "Quiero vivir",
    description:
      "Encontrá tu lugar en Open Door. Lotes desde 450 m², townhouses y condominios en un entorno natural con servicios.",
    bullets: [
      "Lotes residenciales con venta activa",
      "Urbanización moderna con plazas y senderos",
      "Seguridad electrónica",
      "Bajos costos de mantenimiento",
    ],
    cta: { label: "Ver lotes disponibles", msg: WHATSAPP_MSGS.lotes },
  },
  {
    id: "invertir",
    icon: TrendingUp,
    label: "Quiero invertir",
    description:
      "Un masterplan completo con etapas claras. Lotes activos y oportunidades en el polo comercial en desarrollo.",
    bullets: [
      "Masterplan de uso mixto validado",
      "YPF Full operativa como ancla",
      "Centro comercial en desarrollo",
      "Financiación en pesos hasta 60 meses",
    ],
    cta: { label: "Hablar con un asesor", msg: WHATSAPP_MSGS.inversion },
  },
  {
    id: "local",
    icon: Store,
    label: "Quiero un local",
    description:
      "280 metros lineales de frente comercial y +9.000 m² construidos en un polo de uso mixto con flujo validado.",
    bullets: [
      "15.000 m² totales de desarrollo comercial",
      "50 locales proyectados en 2 etapas",
      "Gastronomía, salud, coworking y servicios",
      "YPF Full como prueba de tracción",
    ],
    cta: { label: "Consultar oportunidades", msg: WHATSAPP_MSGS.comercial },
  },
  {
    id: "visitar",
    icon: MapPin,
    label: "Quiero visitar",
    description:
      "Agendá una visita al proyecto. Conocé el predio, la infraestructura avanzada y el entorno de Open Door.",
    bullets: [
      "A ~50 min de CABA",
      "Ruta Provincial 192 y Av. Juan de Dios Filiberto",
      "Visitas con asesor comercial",
      "Sin compromiso",
    ],
    cta: { label: "Agendar visita", msg: WHATSAPP_MSGS.visita },
  },
];

export default function InterestSelector() {
  const [active, setActive] = useState(0);
  const current = interests[active];

  return (
    <section
      id="interest-selector"
      className="section-padding bg-[#F4F3EA]"
      aria-label="Selector de interés"
    >
      <div className="container-max">
        <div className="mb-10 grid gap-5 lg:grid-cols-[0.82fr_1fr] lg:items-end">
          <div>
            <p className="section-kicker mb-3">¿Qué estás buscando?</p>
            <h2 className="max-w-2xl text-balance text-[#284339]">
              Encontrá tu camino dentro del masterplan
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-[#5a5a50] lg:justify-self-end">
            La web tiene que ordenar la consulta. Elegí una intención y el sitio
            te lleva al producto, argumento y canal correcto.
          </p>
        </div>

        <div
          className="mb-6 grid grid-cols-2 gap-2 md:grid-cols-4"
          role="tablist"
          aria-label="Tipos de interés"
        >
          {interests.map((interest, i) => {
            const Icon = interest.icon;
            return (
              <button
                key={interest.id}
                id={`interest-tab-${interest.id}`}
                role="tab"
                aria-selected={active === i}
                aria-controls={`interest-panel-${interest.id}`}
                onClick={() => setActive(i)}
                className={`flex min-h-[86px] flex-col items-start justify-between rounded-[8px] border px-4 py-4 text-left text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#016241] ${
                  active === i
                    ? "border-[#016241] bg-[#016241] text-white shadow-[0_18px_34px_-28px_rgba(1,98,65,0.8)]"
                    : "border-[#d8d6c8] bg-white/64 text-[#284339] hover:border-[#016241]/45 hover:bg-white"
                }`}
              >
                <Icon size={18} />
                {interest.label}
              </button>
            );
          })}
        </div>

        <motion.div
          id={`interest-panel-${current.id}`}
          role="tabpanel"
          aria-labelledby={`interest-tab-${current.id}`}
          key={current.id}
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="grid overflow-hidden rounded-[8px] border border-[#d8d6c8] bg-white md:grid-cols-[0.9fr_1fr]"
        >
          <div className="border-b border-[#d8d6c8] p-6 md:border-b-0 md:border-r md:p-8">
            <div className="mb-5 flex items-center gap-3">
              {(() => {
                const Icon = current.icon;
                return (
                  <div className="flex h-11 w-11 items-center justify-center rounded-[8px] bg-[#DFF9BA]">
                    <Icon size={20} className="text-[#016241]" />
                  </div>
                );
              })()}
              <h3 className="text-2xl font-bold text-[#284339]">{current.label}</h3>
            </div>
            <p className="mb-7 text-base leading-8 text-[#5a5a50]">
              {current.description}
            </p>
            <Button
              id={`interest-cta-${current.id}`}
              variant="primary"
              href={buildWhatsAppUrl(current.cta.msg)}
              external
              size="md"
            >
              {current.cta.label}
            </Button>
          </div>

          <ul className="grid gap-px bg-[#d8d6c8] md:grid-cols-2">
            {current.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3 bg-white px-6 py-5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#016241]" />
                <span className="text-sm leading-7 text-[#284339]">{bullet}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
