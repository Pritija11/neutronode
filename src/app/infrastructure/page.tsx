import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { IconBadge } from "@/components/IconBadge";
import { GradientCTA } from "@/components/GradientCTA";
import {
  IconServer,
  IconActivity,
  IconBackup,
  IconShieldCheck,
  IconGlobe,
  IconCpu,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Infrastructure",
  description:
    "Cloud servers, managed infrastructure, automated backups, and server security — the NeutronNode infrastructure explained.",
  alternates: {
    canonical: "/infrastructure",
  },
};

const features = [
  {
    icon: IconServer,
    variant: "violet" as const,
    title: "Cloud Servers",
    description:
      "VPS instances with root access, NVMe storage, and a clean Linux image — provisioned in under a minute, in a region close to your users.",
    extra:
      "Resize up or down without rebuilding. Your disk, IP address, and data stay in place while the underlying resources change around them.",
    items: [
      "Root access on every server",
      "NVMe storage, no spinning disks",
      "Resize without a rebuild",
    ],
  },
  {
    icon: IconGlobe,
    variant: "blue" as const,
    title: "Global Regions",
    description:
      "Deploy in the region closest to your users across Asia, Europe, and North America, instead of accepting whatever single data center a provider defaults you into.",
    extra:
      "Network latency compounds fast at scale. Picking the right region on day one avoids a painful migration on day two hundred.",
    items: [
      "Multiple regions across three continents",
      "Private networking between your own servers",
      "No region lock-in on your account",
    ],
  },
  {
    icon: IconActivity,
    variant: "mint" as const,
    title: "Managed Infrastructure",
    description:
      "Every server is monitored continuously for CPU, memory, disk I/O, and uptime — not polled once an hour and called 'monitoring.'",
    extra:
      "Security patches and kernel updates are tracked automatically, so you always know exactly how far behind a server has drifted, if at all.",
    items: [
      "Real-time CPU, memory, and disk tracking",
      "Automatic patch and kernel update tracking",
      "Alerts before a problem becomes an outage",
    ],
  },
  {
    icon: IconBackup,
    variant: "pink" as const,
    title: "Automated Backups",
    description:
      "Daily snapshots run automatically on every server, retained on a rolling schedule — no cron job to maintain, no script that silently stopped working months ago.",
    extra:
      "Restoring is one action from the dashboard: pick a snapshot, confirm, and the server is back to that exact state within minutes.",
    items: [
      "Daily automatic snapshots",
      "Rolling retention, no manual pruning",
      "One-click restore, no support ticket",
    ],
  },
  {
    icon: IconShieldCheck,
    variant: "amber" as const,
    title: "Server Security",
    description:
      "Every server ships with a default-deny firewall — nothing is reachable until you explicitly open it. Manage rules from the dashboard or your own tooling.",
    extra:
      "DDoS protection and intrusion detection run in the background on every plan, not gated behind an enterprise contract you haven't signed yet.",
    items: [
      "Default-deny firewall out of the box",
      "DDoS protection on every plan",
      "Intrusion detection running continuously",
    ],
  },
  {
    icon: IconCpu,
    variant: "rose" as const,
    title: "Performance You Can See",
    description:
      "Every plan publishes its real specs — vCPU count, RAM, and NVMe capacity — not vague tiers that leave you guessing what you're actually paying for.",
    extra:
      "No oversold CPU cores competing with a dozen other tenants. What you provision is what you get, consistently.",
    items: [
      "Published specs, no vague tiers",
      "Dedicated vCPU allocation",
      "Consistent performance under load",
    ],
  },
];

const useCases = [
  {
    title: "Small teams without a dedicated ops person",
    description:
      "When nobody's full-time job is keeping servers patched and backed up, NeutronNode handles the baseline so your team can focus on the product instead.",
  },
  {
    title: "Agencies managing client infrastructure",
    description:
      "Keep every client's server isolated, backed up, and monitored without building your own ops tooling from scratch for each engagement.",
  },
  {
    title: "Teams migrating off an unreliable host",
    description:
      "If your current provider's idea of 'managed' is an unmonitored box with no backups, migrating is usually less painful than it looks.",
  },
];

export default function InfrastructurePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-[var(--border)] py-20 md:py-24">
        <div className="hero-glow" aria-hidden />
        <Container className="relative z-10">
          <Reveal>
            <Eyebrow>Infrastructure</Eyebrow>
            <h1 className="mt-5 max-w-2xl font-serif text-4xl font-medium tracking-tight text-[var(--fg)] md:text-5xl">
              Everything your server needs, included by default.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
              NeutronNode isn&apos;t just a box with an IP address. Every
              server comes with monitoring, backups, and security built
              in — the parts most providers sell back to you as add-ons.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <div className="flex flex-col divide-y divide-[var(--border)]">
            {features.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 60}>
                <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-[3rem_1.4fr_1fr] md:gap-10">
                  <IconBadge icon={feature.icon} variant={feature.variant} />
                  <div>
                    <h2 className="font-serif text-xl font-medium text-[var(--fg)]">
                      {feature.title}
                    </h2>
                    <p className="mt-3 max-w-lg text-sm leading-6 text-[var(--fg-muted)]">
                      {feature.description}
                    </p>
                    <p className="mt-3 max-w-lg text-sm leading-6 text-[var(--fg-muted)]">
                      {feature.extra}
                    </p>
                  </div>
                  <ul className="flex flex-col gap-2.5 self-start">
                    {feature.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-baseline gap-2 text-sm text-[var(--fg-muted)]"
                      >
                        <span className="h-1 w-1 flex-none translate-y-[-2px] rounded-full bg-[var(--primary)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container>
          <Reveal>
            <Eyebrow>Who it&apos;s for</Eyebrow>
            <h2 className="mt-4 max-w-xl font-serif text-3xl font-medium tracking-tight text-[var(--fg)]">
              Where NeutronNode fits best
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--fg-muted)]">
              It&apos;s not built for one specific team size — it&apos;s
              built for the moment a server stops being something you can
              babysit yourself.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {useCases.map((u, i) => (
              <Reveal key={u.title} delay={i * 80}>
                <div className="h-full rounded-lg border border-[var(--border)] bg-[var(--surface)] p-7">
                  <h3 className="text-lg font-medium text-[var(--fg)]">
                    {u.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--fg-muted)]">
                    {u.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <GradientCTA
        title="Want to see specs for your workload?"
        description="Tell us what you're running and we'll recommend the right plan and region."
        buttonLabel="Get started"
        buttonHref="/contact"
      />
    </>
  );
}
