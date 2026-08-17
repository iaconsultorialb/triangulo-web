"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";
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
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-[#d8d6c8] bg-[#F4F3EA]/96 shadow-[0_10px_30px_-26px_rgba(40,67,57,0.7)] backdrop-blur-md"
          : "border-[#d8d6c8]/70 bg-[#F4F3EA]/92 backdrop-blur-md"
      }`}
    >
      <div className="container-max">
        <div className="flex h-[76px] items-center justify-between gap-5">
          {/* Logo / Wordmark */}
          <Link
            id="header-logo"
            href="/"
            className="flex flex-col leading-none group"
            aria-label="El Triángulo de Open Door - Inicio"
          >
            <span className="text-[12px] font-bold tracking-[0.22em] uppercase text-[#016241] transition-colors duration-300">
              El Triángulo
            </span>
            <span className="mt-1 text-[10px] tracking-[0.22em] uppercase text-[#284339]/62 transition-colors duration-300">
              Open Door
            </span>
          </Link>

          {/* Nav desktop */}
          <nav
            id="main-nav"
            className="hidden lg:flex items-center gap-2 rounded-[8px] bg-white/34 p-1"
            aria-label="Navegación principal"
          >
            {NAV_ITEMS.filter((i) => i.label !== "Inicio").map((item) => (
              <Link
                key={item.href}
                href={item.href}
                id={`nav-${item.href.replace("/", "")}`}
                className="relative rounded-[6px] px-4 py-2 text-sm font-semibold text-[#284339] transition-colors duration-200 hover:bg-[#016241]/8 hover:text-[#016241]"
              >
                {item.label}
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
              className="gap-2 whitespace-nowrap"
            >
              <MessageCircle size={16} />
              Consultar
            </Button>
          </div>

          {/* Hamburger mobile */}
          <button
            id="mobile-menu-toggle"
            className="lg:hidden rounded-[6px] p-2.5 text-[#284339] transition-colors duration-200 hover:bg-[#284339]/10"
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
          className="lg:hidden border-t border-[#d8d6c8] bg-[#F4F3EA] py-4 shadow-[0_18px_40px_-30px_rgba(40,67,57,0.55)]"
        >
          <nav className="container-max flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                id={`mobile-nav-${item.href.replace("/", "") || "inicio"}`}
                className="rounded-[6px] px-3 py-3 text-sm font-semibold text-[#284339] transition-colors hover:bg-[#016241]/8 hover:text-[#016241]"
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
