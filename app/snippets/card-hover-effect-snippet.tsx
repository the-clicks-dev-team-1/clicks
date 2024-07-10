import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Strategy Development",
    description:
      "Detailed consultation to understand the client's business goals, target audience, and current marketing efforts. Development of a customized digital marketing strategy.",
    link: "https://stripe.com",
  },
  {
    title: "Web Design & Development",
    description:
      "Creation of a modern, responsive website optimized for user experience and conversions.",
    link: "https://netflix.com",
  },
  {
    title: "Search Engine Optimization",
    description:
      "On-page and off-page SEO to improve search engine rankings and organic traffic.",
    link: "https://google.com",
  },
  {
    title: "Pay-Per-Click Advertising",
    description:
      "Management of PPC campaigns to drive targeted traffic and increase conversions.",
    link: "https://meta.com",
  },
  {
    title: "Social Media Marketing",
    description:
      "Social media strategy, content creation, and community management across platforms like Facebook, Instagram, Twitter, LinkedIn, and others.",
    link: "https://amazon.com",
  },
  {
    title: "Content Marketing",
    description:
      "Creation and distribution of valuable content to attract and engage the target audience.",
    link: "https://microsoft.com",
  },
  {
    title: "Email Marketing",
    description:
      "Design and execution of email marketing campaigns to nurture leads and retain customers.",
    link: "https://meta.com",
  },
  {
    title: "Conversion Rate Optimization",
    description:
      "Analysis and optimization of website and landing pages to improve conversion rates.",
    link: "https://amazon.com",
  },
  {
    title: "Analytics & Reporting",
    description:
      "Comprehensive analytics and reporting to track the performance of digital marketing efforts.",
    link: "https://microsoft.com",
  },
  {
    title: "Marketing Automation",
    description:
      "Implementation of marketing automation tools to streamline and enhance marketing efforts.",
    link: "https://meta.com",
  },
  {
    title: "Public Relations",
    description:
      "Public Relations is a strategic communication process that builds mutually beneficial relationships between organizations and their publics.",
    link: "https://amazon.com",
  },
  {
    title: "Graphic Design",
    description:
      "Graphic Design is a creative service that involves crafting visually appealing and impactful designs to communicate messages and enhance brand identity.",
    link: "https://microsoft.com",
  },
];
