"use client";

import { useState } from "react";
import { PiCheckCircleFill } from "react-icons/pi";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export interface Offer {
  index: number;
  name: string;
  price: string;
  price_description: string;
  features: string[];
  style: string;
  description: string;
  button: string;
  image: string;
}

const offers = [
  {
    index: 0,
    name: "Initial Consultation & Strategy Development",
    price: "CAD $1,000 - $3,000",
    price_description: "One-time fee",
    features: [
      "Business analysis",
      "Market research",
      "Competitor analysis",
      "Strategy document",
    ],
    style:
      "rounded-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Detailed consultation to understand the client's business goals, target audience, and current marketing efforts. Development of a customized digital marketing strategy.",
    button: "Order Now",
    image: "/images/Group1.png",
  },
  {
    index: 1,
    name: "Website Design & Development",
    price: "CAD $5,000 - $20,000",
    price_description: "One-time fee \n (depending on complexity)",
    features: [
      "Custom design",
      "Development (frontend and backend)",
      "Content management system (CMS) setup",
      "Basic SEO optimization",
    ],
    style:
      "rounded-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Creation of a modern, responsive website optimized for user experience and conversions.",
    button: "Order Now",
    image: "/images/Group2.png",
  },
  {
    index: 2,
    name: "Search Engine Optimization (SEO)",
    price: "CAD $1,000 - $5,000",
    price_description: "Monthly retainer",
    features: [
      "Keyword research",
      "On-page optimization",
      "Link building",
      "Monthly performance reports",
    ],
    style:
      "rounded-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "On-page and off-page SEO to improve search engine rankings and organic traffic.",
    button: "Order Now",
    image: "/images/Group3.png",
  },
  {
    index: 3,
    name: "Pay-Per-Click (PPC) Advertising",
    price: "CAD $1,500 - $10,000",
    price_description: "Monthly retainer \n (excluding ad spend)",
    features: [
      "Google Ads setup and management",
      "Bing Ads setup and management",
      "Monthly performance reports",
    ],
    style:
      "rounded-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Management of PPC campaigns to drive targeted traffic and increase conversions.",
    button: "Order Now",
    image: "/images/Group1.png",
  },
  {
    index: 4,
    name: "Social Media Marketing",
    price: "CAD $1,000 - $7,000",
    price_description: "Monthly retainer",
    features: [
      "Content calendar",
      "Post creation and scheduling",
      "Community engagement",
      "Monthly performance reports",
    ],
    style:
      "rounded-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Social media strategy, content creation, and community management across platforms like Facebook, Instagram, Twitter, LinkedIn, and others.",
    button: "Order Now",
    image: "/images/Group2.png",
  },
  {
    index: 5,
    name: "Content Marketing",
    price: "CAD $2,000 - $8,000",
    price_description: "Monthly retainer",
    features: [
      "Blog posts",
      "Articles",
      "Infographics",
      "E-books/Whitepapers",
      "Monthly performance reports",
    ],
    style:
      "rounded-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Creation and distribution of valuable content to attract and engage the target audience.",
    button: "Order Now",
    image: "/images/Group3.png",
  },
  {
    index: 6,
    name: "Email Marketing",
    price: "CAD $1,000 - $5,000",
    price_description: "Monthly retainer",
    features: [
      "Email template design",
      "List segmentation",
      "Campaign management",
      "Monthly performance reports",
    ],
    style:
      "rounded-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Design and execution of email marketing campaigns to nurture leads and retain customers.",
    button: "Order Now",
    image: "/images/Group1.png",
  },
  {
    index: 7,
    name: "Conversion Rate Optimization (CRO)",
    price: "CAD $1,500 - $7,000",
    price_description: "Monthly retainer",
    features: [
      "A/B testing",
      "User behavior analysis",
      "Conversion funnel analysis",
      "Monthly performance reports",
    ],
    style:
      "rounded-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Analysis and optimization of website and landing pages to improve conversion rates.",
    button: "Order Now",
    image: "/images/Group2.png",
  },
  {
    index: 8,
    name: "Analytics & Reporting",
    price: "CAD $1,000 - $3,000",
    price_description: "Monthly retainer",
    features: [
      "Google Analytics setup",
      "Monthly performance reports",
      "Quarterly strategy reviews",
    ],
    style:
      "rounded-3xl bg-clip-text text-transparent* text-[var(--text-label)] bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Comprehensive analytics and reporting to track the performance of digital marketing efforts.",
    button: "Order Now",
    image: "/images/Group3.png",
  },
  {
    index: 9,
    name: "Marketing Automation",
    price: "CAD 2,000 - $10,000 \n + $1,000 - $5,000",
    price_description: "One-time setup fee \n + Monthly retainer",
    features: [
      "Tool setup and integration",
      "Workflow creation",
      "Training and support",
    ],
    style:
      "rounded-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Implementation of marketing automation tools to streamline and enhance marketing efforts.",
    button: "Order Now",
    image: "/images/Group1.png",
  },
];

