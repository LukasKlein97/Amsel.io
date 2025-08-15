import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Brain, Camera, MessageSquare } from "lucide-react";

export function AISection() {
  const aiFeatures = [
    {
      icon: MessageSquare,
      title: "KI-gestützte\nFragenauswahl",
      description:
        "Automatische Vorauswahl relevanter Fragen und Risikofaktoren basierend auf Ihrem Prompt.",
      features: [
        "Intelligente Prompt-Analyse",
        "Automatische Faktor-Vorauswahl",
        "Manuelle Anpassung möglich",
      ],
      example:
        "Ich bin Abteilungsleiter der Logistik und möchte eine Begehung der LKW-Warenannahme in unserem Hochregallager mit Lithium-Batterien machen",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Camera,
      title: "Foto-basierte\nRisikoerkennung",
      description:
        "Automatische Erkennung von Gefährdungsfaktoren und Vorschlag von Schutzmaßnahmen.",
      features: [
        "Bildanalyse mit KI",
        "Automatische Risikofaktor-Zuordnung",
        "Intelligente Schutzmaßnahmen",
      ],
      example:
        "Foto einer Lagersituation → KI erkennt Lithium-Batterie-Gefahren und schlägt spezifische Schutzmaßnahmen vor",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section
      id="ai-features"
      className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-lg animate-pulse"></div>
              <Brain className="h-12 w-12 text-white relative z-10 mr-4" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              KI-gestützte Arbeitsschutz-Lösungen
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Nutzen Sie die Kraft künstlicher Intelligenz, um GBUs und Begehungen
            effizienter und präziser durchzuführen. Unsere KI-Features
            vereinfachen Ihre Arbeitsschutz-Prozesse erheblich.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {aiFeatures.map((feature, index) => (
            <Card
              key={index}
              className="group border-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 relative overflow-hidden"
            >
              {/* Animated border */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-lg`}
              ></div>

              <CardHeader className="text-center relative z-10">
                <div
                  className={`bg-gradient-to-r ${feature.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-white whitespace-pre-line mb-4 font-bold">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-gray-300 text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                <div>
                  <h4 className="text-sm font-bold text-blue-400 mb-4 uppercase tracking-wide">
                    Hauptfunktionen:
                  </h4>
                  <ul className="space-y-3">
                    {feature.features.map((feat, featIndex) => (
                      <li
                        key={featIndex}
                        className="text-sm text-gray-300 flex items-center group/item"
                      >
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient} mr-3 group-hover/item:scale-150 transition-transform duration-300`}
                        ></div>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className={`bg-gradient-to-r ${feature.gradient} bg-opacity-10 rounded-xl p-5 border border-white/10`}
                >
                  <h4 className="text-sm font-bold text-blue-400 mb-3 uppercase tracking-wide">
                    Beispiel:
                  </h4>
                  <p className="text-sm text-gray-300 italic leading-relaxed">
                    &ldquo;{feature.example}&rdquo;
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 p-10 rounded-3xl mb-8 overflow-hidden group">
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 via-purple-600/50 to-cyan-600/50 animate-pulse"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000 delay-300"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-6">
                Revolutionieren Sie Ihren Arbeitsschutz mit KI
              </h3>
              <p className="text-blue-100 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
                Sparen Sie wertvolle Zeit bei der Durchführung von GBUs und
                Begehungen. Unsere KI unterstützt Sie bei der Identifikation von
                Risiken und schlägt automatisch passende Schutzmaßnahmen vor.
              </p>
              <Button
                size="lg"
                className="bg-white text-slate-900 hover:bg-gray-100 font-semibold px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                KI-Features entdecken
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
