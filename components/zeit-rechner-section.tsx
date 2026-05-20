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
import { Calculator, Clock, Euro, TrendingUp, Users } from "lucide-react";
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
const DEFAULT_PERSONENTAG_KOSTEN = 650;

type ParsedHours =
  | { type: "std"; hours: number }
  | { type: "personentage"; days: number; restHours: number | null };

function parseHours(hours: number): ParsedHours {
  if (hours >= 8) {
    const days = Math.floor(hours / 8);
    const rest = Math.round(hours % 8);
    const showRest = days <= 10 && rest > 0;
    return { type: "personentage", days, restHours: showRest ? rest : null };
  }
  return { type: "std", hours: Math.round(hours) };
}

function formatHoursCompact(hours: number): string {
  const parsed = parseHours(hours);
  if (parsed.type === "std") return `${parsed.hours} Std`;
  const label = parsed.days === 1 ? "Personentag" : "Personentage";
  if (parsed.restHours !== null) {
    return `${parsed.days} ${label} ${parsed.restHours} Std`;
  }
  return `${parsed.days} ${label}`;
}

function HoursDisplay({ hours }: { hours: number }) {
  const parsed = parseHours(hours);
  if (parsed.type === "std") {
    return (
      <p className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
        {parsed.hours} Std
      </p>
    );
  }
  const label = parsed.days === 1 ? "Personentag" : "Personentage";
  return (
    <p className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-0">
      <span className="text-3xl font-bold text-foreground md:text-4xl">
        {parsed.days}
      </span>
      <span className="text-base font-medium text-foreground/90 md:text-lg">
        {label}
      </span>
      {parsed.restHours !== null && (
        <span className="text-xl font-semibold text-foreground md:text-2xl">
          {parsed.restHours} Std
        </span>
      )}
    </p>
  );
}

function hoursToEuro(hours: number, personentagKosten: number): number {
  return (hours / 8) * personentagKosten;
}

