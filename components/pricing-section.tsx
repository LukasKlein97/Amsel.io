"use client";

import { Button } from "@/components/ui/button";
import { CTAButtons } from "@/components/cta-buttons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export function PricingSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const plans = [
    {
      name: "Basic",
      price: "99",
      period: "pro Monat pro Standort",
      employees: "1 Nutzer",

      description: "Perfekt für kleine Teams und Einsteiger",
      features: [
        "Gefährdungsbeurteilungen",
        "Begehungsprotokolle",
        "Aktionsplan",
        "Statistik und Kennzahlen",
        "Gefahrstoffmanagement (Beta)",
        "Betriebsanweisungen",
        "Besuchermanagement (Beta)",
        "Mobile App",
        "E-Mail Support",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: "199",
      period: "pro Monat pro Standort",
      employees: "bis zu 10 Nutzer",

      description: "Ideal für wachsende Unternehmen",
      features: [
        "Gefährdungsbeurteilungen",
        "Begehungsprotokolle",
        "Aktionsplan",
        "Statistik und Kennzahlen",
        "Gefahrstoffmanagement (Beta)",
        "Betriebsanweisungen",
        "Besuchermanagement (Beta)",
        "Mobile App",
        "Nutzerverwaltung",
        "E-Mail Support",
        "API Zugang",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Individuell",
      period: "",
      employees: "für Mittelstand und Konzerne",
      pricePerEmployee: "",
      description: "Maßgeschneiderte Lösungen für Konzerne",
      features: [
        "Gefährdungsbeurteilungen",
        "Begehungsprotokolle",
        "Aktionsplan",
        "Statistik und Kennzahlen",
        "Gefahrstoffmanagement (Beta)",
        "Betriebsanweisungen",
        "Besuchermanagement (Beta)",
        "Mobile App",
        "Nutzerverwaltung",
        "Telfonischer Support",
        "SSO",
        "API Zugriff",
        "Individualentwicklung",
      ],
      popular: false,
      isEnterprise: true,
      showContactButton: true,
    },
  ];

  return (
    <section id="pricing" className="bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Transparente Preise
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Wählen Sie den Plan, der am besten zu Ihrem Unternehmen passt. Alle
            Pläne beinhalten unsere Kernfunktionen für digitalen Arbeitsschutz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 xl:gap-12 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className="relative border border-white/10 bg-white/10 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-white ring-2 ring-orange-400/50 scale-105 flex flex-col h-full"
            >
              <CardHeader className="text-center">
                <CardTitle className="text-xl mb-2 text-white">
                  {plan.name}
                </CardTitle>
                <div className="mb-2">
                  <div className="text-3xl font-bold text-white">
                    {plan.price === "Individuell"
                      ? plan.price
                      : `€${plan.price}`}
                  </div>
                  {plan.period && (
                    <div className="text-sm text-white/70 mt-0.5">
                      {plan.period}
                    </div>
                  )}
                  {plan.employees && (
                    <div
                      className={`${
                        plan.isEnterprise
                          ? "text-sm"
                          : "text-base font-semibold"
                      } text-white/70 ${
                        plan.isEnterprise ? "mt-0.5" : "mt-1"
                      }`}
                    >
                      {plan.employees}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  {plan.pricePerEmployee && (
                    <p className="text-xs text-white/70 mt-1">
                      {plan.pricePerEmployee} pro Mitarbeiter
                    </p>
                  )}
                </div>
              </CardHeader>
              <CardContent className="text-white flex flex-col flex-1">
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start text-white/90"
                    >
                      <Check className="h-4 w-4 text-orange-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full mt-auto"
                  variant="default"
                  onClick={scrollToContact}
                >
                  {plan.showContactButton
                    ? "Kontakt aufnehmen"
                    : "Jetzt starten"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col items-center mt-12">
          <p className="text-white/70 mb-4">
            Unsicher, welcher Plan der richtige ist?
          </p>
          <CTAButtons />
        </div>
      </div>
    </section>
  );
}
