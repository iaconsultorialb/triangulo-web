import Image from "next/image";
import Button from "./Button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

const estadoBadge: Record<string, { label: string; class: string }> = {
  "venta-activa": {
    label: "Venta activa",
    class: "bg-[#DFF9BA] text-[#016241]",
  },
  "proximo-lanzamiento": {
    label: "Próximo lanzamiento",
    class: "bg-[#284339]/10 text-[#284339]",
  },
  preventa: {
    label: "Preventa",
    class: "bg-[#284339]/10 text-[#284339]",
  },
  consultar: {
    label: "Consultar",
    class: "bg-[#016241]/10 text-[#016241]",
  },
};

export default function ProductCard({ product, featured = false }: ProductCardProps) {
  const badge = estadoBadge[product.estado];
  const waUrl = buildWhatsAppUrl(product.ctaPrimario.whatsappMsg);

  return (
    <article
      id={`product-card-${product.id}`}
      className={`group flex flex-col overflow-hidden rounded-[8px] border border-[#d8d6c8] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_52px_-34px_rgba(40,67,57,0.65)] ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={product.imagen}
          alt={product.nombre}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4">
          <span
            className={`inline-block rounded-[6px] px-3 py-1 text-xs font-bold ${badge.class}`}
          >
            {badge.label}
          </span>
        </div>
        {/* Barra de color zona en masterplan */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{ backgroundColor: product.colorZona }}
        />
      </div>

      <div className="flex flex-1 flex-col gap-5 p-6">
        <div>
          <p className="section-kicker mb-2">{product.tagline}</p>
          <h3 className="text-3xl font-bold text-[#284339]">{product.nombre}</h3>
          <p className="mt-3 text-sm leading-7 text-[#5a5a50]">
            {product.descripcion}
          </p>
        </div>

        {product.stats && product.stats.length > 0 && (
          <ul className="grid grid-cols-2 gap-3 border-t border-[#d8d6c8] pt-5">
            {product.stats.map((stat) => (
              <li key={stat.label}>
                <p className="text-xs text-[#5a5a50]">{stat.label}</p>
                <p className="text-sm font-semibold text-[#284339]">{stat.value}</p>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex flex-col gap-2 sm:flex-row">
          <Button
            variant="primary"
            href={`/${product.slug}`}
            id={`cta-${product.id}-whatsapp`}
            className="flex-1"
            size="sm"
          >
            Ver detalle
          </Button>
          <Button
            variant="secondary"
            href={waUrl}
            external
            id={`cta-${product.id}-secundario`}
            className="flex-1 bg-white"
            size="sm"
          >
            Consultar
          </Button>
        </div>
      </div>
    </article>
  );
}
