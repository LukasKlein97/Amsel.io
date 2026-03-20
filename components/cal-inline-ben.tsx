/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-rest-params */
"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    Cal?: any;
  }
}

const EMBED_IFRAME_SRC =
  "https://app.cal.eu/benjaminkostrzewa/30min/embed";

const INLINE_CONTAINER_ID = "my-cal-inline-ben-30min";
const CAL_NAMESPACE = "ben30";

function hasForeignCalScriptLoaded(): boolean {
  if (typeof document === "undefined") return false;
  return Array.from(document.scripts).some(
    (s) =>
      /\/embed\/embed\.js/.test(s.src) &&
      s.src.length > 0 &&
      !s.src.includes("cal.eu"),
  );
}

export function CalInlineBen() {
  const [useIframe, setUseIframe] = useState(false);

  useEffect(() => {
    if (hasForeignCalScriptLoaded()) {
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
    })(window, "https://app.cal.eu/embed/embed.js", "init");

    window.Cal("init", CAL_NAMESPACE, { origin: "https://app.cal.eu" });

    window.Cal.ns[CAL_NAMESPACE]("inline", {
      elementOrSelector: `#${INLINE_CONTAINER_ID}`,
      config: {
        layout: "month_view",
        useSlotsViewOnSmallScreen: "true",
      },
      calLink: "benjaminkostrzewa/30min",
    });

    window.Cal.ns[CAL_NAMESPACE]("ui", {
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, []);

  if (useIframe) {
    return (
      <div className="w-full overflow-hidden rounded-xl border border-white/10 bg-black/40">
        <iframe
          title="Termin mit Ben – 30 Minuten"
          src={EMBED_IFRAME_SRC}
          className="h-[min(85vh,900px)] w-full min-h-[600px] border-0"
          allow="camera; microphone; fullscreen; payment; clipboard-write"
        />
      </div>
    );
  }

  return (
    <div className="w-full">
      <div
        id={INLINE_CONTAINER_ID}
        className="h-[min(85vh,900px)] w-full min-h-[600px] overflow-auto"
      />
    </div>
  );
}
