import ProductDetail, { getProductBySlug } from "../components/pages/ProductDetail";
import { notFound } from "next/navigation";

export default function CondominiosPage() {
  const product = getProductBySlug("condominios");
  if (!product) notFound();

  return <ProductDetail product={product} />;
}
