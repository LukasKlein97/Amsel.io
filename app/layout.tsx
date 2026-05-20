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
    default: "AMS Go - Digitale Arbeitssicherheit für Unternehmen",
    template: "%s | AMS Go ",
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
    "AMS Go",
  ],
  authors: [{ name: "AMS Go GmbH" }],
  creator: "AMS Go GmbH",
  publisher: "AMS Go GmbH",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://Amsel.io",
    siteName: "AMS Go ",
    title: "AMS Go - Digitale Arbeitssicherheit für Unternehmen",
    description:
      "Digitale Arbeitssicherheit mit smarten Softwaremodulen. Mobile Begehungen, Compliance-Management und KI-gestützte Auswertungen.",
    images: [
      {
        url: "/images/web.png",
        width: 1200,
        height: 630,
        alt: "AMS Go - Digitale Arbeitssicherheit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AMS Go - Digitale Arbeitssicherheit",
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
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon.ico", rel: "shortcut icon" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
    other: [{ rel: "manifest", url: "/favicon/site.webmanifest" }],
  },
  alternates: {
    canonical: "https://Amsel.io",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AMS Go GmbH",
  url: "https://Amsel.io",
  logo: "https://Amsel.io/ams-go-logo.png",
  description:
    "Digitale Arbeitssicherheit mit smarten Softwaremodulen für Unternehmen.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Alter Schlachthof 33",
    addressLocality: "Karlsruhe",
    postalCode: "76131",
    addressCountry: "DE",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+49-2359-2967311",
    contactType: "customer service",
    email: "hallo@amsgo.de",
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
        <Script id="pipedrive-leadbooster-config" strategy="afterInteractive">
          {`
            window.pipedriveLeadboosterConfig = {
              base: "leadbooster-chat.pipedrive.com",
              companyId: 14693603,
              playbookUuid: "e35d02d1-5a0c-49b0-9d2f-e4d362724ff9",
              version: 2,
            };
            (function () {
              var w = window;
              if (w.LeadBooster) {
                console.warn("LeadBooster already exists");
              } else {
                w.LeadBooster = {
                  q: [],
                  on: function (n, h) {
                    this.q.push({ t: "o", n: n, h: h });
                  },
                  trigger: function (n) {
                    this.q.push({ t: "t", n: n });
                  },
                };
              }
            })();
          `}
        </Script>
        <Script
          src="https://leadbooster-chat.pipedrive.com/assets/loader.js"
          strategy="afterInteractive"
          async
        />
        {children}
      </body>
    </html>
  );
}
