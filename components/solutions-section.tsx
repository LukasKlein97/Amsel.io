"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Building2, Factory, Wrench, Truck } from "lucide-react";

// Separate client component for the consultation button
function ConsultationButton() {
  const handleClick = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Button
      size="lg"
      className="bg-slate-900 hover:bg-slate-800"
      onClick={handleClick}
    >
      Kostenlose Beratung vereinbaren
    </Button>
  );
}

export function SolutionsSection() {
  const solutions = [
    {
      icon: Building2,
      title: "Büro &\nVerwaltung",
      description:
        "Arbeitsschutz-Lösungen für Bürogebäude und Verwaltungsstandorte.",
      features: [
        "Bildschirmarbeitsplätze",
        "Ergonomie-Bewertungen",
        "Brandschutz",
      ],
    },
    {
      icon: Factory,
      title: "Produktion & Fertigung",
      description:
        "Spezialisierte Lösungen für Produktionsbetriebe und Fertigungsunternehmen.",
      features: [
        "Maschinensicherheit",
        "Gefahrstoffmanagement",
        "PSA-Verwaltung",
      ],
    },
    {
      icon: Wrench,
      title: "Handwerk & Service",
      description:
        "Mobile Lösungen für Handwerksbetriebe und Servicedienstleister.",
      features: ["Mobile Begehungen", "Werkzeugprüfungen", "Baustellen-Safety"],
    },
    {
      icon: Truck,
      title: "Logistik & Transport",
      description:
        "Arbeitsschutz für Logistikunternehmen und Transportbetriebe.",
      features: ["Fahrzeugsicherheit", "Ladungssicherung", "Fahrerschulungen"],
    },
  ];

  return (
    <section id="solutions" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Branchenlösungen
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            AMS passt sich an die spezifischen Anforderungen Ihrer Branche an
            und bietet maßgeschneiderte Arbeitsschutz-Lösungen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="text-center">
                <div className="bg-slate-900 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <solution.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl whitespace-pre-line mb-4">
                  {solution.title}
                </CardTitle>
                <CardDescription className="text-gray-600 h-12 flex items-center">
                  {solution.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-sm text-gray-600 flex items-center"
                    >
                      <div className="w-1.5 h-1.5 bg-slate-900 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <ConsultationButton />
        </div>
      </div>
    </section>
  );
}
