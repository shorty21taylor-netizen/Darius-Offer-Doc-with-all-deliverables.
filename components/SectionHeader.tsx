interface SectionHeaderProps {
  label?: string;
  title: string;
  centered?: boolean;
}

export default function SectionHeader({ label, title, centered = true }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {label && (
        <p className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-3">
          {label}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
        {title}
      </h2>
    </div>
  );
}
