"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "../ui/Button";
import { buildWhatsAppUrl, WHATSAPP_MSGS } from "@/lib/whatsapp";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const waUrl = buildWhatsAppUrl(WHATSAPP_MSGS.default);

  useEffect(() => {
    // Pequeño delay para la animación de entrada
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-end pb-16 md:pb-24 overflow-hidden"
      aria-label="El Triángulo de Open Door"
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          src="/assets/triangulo/hero-aerea-masterplan.jpg"
          alt="Vista aérea del masterplan de El Triángulo de Open Door"
          fill
          priority
          quality={90}
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlay gradiente — oscurece base para legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a10]/80 via-[#1a1a10]/20 to-transparent" />
      </div>

      {/* Contenido */}
      <div
        className={`container-max relative z-10 transition-all duration-700 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="text-[#DFF9BA] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Open Door · Luján · Buenos Aires
          </p>

          {/* Título */}
          <h1 className="text-white font-bold leading-tight mb-4">
            El Triángulo
            <br />
            <span className="text-[#DFF9BA]">de Open Door</span>
          </h1>

          {/* Bajada */}
          <p className="text-white/80 text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
            Naturaleza, vivienda y servicios en un masterplan urbano-natural
            de 17 hectáreas.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              id="hero-cta-primary"
              variant="primary"
              href={waUrl}
              external
              size="lg"
            >
              Consultar disponibilidad
            </Button>
            <Button
              id="hero-cta-masterplan"
              variant="ghost"
              href="#masterplan-preview"
              size="lg"
              className="text-white border border-white/30 hover:bg-white/10"
            >
              Explorar masterplan
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-1 animate-bounce">
        <ArrowDown size={16} />
      </div>
    </section>
  );
}
