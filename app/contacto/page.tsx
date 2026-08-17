import FinalCTA from "../components/home/FinalCTA";
import { CONTACTO } from "@/data/site";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactoPage() {
  return (
    <div className="bg-[#F4F3EA] pt-[76px]">
      <section className="section-padding">
        <div className="container-max">
          <p className="section-kicker mb-3">Contacto</p>
          <h1 className="max-w-4xl text-balance text-[clamp(3rem,7vw,5.8rem)] leading-[1.02] text-[#284339]">
            Hablemos del producto que te interesa
          </h1>
          <div className="mt-10 grid gap-px overflow-hidden rounded-[8px] bg-[#d8d6c8] md:grid-cols-3">
            <a
              href={`mailto:${CONTACTO.email}`}
              className="bg-white p-6 transition-colors hover:bg-[#F4F3EA]"
            >
              <Mail className="mb-5 text-[#016241]" size={22} />
              <p className="text-sm font-bold text-[#284339]">Email</p>
              <p className="mt-2 break-words text-sm text-[#5a5a50]">
                {CONTACTO.email}
              </p>
            </a>
            <a
              href={`tel:${CONTACTO.telefono.replace(/[^0-9]/g, "")}`}
              className="bg-white p-6 transition-colors hover:bg-[#F4F3EA]"
            >
              <Phone className="mb-5 text-[#016241]" size={22} />
              <p className="text-sm font-bold text-[#284339]">Teléfono</p>
              <p className="mt-2 text-sm text-[#5a5a50]">{CONTACTO.telefono}</p>
            </a>
            <div className="bg-white p-6">
              <MapPin className="mb-5 text-[#016241]" size={22} />
              <p className="text-sm font-bold text-[#284339]">Ubicación</p>
              <p className="mt-2 text-sm leading-6 text-[#5a5a50]">
                Ruta Prov. 192 y Av. Juan de Dios Filiberto, Open Door.
              </p>
            </div>
          </div>
        </div>
      </section>
      <FinalCTA />
    </div>
  );
}
