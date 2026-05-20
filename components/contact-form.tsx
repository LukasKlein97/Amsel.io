"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const PIPEDRIVE_WEBFORM_URL =
  "https://webforms.pipedrive.com/f/6k33BHBvKZchATbWsskuYMFvby2yoTU5bX153639oZi5ovjtxDl6meksL8Pwxwzhon";

const LOADER_SRC = "https://webforms.pipedrive.com/f/loader";

function isLoaderPresent(): boolean {
  return Array.from(document.scripts).some((s) => s.src === LOADER_SRC);
}

function initPipedriveForm(container: HTMLElement): void {
  const url = container.getAttribute("data-pd-webforms");
  if (!url || container.id || container.querySelector("iframe")) return;

  const id = `pd-${Math.random().toString(36).slice(2, 9)}`;
  container.id = id;

  const iframe = document.createElement("iframe");
  const pageUrl = window.document.URL;
  iframe.src = `${url}?embeded=1&uuid=${id}`;
  iframe.name = `${pageUrl}-${id}`;
  iframe.scrolling = "no";
  iframe.title = "Kontaktformular";
  iframe.setAttribute("seamless", "seamless");
  iframe.className = "min-h-[420px] w-full border-0";
  container.appendChild(iframe);
}

function loadPipedriveLoader(): Promise<void> {
  return new Promise((resolve) => {
    if (isLoaderPresent()) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = LOADER_SRC;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => resolve();
    document.body.appendChild(script);
  });
}

interface ContactFormProps {
  embedded?: boolean;
}

export function ContactForm({ embedded = false }: ContactFormProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading",
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;

    async function mountForm() {
      setStatus("loading");

      await loadPipedriveLoader();
      if (cancelled || !containerRef.current) return;

      const el = containerRef.current;
      if (!el.id && !el.querySelector("iframe")) {
        initPipedriveForm(el);
      }

      if (cancelled) return;
      setStatus(el.querySelector("iframe") ? "ready" : "error");
    }

    void mountForm();

    return () => {
      cancelled = true;
      container.removeAttribute("id");
      container.replaceChildren();
    };
  }, []);

  return (
    <div className="w-full max-w-md">
      {!embedded && (
        <>
          <h3 className="mb-4 text-lg font-semibold text-foreground">
            Kontaktiere uns
          </h3>
          <p className="mb-6 text-muted-foreground">
            Sende uns eine Nachricht und wir melden uns zeitnah bei dir.
          </p>
        </>
      )}
      <div
        ref={containerRef}
        className={cn(
          "pipedriveWebForms relative z-20 w-full min-h-[420px] [&_iframe]:block [&_iframe]:w-full",
          embedded
            ? "border-0 bg-transparent px-2 py-2 shadow-none md:px-4"
            : "rounded-xl border border-zinc-200 bg-white p-6 shadow-2xl shadow-black/50",
        )}
        data-pd-webforms={PIPEDRIVE_WEBFORM_URL}
      />
      {status === "loading" && (
        <p className="mt-3 text-center text-sm text-muted-foreground">
          Formular wird geladen …
        </p>
      )}
      {status === "error" && (
        <p className="mt-3 text-center text-sm text-muted-foreground">
          Formular konnte nicht geladen werden.{" "}
          <a
            href={PIPEDRIVE_WEBFORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-700 underline underline-offset-2"
          >
            Hier direkt öffnen
          </a>
        </p>
      )}
    </div>
  );
}
