import ProductDetail, { getProductBySlug } from "../components/pages/ProductDetail";
import { notFound } from "next/navigation";

export default function CentroComercialPage() {
  const product = getProductBySlug("centro-comercial");
  if (!product) notFound();

  return <ProductDetail product={product} />;
}
