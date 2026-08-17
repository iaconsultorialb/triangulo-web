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
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 shadow-lg hover:bg-[#1dba57] transition-all duration-200 hover:-translate-y-0.5 group"
      style={{ animation: "pulseWhatsapp 3s ease-in-out infinite" }}
    >
      <MessageCircle size={20} className="shrink-0" />
      <span className="text-sm font-semibold hidden sm:inline">WhatsApp</span>
    </a>
  );
}
