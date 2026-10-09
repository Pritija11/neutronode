import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { IconMail, IconPhone, IconMapPin } from "@/components/icons";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with NeutronNode about VPS hosting, managed infrastructure, backups, or server security.",
  alternates: {
    canonical: "/contact",
  },
};

const nextSteps = [
  {
    index: "01",
    title: "Tell us what you run",
    description:
      "Your workload, expected traffic, and the region you'd want to deploy in — just enough for us to recommend the right plan.",
  },
  {
    index: "02",
    title: "We follow up directly",
    description:
      "An engineer reviews your message and replies with real recommendations, not a generic sales deck.",
  },
  {
    index: "03",
    title: "Your server is live",
    description:
      "Once you're ready, your first server is provisioned with monitoring, backups, and firewall rules already in place.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="py-20 md:py-24">
        <Container>
          <Reveal>
            <Eyebrow>Contact</Eyebrow>
            <h1 className="mt-5 max-w-xl font-serif text-4xl font-medium tracking-tight text-[var(--fg)] md:text-5xl">
              Let&apos;s talk about your servers.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-[var(--fg-muted)]">
              Whether you&apos;re launching your first server or moving an
              existing fleet off an unreliable host, tell us what
              you&apos;re running and we&apos;ll reply with a straight
              answer — not a sales funnel.
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div className="flex flex-col gap-8">
                <div className="flex gap-4">
                  <IconMail className="h-6 w-6 flex-none text-[var(--fg)]" />
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--fg-faint)]">
                      Email
                    </p>
                    <a
                      href="mailto:hello@neutronnode.ltd"
                      className="mt-2 inline-block text-sm text-[var(--fg)] hover:text-[var(--primary)]"
                    >
                      hello@neutronnode.ltd
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <IconPhone className="h-6 w-6 flex-none text-[var(--fg)]" />
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--fg-faint)]">
                      Phone
                    </p>
                    <a
                      href="tel:+9779841234567"
                      className="mt-2 inline-block text-sm text-[var(--fg)] hover:text-[var(--primary)]"
                    >
                      +977 984-1234567
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <IconMapPin className="h-6 w-6 flex-none text-[var(--fg)]" />
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--fg-faint)]">
                      Office
                    </p>
                    <p className="mt-2 text-sm text-[var(--fg)]">
                      Sinamangal, Kathmandu 44600
                      <br />
                      Nepal
                    </p>
                  </div>
                </div>

                <p className="text-sm leading-6 text-[var(--fg-muted)]">
                  We&apos;re a small team — every message is read by an
                  engineer, not routed through a support queue.
                </p>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-7 md:p-9">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container>
          <Reveal>
            <Eyebrow>What happens next</Eyebrow>
            <h2 className="mt-4 max-w-xl font-serif text-3xl font-medium tracking-tight text-[var(--fg)]">
              From message to a running server
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3">
            {nextSteps.map((step, i) => (
              <Reveal key={step.index} delay={i * 80}>
                <div className="border-t-2 border-[var(--primary)] pt-5">
                  <span className="font-mono text-sm text-[var(--primary)]">
                    {step.index}
                  </span>
                  <h3 className="mt-3 text-base font-medium text-[var(--fg)]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--fg-muted)]">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
