"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

type SectionRedirectProps = {
  page: string;
  section: string;
};

export function SectionRedirect({ page, section }: SectionRedirectProps) {
  const router = useRouter();

  useEffect(() => {
    router.replace(`${page}#${section}`);
  }, [page, router, section]);

  return null;
}
