import Hero from "./components/home/Hero";
import KeyFacts from "./components/home/KeyFacts";
import InterestSelector from "./components/home/InterestSelector";
import MasterplanPreview from "./components/home/MasterplanPreview";
import ProductOverview from "./components/home/ProductOverview";
import LocationPreview from "./components/home/LocationPreview";
import FinalCTA from "./components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — primer viewport */}
      <Hero />

      {/* 2. Datos clave */}
      <KeyFacts />

      {/* 3. Selector de interés */}
      <InterestSelector />

      {/* 4. Masterplan preview interactivo */}
      <MasterplanPreview />

      {/* 5. Productos del masterplan */}
      <ProductOverview />

      {/* 6. Centro Comercial destacado + Ubicación con mapa */}
      <LocationPreview />

      {/* 7. CTA final segmentado */}
      <FinalCTA />
    </>
  );
}
