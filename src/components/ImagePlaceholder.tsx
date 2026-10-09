export function ImagePlaceholder({
  label,
  className = "",
  ratio = "aspect-[4/3]",
}: {
  label: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <div
      className={`bg-grid relative flex ${ratio} w-full items-center justify-center rounded-lg border border-dashed border-[var(--border-strong)] bg-[var(--surface-tint)] ${className}`}
    >
      <span className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--fg-faint)]">
        {label}
      </span>
    </div>
  );
}
