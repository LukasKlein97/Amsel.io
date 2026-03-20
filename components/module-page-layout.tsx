import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export type ModulePageProps = {
  icon: LucideIcon;
  title: string;
  badge?: string;
  description: string;
  benefits: Array<{ title: string; description: string; icon: LucideIcon }>;
  outcomes: string[];
  meta: {
    title: string;
    description: string;
    canonical: string;
  };
  beta?: boolean;
};

export function ModulePageLayout({
  icon: Icon,
  title,
  badge,
  description,
  benefits,
  outcomes,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- Metadaten werden in der Page definiert
  meta,
  beta,
}: ModulePageProps) {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="relative overflow-hidden text-white">
        <div
          className="absolute inset-0 -z-10"
          style={{ backgroundColor: "#000000" }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-orange-900/25 via-transparent to-black" />
        <div className="absolute -top-32 left-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-orange-500/15 blur-3xl" />

        <div className="mx-auto max-w-6xl px-4 pb-20 pt-32 sm:px-6 lg:pt-44">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.35em] text-orange-200/90">
            <Icon className="h-3.5 w-3.5" aria-hidden />
            {badge ?? title}
          </div>

          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-[3rem]">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-orange-50/85 md:text-xl">
            {description}
          </p>

          {beta && (
            <span className="mt-4 inline-flex rounded-full border border-amber-400/50 bg-amber-400/20 px-3 py-1 text-xs uppercase tracking-wider text-amber-200">
              Beta
            </span>
          )}

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button asChild size="lg" className="group">
              <Link href="#contact">
                Beratung anfragen
                <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </Button>
            <a
              href="https://docs.ams-cockpit.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-orange-200/90 underline-offset-4 hover:text-orange-100 hover:underline"
            >
              Ausführliche Dokumentation →
            </a>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Ihre Vorteile im Überblick
          </h2>
          <p className="mt-3 max-w-2xl text-orange-50/80">
            Das Modul ist für den praktischen Einsatz konzipiert – mobil nutzbar
            und nahtlos in Ihre bestehenden Prozesse integrierbar.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item) => (
              <Card
                key={item.title}
                className="border-white/10 bg-white/[0.04] text-white shadow-lg shadow-orange-950/20 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-orange-500/10">
                    <item.icon className="h-5 w-5 text-orange-300" />
                  </div>
                  <CardTitle className="text-lg text-white">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-orange-50/75">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <div className="border-y border-white/10 bg-white/[0.03] py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Card className="border-white/10 bg-black/40 text-white shadow-xl shadow-orange-950/30">
              <CardHeader>
                <span className="text-sm font-medium uppercase tracking-wide text-orange-200/90">
                  Ergebnis im Alltag
                </span>
                <CardTitle className="text-xl text-white">
                  Was Sie typischerweise gewinnen
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 pt-0">
                {outcomes.map((line) => (
                  <div key={line} className="flex gap-3 text-orange-50/90">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-orange-400/90"
                      aria-hidden
                    />
                    <span>{line}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="text-center text-2xl font-semibold tracking-tight md:text-3xl">
            Mehr über dieses Modul erfahren?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-orange-50/80">
            Wir zeigen Ihnen gern, wie das Modul zu Ihren Prozessen passt und
            wo Sie Zeit und Aufwand einsparen können.
          </p>
          <div className="mt-8 flex justify-center">
            <Button asChild size="lg">
              <Link href="#contact">Gespräch vereinbaren</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
