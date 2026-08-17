import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle, MessageCircle } from "lucide-react";
import { PRODUCTS, type Product } from "@/data/products";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import Button from "../ui/Button";

interface ProductDetailProps {
  product: Product;
}

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((product) => product.slug === slug);
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const waUrl = buildWhatsAppUrl(product.ctaPrimario.whatsappMsg);
  const related = PRODUCTS.filter((item) => item.id !== product.id).slice(0, 3);

  return (
    <article className="bg-[#F4F3EA] pt-[76px]">
      <section className="relative min-h-[72svh] overflow-hidden">
        <Image
          src={product.imagen}
          alt={product.nombre}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#101811]/42" />
        <div className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-[#11170f]/92 via-[#11170f]/42 to-transparent" />

        <div className="container-max relative z-10 flex min-h-[72svh] items-end pb-12">
          <div className="max-w-3xl">
            <Link
              href="/"
              className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-white/78 transition-colors hover:text-white"
            >
              <ArrowLeft size={16} />
              Volver al inicio
            </Link>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#DFF9BA]">
              {product.tagline}
            </p>
            <h1 className="mb-5 text-balance text-[clamp(3rem,7vw,6.5rem)] font-extrabold leading-[0.96] text-white">
              {product.nombre}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-white/86">
              {product.descripcion}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max grid gap-10 lg:grid-cols-[0.72fr_1fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="section-kicker mb-3">Estado comercial</p>
            <h2 className="mb-5 text-4xl text-[#284339]">{product.estadoLabel}</h2>
            <p className="mb-7 leading-8 text-[#5a5a50]">
              Contactá al equipo comercial para confirmar disponibilidad,
              fechas, condiciones y la mejor alternativa según tu objetivo.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button href={waUrl} external variant="primary" size="md">
                <MessageCircle size={17} />
                {product.ctaPrimario.label}
              </Button>
              <Button href="/contacto" variant="secondary" size="md">
                Agendar visita
              </Button>
            </div>
          </aside>

          <div>
            <div className="grid gap-px overflow-hidden rounded-[8px] bg-[#d8d6c8] md:grid-cols-2">
              {product.stats.map((stat) => (
                <div key={stat.label} className="bg-white p-6">
                  <p className="text-sm text-[#5a5a50]">{stat.label}</p>
                  <p className="mt-2 text-2xl font-bold text-[#284339]">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-[8px] bg-[#284339] p-7 md:p-9">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-[#DFF9BA]">
                Por qué importa
              </p>
              <h3 className="mb-5 text-3xl text-white">
                Un producto dentro de un sistema urbano-natural
              </h3>
              <ul className="grid gap-4 md:grid-cols-2">
                {[
                  "Parte de un masterplan de 17 hectáreas.",
                  "Integración con áreas verdes, servicios y conectividad.",
                  "Ubicación estratégica entre Luján y Pilar.",
                  "Consulta comercial segmentada según interés.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-white/82">
                    <CheckCircle size={18} className="mt-1 shrink-0 text-[#DFF9BA]" />
                    <span className="leading-7">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#d8d6c8] bg-white py-14">
        <div className="container-max">
          <p className="section-kicker mb-6">También puede interesarte</p>
          <div className="grid gap-3 md:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.id}
                href={`/${item.slug}`}
                className="rounded-[8px] border border-[#d8d6c8] bg-[#F4F3EA] p-5 transition-colors hover:border-[#016241]/50 hover:bg-white"
              >
                <p className="text-sm font-bold text-[#284339]">{item.nombre}</p>
                <p className="mt-2 text-sm leading-6 text-[#5a5a50]">
                  {item.tagline}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
