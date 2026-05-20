"use client";

import { useRef } from "react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/header";
import { AnimatedHeroImage } from "@/components/animated-hero-image";
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

export type ModuleSectionProps = {
  sectionId: string;
  icon: LucideIcon;
  title: string;
  badge?: string;
  description: string;
  benefits: Array<{ title: string; description: string; icon: LucideIcon }>;
  outcomes: string[];
  beta?: boolean;
  heroImage?: string;
  isFirst?: boolean;
  mirrorHero?: boolean;
};

export function ModuleSection({
  sectionId,
  icon: Icon,
  title,
  badge,
  description,
  benefits,
  outcomes,
  beta,
  heroImage,
  isFirst = false,
  mirrorHero = false,
}: ModuleSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id={sectionId}
      className={[
        "relative scroll-mt-28 overflow-hidden text-foreground",
        isFirst ? "" : "border-t border-border",
      ].join(" ")}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-orange-100/50 via-transparent to-background" />
      <div className="absolute -top-32 left-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-orange-500/15 blur-3xl" />

      <div
        className={[
          "mx-auto max-w-6xl px-4 pb-20 sm:px-6",
          isFirst ? "pt-8 lg:pt-12" : "pt-24 lg:pt-32",
        ].join(" ")}
      >
        <div
          className={
            heroImage
              ? "flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-8"
              : ""
          }
        >
          <div className={heroImage ? "min-w-0 flex-1" : ""}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1 text-xs uppercase tracking-[0.35em] text-orange-700">
              <Icon className="h-3.5 w-3.5" aria-hidden />
              {badge ?? title.split(" – ")[0]}
            </div>

            <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-[3rem]">
              {title}
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
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
                className="text-sm text-orange-700 underline-offset-4 hover:text-orange-600 hover:underline"
              >
                Ausführliche Dokumentation →
              </a>
            </div>
          </div>

          {heroImage && (
            <AnimatedHeroImage
              src={heroImage}
              targetRef={sectionRef}
              mirror={mirrorHero}
            />
          )}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Deine Vorteile im Überblick
        </h3>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Das Modul ist für den praktischen Einsatz konzipiert – mobil nutzbar
          und nahtlos in deine bestehenden Prozesse integrierbar.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item) => (
            <Card
              key={item.title}
              className="border-border bg-card text-foreground shadow-lg shadow-orange-200/30 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl border border-orange-200 bg-orange-50">
                  <item.icon className="h-5 w-5 text-orange-300" />
                </div>
                <CardTitle className="text-lg text-foreground">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {item.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      <div className="border-y border-border bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Card className="border-border bg-card text-foreground shadow-xl shadow-orange-200/30">
            <CardHeader>
              <span className="text-sm font-medium uppercase tracking-wide text-orange-700">
                Ergebnis im Alltag
              </span>
              <CardTitle className="text-xl text-foreground">
                Was du typischerweise gewinnst
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 pt-0">
              {outcomes.map((line) => (
                <div key={line} className="flex gap-3 text-muted-foreground">
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
        <h3 className="text-center text-2xl font-semibold tracking-tight md:text-3xl">
          Mehr über dieses Modul erfahren?
        </h3>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          Wir zeigen dir gern, wie das Modul zu deinen Prozessen passt und wo
          du Zeit und Aufwand einsparen kannst.
        </p>
        <div className="mt-8 flex justify-center">
          <Button asChild size="lg">
            <Link href="#contact">Gespräch vereinbaren</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export type ModulePageLayoutProps = ModuleSectionProps;

export function ModulePageLayout(props: ModulePageLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="relative overflow-hidden pt-24 text-foreground">
        <ModuleSection {...props} isFirst />
      </main>
      <Footer />
    </div>
  );
}
