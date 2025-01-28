import en from "@/i18n/messages/en.json";
import { HoverEffectPortfolio } from "./hover-effect-portfolio";

export function CardHoverEffectPortfolio() {
  return (
    <div className="container md:px-10 mb-32">
      <HoverEffectPortfolio items={projects} />
    </div>
  );
}

export const projects = en.portfolio.items.map((item) => ({
  image: `/images/portfolio/${item.imageTitle}.png`,
  description: ``,
  link: item.url,
}));
