import { FC } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/app/footer";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import ContactServiceForm from "@/components/ContactServiceForm";

export const metadata: Metadata = {
  title: "Analytics and Reporting Services",
  description:
    "Unlock insights and drive growth with our comprehensive analytics and reporting services",
};

const AnalyticsAndReporting: FC = () => {
  return (
    <div className="bg-[var(--bgnew)] text-[var(--text)]">
      <Navbar />

      {/* Header section with form */}
      <div className="bg-gradient-to-b from-sky-400 to-purple-500 py-20 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-20 px-4 md:px-20 lg:px-40">
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-5xl font-bold">
              Analytics and Reporting Services
            </h1>
            <p className="mt-10 text-lg md:text-xl max-w-2xl mx-auto text-left">
              Unlock insights and drive growth with our comprehensive analytics
              and reporting services.
            </p>
            <p className="mt-3 text-lg md:text-xl max-w-2xl mx-auto text-left">
              Understanding the performance of your marketing efforts is
              essential for making informed decisions. Our analytics and
              reporting services provide you with detailed insights into how
              your campaigns are performing. From website traffic and SEO
              rankings to social media engagement and PPC results, we deliver
              comprehensive reports that highlight key metrics and trends.
            </p>
            <p className="mt-3 text-lg md:text-xl max-w-2xl mx-auto text-left">
              We also provide actionable recommendations based on the data,
              helping you optimize your marketing strategy and improve ROI. With
              our analytics tools, you can track the success of your campaigns
              in real time and adjust your tactics to achieve better results.
            </p>
          </div>
          <div className="flex flex-col justify-between">
            <h2 className="text-2xl font-semibold mb-4">
              Get a Free Analytics Consultation
            </h2>
            <ContactServiceForm />
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-20 px-4 md:px-20 lg:px-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              What is Analytics and Reporting?
            </h2>
            <p className="text-lg mb-4">
              Analytics and reporting involve the collection, analysis, and
              interpretation of data to measure the performance of your
              marketing efforts. These insights allow you to make informed
              decisions, optimize your strategies, and achieve better results.
            </p>
            <p className="text-lg mb-4">
              By understanding how your audience interacts with your website and
              marketing campaigns, you can identify areas of improvement,
              uncover new opportunities, and track your progress towards your
              goals.
            </p>
            <p className="text-lg">
              Our analytics and reporting services are designed to provide you
              with clear, actionable insights that help you make data-driven
              decisions and drive continuous growth.
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

      {/* Why Analytics and Reporting Matter Section */}
      <div className="py-20 px-4 md:px-20 lg:px-40 bg-[var(--bg900)]">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
          Why Analytics and Reporting Matter?
        </h2>
        <p className="text-lg text-center mb-10 max-w-3xl mx-auto">
          Analytics and reporting are crucial for understanding the
          effectiveness of your marketing efforts and making informed decisions.
          With the right data, you can optimize your strategies, improve
          performance, and achieve better outcomes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">
              Data-Driven Decisions
            </h3>
            <p>
              Analytics provide you with the data you need to make informed
              decisions, ensuring your marketing efforts are based on evidence,
              not guesswork.
            </p>
          </div>
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">
              Performance Optimization
            </h3>
            <p>
              By analyzing the performance of your campaigns, you can identify
              what&apos;s working and what&apos;s not, allowing you to optimize
              your strategies for better results.
            </p>
          </div>
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Measure ROI</h3>
            <p>
              Analytics and reporting help you measure the return on investment
              (ROI) of your marketing efforts, ensuring that your budget is
              being used effectively.
            </p>
          </div>
        </div>
      </div>

      {/* Our Analytics and Reporting Services Section */}
      <div className="py-20 px-4 md:px-20 lg:px-40">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
          Our Analytics and Reporting Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">
              Google Analytics Setup
            </h3>
            <p>
              We set up and configure Google Analytics to track your
              website&apos;s performance, providing you with detailed insights
              into user behavior and traffic sources.
            </p>
          </div>
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Custom Dashboards</h3>
            <p>
              Our team creates custom dashboards that provide you with the key
              metrics you need to monitor your campaigns and make data-driven
              decisions.
            </p>
          </div>
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Campaign Tracking</h3>
            <p>
              We track the performance of your marketing campaigns across all
              channels, helping you understand which strategies are driving
              results.
            </p>
          </div>
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Conversion Tracking</h3>
            <p>
              We set up conversion tracking to measure the effectiveness of your
              website and campaigns in converting visitors into customers.
            </p>
          </div>
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Regular Reporting</h3>
            <p>
              We provide regular reports that detail the performance of your
              marketing efforts, offering insights and recommendations for
              improvement.
            </p>
          </div>
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Competitor Analysis</h3>
            <p>
              Our competitor analysis services provide insights into your
              competitors&apos; strategies, helping you stay ahead in your
              industry.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action section */}
      <div className="py-20 px-4 md:px-20 lg:px-40 text-center bg-[var(--bgnew)]">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Ready to Unlock Insights and Drive Growth?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Contact us today to learn more about our analytics and reporting
          services and how we can help you achieve your business goals.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-gradient-to-r from-sky-400 to-purple-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-opacity-75 transition duration-300"
        >
          Get in Touch
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default AnalyticsAndReporting;
