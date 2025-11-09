"use client";

import { useEffect } from "react";

export function CalendlyWidget() {
  useEffect(() => {
    // Load Calendly script if not already loaded
    if (
      !document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      )
    ) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="max-w-md">
      <h3 className="text-lg font-semibold mb-4 text-white">Termin buchen</h3>
      <p className="text-emerald-50/80 mb-6">
        Buchen Sie direkt einen Termin für ein Beratungsgespräch mit uns.
      </p>
      <div
        className="calendly-inline-widget rounded-xl overflow-hidden shadow-xl shadow-emerald-950/30 border border-white/10 bg-white/5 backdrop-blur-sm"
        data-url="https://calendly.com/lk-ams-cockpit/ams-vorstellung"
        style={{ minWidth: "320px", height: "850px" }}
      />
    </div>
  );
}
