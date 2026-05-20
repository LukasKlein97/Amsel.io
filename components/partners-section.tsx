"use client";

import Image from "next/image";

const partners = [
  {
    name: "CyberForum",
    src: "/partner-cyberforum.png",
    href: "https://www.cyberforum.de/",
    logoSize: "large" as const,
    width: 207,
    height: 150,
    colorLogo: true,
  },
  {
    name: "CyberLab",
    src: "/partner-cyberlab-rgb.png",
    href: "https://www.cyberlab-karlsruhe.de/",
    logoSize: "large" as const,
    width: 170,
    height: 150,
    colorLogo: true,
  },
  {
    name: "DHBW",
    src: "/partner-dhbw.png",
    href: "https://www.dhbw.de/",
    colorLogo: true,
  },
];

export function PartnersSection() {
  return (
    <section
      id="partners"
      className="relative overflow-hidden bg-background py-20 text-foreground"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-[radial-gradient(circle,_rgba(25,159,103,0.12)_0%,_transparent_65%)]" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1 text-xs uppercase tracking-[0.4em] text-orange-700 mb-6">
            Partner
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Partner und Kooperationen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
              className={`flex items-center justify-center rounded-xl bg-white p-4 opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-105 ${
                "logoSize" in partner && partner.logoSize === "large"
                  ? "h-28 min-w-[12rem]"
                  : "w-48 h-20"
              } ${
                "colorLogo" in partner && partner.colorLogo
                  ? ""
                  : "grayscale hover:grayscale-0"
              } ${"rau" in partner && partner.rau ? "contrast-[1.2] saturate-90" : ""}`}
            >
              <Image
                src={partner.src}
                alt={`${partner.name} Logo`}
                width={"width" in partner ? partner.width : 192}
                height={"height" in partner ? partner.height : 80}
                className={`h-full w-auto max-w-full object-contain ${
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
