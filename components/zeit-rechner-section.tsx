"use client";

import { useState, useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, Clock, TrendingUp, Users } from "lucide-react";
import { CTAButtons } from "@/components/cta-buttons";
import { motion } from "framer-motion";

const BRANCHEN = [
  { value: "buero", label: "Büro / Dienstleistung", multiplier: 1.0 },
  { value: "einzelhandel", label: "Einzelhandel", multiplier: 1.2 },
  { value: "produktion", label: "Produktion / Industrie", multiplier: 1.5 },
  { value: "bau", label: "Bau", multiplier: 1.6 },
  { value: "chemie", label: "Chemie / Pharma", multiplier: 1.8 },
  { value: "gesundheit", label: "Gesundheitswesen", multiplier: 1.4 },
  { value: "logistik", label: "Logistik", multiplier: 1.3 },
] as const;

const AKTUELLE_LOESUNG = [
  { value: "papier", label: "Papier", ersparnisProzent: 70 },
  { value: "excel", label: "Excel / Tabellen", ersparnisProzent: 50 },
  { value: "software", label: "Andere Software", ersparnisProzent: 30 },
] as const;

// Basis-Stunden pro Monat für Arbeitsschutz-Aufgaben (ohne AMS)
// Pro MA: Dokumentation, Unterweisungen, Schulungsnachweise
// Pro SiFa: Begehungen, GBUs, Betriebsanweisungen, Sicherheitsdatenblätter
const BASIS_STUNDEN_PRO_MA = 0.8;
const BASIS_STUNDEN_PRO_SIFA = 12;

function formatHours(hours: number): string {
  if (hours >= 24) {
    const days = Math.floor(hours / 24);
    const rest = Math.round(hours % 24);
    const tagLabel = days === 1 ? "Tag" : "Tage";
    if (rest === 0) return `${days} ${tagLabel}`;
    return `${days} ${tagLabel} ${rest} Std`;
  }
  return `${Math.round(hours)} Std`;
}

