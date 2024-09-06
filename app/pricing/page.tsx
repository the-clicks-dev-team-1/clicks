"use client";

import { useState } from "react";
import Link from "next/link";
import { PiCheckCircleFill } from "react-icons/pi";
import Navbar from "@/components/navbar";
import { WobbleCard } from "@/components/ui/wobble-card";
import Footer from "../footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ContactBlock from "../contactBlock";

const plans = [
  {
    index: 0,
    name: "Basic",
    price: " CAD $3,000",
    features: [
      "SEO",
      "PPC Advertising",
      "Social Media Marketing",
      "Monthly Reporting",
    ],
    style:
      " rounded-3xl  py-10 bg-clip-text text-transparent* text-[var(--text-label)] bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Best Suited For: Small businesses and startups with limited budgets looking to improve local SEO and engage on social media.",
    button: "Buy Now",
  },
  {
    index: 1,
    name: "Premium",
    price: "CAD $7500",
    features: [
      "SEO",
      "PPC Advertising",
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing",
      "Strategy Development",
      "Monthly Reporting",
    ],
    style:
      " rounded-3xl  py-10 bg-clip-text text-transparent* text-[var(--text-label)] bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Best Suited For: Medium-sized businesses seeking to enhance online visibility with comprehensive digital marketing services, including SEO, PPC, social media, and content marketing.",
    button: "Buy Now",
  },
  {
    index: 2,
    name: "Enterprise",
    feature: "Contact Us",
    price: "Let's Talk!",
    features: [
      "All services listed",
      "Dedicated account manager",
      "Weekly performance reviews",
    ],
    style:
      " h-full rounded-3xl py-10 flex flex-col  bg-clip-text text-transparent* text-[var(--text-label)] bg-gradient-to-b from-neutral-300 to-neutral-50  ",
    description:
      "Best Suited For: Large businesses aiming for aggressive growth with all-inclusive digital marketing services, a dedicated account manager, and weekly performance reviews.",
    button: "Contact Us",
  },
];

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
      "rounded-3xl py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Detailed consultation to understand the client's business goals, target audience, and current marketing efforts. Development of a customized digital marketing strategy.",
    button: "Order Now",
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
      "rounded-3xl py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Creation of a modern, responsive website optimized for user experience and conversions.",
    button: "Order Now",
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
      "rounded-3xl py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "On-page and off-page SEO to improve search engine rankings and organic traffic.",
    button: "Order Now",
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
      "rounded-3xl py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Management of PPC campaigns to drive targeted traffic and increase conversions.",
    button: "Order Now",
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
      "rounded-3xl py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Social media strategy, content creation, and community management across platforms like Facebook, Instagram, Twitter, LinkedIn, and others.",
    button: "Order Now",
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
      "rounded-3xl py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Creation and distribution of valuable content to attract and engage the target audience.",
    button: "Order Now",
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
      "rounded-3xl py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Design and execution of email marketing campaigns to nurture leads and retain customers.",
    button: "Order Now",
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
      "rounded-3xl py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Analysis and optimization of website and landing pages to improve conversion rates.",
    button: "Order Now",
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
      "rounded-3xl py-10 bg-clip-text text-transparent* text-[var(--text-label)] bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Comprehensive analytics and reporting to track the performance of digital marketing efforts.",
    button: "Order Now",
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
      "rounded-3xl py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Implementation of marketing automation tools to streamline and enhance marketing efforts.",
    button: "Order Now",
  },
];

