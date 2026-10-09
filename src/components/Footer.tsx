import Link from "next/link";
import { Container } from "./Container";
import { IconLogo, IconMail, IconPhone, IconMapPin } from "./icons";

const infraLinks = [
  "Cloud Servers",
  "Managed Infrastructure",
  "Automated Backups",
  "Server Security",
];

const YEAR = 2026;

export function Footer() {
  return (
    <footer className="bg-[#15101f] text-white/55">
      <Container className="grid grid-cols-1 gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-2 font-mono text-sm text-white">
            <IconLogo className="h-5 w-5" />
            neutronnode
          </div>
          <p className="mt-4 max-w-xs text-sm leading-6">
            Cloud servers, managed infrastructure, backups, and security —
            built for teams who need their servers to just stay up.
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-white/35">
            Navigate
          </p>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/infrastructure" className="hover:text-white">Infrastructure</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-white/35">
            Infrastructure
          </p>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            {infraLinks.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-white/35">
            Contact
          </p>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            <li className="flex items-center gap-2.5">
              <IconMail className="h-4 w-4 flex-none" />
              <a href="mailto:hello@neutronnode.ltd" className="hover:text-white">
                hello@neutronnode.ltd
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <IconPhone className="h-4 w-4 flex-none" />
              <a href="tel:+9779841234567" className="hover:text-white">
                +977 984-1234567
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <IconMapPin className="mt-0.5 h-4 w-4 flex-none" />
              <span>Sinamangal, Kathmandu 44600, Nepal</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-4 py-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {YEAR} NeutronNode. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
            <p className="hidden sm:block">
              Cloud infrastructure, built from Kathmandu.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
