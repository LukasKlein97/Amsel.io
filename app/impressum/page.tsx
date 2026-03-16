import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der amsel.io GmbH",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8 text-center">
              Impressum
            </h1>

            <div className="bg-slate-800 rounded-lg p-8 space-y-8 shadow-xl">
              <div className="text-gray-300 space-y-4">
                <p className="text-lg">
                  <strong className="text-white">amsel.io GmbH</strong>
                  <br />
                  Wolzenburg 2
                  <br />
                  58566 Kierspe
                </p>

                <p className="text-lg">
                  <strong className="text-white">Vertreten durch:</strong>
                  <br />
                  Kim Marius Gräfe
                </p>

                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                  Handelsregister
                </h2>
                <p className="text-lg">
                  Handelsregisternummer: HRB 11427
                  <br />
                  Registergericht: Amtsgericht Iserlohn
                </p>

                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                  Umsatzsteuer
                </h2>
                <p className="text-lg">
                  Umsatzsteuer-Identifikationsnummer: DE457232243
                  <br />
                  <span className="text-sm text-gray-400">
                    (gemäß § 27 a Umsatzsteuergesetz)
                  </span>
                </p>

                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                  Kontakt
                </h2>
                <p className="text-lg">
                  Telefon: +49 2359 2967311
                  <br />
                  E-Mail:{" "}
                  <a
                    href="mailto:info@amsel.io"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    info@amsel.io
                  </a>
                </p>

                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                  EU-Streitschlichtung
                </h2>
                <p className="text-lg">
                  Die Europäische Kommission stellt eine Plattform zur
                  Online-Streitbeilegung (OS) bereit:{" "}
                  <a
                    href="https://ec.europa.eu/consumers/odr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                  .
                  <br />
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>

                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
                  Verbraucherstreitbeilegung/Universalschlichtungsstelle
                </h2>
                <p className="text-lg">
                  Wir sind nicht bereit oder verpflichtet, an
                  Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>

                <p className="text-sm text-gray-400 mt-8 pt-4 border-t border-slate-700">
                  Quelle:{" "}
                  <a
                    href="https://www.e-recht24.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    eRecht24
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
