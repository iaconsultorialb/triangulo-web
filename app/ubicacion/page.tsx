import Button from "../components/ui/Button";
import { buildWhatsAppUrl, WHATSAPP_MSGS } from "@/lib/whatsapp";

export default function UbicacionPage() {
  return (
    <div className="bg-[#F4F3EA] pt-[76px]">
      <section className="section-padding">
        <div className="container-max grid gap-10 lg:grid-cols-[0.78fr_1fr] lg:items-start">
          <div>
            <p className="section-kicker mb-3">Ubicación</p>
            <h1 className="max-w-3xl text-balance text-[clamp(3rem,7vw,5.8rem)] leading-[1.02] text-[#284339]">
              Entre Luján y Pilar, a ~50 min de CABA
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5a5a50]">
              Intersección de Ruta Provincial 192 y Avenida Juan de Dios
              Filiberto, Open Door, Partido de Luján. Un corredor de crecimiento
              con acceso rápido, servicios cercanos y naturaleza real.
            </p>

            <dl className="mt-9 grid gap-4 border-y border-[#d8d6c8] py-6">
              {[
                ["Ruta", "Ruta Provincial 192 y Av. Juan de Dios Filiberto"],
                ["Localidad", "Open Door, Partido de Luján"],
                ["Distancia a CABA", "Aproximadamente 50 minutos"],
                ["Conectividad", "Entre Luján y Pilar"],
              ].map(([label, value]) => (
                <div key={label} className="grid gap-2 sm:grid-cols-[170px_1fr]">
                  <dt className="text-xs font-bold uppercase tracking-[0.08em] text-[#016241]">
                    {label}
                  </dt>
                  <dd className="text-base text-[#284339]">{value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                href={buildWhatsAppUrl(WHATSAPP_MSGS.visita)}
                external
                variant="primary"
              >
                Agendar visita
              </Button>
              <Button href="/contacto" variant="secondary">
                Consultar por otro interés
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-[8px] bg-[#d8d6c8] shadow-[0_18px_48px_-36px_rgba(40,67,57,0.55)] aspect-[4/3]">
            <iframe
              id="mapa-proyecto-page"
              src="https://www.google.com/maps/d/embed?mid=1O0UkxCXQmd-2pfNEJdqG4mRnbKQJSNc&ehbc=2E312F"
              width="100%"
              height="100%"
              title="Mapa de El Triángulo de Open Door"
              loading="lazy"
              className="h-full w-full border-0"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
