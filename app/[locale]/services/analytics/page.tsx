import { FC } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import { Metadata } from "next";
import ContactBlock from "@/components/contactBlock";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Analytics and Reporting Services",
  description:
    "Unlock insights and drive growth with our comprehensive analytics and reporting services",
};

const servicesItems = [
  {
    count: "01",
    image: "/images/group1.png",
    title: "Google Analytics Setup",
    description:
      "We set up and configure Google Analytics to track your website&apos;s performance, providing you with detailed insights into user behavior and traffic sources.",
  },
  {
    count: "02",
    image: "/images/group3.png",
    title: "Custom Dashboards",
    description:
      "Our team creates custom dashboards that provide you with the key metrics you need to monitor your campaigns and make data-driven decisions.",
  },
  {
    count: "03",
    image: "/images/group4.png",
    title: "Campaign Tracking",
    description:
      "We track the performance of your marketing campaigns across all channels, helping you understand which strategies are driving results.",
  },
  {
    count: "04",
    image: "/images/group5.png",
    title: "Conversion Tracking",
    description:
      "We set up conversion tracking to measure the effectiveness of your website and campaigns in converting visitors into customers.",
  },
  {
    count: "05",
    image: "/images/group6.png",
    title: "Regular Reporting",
    description:
      "We provide regular reports that detail the performance of your marketing efforts, offering insights and recommendations for improvement.",
  },
  {
    count: "06",
    image: "/images/group7.png",
    title: "Competitor Analysis",
    description:
      "Our competitor analysis services provide insights into your competitors' strategies, helping you stay ahead in your industry.",
  },
];

const AnalyticsAndReporting: FC = () => {
  return (
    <div className="bg-[var(--bgnew)] text-[var(--text)]">
      <Navbar />

      <div className="container md:px-10 mb-32">
        <div className="flex flex-col pt-32 md:pt-40">
          <h1 className="mb-10 py-2 text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to bg-purple-500 bg-opacity-50">
            Analytics and Reporting Services
          </h1>
          <p className="mt-3 text-lg md:text-xl max-w-2xl text-left text-[var(--gray-blue)] light:text-[var(--gray-40)]">
            Our analytics and reporting services provide you with detailed
            insights into how your campaigns are performing. From website
            traffic and SEO rankings to social media engagement and PPC results,
            we deliver comprehensive reports that highlight key metrics and
            trends.
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
              What is Analytics and Reporting?
            </h2>
            <p className="text-lg mb-6 text-[var(--gray-blue)] light:text-[var(--gray-40)]">
              Analytics and reporting involve the collection, analysis, and
              interpretation of data to measure the performance of your
              marketing efforts. These insights allow you to make informed
              decisions, optimize your strategies, and achieve better results.
            </p>
            <h2 className="text-lg md:text-xl font-semibold mb-6 text-[var(--light-blue)] light:text-[var(--gray-70)]">
              Why do Analytics and Reporting Matter?
            </h2>
            <div className="flex flex-col sm:flex-row md:flex-col gap-2 xl:flex-row justify-between items-center mb-6 text-lg text-[var(--gray-blue)] light:text-[var(--gray-40)]">
              <div className="w-full inline-block bg-gradient-to-r from-sky-400 to-purple-500 p-[1px] rounded-full">
                <span className="min-w-[148px] whitespace-nowrap w-full block bg-white dark:bg-black rounded-full px-4 py-3 text-center text-lg font-semibold">
                  clear reports
                </span>
              </div>
              <div className="w-full inline-block bg-gradient-to-r from-sky-400 to-purple-500 p-[1px] rounded-full">
                <span className="min-w-[148px] whitespace-nowrap w-full text-center block bg-white dark:bg-black  rounded-full px-4 py-3 text-lg font-semibold">
                  measure ROI
                </span>
              </div>
              <div className="w-full inline-block bg-gradient-to-r from-sky-400 to-purple-500 p-[1px] rounded-full">
                <span className="min-w-[148px] whitespace-nowrap w-full text-center block bg-white dark:bg-black  rounded-full px-4 py-3 text-lg font-semibold">
                  strategic decisions
                </span>
              </div>
            </div>
            <p className="text-lg text-[var(--gray-blue)] light:text-[var(--gray-40)]">
              Analytics and reporting empower organizations to stay competitive,
              agile, and customer-focused in a data-driven world.
            </p>
          </div>
          <div className="relative w-full h-64 md:h-96">
            <Image
              src="/images/analytics.jpg"
              alt="Analytics and Reporting Explanation"
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

export default AnalyticsAndReporting;
