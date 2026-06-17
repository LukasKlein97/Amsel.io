"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Sparkles, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const REGISTER_URL = "https://app.ams-cockpit.de/register";

type BillingPeriod = "monthly" | "yearly";

function getSavingsPercent(price: number, regularPrice: number) {
  return Math.round((1 - price / regularPrice) * 100);
}

function getYearlyTotal(monthlyPrice: string) {
  return Number.parseInt(monthlyPrice, 10) * 11;
}

function formatPrice(amount: number) {
  return amount.toLocaleString("de-DE");
}

const billingTabs: { id: BillingPeriod; label: string; sublabel?: string }[] = [
  { id: "monthly", label: "Monatlich" },
  { id: "yearly", label: "Jährlich", sublabel: "1 Monat sparen" },
];

export function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("monthly");
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
      regularPrice: "200",
      savingsPercent: 50,
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
      regularPrice: "400",
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
      popular: false,
    },
    {
      name: "Business",
      price: "499",
      regularPrice: "1000",
      period: "pro Monat pro Standort",
      employees: "bis zu 250 Mitarbeiter je Standort",
      description: "Für größere Standorte und Organisationen",
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
        "Telefonischer Support",
        "API Zugang",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Individuell",
      period: "",
      employees: "Konzerne",
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
        "Telefonischer Support",
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
      <div className="mx-auto w-full max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Transparente Preise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wähle den Plan, der am besten zu deinem Unternehmen passt. Alle
            Pläne beinhalten unsere Kernfunktionen für digitalen Arbeitsschutz.
          </p>
          <div className="mt-6 mx-auto max-w-3xl rounded-lg border border-orange-400/40 bg-orange-50/50 dark:bg-orange-950/20 px-5 py-4 text-sm text-foreground/90">
            <p className="font-semibold text-foreground mb-1">
              Aktionspreise für Neukunden 2026
            </p>
            <p>
              Alle Kunden, die 2026 abschließen, zahlen in den ersten 2 Jahren
              €99, €199 bzw. €499 pro Monat und Standort. Anschließend gelten
              die regulären Preise von €200, €400 bzw. €1.000 pro Monat und
              Standort.
            </p>
          </div>
        </div>

        <div
          role="tablist"
          aria-label="Abrechnungszeitraum"
          className="mx-auto mb-10 flex w-full max-w-md rounded-full border border-border bg-muted/40 p-1"
        >
          {billingTabs.map(({ id, label, sublabel }) => {
            const isActive = billingPeriod === id;

            return (
              <button
                key={id}
                role="tab"
                type="button"
                aria-selected={isActive}
                onClick={() => setBillingPeriod(id)}
                className={cn(
                  "flex flex-1 appearance-none flex-col items-center justify-center rounded-full border-0 px-4 py-2.5 text-sm font-medium transition-all sm:flex-row sm:gap-1.5",
                  isActive ? "font-semibold shadow-sm" : "hover:opacity-80",
                )}
                style={
                  isActive
                    ? { backgroundColor: "#199f67", color: "#ffffff" }
                    : { backgroundColor: "transparent", color: "#404040" }
                }
              >
                <span>{label}</span>
                {sublabel && (
                  <span
                    className={cn(
                      "text-[10px] font-semibold leading-tight",
                      isActive ? "text-white/90" : "text-primary",
                    )}
                  >
                    {sublabel}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-4 xl:gap-6">
          {plans.map((plan, index) => {
            const hasOffer =
              "regularPrice" in plan && Boolean(plan.regularPrice);
            const savingsPercent =
              hasOffer && plan.regularPrice
                ? ("savingsPercent" in plan && plan.savingsPercent !== undefined
                    ? plan.savingsPercent
                    : getSavingsPercent(
                        billingPeriod === "yearly"
                          ? getYearlyTotal(plan.price)
                          : Number.parseInt(plan.price, 10),
                        billingPeriod === "yearly"
                          ? getYearlyTotal(plan.regularPrice)
                          : Number.parseInt(plan.regularPrice, 10),
                      ))
                : null;
            const displayPrice =
              hasOffer && billingPeriod === "yearly"
                ? formatPrice(getYearlyTotal(plan.price))
                : plan.price;
            const displayRegularPrice =
              hasOffer && plan.regularPrice && billingPeriod === "yearly"
                ? formatPrice(getYearlyTotal(plan.regularPrice))
                : plan.regularPrice;
            const displayPeriod = plan.period
              ? billingPeriod === "yearly"
                ? "pro Jahr pro Standort"
                : plan.period
              : "";

            return (
            <Card
              key={index}
              className={`relative border bg-card backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-foreground flex flex-col h-full min-w-0 overflow-visible ${
                plan.popular
                  ? "border-primary ring-2 ring-primary shadow-xl lg:scale-[1.03] z-[1]"
                  : hasOffer
                    ? "border-orange-400/60 ring-2 ring-orange-400/40"
                    : "border-border ring-2 ring-orange-400/50"
              }`}
            >
              <div className="absolute -top-3 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1.5 whitespace-nowrap">
                {hasOffer ? (
                  plan.popular ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-foreground px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-background shadow-md">
                      <Star className="h-3 w-3 fill-current" />
                      Beliebtester Tarif
                    </span>
                  ) : (
                    <span
                      aria-hidden="true"
                      className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider invisible"
                    >
                      <Star className="h-3 w-3" />
                      Beliebtester Tarif
                    </span>
                  )
                ) : (
                  <span
                    aria-hidden="true"
                    className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider invisible"
                  >
                    <Star className="h-3 w-3" />
                    Beliebtester Tarif
                  </span>
                )}
                {hasOffer ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
                    <Sparkles className="h-3 w-3" />
                    Angebot bis Ende 2026
                  </span>
                ) : (
                  <span
                    aria-hidden="true"
                    className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider invisible"
                  >
                    <Sparkles className="h-3 w-3" />
                    Angebot bis Ende 2026
                  </span>
                )}
              </div>
              <CardHeader className="text-center pb-0 pt-14">
                <CardTitle className="text-xl h-8 flex items-center justify-center mb-2 text-foreground">
                  {plan.name}
                </CardTitle>
                <div className="space-y-1.5">
                  {hasOffer && plan.regularPrice ? (
                    <div className="mx-1 flex h-[100px] items-center justify-center rounded-xl bg-orange-50 px-3 dark:bg-orange-950/30">
                      <div className="flex w-full flex-col items-center justify-center gap-1.5">
                        <div className="flex h-7 flex-wrap items-center justify-center gap-2">
                          <del className="text-xl font-semibold text-neutral-400 line-through decoration-red-500 decoration-[3px] [text-decoration-skip-ink:none] tabular-nums">
                            €{displayRegularPrice}
                          </del>
                          {savingsPercent !== null && (
                            <span className="rounded-full bg-[#ef4444] px-2 py-0.5 text-[10px] font-bold leading-none text-white">
                              −{savingsPercent}%
                            </span>
                          )}
                        </div>
                        <p className="text-4xl font-extrabold tracking-tight text-primary leading-none tabular-nums">
                          €{displayPrice}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="mx-1 flex h-[100px] items-center justify-center rounded-xl bg-orange-50 px-3 dark:bg-orange-950/30">
                      <p className="text-center text-4xl font-extrabold tracking-tight text-foreground leading-none">
                        {plan.price}
                      </p>
                    </div>
                  )}
                  <div className="h-5 flex items-center justify-center text-sm text-muted-foreground">
                    {displayPeriod || "\u00a0"}
                  </div>
                  <div className="min-h-6 flex items-center justify-center text-sm lg:text-xs xl:text-sm font-semibold text-muted-foreground text-center px-1">
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
                      <span className="text-xs xl:text-sm text-foreground/90">{feature}</span>
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
