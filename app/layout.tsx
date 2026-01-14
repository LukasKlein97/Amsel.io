import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ams-cockpit.de"),
  title: {
    default: "AMS - Digitale Arbeitssicherheit für Unternehmen",
    template: "%s | AMS ",
  },
  description:
    "Digitale Arbeitssicherheit mit smarten Softwaremodulen. Mobile Begehungen, Compliance-Management und KI-gestützte Auswertungen für Produktion, Logistik und Verwaltung.",
  keywords: [
    "Arbeitssicherheit",
    "Gefährdungsbeurteilung",
    "Compliance",
    "Arbeitsschutz Software",
    "Sicherheitsmanagement",
    "Mobile Begehungen",
    "AMS Cockpit",
  ],
  authors: [{ name: "AMS Cockpit GmbH" }],
  creator: "AMS Cockpit GmbH",
  publisher: "AMS Cockpit GmbH",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://ams-cockpit.de",
    siteName: "AMS ",
    title: "AMS - Digitale Arbeitssicherheit für Unternehmen",
    description:
      "Digitale Arbeitssicherheit mit smarten Softwaremodulen. Mobile Begehungen, Compliance-Management und KI-gestützte Auswertungen.",
    images: [
      {
        url: "/images/web.png",
        width: 1200,
        height: 630,
        alt: "AMS - Digitale Arbeitssicherheit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "- Digitale Arbeitssicherheit",
    description:
      "Digitale Arbeitssicherheit mit smarten Softwaremodulen für Unternehmen.",
    images: ["/images/web.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  alternates: {
    canonical: "https://ams-cockpit.de",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AMS Cockpit GmbH",
  url: "https://ams-cockpit.de",
  logo: "https://ams-cockpit.de/Logo.svg",
  description:
    "Digitale Arbeitssicherheit mit smarten Softwaremodulen für Unternehmen.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Wolzenburg 2",
    addressLocality: "Kierspe",
    postalCode: "58566",
    addressCountry: "DE",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+49-2359-2967311",
    contactType: "customer service",
    email: "info@ams-cockpit.de",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
