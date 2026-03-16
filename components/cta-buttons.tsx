"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const scrollToContact = () => {
  const element = document.getElementById("contact");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export function CTAButtons({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center gap-4 sm:flex-row sm:items-center ${className}`}
    >
      <Button
        size="lg"
        onClick={scrollToContact}
        className="group"
      >
        30 Tage kostenlos testen
        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
      </Button>
      <Button
        size="lg"
        variant="outline"
        onClick={scrollToContact}
      >
        Termin vereinbaren
      </Button>
    </div>
  );
}
