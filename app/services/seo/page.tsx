import { FC } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/app/footer";
import Link from "next/link";
import Image from "next/image";

const SEO: FC = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />

      {/* Header section with form */}
      <div className="bg-gradient-to-b from-sky-400 to-purple-500 py-20 text-center">
        <h1 className="text-3xl mt-10 md:text-5xl font-bold">
          Search Engine Optimization (SEO) Services
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          Increase your online visibility and drive more traffic to your website
          with our expert SEO services.
        </p>
        <div className="mt-10 max-w-xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">
            Get a Free SEO Consultation
          </h2>
          <form action="#" method="POST">
            <div className="mb-4">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-full p-3 bg-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-3 bg-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 bg-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-sky-400 to-purple-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-opacity-75 transition duration-300"
            >
              Submit
            </button>
          </form>
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
              your website’s visibility on search engines like Google. When
              people search for products or services that you offer, you want
              your website to appear at the top of the results. SEO helps make
              that happen.
            </p>
            <p className="text-lg mb-4">
              Think of it this way: if your website were a store, SEO would be
              like setting up a big sign on the main street, so more people
              notice and visit you. It’s not just about being seen, though. It’s
              about being seen by the right people – those who are already
              interested in what you have to offer.
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
      <div className="py-20 px-4 md:px-20 lg:px-40 bg-neutral-900">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
          Why SEO Matters?
        </h2>
        <p className="text-lg text-center mb-10 max-w-3xl mx-auto">
          SEO is the backbone of online visibility. By optimizing your website
          for search engines, you can increase the quality and quantity of
          traffic to your site, leading to higher engagement and conversions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Increase Visibility</h3>
            <p>
              With our SEO strategies, your website will rank higher in search
              engine results, making it easier for potential customers to find
              you.
            </p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Drive More Traffic</h3>
            <p>
              Our SEO services focus on driving more organic traffic to your
              site, increasing your chances of converting visitors into
              customers.
            </p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg">
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
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">On-Page SEO</h3>
            <p>
              We optimize your website’s content, meta tags, and structure to
              ensure it’s search engine friendly.
            </p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Off-Page SEO</h3>
            <p>
              Our off-page SEO strategies focus on building high-quality
              backlinks to boost your site’s authority.
            </p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Technical SEO</h3>
            <p>
              We improve your website’s technical aspects, such as page speed
              and mobile-friendliness, to enhance its search engine performance.
            </p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Local SEO</h3>
            <p>
              We help your business rank higher in local search results, making
              it easier for local customers to find you.
            </p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">E-commerce SEO</h3>
            <p>
              Our e-commerce SEO services are designed to drive traffic to your
              online store and increase sales.
            </p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">SEO Audits</h3>
            <p>
              We perform comprehensive SEO audits to identify areas for
              improvement and optimize your site for better performance.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action section */}
      <div className="py-20 px-4 md:px-20 lg:px-40 text-center bg-black">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Ready to Boost Your Online Visibility?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Contact us today to learn more about our SEO services and how we can
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

export default SEO;
