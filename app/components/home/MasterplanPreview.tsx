"use client";

import { useState } from "react";
import Link from "next/link";
import { MASTERPLAN_STEPS } from "@/data/masterplan";
import Button from "../ui/Button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { ChevronRight } from "lucide-react";

// SVG del masterplan triangular con zonas coloreadas
// En la versión final se reemplaza por el SVG real del brochure vectorizado
function MasterplanSVG({ activeId }: { activeId: string }) {
  const zones = [
    {
      id: "zona-lotes",
      label: "Lotes",
      path: "M 60 80 L 200 50 L 320 120 L 280 260 L 140 270 L 60 180 Z",
      baseColor: "#E8DEC8",
      activeColor: "#C8A96E",
    },
    {
      id: "zona-comercial",
      label: "Centro Comercial",
      path: "M 320 120 L 420 80 L 480 200 L 390 270 L 280 260 Z",
      baseColor: "#EDD8C8",
      activeColor: "#D4835A",
    },
    {
      id: "zona-townhouses",
      label: "Townhouses",
      path: "M 60 180 L 140 270 L 100 360 L 40 300 Z",
      baseColor: "#C8DDE4",
      activeColor: "#6AACB8",
    },
    {
      id: "zona-condominios",
      label: "Condominios",
      path: "M 280 260 L 390 270 L 370 380 L 220 380 L 200 330 Z",
      baseColor: "#D8CCDE",
      activeColor: "#B8A0C8",
    },
    {
      id: "zona-verde",
      label: "Espacios verdes",
      path: "M 140 270 L 280 260 L 200 330 L 220 380 L 100 360 Z",
      baseColor: "#C8DEC8",
      activeColor: "#5A9E6E",
    },
    {
      id: "zona-accesos",
      label: "Accesos",
      path: "M 30 150 L 60 80 L 60 180 L 40 300 L 20 260 Z",
      baseColor: "#DCDCD4",
      activeColor: "#8EA8B4",
    },
  ];

  return (
    <svg
      viewBox="0 0 520 420"
      aria-label="Masterplan de El Triángulo de Open Door"
      role="img"
      className="w-full h-full"
    >
      {/* Fondo */}
      <rect width="520" height="420" fill="#F4F3EA" rx="2" />

      {/* Calles */}
      <g stroke="#E0DDD0" strokeWidth="3" fill="none">
        <line x1="60" y1="80" x2="420" y2="80" />
        <line x1="60" y1="180" x2="390" y2="270" />
        <line x1="200" y1="50" x2="200" y2="380" />
        <line x1="280" y1="260" x2="280" y2="380" />
      </g>

      {/* Zonas */}
      {zones.map((zone) => {
        const isActive =
          activeId === zone.id ||
          activeId === "overview" ||
          activeId === "cta";
        return (
          <path
            key={zone.id}
            id={zone.id}
            d={zone.path}
            fill={isActive ? zone.activeColor : zone.baseColor}
            stroke="#F4F3EA"
            strokeWidth="2"
            className="transition-all duration-500"
            aria-label={zone.label}
          />
        );
      })}

      {/* Labels */}
      <g className="pointer-events-none" fontSize="9" fontFamily="Inter, sans-serif" fill="#284339" opacity="0.7">
        <text x="170" y="170">Lotes</text>
        <text x="360" y="190">Comercial</text>
        <text x="60" y="290">TH</text>
        <text x="295" y="330">Condominios</text>
        <text x="165" y="315">Verde</text>
      </g>

      {/* Marcador norte */}
      <g transform="translate(480, 30)" aria-label="Norte">
        <circle r="10" fill="#284339" opacity="0.15" />
        <text x="0" y="4" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#284339" opacity="0.6">N</text>
      </g>

      {/* Escala */}
      <g transform="translate(20, 400)" aria-label="Escala">
        <line x1="0" y1="0" x2="50" y2="0" stroke="#284339" strokeWidth="1.5" opacity="0.4" />
        <text x="25" y="-4" textAnchor="middle" fontSize="7" fill="#284339" opacity="0.4">100m</text>
      </g>
    </svg>
  );
}

export default function MasterplanPreview() {
  const [activeStep, setActiveStep] = useState(0);
  const step = MASTERPLAN_STEPS[activeStep];

  return (
    <section
      id="masterplan-preview"
      className="section-padding bg-[#F4F3EA]"
      aria-label="Masterplan interactivo"
    >
      <div className="container-max">
        {/* Header de sección */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <div>
            <p className="eyebrow mb-3">Masterplan</p>
            <h2 className="text-[#284339]">Explorá el proyecto</h2>
          </div>
          <Link
            id="masterplan-ver-completo"
            href="/masterplan"
            className="flex items-center gap-1 text-sm text-[#016241] font-semibold hover:gap-2 transition-all duration-200"
          >
            Ver masterplan completo <ChevronRight size={16} />
          </Link>
        </div>

        {/* Layout desktop: mapa izquierda / panel derecha */}
        <div className="grid lg:grid-cols-[55%_1fr] gap-6 items-start">
          {/* Mapa */}
          <div className="bg-white p-4 shadow-sm aspect-[4/3] md:aspect-auto md:h-[480px] flex items-center">
            <MasterplanSVG activeId={step.layerIds[0] ?? "overview"} />
          </div>

          {/* Panel */}
          <div className="flex flex-col gap-0">
            {/* Tabs verticales */}
            <div
              className="flex lg:flex-col gap-1 flex-wrap mb-4 lg:mb-0"
              role="tablist"
              aria-label="Secciones del masterplan"
            >
              {MASTERPLAN_STEPS.map((s, i) => (
                <button
                  key={s.id}
                  id={`masterplan-tab-${s.id}`}
                  role="tab"
                  aria-selected={activeStep === i}
                  aria-controls={`masterplan-panel-${s.id}`}
                  onClick={() => setActiveStep(i)}
                  className={`flex items-center gap-2 px-4 py-3 text-sm font-medium text-left transition-all duration-200 border-l-2 ${
                    activeStep === i
                      ? "border-[#016241] bg-white text-[#016241] font-semibold"
                      : "border-transparent text-[#5a5a50] hover:text-[#016241] hover:bg-white/50"
                  }`}
                >
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{
                      backgroundColor:
                        activeStep === i ? step.activeColor : "#d8d6c8",
                    }}
                  />
                  {s.label}
                </button>
              ))}
            </div>

            {/* Contenido del step activo */}
            <div
              id={`masterplan-panel-${step.id}`}
              role="tabpanel"
              aria-labelledby={`masterplan-tab-${step.id}`}
              className="bg-white p-6 lg:mt-1 flex-1"
              key={step.id}
              style={{ animation: "fadeInUp 0.25s ease-out" }}
            >
              <p className="eyebrow mb-2">{step.eyebrow}</p>
              <h3 className="text-lg font-bold text-[#284339] mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-[#5a5a50] leading-relaxed mb-4">
                {step.body}
              </p>

              {step.stats && (
                <ul className="grid grid-cols-2 gap-2 mb-5">
                  {step.stats.map((s) => (
                    <li
                      key={s.label}
                      className="bg-[#F4F3EA] p-3"
                    >
                      <p className="text-xs text-[#5a5a50]">{s.label}</p>
                      <p className="text-sm font-bold text-[#284339]">
                        {s.value}
                      </p>
                    </li>
                  ))}
                </ul>
              )}

              {step.cta && (
                <Button
                  id={`masterplan-cta-${step.id}`}
                  variant="primary"
                  href={buildWhatsAppUrl(step.cta.whatsappMsg)}
                  external
                  size="sm"
                >
                  {step.cta.label}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
