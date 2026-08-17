"use client";

import { buildWhatsAppUrl, WHATSAPP_MSGS } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const waUrl = buildWhatsAppUrl(WHATSAPP_MSGS.default);

  return (
    <a
      id="whatsapp-floating-btn"
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-3.5 py-3 text-white shadow-xl transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1dba57] hover:shadow-2xl md:px-4 group"
      style={{ animation: "pulseWhatsapp 3s ease-in-out infinite" }}
    >
      <MessageCircle size={20} className="shrink-0 group-hover:scale-110 transition-transform duration-200" />
      <span className="hidden text-sm font-semibold md:inline">WhatsApp</span>
    </a>
  );
}
