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
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Contact Section */}
        <div id="contact" className="mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Kontaktieren Sie uns
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Wählen Sie Ihre bevorzugte Kontaktmethode - senden Sie uns eine
              Nachricht oder buchen Sie direkt einen Termin.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <ContactForm />
            <CalendlyWidget />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div
              className="border-2 border-white px-4 py-2 inline-block mb-6 cursor-pointer hover:bg-slate-800 transition-colors duration-200"
              onClick={navigateToMainPage}
            >
              <span className="text-xl font-bold tracking-wider">AMS</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Die Software-Lösung für digitalen Arbeitsschutz und
              Compliance-Management.
            </p>
            {/* <div className="flex space-x-4">
              <Button
                size="sm"
                variant="ghost"
                className="text-white hover:bg-slate-800"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-white hover:bg-slate-800"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-white hover:bg-slate-800"
              >
                <Youtube className="h-5 w-5" />
              </Button>
            </div> */}
          </div>

          {/* Module */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Module</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <button
                  onClick={scrollToModule}
                  className="hover:text-white transition-colors text-left"
                >
                  Gefährdungsbeurteilungen
                </button>
              </li>
              <li>
                <button
                  onClick={scrollToModule}
                  className="hover:text-white transition-colors text-left"
                >
                  Begehungsprotokolle
                </button>
              </li>
              <li>
                <button
                  onClick={scrollToModule}
                  className="hover:text-white transition-colors text-left"
                >
                  Aktionsplan
                </button>
              </li>
              <li>
                <button
                  onClick={scrollToModule}
                  className="hover:text-white transition-colors text-left"
                >
                  Dokumentenmanagement
                </button>
              </li>
            </ul>
          </div>

          {/* Support 
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Dokumentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Video-Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Kontakt
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Status
                </a>
              </li>
            </ul>
          </div>
*/}
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Kontakt</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5" />
                <span>info@ams-cockpit.de</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                <span>+49 2359 2967311</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5" />
                <span>
                  Wolzenburg 2
                  <br />
                  58566 Kierspe
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; 2025 AMS Cockpit GmbH. Alle Rechte vorbehalten.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/impressum" className="hover:text-white transition-colors">
              Impressum
            </a>
            <a
              href="/datenschutz"
              className="hover:text-white transition-colors"
            >
              Datenschutz
            </a>
            <a href="#" className="hover:text-white transition-colors">
              AGB
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
