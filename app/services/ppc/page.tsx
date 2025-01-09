import { FC } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import { Metadata } from "next";
import ContactBlock from "@/components/contactBlock";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Pay-Per-Click (PPC) Advertising Services",
  description:
    "Drive targeted traffic to your website and maximize ROI with our expert PPC management services",
};

const servicesItems = [
  {
    count: "01",
    image: "/images/group1.png",
    title: "Keyword Research",
    description:
      "We identify the most effective keywords for your business, ensuring that your ads reach the right audience.",
  },
  {
    count: "02",
    image: "/images/group3.png",
    title: "Ad Creation",
    description:
      "Our team creates compelling ads that attract clicks and drive conversions, making the most of your ad spend.",
  },
  {
    count: "03",
    image: "/images/group4.png",
    title: "Campaign Management",
    description:
      "We manage your PPC campaigns from start to finish, optimizing performance and ensuring your ads are effective.",
  },
  {
    count: "04",
    image: "/images/group5.png",
    title: "Landing Page Optimization",
    description:
      "We ensure that your landing pages are optimized to convert traffic into leads and sales, maximizing your ROI.",
  },
  {
    count: "05",
    image: "/images/group6.png",
    title: "Performance Tracking",
    description:
      "Our detailed reports provide insights into how your campaigns are performing, allowing for continuous improvement.",
  },
  {
    count: "06",
    image: "/images/group7.png",
    title: "Remarketing",
    description:
      "We use remarketing techniques to re-engage visitors who have previously interacted with your site, increasing conversion rates.",
  },
];

const PPC: FC = () => {
  return (
    <div className="bg-[var(--bgnew)] text-[var(--text)]">
      <Navbar />

      <div className="container md:px-10 mb-32">
        <div className="flex flex-col pt-32 md:pt-40">
          <h1 className="mb-10 py-2 text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to bg-purple-500 bg-opacity-50">
            Pay-Per-Click (PPC) Advertising Services
          </h1>
          <p className="mt-3 text-lg md:text-xl max-w-2xl text-left text-[var(--gray-blue)] light:text-[var(--gray-40)]">
            Pay-Per-Click (PPC) advertising is a powerful way to drive targeted
            traffic to your website. Whether you&apos;re looking to increase
            sales, generate leads, or build brand awareness, our data-driven PPC
            strategies are designed to meet your business goals.
          </p>
        </div>
      </div>

      {/* Services section */}
      <div className="container md:px-10 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicesItems.map((item) => (
            <ServiceCard
              key={item.count}
              count={item.count}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>

      {/* Introduction section */}
      <div className="container md:px-10 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[var(--light-blue)] light:text-[var(--gray-70)]">
              What is PPC and Why Does It Matter?
            </h2>
            <p className="text-lg mb-6 text-[var(--gray-blue)] light:text-[var(--gray-40)]">
              Our PPC services are designed to maximize your return on
              investment by carefully managing your campaigns, optimizing your
              ads, and ensuring that your budget is spent efficiently.
            </p>
            <h2 className="text-lg md:text-xl font-semibold mb-6 text-[var(--light-blue)] light:text-[var(--gray-70)]">
              Why PPC Matters?
            </h2>
            <div className="flex flex-col sm:flex-row md:flex-col gap-2 xl:flex-row justify-between items-center mb-6 text-lg text-[var(--gray-blue)] light:text-[var(--gray-40)]">
              <div className="w-full inline-block bg-gradient-to-r from-sky-400 to-purple-500 p-[1px] rounded-full">
                <span className="min-w-[148px] whitespace-nowrap w-full block bg-white dark:bg-black rounded-full px-4 py-3 text-center text-lg font-semibold">
                  targeted traffic
                </span>
              </div>
              <div className="w-full inline-block bg-gradient-to-r from-sky-400 to-purple-500 p-[1px] rounded-full">
                <span className="min-w-[148px] whitespace-nowrap w-full text-center block bg-white dark:bg-black  rounded-full px-4 py-3 text-lg font-semibold">
                  cost control
                </span>
              </div>
              <div className="w-full inline-block bg-gradient-to-r from-sky-400 to-purple-500 p-[1px] rounded-full">
                <span className="min-w-[148px] whitespace-nowrap w-full text-center block bg-white dark:bg-black  rounded-full px-4 py-3 text-lg font-semibold">
                  immediate results
                </span>
              </div>
            </div>
            <p className="text-lg text-[var(--gray-blue)] light:text-[var(--gray-40)]">
              With the right strategy, PPC can be a cost-effective way to reach
              your target audience.
            </p>
          </div>
          <div className="relative w-full h-64 md:h-96">
            <Image
              src="/images/seo-hero.jpg"
              alt="Web Development"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      <ContactBlock consultation="Reach out for a free consultation and get the answers you need." />

      <Footer />
    </div>
  );
};

export default PPC;
