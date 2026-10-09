const rules = [
  { port: "22", protocol: "TCP", source: "203.0.113.0/24", action: { label: "Allow", tone: "green" as const } },
  { port: "443", protocol: "TCP", source: "0.0.0.0/0", action: { label: "Allow", tone: "green" as const } },
  { port: "3306", protocol: "TCP", source: "0.0.0.0/0", action: { label: "Blocked", tone: "rose" as const } },
];

export function SecurityMock({ className = "" }: { className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] shadow-sm ${className}`}
    >
      <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-3">
        <span className="text-xs font-medium text-[var(--fg-muted)]">
          Firewall rules
        </span>
        <span className="pill pill-violet">Monitored</span>
      </div>
      <div className="grid grid-cols-[0.6fr_0.6fr_1.3fr_0.8fr] gap-2 border-b border-[var(--border)] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--fg-faint)]">
        <span>Port</span>
        <span>Proto</span>
        <span>Source</span>
        <span>Action</span>
      </div>
      <div className="flex flex-col">
        {rules.map((r) => (
          <div
            key={r.port + r.source}
            className="grid grid-cols-[0.6fr_0.6fr_1.3fr_0.8fr] items-center gap-2 border-b border-[var(--border)] px-4 py-2.5 text-xs last:border-b-0"
          >
            <span className="font-mono text-[var(--fg)]">{r.port}</span>
            <span className="text-[var(--fg-muted)]">{r.protocol}</span>
            <span className="truncate font-mono text-[var(--fg-muted)]">{r.source}</span>
            <span className={`pill pill-${r.action.tone} w-fit`}>
              {r.action.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
