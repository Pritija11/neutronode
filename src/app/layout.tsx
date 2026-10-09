import type { Metadata } from "next";
import { Geist, Geist_Mono, Lora } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const SITE_URL = "https://neutronnode.ltd";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "NeutronNode — Cloud Servers Built to Stay Up",
    template: "%s · NeutronNode",
  },
  description:
    "NeutronNode is an early-stage cloud infrastructure startup based in Kathmandu, Nepal, offering VPS hosting, managed infrastructure, automated backups, and server security for teams who need their servers to just stay up.",
  keywords: [
    "NeutronNode",
    "VPS hosting",
    "cloud servers",
    "managed infrastructure",
    "server backups",
    "server security",
    "cloud infrastructure startup",
    "Nepal startup",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NeutronNode — Cloud Servers Built to Stay Up",
    description:
      "VPS hosting, managed infrastructure, automated backups, and server security.",
    siteName: "NeutronNode",
    url: SITE_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NeutronNode — Cloud Servers Built to Stay Up",
    description:
      "VPS hosting, managed infrastructure, automated backups, and server security.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NeutronNode",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "NeutronNode is an early-stage cloud infrastructure startup based in Kathmandu, Nepal, offering VPS hosting, managed infrastructure, automated backups, and server security.",
  email: "hello@neutronnode.ltd",
  telephone: "+977-984-1234567",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sinamangal",
    addressLocality: "Kathmandu",
    postalCode: "44600",
    addressCountry: "NP",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[var(--bg)] text-[var(--fg)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
