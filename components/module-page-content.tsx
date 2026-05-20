"use client";

import { ModuleSection } from "@/components/module-page-layout";
import { modules } from "@/lib/modules";

export function ModulePageContent() {
  return (
    <>
      {modules.map((module, index) => (
        <ModuleSection
          key={module.sectionId}
          {...module}
          isFirst={index === 0}
          mirrorHero={index % 2 === 1}
        />
      ))}
    </>
  );
}
