import ProductDetail, { getProductBySlug } from "../components/pages/ProductDetail";
import { notFound } from "next/navigation";

export default function LotesPage() {
  const product = getProductBySlug("lotes");
  if (!product) notFound();

  return <ProductDetail product={product} />;
}
