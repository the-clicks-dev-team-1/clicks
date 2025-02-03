import en from "@/i18n/messages/en.json";
import { HoverEffectPortfolio } from "./hover-effect-portfolio";

export function CardHoverEffectPortfolio() {
  return (
    <div className="container md:px-10 mb-32">
      <HoverEffectPortfolio items={projects} />
    </div>
  );
}
export const projects = Object.entries(en.portfolio.items).map(
  ([key, value]) => ({
    image: `${key}.image`,
    name: `${key}.name`,
    description: `${key}.description`,
    category: `${key}.category`,
    link: `${key}.link`,
  })
);

// export const projects = en.portfolio.items.map((item) => ({
//   image: `/images/portfolio/${item.imageTitle}.png`,
//   name: `${item.name}`,
//   description: `${item.description}`,
//   category: `${item.category}`,
//   link: item.url,
// }));
