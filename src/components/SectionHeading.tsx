export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}
    >
      {eyebrow && (
        <span className="inline-flex items-center rounded-full bg-brand-50 px-3.5 py-1 text-xs font-semibold tracking-wide text-brand-700 uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display mt-3 text-balance text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-balance text-base leading-relaxed text-ink-500 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
