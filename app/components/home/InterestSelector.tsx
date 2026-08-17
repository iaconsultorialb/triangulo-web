"use client";

import { useState } from "react";
import { Home, TrendingUp, Store, MapPin } from "lucide-react";
import Button from "../ui/Button";
import { buildWhatsAppUrl, WHATSAPP_MSGS } from "@/lib/whatsapp";

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
        <div className="mb-10">
          <p className="eyebrow mb-3">¿Qué estás buscando?</p>
          <h2 className="text-[#284339]">Encontrá tu lugar en el masterplan</h2>
        </div>

        {/* Tabs */}
        <div
          className="flex flex-wrap gap-2 mb-8"
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
                className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold transition-all duration-200 border ${
                  active === i
                    ? "bg-[#016241] text-white border-[#016241]"
                    : "bg-white text-[#284339] border-[#d8d6c8] hover:border-[#016241] hover:text-[#016241]"
                }`}
              >
                <Icon size={16} />
                {interest.label}
              </button>
            );
          })}
        </div>

        {/* Panel activo */}
        <div
          id={`interest-panel-${current.id}`}
          role="tabpanel"
          aria-labelledby={`interest-tab-${current.id}`}
          className="grid md:grid-cols-2 gap-8 items-center bg-white p-8 md:p-10"
          key={current.id}
          style={{ animation: "fadeInUp 0.3s ease-out" }}
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              {(() => {
                const Icon = current.icon;
                return (
                  <div className="w-10 h-10 bg-[#DFF9BA] flex items-center justify-center">
                    <Icon size={20} className="text-[#016241]" />
                  </div>
                );
              })()}
              <h3 className="text-xl font-bold text-[#284339]">{current.label}</h3>
            </div>
            <p className="text-[#5a5a50] mb-6 leading-relaxed">{current.description}</p>
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

          <ul className="flex flex-col gap-3">
            {current.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#016241] mt-2 shrink-0" />
                <span className="text-sm text-[#284339]">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
