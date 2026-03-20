"use client";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Lock, ShieldCheck, Database } from "lucide-react";
import { ContactForm } from "./contact-form";
import { CalendlyWidget } from "./calendly-widget";
import { CalInlineBen } from "./cal-inline-ben";

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

  const scrollToModule = () => {
    // If we're not on the main page, navigate to it first
    if (pathname !== "/") {
      // Store the section ID in sessionStorage to scroll after navigation
      sessionStorage.setItem("scrollToSection", "features");
      router.push("/");
      return;
    }

    // If we're on the main page, scroll to the section
    const element = document.getElementById("features");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative overflow-hidden bg-black text-white py-16">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/15 via-black to-black" />
      <div className="absolute top-0 left-1/2 -z-10 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 -z-10 h-96 w-96 translate-x-1/3 bg-orange-400/5 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Contact Section */}
        <div id="contact" className="mb-16">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.4em] text-orange-200/90 mb-6">
              Kontakt
            </span>
            <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4">
              {pathname === "/gemeinnuetzige-vereine"
                ? "Gemeinnützige Vereine – direkt mit uns"
                : "Kontaktieren Sie uns"}
            </h2>
            <p className="text-lg text-orange-50/80 max-w-2xl mx-auto">
              {pathname === "/gemeinnuetzige-vereine" ? (
                <>
                  Für den 90-%-Rabatt und Ihre Fragen als gemeinnütziger
                  Verein buchen Sie hier einen Termin{" "}
                  <strong className="font-semibold text-orange-100/95">
                    direkt bei uns
                  </strong>{" "}
                  – oder nutzen Sie das Formular.
                </>
              ) : (
                <>
                  Buchen Sie einen Termin bei{" "}
                  <strong className="font-semibold text-orange-100/95">
                    Ben
                  </strong>{" "}
                  – oder schreiben Sie uns eine Nachricht.
                </>
              )}
            </p>
          </div>
          <div className="max-w-6xl mx-auto space-y-12">
            {pathname === "/gemeinnuetzige-vereine" ? (
              <CalendlyWidget />
            ) : (
              <CalInlineBen />
            )}
            <div className="flex justify-center">
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-12"></div>

        {/* Partner Logos & Trust Badges */}
        <div className="mb-12">
          <div className="flex flex-col items-center gap-8">
            {/* 4 Bilder nebeneinander */}
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
            {/* 256-Bit-SSL, DSGVO-konform & Gehostet in Deutschland */}
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 text-white/90">
              <div className="flex items-center gap-2">
                <Lock className="h-5 w-5 shrink-0" />
                <span className="text-sm font-medium">
                  256-Bit-SSL-Verschlüsselung
                </span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 shrink-0" />
                <span className="text-sm font-medium">DSGVO-konform</span>
              </div>
              <div className="flex items-center gap-2">
                <Database className="h-5 w-5 shrink-0" />
                <span className="text-sm font-medium">Gehostet in Deutschland</span>
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
                src="/amsel-vogel.png"
                alt="Amsel.io"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-orange-50/80 mb-6 leading-relaxed">
              Die Software-Lösung für digitalen Arbeitsschutz
            </p>
            <p className="mb-6 text-sm text-orange-50/70">
              <Link
                href="/gemeinnuetzige-vereine"
                className="text-orange-200/90 underline-offset-4 transition-colors hover:text-orange-100 hover:underline"
              >
                Gemeinnützige Vereine: 90&nbsp;% Rabatt
              </Link>
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
            <h3 className="text-lg font-semibold mb-6 text-white">Module</h3>
            <ul className="space-y-3 text-orange-50/80">
              <li>
                <button
                  onClick={scrollToModule}
                  className="hover:text-orange-200 transition-colors text-left"
                >
                  Gefährdungsbeurteilungen
                </button>
              </li>
              <li>
                <button
                  onClick={scrollToModule}
                  className="hover:text-orange-200 transition-colors text-left"
                >
                  Begehungsprotokolle
                </button>
              </li>
              <li>
                <button
                  onClick={scrollToModule}
                  className="hover:text-orange-200 transition-colors text-left"
                >
                  Aktionsplan
                </button>
              </li>
              <li>
                <button
                  onClick={scrollToModule}
                  className="hover:text-orange-200 transition-colors text-left"
                >
                  Dokumentenmanagement
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Kontakt</h3>
            <div className="space-y-4 text-orange-50/80">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-orange-200/80" />
                <span className="hover:text-orange-200 transition-colors">
                  info@amsel.io
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-orange-200/80" />
                <span className="hover:text-orange-200 transition-colors">
                  +49 2359 2967311
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-orange-200/80" />
                <span className="hover:text-orange-200 transition-colors">
                  Wolzenburg 2
                  <br />
                  58566 Kierspe
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-orange-50/60 text-sm">
          <p>&copy; 2026 Amsel.io GmbH. Alle Rechte vorbehalten.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button
              onClick={navigateToImpressum}
              className="hover:text-orange-200 transition-colors cursor-pointer"
            >
              Impressum
            </button>
            <button
              onClick={navigateToDatenschutz}
              className="hover:text-orange-200 transition-colors cursor-pointer"
            >
              Datenschutz
            </button>
            <a href="#" className="hover:text-orange-200 transition-colors">
              AGB
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