export function ZeitRechnerSection() {
  const [ma, setMa] = useState(50);
  const [sifas, setSifas] = useState(2);
  const [branche, setBranche] = useState<typeof BRANCHEN[number]["value"]>("produktion");
  const [loesung, setLoesung] = useState<typeof AKTUELLE_LOESUNG[number]["value"]>("excel");

  const berechnung = useMemo(() => {
    const brancheData = BRANCHEN.find((b) => b.value === branche)!;
    const loesungData = AKTUELLE_LOESUNG.find((l) => l.value === loesung)!;

    // Basis-Aufwand ohne AMS (Stunden pro Monat)
    const basisAufwand =
      ma * BASIS_STUNDEN_PRO_MA * brancheData.multiplier +
      sifas * BASIS_STUNDEN_PRO_SIFA * brancheData.multiplier;

    const ersparnisProzent = loesungData.ersparnisProzent;
    const gesparteStunden = basisAufwand * (ersparnisProzent / 100);

    return {
      basisAufwand,
      gesparteStunden,
      ersparnisProzent,
      proJahr: gesparteStunden * 12,
    };
  }, [ma, sifas, branche, loesung]);

  return (
    <section
      id="zeit-rechner"
      className="relative overflow-hidden bg-black py-24 text-white"
    >
      <div className="absolute inset-x-0 top-[-20%] -z-10 h-[480px] bg-[radial-gradient(circle,_rgba(249,115,22,0.2)_0%,_transparent_65%)]" />
      <div className="absolute bottom-0 left-1/2 -z-10 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute right-[-10%] top-[30%] -z-10 h-[280px] w-[280px] rounded-full bg-orange-400/10 blur-3xl" />

      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 180, damping: 26 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.4em] text-orange-200/90">
            Zeit-Rechner
          </span>
          <div className="mt-6 flex items-center justify-center gap-4">
            <Calculator className="h-10 w-10 text-orange-300" />
            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
              Wie viel Zeit spart AMS in Ihrem Betrieb?
            </h2>
          </div>
          <p className="mt-4 text-base text-white/80 md:text-lg">
            Alles an einem Ort, mobile App ohne Medienbrüche, KI für
            Betriebsanweisungen und GBUs, automatische Sicherheitsdatenblatt-Erfassung
            – berechnen Sie Ihre potenzielle Zeitersparnis.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Eingabefelder */}
          <Card className="lg:col-span-2 border border-white/10 bg-white/5 shadow-xl shadow-orange-950/30 backdrop-blur-2xl">
            <CardHeader>
              <CardTitle className="text-white">Ihre Parameter</CardTitle>
              <CardDescription className="text-orange-50/80">
                Passen Sie die Werte an Ihr Unternehmen an.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="ma" className="text-white/90">
                  Anzahl Mitarbeiter
                </Label>
                <Input
                  id="ma"
                  type="number"
                  min={1}
                  max={10000}
                  value={ma}
                  onChange={(e) => setMa(Math.max(1, parseInt(e.target.value) || 1))}
                  className="border-white/20 bg-white/5 text-white placeholder:text-white/40"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sifas" className="text-white/90">
                  Anzahl Sicherheitsfachkräfte / SiFas
                </Label>
                <Input
                  id="sifas"
                  type="number"
                  min={0}
                  max={100}
                  value={sifas}
                  onChange={(e) =>
                    setSifas(Math.max(0, parseInt(e.target.value) || 0))
                  }
                  className="border-white/20 bg-white/5 text-white placeholder:text-white/40"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="branche" className="text-white/90">
                  Branche
                </Label>
                <select
                  id="branche"
                  value={branche}
                  onChange={(e) =>
                    setBranche(e.target.value as typeof branche)
                  }
                  className="flex h-9 w-full rounded-md border border-white/20 bg-white/5 px-3 py-1 text-sm text-white shadow-xs outline-none focus-visible:border-orange-400 focus-visible:ring-2 focus-visible:ring-orange-400/50"
                >
                  {BRANCHEN.map((b) => (
                    <option key={b.value} value={b.value} className="bg-gray-900 text-white">
                      {b.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="loesung" className="text-white/90">
                  Aktuelle Lösung
                </Label>
                <select
                  id="loesung"
                  value={loesung}
                  onChange={(e) =>
                    setLoesung(e.target.value as typeof loesung)
                  }
                  className="flex h-9 w-full rounded-md border border-white/20 bg-white/5 px-3 py-1 text-sm text-white shadow-xs outline-none focus-visible:border-orange-400 focus-visible:ring-2 focus-visible:ring-orange-400/50"
                >
                  {AKTUELLE_LOESUNG.map((l) => (
                    <option key={l.value} value={l.value} className="bg-gray-900 text-white">
                      {l.label}
                    </option>
                  ))}
                </select>
              </div>
            </CardContent>
          </Card>

          {/* Ergebnis */}
          <div className="lg:col-span-3 space-y-6">
            <Card className="border border-orange-200/30 bg-gradient-to-br from-orange-500/20 to-orange-600/10 shadow-xl shadow-orange-950/40 backdrop-blur-2xl">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-orange-300" />
                  Geschätzte Zeitersparnis
                </CardTitle>
                <CardDescription className="text-orange-50/80">
                  Basierend auf typischen Arbeitsschutz-Prozessen in Ihrer Branche.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                    <div className="flex items-center gap-3 text-orange-300">
                      <Clock className="h-8 w-8" />
                      <span className="text-sm font-medium uppercase tracking-wider">
                        Pro Monat
                      </span>
                    </div>
                    <p className="mt-3 text-3xl font-bold text-white md:text-4xl">
                      {formatHours(berechnung.gesparteStunden)}
                    </p>
                    <p className="mt-1 text-sm text-white/70">
                      ca. {berechnung.ersparnisProzent}% weniger Aufwand
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                    <div className="flex items-center gap-3 text-orange-300">
                      <Clock className="h-8 w-8" />
                      <span className="text-sm font-medium uppercase tracking-wider">
                        Pro Jahr
                      </span>
                    </div>
                    <p className="mt-3 text-3xl font-bold text-white md:text-4xl">
                      {formatHours(berechnung.proJahr)}
                    </p>
                    <p className="mt-1 text-sm text-white/70">
                      für Arbeitsschutz-Aufgaben
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                  <h4 className="text-sm font-semibold text-orange-200 uppercase tracking-wider mb-4">
                    Wo die Zeitersparnis herkommt
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-white/90">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-400" />
                      <span>
                        <strong>Alles an einem Ort:</strong> Kein Suchen in
                        Ordnern, Excel-Dateien oder verschiedenen Systemen
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-white/90">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-400" />
                      <span>
                        <strong>Mobile App:</strong> Begehungen direkt vor Ort
                        erfassen – keine Medienbrüche durch Abtippen
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-white/90">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-400" />
                      <span>
                        <strong>KI für Betriebsanweisungen & GBUs:</strong>{" "}
                        Automatische Generierung statt manueller Erstellung
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-white/90">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-400" />
                      <span>
                        <strong>Sicherheitsdatenblätter:</strong> Automatische
                        Erfassung – keine manuelle Dateneingabe
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="flex items-center gap-4 rounded-xl border border-orange-200/20 bg-orange-400/10 p-4">
                  <Users className="h-10 w-10 text-orange-300 shrink-0" />
                  <div>
                    <p className="font-medium text-white">
                      Aktueller Aufwand ohne AMS: ca.{" "}
                      {formatHours(berechnung.basisAufwand)} pro Monat
                    </p>
                    <p className="text-sm text-white/70">
                      Mit AMS reduziert sich dieser Aufwand deutlich.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex justify-center pt-8">
          <CTAButtons className="justify-center" />
        </div>
      </div>
    </section>
  );
}
