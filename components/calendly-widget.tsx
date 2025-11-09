/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-rest-params */
"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Cal?: any;
  }
}

export function CalendlyWidget() {
  useEffect(() => {
    // Initialize Cal.com API structure - exact copy from original embed code
    (function (C: any, A: string, L: string) {
      const p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      const d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          const cal = C.Cal;
          const ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api: any = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else {
              p(cal, ar);
            }
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    // Initialize Cal.com - exact copy from original embed code
    // These calls will be queued and executed when the script loads
    window.Cal("init", "30min", { origin: "https://app.cal.com" });

    // The namespace API is created by the init call above
    // These calls will be queued in the namespace's queue
    window.Cal.ns["30min"]("inline", {
      elementOrSelector: "#my-cal-inline-30min",
      config: { layout: "month_view" },
      calLink: "amscockpit/demo",
    });

    window.Cal.ns["30min"]("ui", {
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, []);

  return (
    <div className="w-full">
      <div
        id="my-cal-inline-30min"
        className="w-full min-h-[600px] md:h-[850px] overflow-auto"
      />
    </div>
  );
}
