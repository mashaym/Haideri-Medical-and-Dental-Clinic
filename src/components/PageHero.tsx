import Container from "./Container";

export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink-950">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(26,173,160,0.3),transparent_45%)]"
      />
      <Container className="relative py-16 sm:py-20">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-white/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wide text-brand-300">
            {eyebrow}
          </span>
          <h1 className="font-display mt-4 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-balance text-base leading-relaxed text-ink-300 sm:text-lg">
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
