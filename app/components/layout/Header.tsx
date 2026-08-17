"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/data/site";
import Button from "../ui/Button";
import { buildWhatsAppUrl, WHATSAPP_MSGS } from "@/lib/whatsapp";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const waUrl = buildWhatsAppUrl(WHATSAPP_MSGS.default);

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F4F3EA]/95 backdrop-blur-sm shadow-sm border-b border-[#d8d6c8]"
          : "bg-transparent"
      }`}
    >
      <div className="container-max">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo / Wordmark */}
          <Link
            id="header-logo"
            href="/"
            className="flex flex-col leading-none group"
            aria-label="El Triángulo de Open Door - Inicio"
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#016241]">
              El Triángulo
            </span>
            <span className="text-[10px] tracking-widest uppercase text-[#284339]/60">
              Open Door
            </span>
          </Link>

          {/* Nav desktop */}
          <nav
            id="main-nav"
            className="hidden lg:flex items-center gap-6"
            aria-label="Navegación principal"
          >
            {NAV_ITEMS.filter((i) => i.label !== "Inicio").map((item) => (
              <Link
                key={item.href}
                href={item.href}
                id={`nav-${item.href.replace("/", "")}`}
                className="text-sm text-[#284339] font-medium hover:text-[#016241] transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#016241] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* CTA desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              id="header-cta-whatsapp"
              variant="primary"
              href={waUrl}
              external
              size="sm"
            >
              Consultar disponibilidad
            </Button>
          </div>

          {/* Hamburger mobile */}
          <button
            id="mobile-menu-toggle"
            className="lg:hidden p-2 text-[#284339]"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-[#F4F3EA] border-t border-[#d8d6c8] py-4"
        >
          <nav className="container-max flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                id={`mobile-nav-${item.href.replace("/", "") || "inicio"}`}
                className="py-3 px-2 text-sm font-medium text-[#284339] border-b border-[#d8d6c8]/50 hover:text-[#016241] transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4">
              <Button
                id="mobile-cta-whatsapp"
                variant="primary"
                href={waUrl}
                external
                className="w-full justify-center"
                size="md"
              >
                Consultar disponibilidad
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
