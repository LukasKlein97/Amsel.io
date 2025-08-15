"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from "lucide-react";
import { ContactForm } from "./contact-form";

export function Footer() {
  const router = useRouter();

  const navigateToMainPage = () => {
    router.push("/");
  };

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Contact Form */}
        <div id="contact" className="mb-12">
          <ContactForm />
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
              Die führende Software-Lösung für digitalen Arbeitsschutz und
              Compliance-Management.
            </p>
            <div className="flex space-x-4">
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
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Lösungen</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Gefährdungsbeurteilungen
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Begehungsprotokolle
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Incident Management
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Schulungsmanagement
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Mobile App
                </a>
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
