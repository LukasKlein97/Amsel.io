"use client";
import { useRouter } from "next/navigation";
import { Mail, Phone, MapPin } from "lucide-react";
import { ContactForm } from "./contact-form";
import { CalendlyWidget } from "./calendly-widget";

export function Footer() {
  const router = useRouter();

  const navigateToMainPage = () => {
    router.push("/");
  };

  const scrollToModule = () => {
    const element = document.getElementById("features");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white py-16">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-slate-950 to-black" />
      <div className="absolute top-0 left-1/2 -z-10 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 -z-10 h-96 w-96 translate-x-1/3 bg-emerald-400/5 blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Contact Section */}
        <div id="contact" className="mb-16">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.4em] text-emerald-200/80 mb-6">
              Kontakt
            </span>
            <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4">
              Kontaktieren Sie uns
            </h2>
            <p className="text-lg text-emerald-50/80 max-w-2xl mx-auto">
              Wählen Sie Ihre bevorzugte Kontaktmethode - senden Sie uns eine
              Nachricht oder buchen Sie direkt einen Termin.
            </p>
          </div>
          <div className="max-w-6xl mx-auto space-y-12">
            <CalendlyWidget />
            <div className="flex justify-center">
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div
              className="border-2 border-emerald-200/40 bg-emerald-400/10 px-4 py-2 inline-block mb-6 cursor-pointer hover:bg-emerald-400/20 hover:border-emerald-200/60 transition-all duration-300 rounded-lg backdrop-blur-sm"
              onClick={navigateToMainPage}
            >
              <span className="text-xl font-bold tracking-wider text-white">AMS</span>
            </div>
            <p className="text-emerald-50/80 mb-6 leading-relaxed">
              Die Software-Lösung für digitalen Arbeitsschutz und
              Compliance-Management.
            </p>
          </div>

          {/* Module */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Module</h3>
            <ul className="space-y-3 text-emerald-50/80">
              <li>
                <button
                  onClick={scrollToModule}
                  className="hover:text-emerald-200 transition-colors text-left"
                >
                  Gefährdungsbeurteilungen
                </button>
              </li>
              <li>
                <button
                  onClick={scrollToModule}
                  className="hover:text-emerald-200 transition-colors text-left"
                >
                  Begehungsprotokolle
                </button>
              </li>
              <li>
                <button
                  onClick={scrollToModule}
                  className="hover:text-emerald-200 transition-colors text-left"
                >
                  Aktionsplan
                </button>
              </li>
              <li>
                <button
                  onClick={scrollToModule}
                  className="hover:text-emerald-200 transition-colors text-left"
                >
                  Dokumentenmanagement
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Kontakt</h3>
            <div className="space-y-4 text-emerald-50/80">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-emerald-200/80" />
                <span className="hover:text-emerald-200 transition-colors">info@ams-cockpit.de</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-emerald-200/80" />
                <span className="hover:text-emerald-200 transition-colors">+49 2359 2967311</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-emerald-200/80" />
                <span className="hover:text-emerald-200 transition-colors">
                  Wolzenburg 2
                  <br />
                  58566 Kierspe
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-emerald-50/60 text-sm">
          <p>&copy; 2025 AMS Cockpit GmbH. Alle Rechte vorbehalten.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/impressum" className="hover:text-emerald-200 transition-colors">
              Impressum
            </a>
            <a
              href="/datenschutz"
              className="hover:text-emerald-200 transition-colors"
            >
              Datenschutz
            </a>
            <a href="#" className="hover:text-emerald-200 transition-colors">
              AGB
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
