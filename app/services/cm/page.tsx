import { FC } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/app/footer";
import Link from "next/link";

const ContentMarketing: FC = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />

      {/* Header section with form */}
      <div className="bg-gradient-to-b from-sky-400 to-purple-500 py-20 text-center">
        <h1 className="text-3xl mt-4 md:text-5xl font-bold">Content Marketing Services</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          Engage your audience, build trust, and drive conversions with our strategic content marketing services.
        </p>
        <div className="mt-10 max-w-xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Get a Free Content Marketing Consultation</h2>
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
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">What is Content Marketing and Why Does It Matter?</h2>
            <p className="text-lg mb-4">
              Content marketing is the practice of creating and sharing valuable, relevant, and consistent content to attract and engage a clearly defined audience. 
              It's about delivering information that your audience cares about, which ultimately drives profitable customer actions.
            </p>
            <p className="text-lg mb-4">
              Whether it’s blog posts, videos, social media content, or eBooks, content marketing is a powerful tool for building trust and establishing your brand as an industry leader.
            </p>
            <p className="text-lg">
              Our content marketing services are designed to help you create compelling content that not only engages your audience but also drives conversions and supports your overall marketing strategy.
            </p>
          </div>
          <div className="relative w-full h-64 md:h-96">
            <img
              src="/images/cm.jpg"
              alt="Content Marketing Explanation"
              className="object-cover h-full w-full rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Why Content Marketing Matters Section */}
      <div className="py-20 px-4 md:px-20 lg:px-40 bg-neutral-900">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Why Content Marketing Matters?</h2>
        <p className="text-lg text-center mb-10 max-w-3xl mx-auto">
          Content marketing is essential for building trust with your audience, driving engagement, and supporting your SEO efforts. 
          With the right strategy, content marketing can help you build lasting relationships with your customers and increase brand loyalty.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Build Trust</h3>
            <p>
              By providing valuable and relevant content, you can build trust with your audience, positioning your brand as an authority in your industry.
            </p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Increase Engagement</h3>
            <p>
              High-quality content drives engagement, encouraging your audience to interact with your brand and share your content with others.
            </p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Support SEO</h3>
            <p>
              Content marketing plays a crucial role in SEO by providing the content that search engines need to rank your website higher in search results.
            </p>
          </div>
        </div>
      </div>

      {/* Our Content Marketing Services Section */}
      <div className="py-20 px-4 md:px-20 lg:px-40">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Our Content Marketing Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Content Strategy</h3>
            <p>
              We develop a content strategy that aligns with your business goals, ensuring that every piece of content supports your overall marketing efforts.
            </p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Content Creation</h3>
            <p>
              Our team creates high-quality content tailored to your audience, from blog posts and articles to videos and infographics.
            </p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Content Distribution</h3>
            <p>
              We distribute your content across the right channels to maximize reach and engagement, ensuring it gets in front of the right audience.
            </p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">SEO Content</h3>
            <p>
              Our content is optimized for search engines, helping your website rank higher in search results and driving organic traffic.
            </p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Content Audits</h3>
            <p>
              We conduct thorough content audits to identify gaps and opportunities, ensuring that your content remains effective and relevant.
            </p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Analytics & Reporting</h3>
            <p>
              We provide detailed analytics and reporting, giving you insights into how your content is performing and where improvements can be made.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action section */}
      <div className="py-20 px-4 md:px-20 lg:px-40 text-center bg-black">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Ready to Elevate Your Content Strategy?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Contact us today to learn more about our content marketing services and how we can help your business grow through compelling content.
        </p>
        <Link
          href="/about/contact"
          className="inline-block bg-gradient-to-r from-sky-400 to-purple-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-opacity-75 transition duration-300"
        >
          Get in Touch
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default ContentMarketing;
