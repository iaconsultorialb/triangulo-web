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
      className="bg-[#284339] py-10 md:py-12"
      aria-label="Datos clave del proyecto"
    >
      <div className="container-max">
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-white/10">
          {facts.map((fact, i) => {
            const Icon = fact.icon;
            return (
              <li
                key={i}
                className="flex flex-col items-center text-center px-4 md:px-8 py-4 first:pl-0 last:pr-0"
              >
                <Icon size={20} className="text-[#DFF9BA] mb-3 shrink-0" />
                <p className="text-xl md:text-2xl font-bold text-white leading-tight">
                  {fact.value}
                </p>
                <p className="text-xs text-white/60 mt-0.5">{fact.label}</p>
                <p className="text-[11px] text-white/40 mt-1 hidden md:block">{fact.sub}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
