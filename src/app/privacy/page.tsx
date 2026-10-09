import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How NeutronNode collects, uses, and protects data for customers using our VPS hosting and cloud infrastructure services.",
  alternates: {
    canonical: "/privacy",
  },
};

const sections = [
  {
    heading: "1. What we collect",
    body: [
      "When you create an account, we collect your name, email address, and billing details needed to provision and invoice a server. We don't ask for more than that to get started.",
      "When you use a provisioned server, we collect basic operational telemetry — CPU, memory, disk, and network usage — so monitoring and alerting can work. We do not inspect the contents of your server's disk, applications, or traffic.",
      "Like most web services, our dashboard and marketing site log IP addresses and request metadata for security and abuse prevention.",
    ],
  },
  {
    heading: "2. How we use it",
    body: [
      "Account and billing data is used to provision servers, process payments, and send service-related notices (maintenance windows, security advisories, invoice receipts).",
      "Usage telemetry powers the monitoring and alerting features described on our Infrastructure page, and nothing else. We don't sell or repackage it.",
      "We may use aggregated, de-identified usage patterns to plan capacity across our regions — this never includes anything that identifies a specific account.",
    ],
  },
  {
    heading: "3. What we don't do",
    body: [
      "We don't sell customer data to third parties.",
      "We don't access the contents of a running server's disk or applications unless you explicitly grant support access to help debug an issue, or we're legally compelled to.",
      "We don't use customer data to train models or for advertising.",
    ],
  },
  {
    heading: "4. Third-party processors",
    body: [
      "We rely on a small number of third-party processors to run the business — a payment processor for billing, an email provider for transactional notices, and infrastructure monitoring tooling. Each is bound by its own data-processing terms, and none are given more data than they need to do their job.",
    ],
  },
  {
    heading: "5. Data retention",
    body: [
      "Account and billing records are retained for as long as your account is active, plus a limited period afterward to satisfy tax and accounting obligations.",
      "Server usage logs are retained on a rolling 30-day window by default. Deleted servers and their backups are purged from our systems within 7 days of deletion.",
    ],
  },
  {
    heading: "6. Your rights",
    body: [
      "You can request a copy of the personal data we hold about you, ask us to correct it, or request deletion of your account and associated data, subject to any legal retention requirements. Reach out through the contact details below and we'll respond directly — not through an automated ticket system.",
    ],
  },
  {
    heading: "7. Changes to this policy",
    body: [
      "If this policy changes in a way that materially affects how we handle your data, we'll email active account holders before the change takes effect rather than quietly updating this page.",
    ],
  },
  {
    heading: "8. Contact",
    body: [
      "Questions about this policy can be sent to hello@neutronnode.ltd, or by post to Sinamangal, Kathmandu 44600, Nepal.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <Reveal>
          <Eyebrow>Legal</Eyebrow>
          <h1 className="mt-5 max-w-xl font-serif text-4xl font-medium tracking-tight text-[var(--fg)] md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
            This explains what data NeutronNode collects, how it&apos;s
            used, and what you can do about it. We&apos;ve tried to write
            it in plain language instead of boilerplate.
          </p>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.1em] text-[var(--fg-faint)]">
            Effective January 1, 2026
          </p>
        </Reveal>

        <div className="mt-16 max-w-2xl">
          {sections.map((section, i) => (
            <Reveal key={section.heading} delay={Math.min(i * 40, 240)}>
              <div className="border-t border-[var(--border)] py-8 first:border-t-0 first:pt-0">
                <h2 className="font-serif text-xl font-medium text-[var(--fg)]">
                  {section.heading}
                </h2>
                <div className="mt-4 flex flex-col gap-3">
                  {section.body.map((p) => (
                    <p
                      key={p}
                      className="text-sm leading-7 text-[var(--fg-muted)]"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
