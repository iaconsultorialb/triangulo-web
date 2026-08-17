interface SectionProps {
  id?: string;
  className?: string;
  bg?: "crema" | "verde" | "verde-oscuro" | "blanco";
  children: React.ReactNode;
}

export default function Section({
  id,
  className = "",
  bg = "crema",
  children,
}: SectionProps) {
  const bgMap = {
    crema: "bg-[#F4F3EA]",
    verde: "bg-[#016241]",
    "verde-oscuro": "bg-[#284339]",
    blanco: "bg-white",
  };

  return (
    <section
      id={id}
      className={`section-padding ${bgMap[bg]} ${className}`}
    >
      <div className="container-max">{children}</div>
    </section>
  );
}
