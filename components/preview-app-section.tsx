"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, ClipboardList, BarChart3 } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function PreviewAppSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [-100, 0]);

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Smartphone Mockup with Actual Screenshot */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <motion.div ref={ref} style={{ x }} className="relative">
              {/* Complete App Screenshot */}
              <img
                src="/images/app5.png"
                alt="AMS Industrie App Screenshot"
                className="w-96 h-auto"
              />
            </motion.div>
          </div>

          {/* Content */}
          <div className="flex-1 max-w-lg">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Eine App für professionelles Sicherheitsmanagement
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Unsere AMS Industrie App bietet alle wichtigen Tools für das
              Sicherheitsmanagement in einem übersichtlichen Dashboard. Von
              Gefährdungsbeurteilungen bis hin zu Schulungsmatrizen - alles auf
              einen Blick verfügbar.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    PDF-Scanner & Dokumentenmanagement
                  </h3>
                  <p className="text-gray-600">
                    Digitalisieren Sie wichtige Dokumente direkt mit der App und
                    verwalten Sie sie zentral.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ClipboardList className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Begehungsprotokolle & Aktionspläne
                  </h3>
                  <p className="text-gray-600">
                    Erstellen Sie systematisch Protokolle und verfolgen Sie die
                    Umsetzung von Sicherheitsmaßnahmen.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Gefährdungsbeurteilungen & Diagramme
                  </h3>
                  <p className="text-gray-600">
                    Analysieren Sie Risiken professionell und visualisieren Sie
                    Daten in aussagekräftigen Diagrammen.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                App herunterladen
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
