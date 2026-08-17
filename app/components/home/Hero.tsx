"use client";

import Image from "next/image";
import Button from "../ui/Button";
import { buildWhatsAppUrl, WHATSAPP_MSGS } from "@/lib/whatsapp";
import { ArrowDown, Compass, MessageCircle } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const waUrl = buildWhatsAppUrl(WHATSAPP_MSGS.default);
  const { scrollYProgress } = useScroll();
  const imageScale = useTransform(scrollYProgress, [0, 0.18], [1, 1.08]);
  const contentY = useTransform(scrollYProgress, [0, 0.18], [0, 56]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.16], [1, 0.15]);

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] overflow-hidden"
      aria-label="El Triángulo de Open Door"
    >
      <motion.div className="absolute inset-0" style={{ scale: imageScale }}>
        <Image
          src="/assets/triangulo/hero-aerea-masterplan.jpg"
          alt="Vista aérea del masterplan de El Triángulo de Open Door"
          fill
          priority
          quality={90}
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      <div className="absolute inset-0 bg-[#101811]/35" />
      <div className="absolute inset-x-0 bottom-0 h-[68%] bg-gradient-to-t from-[#11170f]/92 via-[#11170f]/46 to-transparent" />
      <div className="absolute inset-y-0 left-0 w-[64%] bg-gradient-to-r from-[#11170f]/72 via-[#11170f]/22 to-transparent" />

      <motion.div
        className="container-max relative z-10 flex min-h-[100svh] items-end pb-12 pt-[7.75rem] md:pb-16"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="max-w-[760px] reveal-up">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-[#DFF9BA]">
            Open Door · Luján · Buenos Aires
          </p>

          <h1 className="mb-5 max-w-[760px] text-balance text-[clamp(3.15rem,7.2vw,6.8rem)] font-extrabold leading-[0.95] text-white">
            El Triángulo
            <br />
            <span className="text-[#DFF9BA]">de Open Door</span>
          </h1>

          <p className="mb-7 max-w-[560px] text-base leading-8 text-white/88 md:text-xl">
            Naturaleza, vivienda y servicios en un masterplan urbano-natural
            de 17 hectáreas.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              id="hero-cta-primary"
              variant="primary"
              href={waUrl}
              external
              size="lg"
              className="bg-[#DFF9BA] !text-[#173529] hover:bg-white"
            >
              <MessageCircle size={18} />
              Consultar disponibilidad
            </Button>
            <Button
              id="hero-cta-masterplan"
              variant="ghost"
              href="#masterplan-preview"
              size="lg"
              className="border border-white/46 text-white hover:bg-white/12"
            >
              <Compass size={18} />
              Explorar masterplan
            </Button>
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-white/70">
        <ArrowDown size={16} />
      </div>
    </section>
  );
}
