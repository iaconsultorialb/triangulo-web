import { SITE } from "@/data/site";
import { MapPin, Layers, TrendingUp, CheckCircle } from "lucide-react";

const facts = [
  {
    icon: MapPin,
    value: `${SITE.data.hectareas} ha`,
    label: "Predio triangular",
    sub: "Open Door, Luján",
  },
  {
    icon: Layers,
    value: `${SITE.data.productos} productos`,
    label: "en el masterplan",
    sub: "Lotes · Townhouses · Condominios · Comercial",
  },
  {
    icon: CheckCircle,
    value: "Venta activa",
    label: "en lotes residenciales",
    sub: "Desde 450 m²",
  },
  {
    icon: TrendingUp,
    value: "~50 min",
    label: "de CABA",
    sub: "Ruta Prov. 192, entre Luján y Pilar",
  },
];

export default function KeyFacts() {
  return (
    <section
      id="key-facts"
      className="bg-[#284339] py-7 md:py-8"
      aria-label="Datos clave del proyecto"
    >
      <div className="container-max">
        <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-[8px] bg-white/12 lg:grid-cols-4">
          {facts.map((fact, i) => {
            const Icon = fact.icon;
            return (
              <li
                key={i}
                className="bg-[#284339] px-4 py-5 md:px-6"
              >
                <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-[6px] bg-[#DFF9BA]/12">
                  <Icon size={18} className="shrink-0 text-[#DFF9BA]" />
                </div>
                <p className="text-2xl font-bold leading-tight text-white">
                  {fact.value}
                </p>
                <p className="mt-1 text-sm font-medium text-white/76">{fact.label}</p>
                <p className="mt-1 hidden text-xs text-white/56 md:block">{fact.sub}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
