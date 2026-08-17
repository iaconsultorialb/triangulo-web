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
  const [sent, setSent] = useState(false);

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
          <p className="text-[#DFF9BA] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Empezá hoy
          </p>
          <h2 className="text-white mb-4">
            Elegí cómo querés
            <br />ser parte de El Triángulo
          </h2>
          <p className="text-white/70 text-lg">
            Contactanos por el canal que prefieras. Sin compromiso, sin demoras.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Selector de segmento */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
            {segments.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                id={`final-cta-${id}`}
                onClick={() => setSelected(id === selected ? null : id)}
                aria-pressed={selected === id}
                className={`flex flex-col items-center gap-2 p-4 text-xs font-semibold transition-all duration-200 border ${
                  selected === id
                    ? "bg-white text-[#016241] border-white"
                    : "bg-white/10 text-white/80 border-white/20 hover:bg-white/20"
                }`}
              >
                <Icon size={18} />
                {label}
              </button>
            ))}
          </div>

          {/* Mini formulario + CTA */}
          <div className="bg-white/10 p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-3 mb-4">
              <input
                id="final-cta-name"
                type="text"
                placeholder="Tu nombre (opcional)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 bg-white/15 border border-white/20 text-white placeholder-white/40 px-4 py-3 text-sm focus:outline-none focus:border-[#DFF9BA] transition-colors"
                aria-label="Nombre"
              />
              <Button
                id="final-cta-submit"
                variant="whatsapp"
                href={waUrl}
                external
                size="md"
                className="flex items-center gap-2 whitespace-nowrap"
              >
                <Send size={14} />
                {activeSegment ? activeSegment.cta : "Consultar ahora"}
              </Button>
            </div>

            <p className="text-xs text-white/50 text-center">
              Al hacer click serás redirigido a WhatsApp con un mensaje
              prearmado. También podés escribirnos a{" "}
              <a
                href="mailto:ventas@eltriangulodeopendoor.com"
                className="text-[#DFF9BA] hover:underline"
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
