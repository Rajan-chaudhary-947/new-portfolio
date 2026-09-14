import type { Metadata, Viewport } from "next";
import { Header } from "@/components/Header";
import { GeminiAssistant } from "@/components/GeminiAssistant";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: "%s | Rajan Chaudhary",
  },
  description: site.description,
  applicationName: "Rajan Chaudhary Portfolio",
  keywords: [...site.keywords],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: "en_IN",
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: "Rajan Chaudhary — Full-Stack Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [site.ogImage],
  },
  robots: { index: true, follow: true },
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: "#07111f",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${site.url}/#person`,
  name: site.name,
  url: site.url,
  jobTitle: site.role,
  email: `mailto:${site.email}`,
  sameAs: [site.github, site.linkedin],
  alumniOf: { "@type": "CollegeOrUniversity", name: "IIMT University" },
  knowsAbout: ["React", "Next.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Redis", "Docker", "JavaScript", "Java"],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  name: site.name,
  url: site.url,
  description: site.description,
  publisher: { "@id": `${site.url}/#person` },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <JsonLd data={personJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <Header />
        {children}
        <GeminiAssistant />
      </body>
    </html>
  );
}
