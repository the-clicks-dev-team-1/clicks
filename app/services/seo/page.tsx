import { FC } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/app/footer";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import ContactServiceForm from "@/components/ContactServiceForm";

export const metadata: Metadata = {
  title: "Search Engine Optimization (SEO) Services",
  description:
    "Increase your online visibility and drive more traffic to your website with our expert SEO services",
};

const SEO: FC = () => {
  return (
    <div className="bg-[var(--bgnew)] text-[var(--text)]">
      <Navbar />

      {/* Header section with form */}
      <div className="bg-gradient-to-b from-sky-400 to-purple-500 py-20 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-20 px-4 md:px-20 lg:px-40">
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-5xl font-bold">
              Search Engine Optimization (SEO) Services
            </h1>
            <p className="mt-10 text-lg md:text-xl max-w-2xl mx-auto text-left">
              Increase your online visibility and drive more traffic to your
              website with our expert SEO services.
            </p>
            <p className="mt-3 text-lg md:text-xl max-w-2xl mx-auto text-left">
              Search Engine Optimization (SEO) is the foundation of any
              successful digital marketing strategy. Our SEO services focus on
              improving your website&apos;s visibility on search engines like
              Google, helping potential customers find you when they&apos;re
              searching for your products or services. By optimizing your
              site&apos;s structure, content, and technical aspects, we ensure
              it ranks higher for relevant keywords, attracting more organic
              traffic.
            </p>
            <p className="mt-3 text-lg md:text-xl max-w-2xl mx-auto text-left">
              With a tailored SEO strategy, we help you reach your target
              audience while driving long-term growth. From on-page SEO and
              keyword research to link building and technical audits, our
              comprehensive approach is designed to boost your site&apos;s
              performance and keep you ahead of the competition.
            </p>
          </div>
          <div className="flex flex-col justify-between">
            <h2 className="text-2xl font-semibold mb-4">
              Get a Free SEO Consultation
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
              What is SEO and Why Does It Matter?
            </h2>
            <p className="text-lg mb-4">
              SEO, or Search Engine Optimization, is the practice of improving
              your website&apos;s visibility on search engines like Google. When
              people search for products or services that you offer, you want
              your website to appear at the top of the results. SEO helps make
              that happen.
            </p>
            <p className="text-lg mb-4">
              Think of it this way: if your website were a store, SEO would be
              like setting up a big sign on the main street, so more people
              notice and visit you. It&apos;s not just about being seen, though.
              It&apos;s about being seen by the right people – those who are
              already interested in what you have to offer.
            </p>
            <p className="text-lg">
              Our SEO services focus on optimizing your website in ways that
              search engines love, ensuring you attract more visitors, and
              turning those visitors into loyal customers.
            </p>
          </div>
          <div className="relative w-full h-64 md:h-96">
            <Image
              src="/images/seo-hero.jpg"
              alt="SEO Explanation"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Why SEO Matters Section */}
      <div className="py-20 px-4 md:px-20 lg:px-40 bg-[var(--bg900)]">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
          Why SEO Matters?
        </h2>
        <p className="text-lg text-center mb-10 max-w-3xl mx-auto">
          SEO is the backbone of online visibility. By optimizing your website
          for search engines, you can increase the quality and quantity of
          traffic to your site, leading to higher engagement and conversions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Increase Visibility</h3>
            <p>
              With our SEO strategies, your website will rank higher in search
              engine results, making it easier for potential customers to find
              you.
            </p>
          </div>
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Drive More Traffic</h3>
            <p>
              Our SEO services focus on driving more organic traffic to your
              site, increasing your chances of converting visitors into
              customers.
            </p>
          </div>
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">
              Improve User Experience
            </h3>
            <p>
              We optimize your site for both search engines and users, ensuring
              a seamless experience that keeps visitors engaged.
            </p>
          </div>
        </div>
      </div>

      {/* Our SEO Services Section */}
      <div className="py-20 px-4 md:px-20 lg:px-40">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
          Our SEO Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">On-Page SEO</h3>
            <p>
              We optimize your website&apos;s content, meta tags, and structure
              to ensure it&apos;s search engine friendly.
            </p>
          </div>
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Off-Page SEO</h3>
            <p>
              Our off-page SEO strategies focus on building high-quality
              backlinks to boost your site&apos;s authority.
            </p>
          </div>
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Technical SEO</h3>
            <p>
              We improve your website&apos;s technical aspects, such as page
              speed and mobile-friendliness, to enhance its search engine
              performance.
            </p>
          </div>
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Local SEO</h3>
            <p>
              We help your business rank higher in local search results, making
              it easier for local customers to find you.
            </p>
          </div>
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">E-commerce SEO</h3>
            <p>
              Our e-commerce SEO services are designed to drive traffic to your
              online store and increase sales.
            </p>
          </div>
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">SEO Audits</h3>
            <p>
              We perform comprehensive SEO audits to identify areas for
              improvement and optimize your site for better performance.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action section */}
      <div className="py-20 px-4 md:px-20 lg:px-40 text-center bg-[var(--bgnew)]">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Ready to Boost Your Online Visibility?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Book a call today to learn more about our SEO services and how we can
          help your business grow.
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

export default SEO;
