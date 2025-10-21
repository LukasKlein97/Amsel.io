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
      <p className="text-gray-300 mb-6">
        Buchen Sie direkt einen Termin für ein Beratungsgespräch mit uns.
      </p>
      <div
        className="calendly-inline-widget rounded-lg overflow-hidden shadow-lg border border-slate-700"
        data-url="https://calendly.com/lukasklein20/30min?hide_landing_page_details=1&hide_gdpr_banner=1"
        style={{ minWidth: "320px", height: "700px" }}
      />
    </div>
  );
}
