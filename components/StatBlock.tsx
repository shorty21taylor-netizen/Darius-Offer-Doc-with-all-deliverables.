interface StatBlockProps {
  value: string;
  label?: string;
  goldValue?: boolean;
}

export default function StatBlock({ value, label, goldValue = true }: StatBlockProps) {
  return (
    <div className="text-center">
      <p className={`text-lg md:text-xl font-bold ${goldValue ? "text-gold" : "text-white"}`}>
        {value}
      </p>
      {label && <p className="text-text-secondary text-sm mt-1">{label}</p>}
    </div>
  );
}
