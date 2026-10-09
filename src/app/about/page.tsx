import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { GradientCTA } from "@/components/GradientCTA";
import {
  IconShieldCheck,
  IconActivity,
  IconServer,
  IconMapPin,
  IconUser,
  IconGlobe,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "NeutronNode is an early-stage cloud infrastructure startup based in Kathmandu, Nepal, building VPS hosting that stays reliable by default.",
  alternates: {
    canonical: "/about",
  },
};

const quickFacts = [
  { icon: IconMapPin, label: "Based in Kathmandu" },
  { icon: IconUser, label: "Small team" },
  { icon: IconGlobe, label: "Serving teams globally" },
];

const values = [
  {
    icon: IconServer,
    title: "Reliable by default",
    description:
      "Monitoring, backups, and security aren't premium add-ons — they're part of the server from the first minute it boots, on every plan we offer.",
  },
  {
    icon: IconActivity,
    title: "No surprise behavior",
    description:
      "Specs mean what they say. A 4 vCPU plan gives you 4 dedicated vCPUs, not a shared pool quietly split a dozen ways behind the scenes.",
  },
  {
    icon: IconShieldCheck,
    title: "Secure without the upsell",
    description:
      "A firewall and DDoS protection shouldn't be the thing that pushes you onto an enterprise contract. They're included from the Starter plan up.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] py-20 md:py-24">
        <Container>
          <Reveal>
            <Eyebrow>About NeutronNode</Eyebrow>
            <h1 className="mt-5 max-w-2xl font-serif text-4xl font-medium leading-[1.15] tracking-tight text-[var(--fg)] md:text-5xl">
              Built by people who&apos;ve been paged at 3 a.m. too many times.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-[var(--fg-muted)]">
              NeutronNode is an early-stage cloud infrastructure startup
              based in Kathmandu, Nepal. We started it after one too many
              unmonitored servers went down on a weekend with no backup to
              fall back on — a failure that should never have been a
              surprise in the first place.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-[var(--border)] pt-8">
              {quickFacts.map((f) => (
                <div key={f.label} className="flex items-center gap-2.5">
                  <f.icon className="h-4 w-4 flex-none text-[var(--fg-faint)]" />
                  <span className="text-sm text-[var(--fg-muted)]">
                    {f.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-[var(--border)] py-20 md:py-28">
        <Container>
          <Reveal>
            <p className="max-w-3xl font-serif text-3xl font-medium leading-[1.3] tracking-tight text-[var(--fg)] md:text-4xl">
              &ldquo;A server that goes down shouldn&apos;t be a surprise —
              it should already be backed up, monitored, and recoverable
              in minutes.&rdquo;
            </p>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-[var(--fg-faint)]">
              The idea we keep building around
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <Reveal>
            <IconServer className="h-5 w-5 text-[var(--fg-faint)]" />
            <h2 className="mt-3 font-serif text-2xl font-medium tracking-tight text-[var(--fg)]">
              Why we started NeutronNode
            </h2>
            <p className="mt-5 text-sm leading-7 text-[var(--fg-muted)]">
              Most VPS providers sell you a box with an IP address and
              call it infrastructure. The actual work — monitoring, patch
              tracking, backups, firewall rules — gets left to you, or
              sold back as a separate &quot;managed&quot; tier that costs
              more than the server itself.
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--fg-muted)]">
              We built NeutronNode to close that gap: a server that comes
              reliable out of the box, not one you have to spend a weekend
              hardening before it&apos;s actually production-ready.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <IconGlobe className="h-5 w-5 text-[var(--fg-faint)]" />
            <h2 className="mt-3 font-serif text-2xl font-medium tracking-tight text-[var(--fg)]">
              Based in Kathmandu, built for anywhere
            </h2>
            <p className="mt-5 text-sm leading-7 text-[var(--fg-muted)]">
              We operate out of Kathmandu, but cloud infrastructure
              doesn&apos;t care where its operator sits — our regions span
              Asia, Europe, and North America, and our customers aren&apos;t
              limited to any one of them either.
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--fg-muted)]">
              Being a smaller, focused team means a support request gets
              answered by someone who actually understands your server,
              not a tier-one script reader working through a queue.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container>
          <Reveal>
            <Eyebrow>How we think</Eyebrow>
            <h2 className="mt-4 max-w-xl font-serif text-3xl font-medium tracking-tight text-[var(--fg)]">
              Principles we build with
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--fg-muted)]">
              These shape what ships, and what we refuse to cut corners on.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <v.icon className="h-6 w-6 text-[var(--primary)]" />
                <h3 className="mt-4 text-lg font-medium text-[var(--fg)]">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--fg-muted)]">
                  {v.description}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <GradientCTA
        title="Want infrastructure you don't have to babysit?"
        description="Tell us what you're running — we'll tell you honestly whether NeutronNode is a fit."
        buttonLabel="Get in touch"
        buttonHref="/contact"
      />
    </>
  );
}
