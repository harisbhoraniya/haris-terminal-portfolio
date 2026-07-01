interface PreviewHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export function PreviewHeading({ eyebrow, title, subtitle }: PreviewHeadingProps) {
  return (
    <div className="mb-5">
      <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.12em] text-phosphor-dim">
        {eyebrow}
      </p>
      <h1 className="mb-1.5 text-[26px] font-bold leading-tight tracking-tight text-ink max-[480px]:text-2xl">
        {title}
      </h1>
      {subtitle && (
        <p className="text-sm leading-relaxed text-ink-muted">{subtitle}</p>
      )}
    </div>
  );
}
