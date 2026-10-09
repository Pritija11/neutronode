type Variant = "violet" | "pink" | "blue" | "mint" | "amber" | "rose";

export function IconBadge({
  icon: Icon,
  variant = "violet",
  className = "",
}: {
  icon: React.ComponentType<{ className?: string }>;
  variant?: Variant;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex h-12 w-12 items-center justify-center rounded-xl border chip-${variant} ${className}`}
    >
      <Icon className="h-6 w-6" />
    </span>
  );
}
