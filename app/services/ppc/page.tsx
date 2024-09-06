import { FC } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/app/footer";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import ContactServiceForm from "@/components/ContactServiceForm";

export const metadata: Metadata = {
  title: "Pay-Per-Click (PPC) Advertising Services",
  description:
    "Drive targeted traffic to your website and maximize ROI with our expert PPC management services",
};

const PPC: FC = () => {
  return (
    <div className="bg-[var(--bgnew)] text-[var(--text)]">
      <Navbar />

      {/* Header section with form */}
      <div className="bg-gradient-to-b from-sky-400 to-purple-500 py-20 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-20 px-4 md:px-20 lg:px-40">
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-5xl font-bold">
              Pay-Per-Click (PPC) Advertising Services
            </h1>
            <p className="mt-10 text-lg md:text-xl max-w-2xl mx-auto text-left">
              Drive targeted traffic to your website and maximize ROI with our
              expert PPC management services.
            </p>
            <p className="mt-3 text-lg md:text-xl max-w-2xl mx-auto text-left">
              Pay-Per-Click (PPC) advertising is a powerful way to drive
              targeted traffic to your website. Our team of experts creates and
              manages campaigns that maximize your return on investment by
              targeting the right audience with precision. Whether you&apos;re
              looking to increase sales, generate leads, or build brand
              awareness, our data-driven PPC strategies are designed to meet
              your business goals.
            </p>
            <p className="mt-3 text-lg md:text-xl max-w-2xl mx-auto text-left">
              We optimize campaigns across platforms such as Google Ads and
              social media, ensuring that your ad spend is used effectively.
              With detailed performance tracking and continuous optimization, we
              help you achieve measurable results and improve the efficiency of
              your marketing budget.
            </p>
          </div>
          <div className="flex flex-col justify-between">
            <h2 className="text-2xl font-semibold mb-4">
              Get a Free PPC Consultation
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
              What is PPC and Why Does It Matter?
            </h2>
            <p className="text-lg mb-4">
              PPC, or Pay-Per-Click, is a form of online advertising where you
              only pay when someone clicks on your ad. It&apos;s a highly
              effective way to drive targeted traffic to your website and can
              yield immediate results.
            </p>
            <p className="text-lg mb-4">
              Think of PPC as a way to attract potential customers who are
              already interested in what you offer. You can target specific
              keywords, demographics, and even the time of day your ads appear,
              making PPC a precise tool in your marketing arsenal.
            </p>
            <p className="text-lg">
              Our PPC services are designed to maximize your return on
              investment by carefully managing your campaigns, optimizing your
              ads, and ensuring that your budget is spent efficiently.
            </p>
          </div>
          <div className="relative w-full h-64 md:h-96">
            <Image
              src="/images/ppc.jpg"
              alt="PPC Explanation"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Why PPC Matters Section */}
      <div className="py-20 px-4 md:px-20 lg:px-40 bg-[var(--bg900)]">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
          Why PPC Matters?
        </h2>
        <p className="text-lg text-center mb-10 max-w-3xl mx-auto">
          PPC advertising is crucial for businesses looking to quickly increase
          their online presence, drive traffic, and generate leads. With the
          right strategy, PPC can be a cost-effective way to reach your target
          audience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Immediate Results</h3>
            <p>
              PPC campaigns can start driving traffic to your website
              immediately, allowing you to see results quickly.
            </p>
          </div>
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Targeted Traffic</h3>
            <p>
              With PPC, you can target specific audiences based on keywords,
              location, demographics, and more, ensuring your ads reach the
              right people.
            </p>
          </div>
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Cost Control</h3>
            <p>
              PPC allows you to set a budget and control your costs, making it a
              flexible option for businesses of all sizes.
            </p>
          </div>
        </div>
      </div>

      {/* Our PPC Services Section */}
      <div className="py-20 px-4 md:px-20 lg:px-40">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
          Our PPC Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Keyword Research</h3>
            <p>
              We identify the most effective keywords for your business,
              ensuring that your ads reach the right audience.
            </p>
          </div>
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Ad Creation</h3>
            <p>
              Our team creates compelling ads that attract clicks and drive
              conversions, making the most of your ad spend.
            </p>
          </div>
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Campaign Management</h3>
            <p>
              We manage your PPC campaigns from start to finish, optimizing
              performance and ensuring your ads are effective.
            </p>
          </div>
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">
              Landing Page Optimization
            </h3>
            <p>
              We ensure that your landing pages are optimized to convert traffic
              into leads and sales, maximizing your ROI.
            </p>
          </div>
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Performance Tracking</h3>
            <p>
              Our detailed reports provide insights into how your campaigns are
              performing, allowing for continuous improvement.
            </p>
          </div>
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Remarketing</h3>
            <p>
              We use remarketing techniques to re-engage visitors who have
              previously interacted with your site, increasing conversion rates.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action section */}
      <div className="py-20 px-4 md:px-20 lg:px-40 text-center bg-[var(--bgnew)]">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Ready to Drive Targeted Traffic to Your Website?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Contact us today to learn more about our PPC services and how we can
          help your business grow.
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

export default PPC;
