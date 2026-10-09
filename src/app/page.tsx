import Link from "next/link";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { LogoStrip } from "@/components/LogoStrip";
import { GradientCTA } from "@/components/GradientCTA";
import { ServerListMock } from "@/components/mocks/ServerListMock";
import { MonitoringMock } from "@/components/mocks/MonitoringMock";
import { BackupMock } from "@/components/mocks/BackupMock";
import { SecurityMock } from "@/components/mocks/SecurityMock";
import {
  IconServer,
  IconGlobe,
  IconArrowRight,
  IconCheck,
} from "@/components/icons";

const stats = [
  { label: "REGIONS", value: "Asia · Europe · N. America" },
  { label: "STORAGE", value: "NVMe on every plan" },
  { label: "MONITORING", value: "24/7" },
];

const teasers = [
  {
    icon: IconServer,
    title: "Cloud Servers",
    description:
      "VPS instances with root access and NVMe storage, provisioned in under a minute. Resize later without rebuilding from scratch.",
    href: "/infrastructure",
    linkLabel: "Explore Cloud Servers",
  },
  {
    icon: IconGlobe,
    title: "Global Regions",
    description:
      "Deploy closer to your users across Asia, Europe, and North America, with private networking between your own servers.",
    href: "/infrastructure",
    linkLabel: "Explore Regions",
  },
];

const backupPoints = [
  "No cron job to maintain, no script that silently stopped working",
  "Rolling retention — no manual pruning required",
  "Restore from the dashboard, no support ticket",
];

const securityPoints = [
  "Default-deny firewall — nothing open until you open it",
  "DDoS protection on every plan, not an enterprise upsell",
  "Intrusion detection running continuously in the background",
];

const useCases = [
  {
    title: "Startups without an ops hire",
    description:
      "When nobody's full-time job is patching and backing up servers, NeutronNode covers the baseline so the team can stay on the product.",
  },
  {
    title: "Agencies running client infrastructure",
    description:
      "Keep every client's server isolated, backed up, and monitored without building bespoke ops tooling for each engagement.",
  },
  {
    title: "Teams migrating off an unreliable host",
    description:
      "If your current provider's idea of 'managed' is an unmonitored box with no backups, the migration is usually less painful than it looks.",
  },
  {
    title: "Side projects that got serious",
    description:
      "What started as a weekend build now has real users. NeutronNode scales with it without a re-platform.",
  },
];

const plans = [
  {
    name: "Starter",
    price: "$6",
    period: "/mo",
    description: "For small projects, staging environments, and side builds.",
    specs: ["1 vCPU", "2 GB RAM", "40 GB NVMe", "2 TB transfer"],
  },
  {
    name: "Growth",
    price: "$24",
    period: "/mo",
    description: "For production apps that need headroom to scale.",
    specs: ["4 vCPU", "8 GB RAM", "160 GB NVMe", "6 TB transfer"],
    featured: true,
  },
  {
    name: "Scale",
    price: "$68",
    period: "/mo",
    description: "For databases, worker fleets, and high-traffic services.",
    specs: ["8 vCPU", "32 GB RAM", "480 GB NVMe", "12 TB transfer"],
  },
];

