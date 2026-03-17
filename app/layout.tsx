import type { Metadata } from "next";
import Script from "next/script";
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
  metadataBase: new URL("https://Amsel.io"),
  title: {
    default: "Amsel.io - Digitale Arbeitssicherheit für Unternehmen",
    template: "%s | Amsel.io ",
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
    "Amsel.io",
  ],
  authors: [{ name: "Amsel.io GmbH" }],
  creator: "Amsel.io GmbH",
  publisher: "Amsel.io GmbH",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://Amsel.io",
    siteName: "Amsel.io ",
    title: "Amsel.io - Digitale Arbeitssicherheit für Unternehmen",
    description:
      "Digitale Arbeitssicherheit mit smarten Softwaremodulen. Mobile Begehungen, Compliance-Management und KI-gestützte Auswertungen.",
    images: [
      {
        url: "/images/web.png",
        width: 1200,
        height: 630,
        alt: "Amsel.io - Digitale Arbeitssicherheit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amsel.io - Digitale Arbeitssicherheit",
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
    canonical: "https://Amsel.io",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Amsel.io GmbH",
  url: "https://Amsel.io",
  logo: "https://Amsel.io/amsel-bund.png",
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
    email: "info@amsel.io",
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
        <Script
          src="https://t.contentsquare.net/uxa/71e3a27cb9f67.js"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}
