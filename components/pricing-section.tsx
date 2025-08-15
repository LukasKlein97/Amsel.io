import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

export function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "49",
      period: "pro Monat",
      description: "Perfekt für kleine Unternehmen und Einsteiger",
      features: [
        "Bis zu 10 Benutzer",
        "Gefährdungsbeurteilungen",
        "Begehungsprotokolle",
        "E-Mail Support",
        "Mobile App",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "99",
      period: "pro Monat",
      description: "Ideal für wachsende Unternehmen",
      features: [
        "Bis zu 50 Benutzer",
        "Alle Starter Features",
        "Aktionsplan Management",
        "Reporting & Analytics",
        "Gefahrstoffmanagement",
        "Prioritäts Support",
        "API Zugang",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "199",
      period: "pro Monat",
      description: "Für große Unternehmen mit speziellen Anforderungen",
      features: [
        "Unbegrenzte Benutzer",
        "Alle Professional Features",
        "Unfall Management",
        "Individuelle Anpassungen",
        "Dedizierter Support",
        "On-Premise Option",
        "SLA Garantie",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Transparente Preise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Wählen Sie den Plan, der am besten zu Ihrem Unternehmen passt.
            Alle Pläne beinhalten unsere Kernfunktionen für digitalen Arbeitsschutz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                plan.popular
                  ? "ring-2 ring-slate-900 scale-105"
                  : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-slate-900 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Beliebt
                  </span>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    €{plan.price}
                  </span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>
                <CardDescription className="text-gray-600">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-700"
                    >
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-slate-900 hover:bg-slate-800"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  {plan.popular ? "Jetzt starten" : "Plan wählen"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Benötigen Sie eine individuelle Lösung?
          </p>
          <Button variant="outline" size="lg">
            Kontaktieren Sie uns
          </Button>
        </div>
      </div>
    </section>
  );
} 