const faqs = [
  {
    q: "What's actually included with a NeutronNode server?",
    a: "Root access, NVMe storage, a choice of Linux images, automated daily backups, and firewall management — not an upsell list you have to click through to assemble a usable server.",
  },
  {
    q: "Do I need to be a sysadmin to use this?",
    a: "No. You can launch a server with a clean Ubuntu or Debian image and root access in under a minute, or pick a ready-made image with your stack preinstalled if you'd rather skip the setup.",
  },
  {
    q: "How do backups actually work?",
    a: "Every server takes a daily snapshot automatically, retained on a rolling schedule. Restoring is a single action from the dashboard — no support ticket required, no waiting on a reply.",
  },
  {
    q: "Can I move an existing server to NeutronNode?",
    a: "Yes. We support image imports from most major providers, and our team can walk through the migration plan with you before anything gets cut over.",
  },
  {
    q: "Is NeutronNode a new company?",
    a: "Yes — we're an early-stage startup based in Kathmandu. We're deliberately keeping our first wave of customers small so we can fix problems fast instead of scaling a half-finished product.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="hero-glow" aria-hidden />
        <Container className="relative z-10 grid grid-cols-1 items-center gap-12 py-24 md:py-32 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Eyebrow>Cloud Infrastructure</Eyebrow>
            <h1 className="mt-6 max-w-xl font-serif text-5xl font-medium leading-[1.05] tracking-tight text-[var(--fg)] md:text-7xl">
              Servers that stay up while you sleep.
            </h1>
            <p className="mt-7 max-w-sm text-base leading-7 text-[var(--fg-muted)]">
              VPS hosting, monitoring, backups, and security — on by
              default, not sold back to you as add-ons.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Button href="/contact">
                Get started
                <IconArrowRight className="h-4 w-4" />
              </Button>
              <Link
                href="/infrastructure"
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--fg)] underline decoration-[var(--border-strong)] underline-offset-4 transition-colors hover:decoration-[var(--primary)]"
              >
                See infrastructure
                <IconArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          <Reveal>
            <ServerListMock />
          </Reveal>
        </Container>
      </section>

      {/* Stat strip */}
      <section className="border-b border-[var(--border)] bg-[var(--bg-alt)]">
        <Container className="flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
          <Reveal>
            <p className="font-serif text-xl text-[var(--fg)] md:text-2xl">
              Built for reliability
            </p>
          </Reveal>
          <div className="flex flex-wrap gap-x-10 gap-y-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 60}>
                <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--fg-faint)]">
                  {s.label}
                </p>
                <p className="mt-1 text-sm font-medium text-[var(--fg)]">
                  {s.value}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <LogoStrip />

      {/* Centered statement */}
      <section className="py-24 md:py-28">
        <Container>
          <Reveal>
            <p className="mx-auto max-w-3xl text-center font-serif text-3xl font-medium leading-[1.25] tracking-tight text-[var(--fg)] md:text-5xl">
              A box with an IP address isn&apos;t infrastructure.
              <br className="hidden md:block" /> A server you never have to
              babysit is.
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
            {teasers.map((t, i) => (
              <Reveal key={t.title} delay={i * 90}>
                <div className="flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--bg-alt)] p-8">
                  <t.icon className="h-6 w-6 text-[var(--primary)]" />
                  <h3 className="mt-5 font-serif text-xl font-medium text-[var(--fg)]">
                    {t.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--fg-muted)]">
                    {t.description}
                  </p>
                  <Link
                    href={t.href}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--primary-dark)] hover:underline"
                  >
                    {t.linkLabel}
                    <IconArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Automated Backups */}
      <section className="border-t border-[var(--border)] py-24">
        <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Restore in one click</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-[var(--fg)] md:text-4xl">
              Automated Backups
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-[var(--fg-muted)]">
              Daily snapshots run automatically on every server, point to
              one, confirm, and your server is back to that exact state in
              minutes.
            </p>

            <ul className="mt-8 flex flex-col gap-3.5">
              {backupPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[var(--primary-soft)]">
                    <IconCheck className="h-3 w-3 text-[var(--primary-dark)]" />
                  </span>
                  <span className="text-sm text-[var(--fg-muted)]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <BackupMock />
          </Reveal>
        </Container>
      </section>

      {/* Mid-page slab — Managed Infrastructure */}
      <section className="py-6">
        <Container>
          <Reveal>
            <div
              className="overflow-hidden rounded-3xl border border-[var(--border)] p-10 md:p-14"
              style={{
                background:
                  "linear-gradient(135deg, color-mix(in srgb, var(--accent-mint) 16%, white), color-mix(in srgb, var(--accent-blue) 14%, white))",
              }}
            >
              <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                <div>
                  <Eyebrow>We watch, you build</Eyebrow>
                  <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-[var(--fg)] md:text-4xl">
                    Managed Infrastructure
                  </h2>
                  <p className="mt-4 max-w-md text-sm leading-6 text-[var(--fg-muted)]">
                    Every server is monitored around the clock for CPU,
                    memory, disk, and uptime. When something looks off, you
                    find out from us — not from an angry customer email.
                    Security patches and kernel updates are tracked
                    automatically, so you&apos;re never versions behind
                    without realizing it.
                  </p>
                  <Link
                    href="/infrastructure"
                    className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--primary-dark)] hover:underline"
                  >
                    See how monitoring works
                    <IconArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
                <MonitoringMock />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Server Security */}
      <section className="py-24">
        <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <Reveal className="lg:order-2">
            <Eyebrow>Locked down by default</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-[var(--fg)] md:text-4xl">
              Server Security
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-[var(--fg-muted)]">
              Every server ships with a default-deny firewall — nothing is
              open until you open it. Manage rules from the dashboard or
              your own tooling, without touching iptables by hand.
            </p>

            <ul className="mt-8 flex flex-col gap-3.5">
              {securityPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[var(--primary-soft)]">
                    <IconCheck className="h-3 w-3 text-[var(--primary-dark)]" />
                  </span>
                  <span className="text-sm text-[var(--fg-muted)]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100} className="lg:order-1">
            <SecurityMock />
          </Reveal>
        </Container>
      </section>

      {/* Use cases — plain grid */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)] py-24">
        <Container>
          <Reveal>
            <Eyebrow>Who it&apos;s for</Eyebrow>
            <h2 className="mt-4 max-w-xl font-serif text-3xl font-medium tracking-tight text-[var(--fg)] md:text-4xl">
              Where NeutronNode fits best
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((u, i) => (
              <Reveal key={u.title} delay={i * 70}>
                <div className="border-t border-[var(--border-strong)] pt-5">
                  <h3 className="text-sm font-medium text-[var(--fg)]">
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

      {/* Pricing */}
      <section className="py-24">
        <Container>
          <Reveal>
            <Eyebrow>Pricing</Eyebrow>
            <h2 className="mt-4 max-w-xl font-serif text-3xl font-medium tracking-tight text-[var(--fg)] md:text-4xl">
              Simple plans, no surprise line items
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--fg-muted)]">
              Backups, monitoring, and firewall management are included at
              every tier — not sold back to you as add-ons once you&apos;re
              already locked in.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {plans.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 80}>
                <div
                  className={`flex h-full flex-col rounded-lg border p-7 ${
                    plan.featured
                      ? "border-[var(--primary)] bg-[var(--primary-soft)]"
                      : "border-[var(--border)] bg-[var(--surface)]"
                  }`}
                >
                  <p className="text-sm font-medium text-[var(--fg)]">
                    {plan.name}
                  </p>
                  <p className="mt-3 flex items-baseline gap-1">
                    <span className="font-serif text-3xl font-medium text-[var(--fg)]">
                      {plan.price}
                    </span>
                    <span className="text-sm text-[var(--fg-muted)]">
                      {plan.period}
                    </span>
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[var(--fg-muted)]">
                    {plan.description}
                  </p>
                  <ul className="mt-6 flex flex-col gap-2.5">
                    {plan.specs.map((spec) => (
                      <li
                        key={spec}
                        className="flex items-center gap-2 text-sm text-[var(--fg-muted)]"
                      >
                        <IconCheck className="h-4 w-4 flex-none text-[var(--primary)]" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <Button
                    href="/contact"
                    variant={plan.featured ? "primary" : "ghost"}
                    className="mt-7"
                  >
                    Get started
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)] py-24">
        <Container>
          <Reveal>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-4 max-w-xl font-serif text-3xl font-medium tracking-tight text-[var(--fg)] md:text-4xl">
              Things people usually ask before signing up
            </h2>
          </Reveal>

          <div className="mt-12 flex flex-col divide-y divide-[var(--border)]">
            {faqs.map((item, i) => (
              <Reveal key={item.q} delay={i * 60}>
                <div className="grid grid-cols-1 gap-3 py-7 md:grid-cols-[1.1fr_1.4fr] md:gap-10">
                  <h3 className="text-base font-medium text-[var(--fg)]">
                    {item.q}
                  </h3>
                  <p className="text-sm leading-6 text-[var(--fg-muted)]">
                    {item.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <GradientCTA
        title="Ready for servers that don't keep you up at night?"
        description="Launch your first server in minutes, with backups and monitoring already turned on."
        buttonLabel="Get started"
        buttonHref="/contact"
      />
    </>
  );
}