function formatEuro(amount: number): string {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function ZeitRechnerSection() {
  const [maDisplay, setMaDisplay] = useState("200");
  const [sifasDisplay, setSifasDisplay] = useState("2");
  const [branche, setBranche] =
    useState<(typeof BRANCHEN)[number]["value"]>("produktion");
  const [loesung, setLoesung] =
    useState<(typeof AKTUELLE_LOESUNG)[number]["value"]>("excel");
  const [personentagKostenDisplay, setPersonentagKostenDisplay] = useState(
    String(DEFAULT_PERSONENTAG_KOSTEN),
  );

  const ma = Math.max(1, Math.min(10000, parseInt(maDisplay, 10) || 1));
  const sifas = Math.max(0, Math.min(100, parseInt(sifasDisplay, 10) || 0));
  const personentagKosten = Math.max(
    50,
    Math.min(
      5000,
      parseInt(personentagKostenDisplay, 10) || DEFAULT_PERSONENTAG_KOSTEN,
    ),
  );

  const berechnung = useMemo(() => {
    const brancheData = BRANCHEN.find((b) => b.value === branche)!;
    const loesungData = AKTUELLE_LOESUNG.find((l) => l.value === loesung)!;

    // Basis-Aufwand ohne AMS (Stunden pro Monat)
    const basisAufwand =
      ma * BASIS_STUNDEN_PRO_MA * brancheData.multiplier +
      sifas * BASIS_STUNDEN_PRO_SIFA * brancheData.multiplier;

    const ersparnisProzent = loesungData.ersparnisProzent;
    const gesparteStunden = basisAufwand * (ersparnisProzent / 100);

    const proJahr = gesparteStunden * 12;

    return {
      basisAufwand,
      gesparteStunden,
      ersparnisProzent,
      proJahr,
      gesparteEuroProMonat: hoursToEuro(gesparteStunden, personentagKosten),
      gesparteEuroProJahr: hoursToEuro(proJahr, personentagKosten),
      basisAufwandEuro: hoursToEuro(basisAufwand, personentagKosten),
    };
  }, [ma, sifas, branche, loesung, personentagKosten]);

  return (
    <section
      id="zeit-rechner"
      className="relative overflow-hidden bg-background py-24 text-foreground"
    >
      <div className="absolute inset-x-0 top-[-20%] -z-10 h-[480px] bg-[radial-gradient(circle,_rgba(25,159,103,0.2)_0%,_transparent_65%)]" />
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
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1 text-xs uppercase tracking-[0.4em] text-orange-700">
            Zeit-Rechner
          </span>
          <div className="mt-6 flex items-center justify-center gap-4">
            <Calculator className="h-10 w-10 text-orange-600" />
            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
              Wie viel Zeit spart AMS Go in deinem Betrieb?
            </h2>
          </div>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Alles an einem Ort, mobile App ohne Medienbrüche, KI für
            Betriebsanweisungen und GBUs, automatische
            Sicherheitsdatenblatt-Erfassung – berechne deine potenzielle
            Zeitersparnis.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Eingabefelder */}
          <Card className="lg:col-span-2 border border-border bg-card shadow-xl shadow-orange-200/30">
            <CardHeader>
              <CardTitle className="text-foreground">Deine Parameter</CardTitle>
              <CardDescription className="text-muted-foreground">
                Passe die Werte an dein Unternehmen an.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="ma" className="text-foreground">
                  Anzahl Mitarbeiter
                </Label>
                <Input
                  id="ma"
                  type="text"
                  inputMode="numeric"
                  value={maDisplay}
                  onChange={(e) => {
                    const v = e.target.value.replace(/\D/g, "");
                    setMaDisplay(v);
                  }}
                  onBlur={() => {
                    const n = parseInt(maDisplay, 10);
                    if (maDisplay === "" || isNaN(n)) {
                      setMaDisplay("1");
                    } else {
                      setMaDisplay(String(Math.max(1, Math.min(10000, n))));
                    }
                  }}
                  className="border-input bg-background text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sifas" className="text-foreground">
                  Anzahl Sicherheitsfachkräfte / SiFas
                </Label>
                <Input
                  id="sifas"
                  type="text"
                  inputMode="numeric"
                  value={sifasDisplay}
                  onChange={(e) => {
                    const v = e.target.value.replace(/\D/g, "");
                    setSifasDisplay(v);
                  }}
                  onBlur={() => {
                    const n = parseInt(sifasDisplay, 10);
                    if (sifasDisplay === "" || isNaN(n)) {
                      setSifasDisplay("0");
                    } else {
                      setSifasDisplay(String(Math.max(0, Math.min(100, n))));
                    }
                  }}
                  className="border-input bg-background text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="branche" className="text-foreground">
                  Branche
                </Label>
                <select
                  id="branche"
                  value={branche}
                  onChange={(e) => setBranche(e.target.value as typeof branche)}
                  className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm text-foreground shadow-xs outline-none focus-visible:border-orange-400 focus-visible:ring-2 focus-visible:ring-orange-400/50"
                >
                  {BRANCHEN.map((b) => (
                    <option
                      key={b.value}
                      value={b.value}
                      className="bg-white text-foreground"
                    >
                      {b.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="loesung" className="text-foreground">
                  Aktuelle Lösung
                </Label>
                <select
                  id="loesung"
                  value={loesung}
                  onChange={(e) => setLoesung(e.target.value as typeof loesung)}
                  className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm text-foreground shadow-xs outline-none focus-visible:border-orange-400 focus-visible:ring-2 focus-visible:ring-orange-400/50"
                >
                  {AKTUELLE_LOESUNG.map((l) => (
                    <option
                      key={l.value}
                      value={l.value}
                      className="bg-white text-foreground"
                    >
                      {l.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="personentag-kosten" className="text-foreground">
                  Personentag Kosten
                </Label>
                <div className="relative">
                  <Input
                    id="personentag-kosten"
                    type="text"
                    inputMode="numeric"
                    value={personentagKostenDisplay}
                    onChange={(e) => {
                      const v = e.target.value.replace(/\D/g, "");
                      setPersonentagKostenDisplay(v);
                    }}
                    onBlur={() => {
                      const n = parseInt(personentagKostenDisplay, 10);
                      if (personentagKostenDisplay === "" || isNaN(n)) {
                        setPersonentagKostenDisplay(
                          String(DEFAULT_PERSONENTAG_KOSTEN),
                        );
                      } else {
                        setPersonentagKostenDisplay(
                          String(Math.max(50, Math.min(5000, n))),
                        );
                      }
                    }}
                    className="border-input bg-background pr-10 text-foreground placeholder:text-muted-foreground"
                  />
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                    €
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Interner Tagessatz für Arbeitsschutz-Aufgaben{" "}
                  <span className="whitespace-nowrap">
                    (Standard: {DEFAULT_PERSONENTAG_KOSTEN}€)
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Ergebnis */}
          <div className="lg:col-span-3 space-y-6">
            <Card className="border border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100/80 shadow-xl shadow-orange-200/40 backdrop-blur-2xl">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-orange-300" />
                  Geschätzte Zeit- & Kostenersparnis
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Basierend auf typischen Arbeitsschutz-Prozessen in deiner
                  Branche ({personentagKosten}€ pro Personentag).
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-orange-50/50 p-6">
                    <div className="flex items-center gap-3 text-orange-600">
                      <Clock className="h-8 w-8" />
                      <span className="text-sm font-medium uppercase tracking-wider">
                        Pro Monat
                      </span>
                    </div>
                    <HoursDisplay hours={berechnung.gesparteStunden} />
                    <p className="mt-2 flex items-center gap-2 text-xl font-semibold text-orange-700">
                      <Euro className="h-5 w-5 shrink-0" />
                      {formatEuro(berechnung.gesparteEuroProMonat)}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      ca. {berechnung.ersparnisProzent}% weniger Aufwand
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-orange-50/50 p-6">
                    <div className="flex items-center gap-3 text-orange-600">
                      <Clock className="h-8 w-8" />
                      <span className="text-sm font-medium uppercase tracking-wider">
                        Pro Jahr
                      </span>
                    </div>
                    <HoursDisplay hours={berechnung.proJahr} />
                    <p className="mt-2 flex items-center gap-2 text-xl font-semibold text-orange-700">
                      <Euro className="h-5 w-5 shrink-0" />
                      {formatEuro(berechnung.gesparteEuroProJahr)}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      für Arbeitsschutz-Aufgaben
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-orange-50/50 p-6">
                  <h4 className="text-sm font-semibold text-orange-700 uppercase tracking-wider mb-4">
                    Wo die Zeitersparnis herkommt
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-foreground/90">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-400" />
                      <span>
                        <strong>Alles an einem Ort:</strong> Kein Suchen in
                        Ordnern, Excel-Dateien oder verschiedenen Systemen
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-foreground/90">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-400" />
                      <span>
                        <strong>Mobile App:</strong> Begehungen direkt vor Ort
                        erfassen – keine Medienbrüche durch Abtippen
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-foreground/90">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-400" />
                      <span>
                        <strong>KI für Betriebsanweisungen & GBUs:</strong>{" "}
                        Automatische Generierung statt manueller Erstellung
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-foreground/90">
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
                    <p className="font-medium text-foreground">
                      Aktueller Aufwand ohne AMS: ca.{" "}
                      {formatHoursCompact(berechnung.basisAufwand)} pro Monat (
                      {formatEuro(berechnung.basisAufwandEuro)})
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Mit AMS Go reduziert sich dieser Aufwand deutlich – in
                      Zeit und Kosten.
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
