"use client";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Lock,
  ShieldCheck,
  Database,
  Server,
  Smartphone,
  Key,
} from "lucide-react";
import { ContactSection } from "./contact-section";

export function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const navigateToMainPage = () => {
    router.push("/");
  };

  const navigateToImpressum = () => {
    router.push("/impressum");
  };

  const navigateToDatenschutz = () => {
    router.push("/datenschutz");
  };

  return (
    <>
      {/* Contact Section – hell */}
      <section
        id="contact"
        className="relative overflow-hidden bg-background text-foreground py-16"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/80 via-background to-background" />
        <div className="absolute top-0 left-1/2 -z-10 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="container relative z-10 mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1 text-xs uppercase tracking-[0.4em] text-orange-700">
              Kontakt
            </span>
            <h2 className="mb-4 text-3xl font-semibold text-foreground lg:text-4xl">
              {pathname === "/gemeinnuetzige-vereine"
                ? "Gemeinnützige Vereine – direkt mit uns"
                : pathname === "/co-innovation"
                  ? "Co-Innovation – sprich uns an"
                  : "Kontaktiere uns"}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              {pathname === "/gemeinnuetzige-vereine" ? (
                <>
                  Für den 90-%-Rabatt und deine Fragen als gemeinnütziger Verein
                  buch hier einen Termin{" "}
                  <strong className="font-semibold text-orange-700">
                    direkt bei uns
                  </strong>{" "}
                  – oder nutz das Formular.
                </>
              ) : pathname === "/co-innovation" ? (
                <>
                  Als potenzieller Co-Innovationspartner zum{" "}
                  <strong className="font-semibold text-orange-700">
                    Innovationsgutschein „Mittelstand trifft Start-ups“
                  </strong>{" "}
                  vereinbare mit Ben einen Termin – oder nutz das Formular für
                  eine erste Nachricht.
                </>
              ) : (
                <>
                  Buch einen Termin bei{" "}
                  <strong className="font-semibold text-orange-700">uns</strong>{" "}
                  – oder schreib uns eine Nachricht.
                </>
              )}
            </p>
          </div>
          <ContactSection
            variant={
              pathname === "/gemeinnuetzige-vereine"
                ? "gemeinnuetzige-vereine"
                : "default"
            }
          />
        </div>
      </section>

      {/* Footer – dunkel */}
      <footer className="relative overflow-hidden bg-gray-900 py-16 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-950/40 via-gray-900 to-gray-900" />
        <div className="absolute bottom-0 right-0 -z-10 h-96 w-96 translate-x-1/3 bg-orange-600/5 blur-3xl" />

        <div className="container relative z-10 mx-auto px-4">
          {/* Partner Logos & Trust Badges */}
          <div className="mb-12">
            <div className="flex flex-col items-center">
              <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
                <Image
                  src="/bawue-logo.png"
                  alt="Baden-Württemberg"
                  width={120}
                  height={48}
                  className="h-12 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
                <Image
                  src="/eu-cofunded.png"
                  alt="Kofinanziert durch die Europäische Union"
                  width={140}
                  height={48}
                  className="h-12 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
                <Image
                  src="/stripe-wordmark.svg"
                  alt="Stripe"
                  width={76}
                  height={32}
                  className="h-8 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>

              <div
                aria-hidden="true"
                className="my-10 w-full max-w-4xl border-t border-white/10"
              />

              {/* Trust Badges: 256-Bit-SSL, DSGVO, Gehostet, EU-DSGVO, ISO, Mobile Apps, SSO */}
            <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-4 text-gray-300 sm:grid-cols-3 xl:grid-cols-6 xl:gap-x-8">
              <div className="flex items-center justify-center gap-2 sm:justify-start">
                <Lock className="h-5 w-5 shrink-0" />
                <span className="text-sm font-medium">
                  256-Bit-SSL-Verschlüsselung
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 sm:justify-start">
                <ShieldCheck className="h-5 w-5 shrink-0" />
                <span className="text-sm font-medium">DSGVO-konform</span>
              </div>
              <div className="flex items-center justify-center gap-2 sm:justify-start">
                <Database className="h-5 w-5 shrink-0" />
                <span className="text-sm font-medium">
                  Gehostet in Deutschland
                </span>
              </div>

              <div className="flex items-center justify-center gap-2 sm:justify-start">
                <Server className="h-5 w-5 shrink-0" />
                <span className="text-sm font-medium">
                  ISO-zertifizierte Rechenzentren
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 sm:justify-start">
                <Smartphone className="h-5 w-5 shrink-0" />
                <span className="text-sm font-medium">
                  Geprüfte Mobile Apps
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 sm:justify-start">
                <Key className="h-5 w-5 shrink-0" />
                <span className="text-sm font-medium">Single Sign-On</span>
              </div>
            </div>
          </div>
          </div>

          <div className="border-t border-white/10 mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div
              className="inline-block mb-6 cursor-pointer hover:opacity-80 transition-opacity duration-300"
              onClick={navigateToMainPage}
            >
              <Image
                src="/ams-go-logo-dark.png"
                alt="AMS GO"
                width={160}
                height={80}
                className="h-12 w-auto sm:h-14"
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Die Software-Lösung für digitalen Arbeitsschutz
            </p>
            <p className="mb-6 space-y-2 text-sm text-gray-400">
              <span className="block">
                <Link
                  href="/gemeinnuetzige-vereine"
                  className="text-orange-400 underline-offset-4 transition-colors hover:text-orange-300 hover:underline"
                >
                  Gemeinnützige Vereine: 90&nbsp;% Rabatt
                </Link>
              </span>
              <span className="block">
                <Link
                  href="/co-innovation"
                  className="text-orange-400 underline-offset-4 transition-colors hover:text-orange-300 hover:underline"
                >
                  Co-Innovation: Innovationsgutschein BW
                </Link>
              </span>
              <span className="block">
                <Link
                  href="/amsel-vs-excel"
                  className="text-orange-400 underline-offset-4 transition-colors hover:text-orange-300 hover:underline"
                >
                  AMS Go vs Excel
                </Link>
              </span>
              <span className="block">
                <Link
                  href="/preise"
                  className="text-orange-400 underline-offset-4 transition-colors hover:text-orange-300 hover:underline"
                >
                  Preise & Tarife
                </Link>
              </span>
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://apps.apple.com/de/app/ams-cockpit/id6754315457"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-90 hover:opacity-100 transition-opacity"
                aria-label="AMS Cockpit im App Store herunterladen"
              >
                <Image
                  src="/app-store-badge.svg"
                  alt="Im App Store laden"
                  width={120}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=de.ams.cockpit.app"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-90 hover:opacity-100 transition-opacity"
                aria-label="AMS Cockpit bei Google Play herunterladen"
              >
                <Image
                  src="/google-play-badge.svg"
                  alt="Bei Google Play laden"
                  width={135}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
              </a>
            </div>
          </div>

          {/* Module */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Module
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link
                  href="/module#gefaehrdungsbeurteilungen"
                  className="hover:text-orange-300 transition-colors"
                >
                  Gefährdungsbeurteilungen
                </Link>
              </li>
              <li>
                <Link
                  href="/module#betriebsanweisungen"
                  className="hover:text-orange-300 transition-colors"
                >
                  Betriebsanweisungen
                </Link>
              </li>
              <li>
                <Link
                  href="/module#begehungsprotokolle"
                  className="hover:text-orange-300 transition-colors"
                >
                  Begehungsprotokolle
                </Link>
              </li>
              <li>
                <Link
                  href="/module#aktionsplan"
                  className="hover:text-orange-300 transition-colors"
                >
                  Aktionsplan
                </Link>
              </li>
              <li>
                <Link
                  href="/module#besuchermanagement"
                  className="hover:text-orange-300 transition-colors"
                >
                  Besuchermanagement
                </Link>
              </li>
              <li>
                <Link
                  href="/module#gefahrstoffmanagement"
                  className="hover:text-orange-300 transition-colors"
                >
                  Gefahrstoffmanagement
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Kontakt
            </h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-orange-400" />
                <span className="hover:text-orange-300 transition-colors">
                  hallo@amsgo.de
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-orange-400" />
                <span className="hover:text-orange-300 transition-colors">
                  +49 2359 2967311
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-orange-400" />
                <span className="hover:text-orange-300 transition-colors">
                  Alter Schlachthof 33
                  <br />
                  76131 Karlsruhe
                </span>
              </div>
            </div>
          </div>
        </div>

          {/* Bottom */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; 2026 AMS Go GmbH. Alle Rechte vorbehalten.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button
              onClick={navigateToImpressum}
              className="hover:text-orange-300 transition-colors cursor-pointer"
            >
              Impressum
            </button>
            <button
              onClick={navigateToDatenschutz}
              className="hover:text-orange-300 transition-colors cursor-pointer"
            >
              Datenschutz
            </button>
            <a href="#" className="hover:text-orange-300 transition-colors">
              AGB
            </a>
          </div>
          </div>
        </div>
      </footer>
    </>
  );
}
