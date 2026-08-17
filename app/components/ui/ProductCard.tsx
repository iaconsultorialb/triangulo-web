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
      className={`group flex flex-col bg-white overflow-hidden transition-shadow duration-300 hover:shadow-xl ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      {/* Imagen */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <Image
          src={product.imagen}
          alt={product.nombre}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        {/* Badge de estado */}
        <div className="absolute top-4 left-4">
          <span
            className={`inline-block text-xs font-semibold px-3 py-1 tracking-wide ${badge.class}`}
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

      {/* Contenido */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        <div>
          <p className="eyebrow mb-2">{product.tagline}</p>
          <h3 className="text-xl font-bold text-[#284339]">{product.nombre}</h3>
          <p className="mt-2 text-sm text-[#5a5a50] leading-relaxed">
            {product.descripcion}
          </p>
        </div>

        {/* Stats */}
        {product.stats && product.stats.length > 0 && (
          <ul className="grid grid-cols-2 gap-2 border-t border-[#d8d6c8] pt-4">
            {product.stats.map((stat) => (
              <li key={stat.label}>
                <p className="text-xs text-[#5a5a50]">{stat.label}</p>
                <p className="text-sm font-semibold text-[#284339]">{stat.value}</p>
              </li>
            ))}
          </ul>
        )}

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-2 mt-auto">
          <Button
            variant="primary"
            href={waUrl}
            external
            id={`cta-${product.id}-whatsapp`}
            className="flex-1 text-xs py-3"
            size="sm"
          >
            {product.ctaPrimario.label}
          </Button>
          {product.ctaSecundario && (
            <Button
              variant="secondary"
              href={product.ctaSecundario.href}
              id={`cta-${product.id}-secundario`}
              className="flex-1 text-xs py-3"
              size="sm"
            >
              {product.ctaSecundario.label}
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
