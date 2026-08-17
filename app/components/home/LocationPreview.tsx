import Image from "next/image";
import Button from "../ui/Button";
import { buildWhatsAppUrl, WHATSAPP_MSGS } from "@/lib/whatsapp";
import { CheckCircle, Coffee, Dumbbell, Stethoscope, ShoppingBag, Fuel } from "lucide-react";

const rubros = [
  { icon: Coffee, label: "Gastronomía" },
  { icon: Dumbbell, label: "Gimnasio" },
  { icon: Stethoscope, label: "Centro de salud" },
  { icon: ShoppingBag, label: "Comercios" },
  { icon: Fuel, label: "YPF Full (operativa)" },
];

const highlights = [
  "15.000 m² de superficie total",
  "Más de 9.000 m² construidos",
  "280 m lineales de frente comercial",
  "50 locales proyectados en 2 etapas",
  "Estacionamiento para 181 autos",
  "4 plazas públicas integradas",
];

export default function LocationPreview() {
  const waUrl = buildWhatsAppUrl(WHATSAPP_MSGS.comercial);

  return (
    <>
      {/* ─── Centro Comercial destacado ─── */}
      <section
        id="centro-comercial-highlight"
        className="section-padding bg-[#284339]"
        aria-label="Centro Comercial"
      >
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Texto */}
            <div>
              <p className="text-[#DFF9BA] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                Centro Comercial · Lanzamiento 2027
              </p>
              <h2 className="text-white mb-4">
                Un pueblo suburbano caminable
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                El corazón urbano del masterplan. Un polo de uso mixto con
                arquitectura inspirada en antiguas estaciones de tren inglesas,
                donde gastronomía, servicios, trabajo y comercio conviven a
                escala humana.
              </p>

              {/* Rubros */}
              <div className="flex flex-wrap gap-2 mb-8">
                {rubros.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 bg-white/10 px-3 py-2 text-xs text-white/80"
                  >
                    <Icon size={13} className="text-[#DFF9BA]" />
                    {label}
                  </div>
                ))}
              </div>

              <Button
                id="comercial-cta-whatsapp"
                variant="secondary"
                href={waUrl}
                external
                className="border-white text-white hover:bg-white/10"
                size="md"
              >
                Consultar oportunidades comerciales
              </Button>
            </div>

            {/* Stats + imagen */}
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/assets/triangulo/centro-comercial-plaza.jpg"
                  alt="Plaza del Centro Comercial de El Triángulo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <ul className="grid grid-cols-2 gap-2">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2">
                    <CheckCircle
                      size={14}
                      className="text-[#DFF9BA] mt-0.5 shrink-0"
                    />
                    <span className="text-xs text-white/70">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Ubicación y conectividad ─── */}
      <section
        id="ubicacion"
        className="section-padding bg-[#F4F3EA]"
        aria-label="Ubicación y conectividad"
      >
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <p className="eyebrow mb-3">Ubicación</p>
              <h2 className="text-[#284339] mb-4">
                Entre Luján y Pilar,
                <br />a ~50 min de CABA
              </h2>
              <p className="text-[#5a5a50] leading-relaxed mb-6">
                Intersección de Ruta Provincial 192 y Avenida Juan de Dios
                Filiberto, Open Door, Partido de Luján. Un corredor de
                crecimiento con acceso rápido y naturaleza real.
              </p>

              <ul className="flex flex-col gap-3 mb-8">
                {[
                  ["Ruta", "Ruta Provincial 192 y Av. Juan de Dios Filiberto"],
                  ["Localidad", "Open Door, Partido de Luján"],
                  ["Distancia a CABA", "Aproximadamente 50 minutos"],
                  ["Entre", "Luján y Pilar"],
                ].map(([label, value]) => (
                  <li key={label} className="flex gap-3 border-b border-[#d8d6c8] pb-3">
                    <span className="text-xs font-semibold text-[#016241] w-28 shrink-0">
                      {label}
                    </span>
                    <span className="text-sm text-[#284339]">{value}</span>
                  </li>
                ))}
              </ul>

              <Button
                id="ubicacion-cta-visita"
                variant="primary"
                href={buildWhatsAppUrl(WHATSAPP_MSGS.visita)}
                external
                size="md"
              >
                Agendar visita al proyecto
              </Button>
            </div>

            {/* Mapa embebido */}
            <div className="w-full aspect-[4/3] overflow-hidden bg-[#d8d6c8]">
              <iframe
                id="mapa-proyecto"
                src="https://www.google.com/maps/d/embed?mid=1O0UkxCXQmd-2pfNEJdqG4mRnbKQJSNc&ehbc=2E312F"
                width="100%"
                height="100%"
                title="Mapa de El Triángulo de Open Door"
                loading="lazy"
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
