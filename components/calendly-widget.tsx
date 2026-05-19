/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-rest-params */
"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    Cal?: any;
  }
}

const GEMEINNUETZIG_EMBED_IFRAME_SRC =
  "https://app.cal.com/frank-hufnagel/30min/embed";

function hasCalEuEmbedScriptLoaded(): boolean {
  if (typeof document === "undefined") return false;
  return Array.from(document.scripts).some(
    (s) =>
      /\/embed\/embed\.js/.test(s.src) &&
      s.src.length > 0 &&
      s.src.includes("cal.eu"),
  );
}

export function CalendlyWidget() {
  const [useIframe, setUseIframe] = useState(false);

  useEffect(() => {
    if (hasCalEuEmbedScriptLoaded()) {
      setUseIframe(true);
      return;
    }

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

    window.Cal("init", "30min", { origin: "https://app.cal.com" });

    window.Cal.ns["30min"]("inline", {
      elementOrSelector: "#my-cal-inline-30min",
      config: {
        layout: "month_view",
        useSlotsViewOnSmallScreen: "true",
      },
      calLink: "frank-hufnagel/30min",
    });

    window.Cal.ns["30min"]("ui", {
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, []);

  if (useIframe) {
    return (
      <div className="w-full overflow-hidden rounded-xl border border-border bg-white/90">
        <iframe
          title="Termin – 30 Minuten (Gemeinnützige Vereine)"
          src={GEMEINNUETZIG_EMBED_IFRAME_SRC}
          className="w-full min-h-[600px] md:h-[850px] border-0"
          allow="camera; microphone; fullscreen; payment; clipboard-write"
        />
      </div>
    );
  }

  return (
    <div className="w-full">
      <div
        id="my-cal-inline-30min"
        className="w-full min-h-[600px] md:h-[850px] overflow-auto"
      />
    </div>
  );
}