const Pricing = () => {
  const [visibleOffers, setVisibleOffers] = useState(3);

  const handleLoadMore = () => {
    setVisibleOffers((prevVisibleOffers) => prevVisibleOffers + 3);
  };

  return (
    <div className="w-full md:items-center md:justify-center bg-[var(--bg-96)] text-[var(--text)] antialiased bg-grid-white/[0.02] relative overflow-hidden pt-24">
      {" "}
      {/* Добавил отступ сверху */}
      <Navbar />
      <div className="flex items-center justify-center flex-col">
        <div className="text-4xl md:text-5xl py-8 md:py-20 text-slate-300 px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-sky-400 to bg-purple-500 bg-opacity-50">
          <h1>
            Simple Pricing <br /> Choose your plan
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:w-4/5 2xl:w-3/4 cursor-pointer pb-10 md:pb-20 items-center">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className="h-full flex flex-col justify-between border rounded-3xl px-6 py-4 md:py-0"
            >
              <div className={plan.style}>
                <div className="text-3xl md:text-4xl flex items-center font-medium">
                  {plan.name}
                  {plan.name === "Enterprise" && (
                    <div className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full ml-4 items-center">
                      Contact Us
                    </div>
                  )}
                </div>
                <div className="text-2xl md:text-3xl pt-4 md:pt-6">
                  {plan.price}
                </div>
                <div className="py-4 md:py-6">{plan.description}</div>
                <ul>
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-lg py-2 flex space-x-2 items-center"
                    >
                      {plan.name === "Enterprise" ? (
                        <PiCheckCircleFill className="text-blue-400 mr-2 text-xl" />
                      ) : (
                        <PiCheckCircleFill className="text-green-600 mr-2 text-xl" />
                      )}
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={plan.button}>
                {index === 0 && (
                  <Link
                    href="https://buy.stripe.com/test_fZe9Ci73m8Ha8UgbII"
                    className="rounded-3xl my-4 py-2 text-white w-full mx-auto items-center flex justify-center"
                    style={{
                      background:
                        "linear-gradient(270deg, #084378, #0A437A, #483BB5, #347BB8, #12A6C8)",
                    }}
                  >
                    Buy Now
                  </Link>
                )}
                {index === 1 && (
                  <Link
                    href="https://buy.stripe.com/test_9AQ6q6cnG5uY9Yk5kl"
                    className="rounded-3xl my-4 py-2 text-white w-full mx-auto items-center flex justify-center"
                    style={{
                      background:
                        "linear-gradient(270deg, #084378, #0A437A, #483BB5, #347BB8, #12A6C8)",
                    }}
                  >
                    Buy Now
                  </Link>
                )}
                {index === 2 && (
                  <Link
                    href="/contact"
                    className="rounded-3xl my-4 py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-sky-400 to-purple-500"
                  >
                    Contact Us
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center flex-col">
        <div className="text-4xl md:text-5xl pb-8 md:pb-20 text-slate-300 px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-sky-400 to bg-purple-500 bg-opacity-50">
          Marketing Service Suite <br /> Choose your services
        </div>
        <div className="grid gap-6 px-2 md:px-6 py-0 md:w-4/5 2xl:w-3/4 cursor-pointer items-center">
          {offers.slice(0, visibleOffers).map((offer, index) => (
            <div key={offer.name} className="flex flex-col">
              <div className="flex flex-col md:flex-row">
                <WobbleCard containerClassName="bg-gray-900 rounded-3xl w-full max-w-screen-xl relative">
                  <div className="md:w-2/3">
                    <div
                      className={`text-3xl md:text-4xl font-medium ${offer.style}`}
                    >
                      {offer.name}
                    </div>
                    <div className="py-4 md:py-6 text-white">
                      {offer.description}
                    </div>
                    <ul>
                      {offer.features.map((feature) => (
                        <li
                          key={feature}
                          className="text-lg py-2 flex space-x-2 items-center text-white"
                        >
                          <PiCheckCircleFill className="text-green-600 mr-2 text-xl" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </WobbleCard>
                <div className="md:w-1/3 px-8 animate-shimmer items-center justify-center rounded-3xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <div className="whitespace-pre-line text-xl pt-4 md:pt-6 text-white">
                    {offer.price}
                  </div>
                  <div className="whitespace-pre-line text-sm pt-2 text-white">
                    {offer.price_description}
                  </div>
                  <div className="mt-4">
                    <Link
                      href="/contact"
                      className="rounded-3xl my-4 py-2 text-white w-full mx-auto items-center flex justify-center"
                      style={{
                        background:
                          "linear-gradient(270deg, #084378, #0A437A, #483BB5, #347BB8, #12A6C8)",
                      }}
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
            className="mt-6 px-4 py-2 bg-gradient-to-r from-sky-400 to-purple-500 text-white rounded-3xl"
          >
            Load More
          </button>
        )}
      </div>
      <div className="mt-10 md:py-10 bg-transparent w-full rounded-3xl">
        <div className="p-6 md:p-10">
          <div className="font-bold text-2xl md:text-3xl text-gradient bg-gradient-to-b from-sky-400 to bg-purple-500 bg-opacity-50 bg-clip-text text-transparent">
            Add-On Services
          </div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Video Production</AccordionTrigger>
              <AccordionContent>$1,000 - $5,000 per video</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Influencer Marketing</AccordionTrigger>
              <AccordionContent>$500 - $10,000 per campaign</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Local SEO</AccordionTrigger>
              <AccordionContent>$500 - $2,000 per month</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Reputation Management</AccordionTrigger>
              <AccordionContent>$1,000 - $5,000 per month</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <ContactBlock />
      <Footer />
    </div>
  );
};

export default Pricing;
