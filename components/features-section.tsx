import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckCircle,
  FileText,
  BarChart3,
  AlertTriangle,
  Beaker,
} from "lucide-react";

export function ModuleSection() {
  const features = [
    {
      icon: FileText,
      title: "Gefährdungsbeurteilungen (GBU)",
      description:
        "Digitale Erstellung und Verwaltung von Gefährdungsbeurteilungen mit vorgefertigten Vorlagen.",
    },
    {
      icon: CheckCircle,
      title: "Begehungsprotokolle",
      description:
        "Mobile Erfassung von Sicherheitsbegehungen mit Foto-Dokumentation und direkter Maßnahmenverfolgung.",
    },
    {
      icon: FileText,
      title: "Aktionsplan",
      description:
        "Erstellung und Verwaltung von Aktionsplänen für alle Mitarbeiter.",
    },
    {
      icon: BarChart3,
      title: "Reporting & Analytics",
      description:
        "Umfassende Berichte und Dashboards für bessere Entscheidungsfindung im Arbeitsschutz.",
    },
    {
      icon: Beaker,
      title: "Gefahrstoffmanagement",
      description:
        "Verwaltung von Gefahrstoffen und deren Verwendung in der Arbeitsschutz-Lösung.",
      comingSoon: true,
    },
    {
      icon: AlertTriangle,
      title: "Unfall Management",
      description:
        "Schnelle Erfassung und Bearbeitung von Unfällen, Beinahe-Unfällen und Gefährdungen.",
      comingSoon: true,
    },
  ];

  return (
    <section id="features" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Module für Ihren Arbeitsschutz
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            AMS bietet eine vollständige Lösung für alle Aspekte des
            betrieblichen Arbeitsschutzes - von der Gefährdungsbeurteilung bis
            zur Unfallmeldung.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 h-72 flex flex-col ${
                feature.comingSoon ? "opacity-75" : ""
              }`}
            >
              <CardHeader className="flex-shrink-0">
                <div className="bg-slate-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl flex items-center gap-2">
                  {feature.title}
                  {feature.comingSoon && (
                    <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
                      Bald verfügbar
                    </span>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-start">
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
