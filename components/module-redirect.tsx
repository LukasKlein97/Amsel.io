import { SectionRedirect } from "@/components/section-redirect";

type ModuleRedirectProps = {
  section: string;
};

export function ModuleRedirect({ section }: ModuleRedirectProps) {
  return <SectionRedirect page="/module" section={section} />;
}