export default function Offers() {
  const t = useTranslations("pricing.offers");
  const [visibleOffers, setVisibleOffers] = useState(3);

  const handleLoadMore = () => {
    setVisibleOffers((prevVisibleOffers) => prevVisibleOffers + 3);
  };

  return (
    <>
      <div className="grid gap-6 px-4 md:px-10 py-0 max-w-7xl cursor-pointer items-center">
        {offers.slice(0, visibleOffers).map((offer) => (
          <div key={offer.name} className="flex flex-col">
            <div className="flex flex-col md:flex-row">
              <div className="px-20 py-20 light:bg-[var(--light-blue)] light:shadow-lg bg-[var(--blue2)] rounded-3xl w-full max-w-screen-xl relative">
                <div className="flex relative">
                  <div className="md:w-2/3">
                    <div
                      className={`text-3xl md:text-4xl font-medium ${offer.style} text-[var(--light-blue)] light:text-[var(--gray-70)] py-0`}
                    >
                      {offer.name}
                    </div>
                    <div className="py-4 md:py-6 text-[var(--gray-blue)] light:text-[var(--gray-40)]">
                      {offer.description}
                    </div>
                    <ul>
                      {offer.features.map((feature) => (
                        <li
                          key={feature}
                          className="text-lg py-2 flex space-x-2 items-center text-[var(--gray-blue)] light:text-[var(--gray-40)]"
                        >
                          <PiCheckCircleFill className="text-green-600 mr-2 text-xl" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="hidden md:block absolute -right-20 -bottom-20">
                    <Image
                      src={offer.image}
                      alt="map-marker"
                      width={500}
                      height={500}
                      className="object-contain max-w-[250px] max-h-[250px] lg:max-w-[350px] lg:max-h-[350px]"
                    />
                  </div>
                </div>
              </div>

              <div className="md:w-1/3 px-8 animate-shimmer items-center justify-center light:shadow-lg rounded-3xl dark:border border-slate-800 light:border-[var(--ocean-blue)] dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] light:bg-[linear-gradient(110deg,#f8fbff,45%,#edf8fe,55%,#f8fbff)] light:bg-[var(--light-blue)] bg-[length:200%_100%] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <div className="whitespace-pre-line text-xl pt-4 md:pt-6 text-[var(--light-blue)] light:text-[var(--gray-70)]">
                  {offer.price}
                </div>
                <div className="whitespace-pre-line text-sm pt-2 text-[var(--gray-blue)] light:text-[var(--gray-40)]">
                  {offer.price_description}
                </div>
                <div className="mt-4">
                  <Link
                    href="/contact"
                    className="rounded-lg bg-[var(--ocean-blue)] my-4 py-2 text-white w-full mx-auto items-center flex justify-center"
                  >
                    Order Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {visibleOffers < offers.length && (
        <button
          onClick={handleLoadMore}
          className="mt-10 px-4 py-2 bg-[var(--ocean-blue)] text-white rounded-lg"
        >
          Load More
        </button>
      )}
    </>
  );
}
