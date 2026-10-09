export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--fg-faint)]">
      {children}
    </div>
  );
}
