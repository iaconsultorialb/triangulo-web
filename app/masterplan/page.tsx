import MasterplanPreview from "../components/home/MasterplanPreview";

export default function MasterplanPage() {
  return (
    <div className="bg-[#F4F3EA] pt-[76px]">
      <section className="section-padding">
        <div className="container-max">
          <p className="section-kicker mb-3">Masterplan</p>
          <h1 className="max-w-4xl text-balance text-[clamp(3rem,7vw,6rem)] leading-[1.02] text-[#284339]">
            Un proyecto de vivienda, servicios y vida cotidiana
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5a5a50]">
            Recorre las capas del predio: lotes, centro comercial, espacios
            verdes, townhouses, condominios y accesos. La version final
            reemplazara el SVG provisorio por el masterplan vectorizado.
          </p>
        </div>
      </section>
      <MasterplanPreview />
    </div>
  );
}
