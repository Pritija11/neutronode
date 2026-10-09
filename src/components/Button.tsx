import Link from "next/link";

type Variant = "primary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-colors duration-200";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--primary)] text-[var(--on-primary)] shadow-sm shadow-[var(--primary)]/25 hover:bg-[var(--primary-dark)]",
  ghost:
    "border border-[var(--border-strong)] bg-[var(--surface)] text-[var(--fg)] hover:border-[var(--primary)] hover:text-[var(--primary)]",
};

export function Button({
  href,
  variant = "primary",
  className = "",
  children,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
