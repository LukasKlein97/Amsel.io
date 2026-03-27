"use client";

import Script from "next/script";

const PIPEDRIVE_WEBFORM_URL =
  "https://webforms.pipedrive.com/f/6k33BHBvKZchATbWsskuYMFvby2yoTU5bX153639oZi5ovjtxDl6meksL8Pwxwzhon";

export function ContactForm() {
  return (
    <div className="max-w-md w-full">
      <h3 className="text-lg font-semibold mb-4 text-white">
        Kontaktieren Sie uns
      </h3>
      <p className="text-orange-50/80 mb-6">
        Senden Sie uns eine Nachricht und wir melden uns zeitnah bei Ihnen.
      </p>
      <div
        className="pipedriveWebForms relative z-20 w-full rounded-xl border border-zinc-200 bg-white p-6 shadow-2xl shadow-black/50 [&_iframe]:block [&_iframe]:w-full"
        data-pd-webforms={PIPEDRIVE_WEBFORM_URL}
      />
      <Script
        src="https://webforms.pipedrive.com/f/loader"
        strategy="afterInteractive"
      />
    </div>
  );
}
