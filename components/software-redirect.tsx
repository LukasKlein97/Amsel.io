import { SectionRedirect } from "@/components/section-redirect";

type SoftwareRedirectProps = {
  section: string;
};

export function SoftwareRedirect({ section }: SoftwareRedirectProps) {
  return <SectionRedirect page="/software" section={section} />;
}
