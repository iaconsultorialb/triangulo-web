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
        <div className="mb-10">
          <p className="eyebrow mb-3">Productos</p>
          <h2 className="text-[#284339]">
            Cuatro formas de ser parte del masterplan
          </h2>
          <p className="mt-3 text-[#5a5a50] max-w-2xl">
            Desde lotes residenciales con venta activa hasta oportunidades
            comerciales en desarrollo. Cada producto tiene su propio estado,
            datos confirmados y camino de consulta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Nota de transparencia */}
        <p className="mt-8 text-xs text-[#5a5a50]/70 border-t border-[#d8d6c8] pt-4">
          * Disponibilidad, precios y fechas de lanzamiento sujetos a
          confirmación comercial. Contactar al equipo de ventas para
          información actualizada.
        </p>
      </div>
    </section>
  );
}
