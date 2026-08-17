"use client";

import { useState } from "react";
import { buildWhatsAppUrl, WHATSAPP_MSGS } from "@/lib/whatsapp";
import { Home, TrendingUp, Store, MapPin, Send } from "lucide-react";
import Button from "../ui/Button";

const segments = [
  {
    id: "vivir",
    label: "Quiero vivir",
    icon: Home,
    msg: WHATSAPP_MSGS.lotes,
    cta: "Ver lotes disponibles",
  },
  {
    id: "invertir",
    label: "Quiero invertir",
    icon: TrendingUp,
    msg: WHATSAPP_MSGS.inversion,
    cta: "Hablar con un asesor",
  },
  {
    id: "local",
    label: "Quiero un local",
    icon: Store,
    msg: WHATSAPP_MSGS.comercial,
    cta: "Consultar oportunidades",
  },
  {
    id: "visitar",
    label: "Quiero visitar",
    icon: MapPin,
    msg: WHATSAPP_MSGS.visita,
    cta: "Agendar visita",
  },
];

export default function FinalCTA() {
  const [selected, setSelected] = useState<string | null>(null);
  const [name, setName] = useState("");

  const activeSegment = segments.find((s) => s.id === selected);
  const waMsg = activeSegment
    ? `${activeSegment.msg} Me llamo ${name || "(sin nombre)"}.`
    : WHATSAPP_MSGS.default;
  const waUrl = buildWhatsAppUrl(waMsg);

  return (
    <section
      id="final-cta"
      className="section-padding bg-[#016241]"
      aria-label="Contacto y consulta"
    >
      <div className="container-max">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-[#DFF9BA]">
            Empezá hoy
          </p>
          <h2 className="mb-5 text-balance text-white">
            Elegí cómo querés
            <br />ser parte de El Triángulo
          </h2>
          <p className="text-lg leading-8 text-white/82">
            Contactanos por el canal que prefieras. Sin compromiso, sin demoras.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="mb-4 grid grid-cols-2 gap-2 md:grid-cols-4">
            {segments.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                id={`final-cta-${id}`}
                onClick={() => setSelected(id === selected ? null : id)}
                aria-pressed={selected === id}
                className={`flex min-h-[86px] flex-col items-center justify-center gap-2 rounded-[8px] border text-xs font-bold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                  selected === id
                    ? "bg-white text-[#016241] border-white shadow-md"
                    : "bg-white/15 text-white border-white/30 hover:bg-white/25 hover:border-white/60"
                }`}
              >
                <Icon size={18} />
                {label}
              </button>
            ))}
          </div>

          <div className="rounded-[8px] border border-white/24 bg-white/12 p-4 md:p-5">
            <div className="mb-4 flex flex-col gap-3 md:flex-row">
              <input
                id="final-cta-name"
                type="text"
                placeholder="Tu nombre (opcional)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="min-h-[50px] flex-1 rounded-[6px] border border-white/36 bg-white/18 px-4 py-3 text-sm text-white placeholder-white/62 transition-colors focus:border-white focus:bg-white/24 focus:outline-none"
                aria-label="Nombre"
              />
              <Button
                id="final-cta-submit"
                variant="whatsapp"
                href={waUrl}
                external
                size="md"
                className="flex items-center gap-2 whitespace-nowrap bg-[#DFF9BA] !text-[#173529] hover:bg-white"
              >
                <Send size={14} />
                {activeSegment ? activeSegment.cta : "Consultar ahora"}
              </Button>
            </div>

            <p className="text-center text-xs leading-6 text-white/74">
              Al hacer click serás redirigido a WhatsApp con un mensaje
              prearmado. También podés escribirnos a{" "}
              <a
                href="mailto:ventas@eltriangulodeopendoor.com"
                className="font-semibold text-[#DFF9BA] hover:underline"
              >
                ventas@eltriangulodeopendoor.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
