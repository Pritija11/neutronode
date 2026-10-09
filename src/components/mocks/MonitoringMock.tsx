const checks = [
  { label: "CPU load", value: "12%", status: { label: "Healthy", tone: "green" as const } },
  { label: "Memory usage", value: "61%", status: { label: "Healthy", tone: "green" as const } },
  { label: "Disk I/O", value: "88%", status: { label: "Watch", tone: "amber" as const } },
  { label: "Security patches", value: "Up to date", status: { label: "Healthy", tone: "green" as const } },
];

export function MonitoringMock({ className = "" }: { className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] shadow-sm ${className}`}
    >
      <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-3">
        <span className="text-xs font-medium text-[var(--fg-muted)]">
          System health — api-prod-01
        </span>
        <span className="pill pill-green">Live</span>
      </div>
      <div className="flex flex-col">
        {checks.map((c) => (
          <div
            key={c.label}
            className="flex items-center justify-between gap-3 border-b border-[var(--border)] px-4 py-2.5 text-xs last:border-b-0"
          >
            <span className="text-[var(--fg)]">{c.label}</span>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[var(--fg-faint)]">{c.value}</span>
              <span className={`pill pill-${c.status.tone}`}>{c.status.label}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="px-4 py-3 text-xs text-[var(--fg-faint)]">
        Last checked 30 seconds ago
      </div>
    </div>
  );
}
