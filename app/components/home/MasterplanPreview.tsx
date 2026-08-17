"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { MASTERPLAN_STEPS } from "@/data/masterplan";
import Button from "../ui/Button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { ArrowDown, ChevronRight } from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

// SVG del masterplan triangular con zonas coloreadas
// En la versión final se reemplaza por el SVG real del brochure vectorizado
function MasterplanSVG({ activeIds }: { activeIds: string[] }) {
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
        const isActive = activeIds.includes(zone.id);
        return (
          <path
            key={zone.id}
            id={zone.id}
            d={zone.path}
            fill={isActive ? zone.activeColor : zone.baseColor}
            stroke="#F4F3EA"
            strokeWidth={isActive ? "4" : "2"}
            className="transition-all duration-500"
            opacity={isActive ? 1 : 0.34}
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
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const step = MASTERPLAN_STEPS[activeStep];
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const next = Math.min(
      MASTERPLAN_STEPS.length - 1,
      Math.max(0, Math.floor(latest * MASTERPLAN_STEPS.length))
    );
    setActiveStep(next);
  });

  return (
    <section
      ref={sectionRef}
      id="masterplan-preview"
      className="relative bg-[#173529] text-white lg:min-h-[520vh]"
      aria-label="Masterplan interactivo"
    >
      <div className="container-max py-16 lg:sticky lg:top-[76px] lg:flex lg:h-[calc(100vh-76px)] lg:items-center lg:py-0">
        <div className="grid w-full gap-8 lg:grid-cols-[1.02fr_0.78fr] lg:items-center">
          <div>
            <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#DFF9BA]">
                  Masterplan interactivo
                </p>
                <h2 className="max-w-2xl text-balance text-[clamp(2.2rem,4.8vw,4.75rem)] leading-[1.02] text-white">
                  Explorá el proyecto por capas
                </h2>
              </div>
              <Link
                id="masterplan-ver-completo"
                href="/masterplan"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#DFF9BA] transition-all duration-200 hover:gap-3"
              >
                Ver plano completo <ChevronRight size={16} />
              </Link>
            </div>

            <div className="relative overflow-hidden rounded-[8px] bg-[#F4F3EA] p-4 shadow-[0_24px_70px_-45px_rgba(0,0,0,0.7)]">
              <div className="aspect-[4/3] w-full">
                <MasterplanSVG activeIds={step.layerIds} />
              </div>
              <div className="absolute right-5 top-5 rounded-full bg-[#173529]/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#DFF9BA]">
                {step.label}
              </div>
            </div>
          </div>

          <div>
            <div
              className="mb-7 hidden flex-col gap-2 lg:flex"
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
                  className={`flex items-center gap-3 rounded-[8px] border px-4 py-3 text-left text-sm font-semibold transition-all duration-200 ${
                    activeStep === i
                      ? "border-[#DFF9BA] bg-[#DFF9BA] text-[#173529]"
                      : "border-white/12 bg-white/5 text-white/72 hover:border-white/28 hover:text-white"
                  }`}
                >
                  <span
                    className="h-2.5 w-2.5 shrink-0 rounded-full transition-colors duration-200"
                    style={{
                      backgroundColor:
                        activeStep === i ? "#016241" : "rgba(255,255,255,.32)",
                    }}
                  />
                  {s.label}
                </button>
              ))}
            </div>

            <motion.div
              id={`masterplan-panel-${step.id}`}
              role="tabpanel"
              aria-labelledby={`masterplan-tab-${step.id}`}
              key={step.id}
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.38, ease: "easeOut" }}
              className="rounded-[8px] border border-white/12 bg-white/8 p-6 backdrop-blur-sm md:p-8"
            >
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-[#DFF9BA]">
                {step.eyebrow}
              </p>
              <h3 className="mb-4 text-balance text-[clamp(1.65rem,3.4vw,2.65rem)] font-bold leading-tight text-white">
                {step.title}
              </h3>
              <p className="mb-6 text-base leading-8 text-white/78">
                {step.body}
              </p>

              {step.stats && (
                <ul className="mb-6 grid grid-cols-2 gap-px overflow-hidden rounded-[8px] bg-white/14">
                  {step.stats.map((s) => (
                    <li
                      key={s.label}
                      className="bg-[#173529] p-4"
                    >
                      <p className="text-xs text-white/56">{s.label}</p>
                      <p className="mt-1 text-lg font-bold text-white">
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
                  className="bg-[#DFF9BA] !text-[#173529] hover:bg-white"
                >
                  {step.cta.label}
                </Button>
              )}
            </motion.div>

            <div className="mt-8 hidden items-center gap-3 text-sm text-white/55 lg:flex">
              <ArrowDown size={16} />
              Scrolleá para recorrer las capas del proyecto
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
