import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { Button } from "./Button";

const platforms = [
  "Ubuntu",
  "Debian",
  "Docker",
  "Node.js",
  "PostgreSQL",
  "Nginx",
];

export function LogoStrip() {
  return (
    <section className="border-y border-[var(--border)] bg-[var(--bg-alt)] py-20">
      <Container className="flex flex-col items-center text-center">
        <Reveal>
          <h2 className="font-serif text-2xl font-medium tracking-tight text-[var(--fg)] md:text-3xl">
            Runs anything that runs on Linux
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[var(--fg-muted)]">
            Every server comes with a clean image and root access — bring
            your own stack, or start from a ready-made one.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {platforms.map((p) => (
              <span
                key={p}
                className="font-mono text-sm text-[var(--fg-muted)]"
              >
                {p}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={140}>
          <Button href="/infrastructure" variant="ghost" className="mt-10">
            See server images
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
