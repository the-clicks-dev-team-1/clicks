import { FC } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import { Metadata } from "next";
import ContactBlock from "@/components/contactBlock";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Conversion Rate Optimization (CRO) Services",
  description:
    "Maximize your website's potential by converting more visitors into customers with our CRO services",
};

const servicesItems = [
  {
    count: "01",
    image: "/images/group1.png",
    title: "A/B Testing",
    description:
      "We conduct A/B testing to determine which variations of your website elements perform best, leading to higher conversions.",
  },
  {
    count: "02",
    image: "/images/group3.png",
    title: "User Behavior Analysis",
    description:
      "Our team analyzes user behavior on your website to identify barriers to conversion and areas for improvement.",
  },
  {
    count: "03",
    image: "/images/group4.png",
    title: "Conversion Funnel Optimization",
    description:
      "We optimize your conversion funnel to ensure that visitors move smoothly through the process and are more likely to convert.",
  },
  {
    count: "04",
    image: "/images/group5.png",
    title: "Landing Page Optimization",
    description:
      "Our team creates and optimizes landing pages that are designed to convert, ensuring that your traffic results in more leads and sales.",
  },
  {
    count: "05",
    image: "/images/group6.png",
    title: "Heatmaps & Analytics",
    description:
      " We use heatmaps and analytics tools to visualize user interactions on your site, helping us identify opportunities for improvement.",
  },
  {
    count: "06",
    image: "/images/group7.png",
    title: "Form Optimization",
    description:
      "We optimize forms on your website to reduce friction and increase the likelihood that visitors will complete them.",
  },
];

const CRO: FC = () => {
  return (
    <div className="bg-[var(--bgnew)] text-[var(--text)]">
      <Navbar />

      <div className="container md:px-10 mb-32">
        <div className="flex flex-col pt-32 md:pt-40">
          <h1 className="mb-10 py-2 text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to bg-purple-500 bg-opacity-50">
            Conversion Rate Optimization (CRO) Services
          </h1>
          <p className="mt-3 text-lg md:text-xl max-w-2xl text-left text-[var(--gray-blue)] light:text-[var(--gray-40)]">
            Our CRO services focus on analyzing user behavior and identifying
            opportunities to improve the performance of your site. By optimizing
            key elements such as landing pages, forms, and calls-to-action, we
            help you increase conversion rates and generate more leads or sales.
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
              What is CRO?
            </h2>
            <p className="text-lg mb-6 text-[var(--gray-blue)] light:text-[var(--gray-40)]">
              Conversion Rate Optimization (CRO) is the process of improving
              your website&apos;s performance by increasing the percentage of
              visitors who take a desired action—whether it&apos;s making a
              purchase, filling out a form, or subscribing to a newsletter.
            </p>
            <h2 className="text-lg md:text-xl font-semibold mb-6 text-[var(--light-blue)] light:text-[var(--gray-70)]">
              Why does CRO Matter?
            </h2>
            <div className="flex flex-col sm:flex-row md:flex-col gap-2 xl:flex-row justify-between items-center mb-6 text-lg text-[var(--gray-blue)] light:text-[var(--gray-40)]">
              <div className="w-full inline-block bg-gradient-to-r from-sky-400 to-purple-500 p-[1px] rounded-full">
                <span className="min-w-[148px] whitespace-nowrap w-full block bg-white dark:bg-black rounded-full px-4 py-3 text-center text-lg font-semibold">
                  increase revenue
                </span>
              </div>
              <div className="w-full inline-block bg-gradient-to-r from-sky-400 to-purple-500 p-[1px] rounded-full">
                <span className="min-w-[148px] whitespace-nowrap w-full text-center block bg-white dark:bg-black  rounded-full px-4 py-3 text-lg font-semibold">
                  maximize ROI
                </span>
              </div>
              <div className="w-full inline-block bg-gradient-to-r from-sky-400 to-purple-500 p-[1px] rounded-full">
                <span className="min-w-[148px] whitespace-nowrap w-full text-center block bg-white dark:bg-black  rounded-full px-4 py-3 text-lg font-semibold">
                  user experience
                </span>
              </div>
            </div>
            <p className="text-lg text-[var(--gray-blue)] light:text-[var(--gray-40)]">
              We use a combination of A/B testing, heat mapping, and analytics
              to understand how visitors interact with your website.
            </p>
          </div>
          <div className="relative w-full h-64 md:h-96">
            <Image
              src="/images/cro.jpg"
              alt="CRO Explanation"
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

export default CRO;
