import Link from "next/link";

const faqs = [
  {
    q: "¿Qué productos forman parte del masterplan?",
    a: "Lotes residenciales, Townhouses, Condominios y Centro Comercial, integrados con espacios verdes, accesos y servicios.",
  },
  {
    q: "¿Hay venta activa?",
    a: "La venta activa informada corresponde a lotes residenciales. El resto de los productos debe confirmarse con el equipo comercial.",
  },
  {
    q: "¿Dónde está ubicado?",
    a: "En Open Door, Luján, sobre Ruta Provincial 192 y Av. Juan de Dios Filiberto.",
  },
  {
    q: "¿Cómo hago una consulta?",
    a: "Podés consultar por WhatsApp, email o agendar una visita desde la página de contacto.",
  },
];

export default function FaqPage() {
  return (
    <div className="bg-[#F4F3EA] pt-[76px]">
      <section className="section-padding">
        <div className="container-max max-w-4xl">
          <p className="section-kicker mb-3">Preguntas frecuentes</p>
          <h1 className="mb-10 text-balance text-[clamp(3rem,7vw,5.4rem)] leading-[1.02] text-[#284339]">
            Respuestas rápidas para avanzar con confianza
          </h1>
          <div className="grid gap-px overflow-hidden rounded-[8px] bg-[#d8d6c8]">
            {faqs.map((item) => (
              <div key={item.q} className="bg-white p-6">
                <h2 className="text-2xl text-[#284339]">{item.q}</h2>
                <p className="mt-3 leading-8 text-[#5a5a50]">{item.a}</p>
              </div>
            ))}
          </div>
          <Link
            href="/contacto"
            className="mt-8 inline-flex rounded-[6px] bg-[#016241] px-5 py-3 text-sm font-semibold text-white"
          >
            Hacer una consulta
          </Link>
        </div>
      </section>
    </div>
  );
}
