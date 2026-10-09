import Link from "next/link";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { IconArrowRight } from "./icons";

export function GradientCTA({
  title,
  description,
  buttonLabel,
  buttonHref,
}: {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
}) {
  return (
    <section className="gradient-cta">
      <Container className="flex flex-col items-start justify-between gap-8 py-16 md:py-20 lg:flex-row lg:items-center">
        <Reveal>
          <h2 className="max-w-lg font-serif text-2xl font-medium tracking-tight text-white md:text-3xl">
            {title}
          </h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-white/80">
            {description}
          </p>
        </Reveal>
        <Reveal delay={80}>
          <Link
            href={buttonHref}
            className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-medium text-[var(--primary-dark)] transition-colors hover:bg-white/90"
          >
            {buttonLabel}
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
