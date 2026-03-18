"use client";

import Image from "next/image";

const partners = [
  {
    name: "CyberForum",
    src: "/partner-cyberforum.svg",
    href: "https://www.cyberforum.de/",
    whiteLogo: true,
    logoSize: "large" as const,
  },
  {
    name: "CyberLab",
    src: "/partner-cyberlab.svg",
    href: "https://www.cyberlab-karlsruhe.de/",
    whiteLogo: true,
    logoSize: "large" as const,
  },
  {
    name: "STATUS3 academy",
    src: "/partner-status3.png",
    href: "https://status3.academy",
  },
];

export function PartnersSection() {
  return (
    <section
      id="partners"
      className="relative overflow-hidden bg-black py-20 text-white"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-[radial-gradient(circle,_rgba(249,115,22,0.12)_0%,_transparent_65%)]" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.4em] text-orange-200/90 mb-6">
            Partner
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Partner und Kooperationen
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Wir arbeiten mit führenden Organisationen zusammen, um digitalen
            Arbeitsschutz voranzutreiben.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-16 xl:gap-24">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-105 ${
                "logoSize" in partner && partner.logoSize === "large"
                  ? "w-64 h-28"
                  : "w-48 h-20"
              } ${
                "whiteLogo" in partner && partner.whiteLogo
                  ? ""
                  : "grayscale hover:grayscale-0"
              } ${"rau" in partner && partner.rau ? "contrast-[1.2] saturate-90" : ""}`}
            >
              <Image
                src={partner.src}
                alt={`${partner.name} Logo`}
                width={192}
                height={80}
                className={`w-full h-full object-contain ${
                  "whiteLogo" in partner && partner.whiteLogo
                    ? "opacity-90"
                    : ""
                } ${
                  "rau" in partner && partner.rau
                    ? "drop-shadow-[0_0_1px_rgba(255,255,255,0.3)]"
                    : ""
                }`}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
