"use client";

import { Button } from "@/components/ui/button";
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
      name: "Kleinunternehmen",
      price: "80",
      period: "pro Monat",
      employees: "1-20 Mitarbeiter",
      pricePerEmployee: "ab 4€",
      description: "Perfekt für kleine Teams und Einsteiger",
      features: [
        "Gefährdungsbeurteilungen",
        "Begehungsprotokolle",
        "Aktionsplan",
        "Statistik und Kennzahlen",
        "Gefahrstoffmanagement",
        "Betriebsanweisungen",
        "Mobile App",
        "E-Mail Support",
      ],
      popular: false,
    },
    {
      name: "Mittelstand",
      price: "500",
      period: "pro Monat",
      employees: "21-200 Mitarbeiter",
      pricePerEmployee: "ab 2,50€",
      description: "Ideal für wachsende Unternehmen",
      features: [
        "Gefährdungsbeurteilungen",
        "Begehungsprotokolle",
        "Aktionsplan",
        "Statistik und Kennzahlen",
        "Gefahrstoffmanagement",
        "Betriebsanweisungen",
        "Mobile App",
        "E-Mail Support",
        "API Zugang",
      ],
      popular: true,
    },
    {
      name: "Großunternehmen",
      price: "1500",
      period: "pro Monat",
      employees: "201-1000 Mitarbeiter",
      pricePerEmployee: "ab 1,50€",
      description: "Für große Unternehmen mit komplexen Anforderungen",
      features: [
        "Gefährdungsbeurteilungen",
        "Begehungsprotokolle",
        "Aktionsplan",
        "Statistik und Kennzahlen",
        "Gefahrstoffmanagement",
        "Betriebsanweisungen",
        "Mobile App",
        "SSO",
        "API Zugriff",
      ],
      popular: false,
      showContactButton: true,
    },
    {
      name: "Enterprise",
      price: "Individuell",
      period: "",
      employees: "Über 1000 Mitarbeiter",
      pricePerEmployee: "",
      description: "Maßgeschneiderte Lösungen für Konzerne",
      features: [
        "Gefährdungsbeurteilungen",
        "Begehungsprotokolle",
        "Aktionsplan",
        "Statistik und Kennzahlen",
        "Gefahrstoffmanagement",
        "Betriebsanweisungen",
        "Mobile App",
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
    <section id="pricing" className="bg-slate-900 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Transparente Preise
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Wählen Sie den Plan, der am besten zu Ihrem Unternehmen passt. Alle
            Pläne beinhalten unsere Kernfunktionen für digitalen Arbeitsschutz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className="relative border border-white/10 bg-white/10 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-white ring-2 ring-emerald-400/50 scale-105 flex flex-col h-full"
            >
              <CardHeader className="text-center">
                <CardTitle className="text-xl mb-2 text-white">
                  {plan.name}
                </CardTitle>
                <div className="mb-2">
                  <span className="text-3xl font-bold text-white">
                    {plan.price === "Individuell"
                      ? plan.price
                      : `€${plan.price}`}
                  </span>
                  {plan.period && (
                    <span className="text-slate-300 ml-1">{plan.period}</span>
                  )}
                </div>
                <div className="mb-3">
                  <p className="text-sm text-emerald-300 font-medium">
                    {plan.employees}
                  </p>
                  {plan.pricePerEmployee && (
                    <p className="text-xs text-slate-300 mt-1">
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
                      className="flex items-start text-slate-100"
                    >
                      <Check className="h-4 w-4 text-emerald-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-100">{feature}</span>
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

        <div className="text-center mt-12">
          <p className="text-slate-300 mb-4">
            Unsicher, welcher Plan der richtige ist?
          </p>
          <Button
            variant="outline"
            size="lg"
            className="text-white"
            onClick={scrollToContact}
          >
            Kostenlose Beratung anfragen
          </Button>
        </div>
      </div>
    </section>
  );
}
