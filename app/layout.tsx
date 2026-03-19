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
  metadataBase: new URL("https://amsel.io"),
  title: {
    default: "amsel.io - Digitale Arbeitssicherheit für Unternehmen",
    template: "%s | amsel.io ",
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
    "amsel.io",
  ],
  authors: [{ name: "amsel.io GmbH" }],
  creator: "amsel.io GmbH",
  publisher: "amsel.io GmbH",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://amsel.io",
    siteName: "amsel.io ",
    title: "amsel.io - Digitale Arbeitssicherheit für Unternehmen",
    description:
      "Digitale Arbeitssicherheit mit smarten Softwaremodulen. Mobile Begehungen, Compliance-Management und KI-gestützte Auswertungen.",
    images: [
      {
        url: "/images/web.png",
        width: 1200,
        height: 630,
        alt: "amsel.io - Digitale Arbeitssicherheit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "amsel.io - Digitale Arbeitssicherheit",
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
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", rel: "shortcut icon" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
  alternates: {
    canonical: "https://amsel.io",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "amsel.io GmbH",
  url: "https://amsel.io",
  logo: "https://amsel.io/Logo.svg",
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
        {children}
      </body>
    </html>
  );
}
