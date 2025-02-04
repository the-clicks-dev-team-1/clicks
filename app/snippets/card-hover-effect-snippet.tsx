import { HoverEffect } from "@/components/ui/card-hover-effect";
import en from "@/i18n/messages/en.json";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = Object.entries(en.projects).map(([key, value]) => ({
  title: `${key}.title`,
  description: `${key}.description`,
  link: `/services/${value.link}`,
}));
