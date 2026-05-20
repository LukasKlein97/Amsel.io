"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const REGISTER_URL = "https://app.ams-cockpit.de/register";

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
        "Gefahrstoffmanagement",
        "Betriebsanweisungen",
        "Besuchermanagement",
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
        "Gefahrstoffmanagement",
        "Betriebsanweisungen",
        "Besuchermanagement",
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
        "Gefahrstoffmanagement",
        "Betriebsanweisungen",
        "Besuchermanagement",
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
    <section id="pricing" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Transparente Preise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wähle den Plan, der am besten zu deinem Unternehmen passt. Alle
            Pläne beinhalten unsere Kernfunktionen für digitalen Arbeitsschutz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 xl:gap-12 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className="relative border border-border bg-card backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-foreground ring-2 ring-orange-400/50 scale-105 flex flex-col h-full"
            >
              <CardHeader className="text-center pb-0">
                <CardTitle className="text-xl h-8 flex items-center justify-center mb-2 text-foreground">
                  {plan.name}
                </CardTitle>
                <div className="space-y-1">
                  <div className="h-10 flex items-center justify-center">
                    <div className="text-3xl font-bold text-foreground leading-none">
                      {plan.price === "Individuell"
                        ? plan.price
                        : `€${plan.price}`}
                    </div>
                  </div>
                  <div className="h-5 flex items-center justify-center text-sm text-muted-foreground">
                    {plan.period || "\u00a0"}
                  </div>
                  <div className="h-6 flex items-center justify-center text-base font-semibold text-muted-foreground">
                    {plan.employees}
                  </div>
                  {plan.pricePerEmployee && (
                    <p className="text-xs text-muted-foreground">
                      {plan.pricePerEmployee} pro Mitarbeiter
                    </p>
                  )}
                </div>
              </CardHeader>
              <CardContent className="text-foreground flex flex-col flex-1">
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start text-foreground/90"
                    >
                      <Check className="h-4 w-4 text-orange-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>
                {plan.showContactButton ? (
                  <Button
                    className="w-full mt-auto"
                    variant="default"
                    onClick={scrollToContact}
                  >
                    Kontakt aufnehmen
                  </Button>
                ) : (
                  <Button className="w-full mt-auto" variant="default" asChild>
                    <a
                      href={REGISTER_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Jetzt starten
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
