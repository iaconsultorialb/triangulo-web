import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { SITE, CONTACTO, NAV_ITEMS, NAV_SECONDARY, DESARROLLADORES } from "@/data/site";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer id="main-footer" className="bg-[#284339] text-white">
      <div className="container-max py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Columna 1 — Identidad */}
          <div className="lg:col-span-1">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#DFF9BA] mb-1">
              El Triángulo
            </p>
            <p className="text-[10px] tracking-widest uppercase text-white/50 mb-4">
              Open Door
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              {SITE.tagline}
            </p>
            {/* Redes */}
            <div className="flex gap-4 mt-6">
              <a
                id="footer-instagram"
                href={CONTACTO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de El Triángulo"
                className="text-white/60 hover:text-[#DFF9BA] transition-colors"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                id="footer-linkedin"
                href={CONTACTO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de El Triángulo"
                className="text-white/60 hover:text-[#DFF9BA] transition-colors"
              >
                <LinkedInIcon size={18} />
              </a>
            </div>
          </div>

          {/* Columna 2 — Navegación */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">
              Navegación
            </h4>
            <ul className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    id={`footer-nav-${item.href.replace("/", "") || "inicio"}`}
                    className="text-sm text-white/70 hover:text-[#DFF9BA] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3 — Más */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">
              Más
            </h4>
            <ul className="flex flex-col gap-2">
              {NAV_SECONDARY.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    id={`footer-sec-${item.href.replace("/", "")}`}
                    className="text-sm text-white/70 hover:text-[#DFF9BA] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4 — Contacto */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">
              Contacto
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  id="footer-email"
                  href={`mailto:${CONTACTO.email}`}
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-[#DFF9BA] transition-colors"
                >
                  <Mail size={14} className="shrink-0" />
                  {CONTACTO.email}
                </a>
              </li>
              <li>
                <a
                  id="footer-phone"
                  href={`tel:${CONTACTO.telefono.replace(/[^0-9]/g, "")}`}
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-[#DFF9BA] transition-colors"
                >
                  <Phone size={14} className="shrink-0" />
                  {CONTACTO.telefono}
                </a>
              </li>
              <li>
                <p className="text-xs text-white/40 mt-2">
                  Ruta Prov. 192 y Av. Juan de Dios Filiberto
                  <br />
                  Open Door, Luján, Bs. As.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between gap-3">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} El Triángulo de Open Door. Todos los derechos reservados.
          </p>
          <p className="text-xs text-white/40">
            Comercializa: {DESARROLLADORES.comercializa} · Diseño: {DESARROLLADORES.diseno}
          </p>
        </div>
      </div>
    </footer>
  );
}
