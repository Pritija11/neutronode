const snapshots = [
  { label: "Daily snapshot", time: "Today, 03:00", size: "12.4 GB" },
  { label: "Daily snapshot", time: "Yesterday, 03:00", size: "12.1 GB" },
  { label: "Weekly snapshot", time: "Oct 2, 03:00", size: "11.8 GB" },
  { label: "Pre-upgrade snapshot", time: "Sep 28, 14:20", size: "11.6 GB" },
];

export function BackupMock({ className = "" }: { className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] shadow-sm ${className}`}
    >
      <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-3">
        <span className="text-xs font-medium text-[var(--fg-muted)]">
          Snapshots — api-prod-01
        </span>
        <span className="pill pill-green">Auto-backup on</span>
      </div>
      <div className="flex flex-col">
        {snapshots.map((s) => (
          <div
            key={s.time}
            className="flex items-center justify-between gap-3 border-b border-[var(--border)] px-4 py-2.5 text-xs last:border-b-0"
          >
            <div className="flex flex-col">
              <span className="font-medium text-[var(--fg)]">{s.label}</span>
              <span className="font-mono text-[11px] text-[var(--fg-faint)]">
                {s.time}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[var(--fg-faint)]">{s.size}</span>
              <span className="text-[var(--primary)]">Restore</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
