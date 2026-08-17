import ProductDetail, { getProductBySlug } from "../components/pages/ProductDetail";
import { notFound } from "next/navigation";

export default function TownhousesPage() {
  const product = getProductBySlug("townhouses");
  if (!product) notFound();

  return <ProductDetail product={product} />;
}
