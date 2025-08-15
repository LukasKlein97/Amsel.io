"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Smartphone, Monitor } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      className="relative text-white py-20 lg:py-32 overflow-hidden -mt-20 lg:-mt-24"
      style={{
        backgroundImage: 'url("/images/industry.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Darker overlay for better text readability */}
      <div className="absolute inset-0 bg-slate-900/70"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* Background container for text content */}
          <div className="bg-black/40 backdrop-blur-sm p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl mx-2 sm:mx-0">
            <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight drop-shadow-2xl">
              WIR GESTALTEN
              <br />
              ARBEITSSICHERHEIT.
            </h1>

            <p className="text-lg lg:text-xl text-gray-100 mb-12 max-w-2xl leading-relaxed drop-shadow-lg">
              Von der digitalen Gefährdungsbeurteilung bis zur mobilen Begehung
              lösen wir als Technologiepartner komplexe Herausforderungen im
              Bereich der Arbeitsschutz-Software und darüber hinaus.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button
                size="lg"
                className="bg-white text-slate-900 hover:bg-gray-100 shadow-lg"
              >
                Demo anfordern
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent shadow-lg backdrop-blur-sm"
                onClick={() => scrollToSection("features")}
              >
                Mehr erfahren
              </Button>
            </div>

            {/* Feature Icons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-slate-500">
              <div className="flex items-center gap-4">
                <div className="bg-slate-800/90 backdrop-blur-sm p-3 rounded-lg border border-slate-500 shadow-lg">
                  <Monitor className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold drop-shadow-lg">
                    Web-Plattform
                  </h3>
                  <p className="text-sm text-gray-200 drop-shadow-md">
                    Zentrale Verwaltung
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-slate-800/90 backdrop-blur-sm p-3 rounded-lg border border-slate-500 shadow-lg">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold drop-shadow-lg">Mobile App</h3>
                  <p className="text-sm text-gray-200 drop-shadow-md">
                    Begehungen vor Ort
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-slate-800/90 backdrop-blur-sm p-3 rounded-lg border border-slate-500 shadow-lg">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold drop-shadow-lg">Compliance</h3>
                  <p className="text-sm text-gray-200 drop-shadow-md">
                    Rechtssicherheit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
