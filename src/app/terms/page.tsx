import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern use of NeutronNode's VPS hosting, managed infrastructure, backup, and server security services.",
  alternates: {
    canonical: "/terms",
  },
};

const sections = [
  {
    heading: "1. Using NeutronNode",
    body: [
      "These terms apply from the moment you create a NeutronNode account. By provisioning a server, you agree to use it in a way that's legal, doesn't disrupt other customers, and doesn't abuse shared infrastructure like networking or backup storage.",
    ],
  },
  {
    heading: "2. Acceptable use",
    body: [
      "Servers may not be used to host illegal content, run attacks against other systems (including DDoS tooling), send unsolicited bulk email, or mine cryptocurrency in a way that violates another customer's fair share of shared resources.",
      "We don't monitor server contents proactively, but we do act on abuse reports and will suspend a server that's actively harming other customers or the network, with notice wherever possible.",
    ],
  },
  {
    heading: "3. Account responsibilities",
    body: [
      "You're responsible for keeping your account credentials secure and for activity that happens under your account. If you believe your account has been compromised, contact us immediately so we can help lock it down.",
      "You're responsible for the security configuration of software you install on your server — firewall rules, OS patches beyond what we track automatically, and application-level access control.",
    ],
  },
  {
    heading: "4. Billing and refunds",
    body: [
      "Plans are billed monthly in advance. You can cancel at any time; access continues through the end of the billing period you've already paid for, with no further charges after that.",
      "We don't offer prorated refunds for partial months, but if something on our end goes materially wrong — an extended outage, a billing error — reach out and we'll make it right directly rather than pointing you to a policy clause.",
    ],
  },
  {
    heading: "5. Service availability",
    body: [
      "We design for reliability — monitoring, automated backups, and a default-deny firewall are included on every plan — but we don't promise a specific uptime percentage in these terms. If you need a formal SLA for a production workload, contact us before you launch and we'll work one out directly.",
      "Scheduled maintenance that could affect availability is communicated in advance by email wherever possible.",
    ],
  },
  {
    heading: "6. Data and backups",
    body: [
      "Automated daily backups are included on every plan as described on our Infrastructure page. You're still responsible for maintaining your own backup copies of anything you can't afford to lose — we take backups seriously, but no backup system should be the only copy of something critical.",
    ],
  },
  {
    heading: "7. Limitation of liability",
    body: [
      "NeutronNode is provided on an as-is basis. To the extent permitted by law, we aren't liable for indirect, incidental, or consequential damages arising from use of the service, including lost revenue or data, beyond the amount you've paid us in the three months prior to a claim.",
    ],
  },
  {
    heading: "8. Termination",
    body: [
      "You can close your account at any time from the dashboard. We may suspend or terminate a server for a violation of the acceptable use terms above, generally with notice unless the issue is actively harming other customers or our infrastructure.",
    ],
  },
  {
    heading: "9. Governing law",
    body: [
      "These terms are governed by the laws of Nepal. Any dispute arising from use of the service will be handled in the courts of Kathmandu, Nepal.",
    ],
  },
  {
    heading: "10. Changes to these terms",
    body: [
      "If we make a material change to these terms, we'll notify active account holders by email before the change takes effect.",
    ],
  },
  {
    heading: "11. Contact",
    body: [
      "Questions about these terms can be sent to hello@neutronnode.ltd, or by post to Sinamangal, Kathmandu 44600, Nepal.",
    ],
  },
];

export default function TermsPage() {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <Reveal>
          <Eyebrow>Legal</Eyebrow>
          <h1 className="mt-5 max-w-xl font-serif text-4xl font-medium tracking-tight text-[var(--fg)] md:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
            The terms that govern use of NeutronNode&apos;s servers and
            dashboard. Plain language where we can manage it, precise where
            it has to be.
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
