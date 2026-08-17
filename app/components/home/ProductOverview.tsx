import { PRODUCTS } from "@/data/products";
import ProductCard from "../ui/ProductCard";

export default function ProductOverview() {
  return (
    <section
      id="product-overview"
      className="section-padding bg-white"
      aria-label="Productos del masterplan"
    >
      <div className="container-max">
        <div className="mb-10 grid gap-5 lg:grid-cols-[0.85fr_1fr] lg:items-end">
          <div>
            <p className="section-kicker mb-3">Productos</p>
            <h2 className="text-balance text-[#284339]">
            Cuatro formas de ser parte del masterplan
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[#5a5a50] lg:justify-self-end">
            Desde lotes residenciales con venta activa hasta oportunidades
            comerciales en desarrollo. Cada producto tiene su propio estado,
            datos confirmados y camino de consulta.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <p className="mt-8 border-t border-[#d8d6c8] pt-4 text-xs text-[#5a5a50]">
          * Disponibilidad, precios y fechas de lanzamiento sujetos a
          confirmación comercial. Contactar al equipo de ventas para
          información actualizada.
        </p>
      </div>
    </section>
  );
}
