const servers = [
  { name: "api-prod-01", region: "Singapore", specs: "4 vCPU · 8 GB", status: { label: "Running", tone: "green" as const } },
  { name: "worker-prod-02", region: "Frankfurt", specs: "2 vCPU · 4 GB", status: { label: "Running", tone: "green" as const } },
  { name: "staging-db", region: "Mumbai", specs: "2 vCPU · 4 GB", status: { label: "Booting", tone: "amber" as const } },
];

export function ServerListMock({ className = "" }: { className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] shadow-sm ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-[var(--border)] px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-[#f0a9a9]" />
        <span className="h-2 w-2 rounded-full bg-[#f0d49a]" />
        <span className="h-2 w-2 rounded-full bg-[#a9e0b4]" />
        <span className="ml-2 text-xs font-medium text-[var(--fg-muted)]">
          Servers
        </span>
      </div>
      <div className="grid grid-cols-[1.3fr_1fr_1fr_0.9fr] gap-2 border-b border-[var(--border)] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--fg-faint)]">
        <span>Name</span>
        <span>Region</span>
        <span>Specs</span>
        <span>Status</span>
      </div>
      <div className="flex flex-col">
        {servers.map((s) => (
          <div
            key={s.name}
            className="grid grid-cols-[1.3fr_1fr_1fr_0.9fr] items-center gap-2 border-b border-[var(--border)] px-4 py-2.5 text-xs last:border-b-0"
          >
            <span className="font-medium text-[var(--fg)]">{s.name}</span>
            <span className="text-[var(--fg-muted)]">{s.region}</span>
            <span className="font-mono text-[var(--fg-muted)]">{s.specs}</span>
            <span className={`pill pill-${s.status.tone} w-fit`}>
              {s.status.label}
            </span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 px-4 py-3 text-xs text-[var(--fg-faint)]">
        <span className="h-1.5 w-1.5 rounded-full border border-dashed border-[var(--border-strong)]" />
        Deploy a new server
      </div>
    </div>
  );
}
