type Props = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
};

export default function SectionHeading({
  title,
  subtitle,
  eyebrow,
}: Props) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      {(eyebrow || subtitle) && (
        <p className="text-sm md:text-base text-blue-600 font-semibold uppercase tracking-[0.2em]">
          {eyebrow ?? subtitle}
        </p>
      )}

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mt-3 leading-tight">
        {title}
      </h2>

      {eyebrow && subtitle && (
        <p className="mt-4 text-slate-600 text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}