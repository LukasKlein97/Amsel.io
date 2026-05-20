"use client";

import { useEffect, useState } from "react";
import { CalendarDays, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { CalInlineBen } from "./cal-inline-ben";
import { CalendlyWidget } from "./calendly-widget";
import { ContactForm } from "./contact-form";

type ContactTab = "termin" | "nachricht";

interface ContactSectionProps {
  variant?: "default" | "gemeinnuetzige-vereine";
}

const tabs: { id: ContactTab; label: string; icon: typeof CalendarDays }[] = [
  { id: "termin", label: "Termin buchen", icon: CalendarDays },
  { id: "nachricht", label: "Nachricht senden", icon: Mail },
];

export function ContactSection({
  variant = "default",
}: ContactSectionProps) {
  const [activeTab, setActiveTab] = useState<ContactTab>("termin");
  const [formMounted, setFormMounted] = useState(false);

  useEffect(() => {
    if (activeTab === "nachricht") {
      setFormMounted(true);
    }
  }, [activeTab]);

  return (
    <div className="mx-auto max-w-6xl">
      <div
        role="tablist"
        aria-label="Kontaktoptionen"
        className="mx-auto mb-6 flex w-full max-w-lg rounded-full border border-border bg-muted/40 p-1"
      >
        {tabs.map(({ id, label, icon: Icon }) => {
          const isActive = activeTab === id;

          return (
            <button
              key={id}
              role="tab"
              type="button"
              aria-selected={isActive}
              aria-controls={`contact-panel-${id}`}
              id={`contact-tab-${id}`}
              onClick={() => setActiveTab(id)}
              className={cn(
                "flex flex-1 appearance-none items-center justify-center gap-2 rounded-full border-0 px-4 py-2.5 text-sm font-medium transition-all",
                isActive ? "font-semibold shadow-sm" : "hover:opacity-80",
              )}
              style={
                isActive
                  ? { backgroundColor: "#199f67", color: "#ffffff" }
                  : { backgroundColor: "transparent", color: "#404040" }
              }
            >
              <Icon className="size-4 shrink-0" style={{ color: "inherit" }} />
              <span className="hidden sm:inline">{label}</span>
              <span className="sm:hidden">
                {id === "termin" ? "Termin" : "Nachricht"}
              </span>
            </button>
          );
        })}
      </div>

      <div>
        <div
          role="tabpanel"
          id="contact-panel-termin"
          aria-labelledby="contact-tab-termin"
          hidden={activeTab !== "termin"}
          className={activeTab !== "termin" ? "hidden" : undefined}
        >
          {variant === "gemeinnuetzige-vereine" ? (
            <CalendlyWidget />
          ) : (
            <CalInlineBen />
          )}
        </div>

        <div
          role="tabpanel"
          id="contact-panel-nachricht"
          aria-labelledby="contact-tab-nachricht"
          hidden={activeTab !== "nachricht"}
          className={activeTab !== "nachricht" ? "hidden" : undefined}
        >
          {formMounted && (
            <div className="flex justify-center px-4 pb-8 pt-6 md:px-6 md:pt-8">
              <ContactForm embedded />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
