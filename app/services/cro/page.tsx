import { FC } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/app/footer";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import ContactServiceForm from "@/components/ContactServiceForm";

export const metadata: Metadata = {
  title: "Conversion Rate Optimization (CRO) Services",
  description:
    "Maximize your website's potential by converting more visitors into customers with our CRO services",
};

const CRO: FC = () => {
  return (
    <div className="bg-[var(--bgnew)] text-[var(--text)]">
      <Navbar />

      {/* Header section with form */}
      <div className="bg-gradient-to-b from-sky-400 to-purple-500 py-20 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-20 px-4 md:px-20 lg:px-40">
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-5xl font-bold">
              Conversion Rate Optimization (CRO) Services
            </h1>
            <p className="mt-10 text-lg md:text-xl max-w-2xl mx-auto text-left">
              Maximize your website&apos;s potential by converting more visitors
              into customers with our CRO services.
            </p>
            <p className="mt-3 text-lg md:text-xl max-w-2xl mx-auto text-left">
              Conversion Rate Optimization (CRO) is all about turning website
              visitors into customers. Our CRO services focus on analyzing user
              behavior and identifying opportunities to improve the performance
              of your site. By optimizing key elements such as landing pages,
              forms, and calls-to-action, we help you increase conversion rates
              and generate more leads or sales.
            </p>
            <p className="mt-3 text-lg md:text-xl max-w-2xl mx-auto text-left">
              We use a combination of A/B testing, heat mapping, and analytics
              to understand how visitors interact with your website. Based on
              this data, we implement changes that make your site more
              user-friendly and effective in driving conversions, ultimately
              boosting your ROI.
            </p>
          </div>
          <div className="flex flex-col justify-between">
            <h2 className="text-2xl font-semibold mb-4">
              Get a Free CRO Consultation
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
              What is CRO and Why Does It Matter?
            </h2>
            <p className="text-lg mb-4">
              Conversion Rate Optimization (CRO) is the process of improving
              your website&apos;s performance by increasing the percentage of
              visitors who take a desired action—whether it&apos;s making a
              purchase, filling out a form, or subscribing to a newsletter.
            </p>
            <p className="text-lg mb-4">
              Instead of focusing solely on driving more traffic to your site,
              CRO focuses on making the most of your existing traffic. This
              means optimizing your website&apos;s layout, design, content, and
              functionality to convert visitors into customers.
            </p>
            <p className="text-lg">
              Our CRO services are designed to analyze user behavior, identify
              barriers to conversion, and implement strategies that increase
              your conversion rate, helping you achieve more with your current
              traffic.
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

      {/* Why CRO Matters Section */}
      <div className="py-20 px-4 md:px-20 lg:px-40 bg-[var(--bg900)]">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
          Why CRO Matters?
        </h2>
        <p className="text-lg text-center mb-10 max-w-3xl mx-auto">
          CRO is essential for maximizing the effectiveness of your website and
          marketing efforts. By improving your conversion rate, you can increase
          revenue without needing to increase traffic, making CRO a
          cost-effective strategy for growth.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Increase Revenue</h3>
            <p>
              By converting more visitors into customers, CRO helps you increase
              your revenue without needing to spend more on acquiring traffic.
            </p>
          </div>
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">
              Improve User Experience
            </h3>
            <p>
              CRO focuses on making your website more user-friendly, leading to
              a better experience for your visitors and higher satisfaction.
            </p>
          </div>
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Maximize ROI</h3>
            <p>
              CRO helps you get the most out of your marketing spend by
              improving the effectiveness of your website, leading to a higher
              return on investment.
            </p>
          </div>
        </div>
      </div>

      {/* Our CRO Services Section */}
      <div className="py-20 px-4 md:px-20 lg:px-40">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
          Our CRO Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">A/B Testing</h3>
            <p>
              We conduct A/B testing to determine which variations of your
              website elements perform best, leading to higher conversions.
            </p>
          </div>
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">
              User Behavior Analysis
            </h3>
            <p>
              Our team analyzes user behavior on your website to identify
              barriers to conversion and areas for improvement.
            </p>
          </div>
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">
              Conversion Funnel Optimization
            </h3>
            <p>
              We optimize your conversion funnel to ensure that visitors move
              smoothly through the process and are more likely to convert.
            </p>
          </div>
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">
              Landing Page Optimization
            </h3>
            <p>
              Our team creates and optimizes landing pages that are designed to
              convert, ensuring that your traffic results in more leads and
              sales.
            </p>
          </div>
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Heatmaps & Analytics</h3>
            <p>
              We use heatmaps and analytics tools to visualize user interactions
              on your site, helping us identify opportunities for improvement.
            </p>
          </div>
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Form Optimization</h3>
            <p>
              We optimize forms on your website to reduce friction and increase
              the likelihood that visitors will complete them.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action section */}
      <div className="py-20 px-4 md:px-20 lg:px-40 text-center bg-[var(--bgnew)]">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Ready to Maximize Your Website&apos;s Potential?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Book a call today to learn more about our CRO services and how we can
          help you increase conversions and drive more revenue.
        </p>
        <Link
          href="/book"
          className="inline-block bg-gradient-to-r from-sky-400 to-purple-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-opacity-75 transition duration-300"
        >
          Book A Call
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default CRO;
