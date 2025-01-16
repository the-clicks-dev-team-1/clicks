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
  link: `/services/${key}`,
}));

// export const projects = [
//   {
//     title: "Strategy Development",
//     description:
//       "Detailed consultation to understand the client's business goals, target audience, and current marketing efforts. Development of a customized digital marketing strategy.",
//     link: "/services/stratdev",
//   },
//   {
//     title: "Web Design & Development",
//     description:
//       "Creation of a modern, responsive website optimized for user experience and conversions.",
//     link: "/services/webdev",
//   },
//   {
//     title: "Search Engine Optimization",
//     description:
//       "On-page and off-page SEO to improve search engine rankings and organic traffic.",
//     link: "/services/seo",
//   },
//   {
//     title: "Pay-Per-Click Advertising",
//     description:
//       "Management of PPC campaigns to drive targeted traffic and increase conversions.",
//     link: "/services/ppc",
//   },
//   {
//     title: "Social Media Marketing",
//     description:
//       "Social media strategy, content creation, and community management across platforms like Facebook, Instagram, Twitter, LinkedIn, and others.",
//     link: "/services/smm",
//   },
//   {
//     title: "Content Marketing",
//     description:
//       "Creation and distribution of valuable content to attract and engage the target audience.",
//     link: "/services/cm",
//   },
//   {
//     title: "Email Marketing",
//     description:
//       "Design and execution of email marketing campaigns to nurture leads and retain customers.",
//     link: "/services/em",
//   },
//   {
//     title: "Conversion Rate Optimization",
//     description:
//       "Analysis and optimization of website and landing pages to improve conversion rates.",
//     link: "/services/cro",
//   },
//   {
//     title: "Analytics & Reporting",
//     description:
//       "Comprehensive analytics and reporting to track the performance of digital marketing efforts.",
//     link: "/services/analytics",
//   },
//   {
//     title: "Marketing Automation",
//     description:
//       "Implementation of marketing automation tools to streamline and enhance marketing efforts.",
//     link: "/services/automation",
//   },
//   {
//     title: "Public Relations",
//     description:
//       "Public Relations is a strategic communication process that builds mutually beneficial relationships between organizations and their publics.",
//     link: "/services/pr",
//   },
//   {
//     title: "Graphic Design",
//     description:
//       "Graphic Design is a creative service that involves crafting visually appealing and impactful designs to communicate messages and enhance brand identity.",
//     link: "/services/design",
//   },
// ];
