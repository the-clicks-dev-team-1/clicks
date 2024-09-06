import { FC } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/app/footer";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development Services",
  description:
    "We build websites that not only look stunning but are also optimized for performance, scalability, and user experience",
};

const WebDevelopment: FC = () => {
  return (
    <div className="bg-[var(--bgnew)] text-[var(--text)]">
      <Navbar />

      {/* Header section with form */}
      <div className="bg-gradient-to-b from-sky-400 to-purple-500 py-20 text-center">
        <h1 className="text-3xl mt-10 md:text-5xl font-bold">
          Web Development Services
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          We build websites that not only look stunning but are also optimized
          for performance, scalability, and user experience.
        </p>
        <div className="mt-10 max-w-xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">
            Get a Free Consultation
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

      {/* Introduction section */}
      <div className="py-20 px-4 md:px-20 lg:px-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Why Choose Us for Web Development?
            </h2>
            <p className="text-lg mb-4">
              Our team of experts specializes in creating responsive, dynamic,
              and SEO-friendly websites tailored to meet your business needs. We
              focus on delivering a seamless user experience that drives
              conversions and enhances your online presence.
            </p>
            <p className="text-lg">
              We utilize the latest technologies and frameworks to build
              scalable and maintainable web solutions. Whether you need a simple
              website or a complex web application, we have the expertise to
              bring your vision to life.
            </p>
          </div>
          <div className="relative w-full h-64 md:h-96">
            <Image
              src="/images/web-developer.jpg"
              alt="Web Development"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Services section */}
      <div className="bg-[var(--bg900)] py-20 px-4 md:px-20 lg:px-40">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          Our Web Development Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">
              Custom Website Development
            </h3>
            <p>
              Tailored website solutions designed to meet your business
              requirements, built with the latest web technologies.
            </p>
          </div>
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">eCommerce Solutions</h3>
            <p>
              We create powerful eCommerce platforms that provide an intuitive
              shopping experience, helping you increase sales and grow your
              business.
            </p>
          </div>
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">
              Content Management Systems (CMS)
            </h3>
            <p>
              Manage your website content easily with our custom CMS solutions,
              designed to be user-friendly and scalable.
            </p>
          </div>
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">
              Responsive Web Design
            </h3>
            <p>
              We ensure your website looks great on all devices, providing a
              seamless experience for users on mobile, tablet, and desktop.
            </p>
          </div>
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">
              Web Application Development
            </h3>
            <p>
              Custom web applications built to streamline your business
              processes and improve efficiency.
            </p>
          </div>
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">SEO Optimization</h3>
            <p>
              We build websites that are optimized for search engines, ensuring
              your business gets the visibility it deserves.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action section */}
      <div className="py-20 px-4 md:px-20 lg:px-40 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Ready to Take Your Online Presence to the Next Level?
        </h2>
        <p className="text-lg mb-8">
          Contact us today to discuss your project, and let&apos;s create
          something amazing together.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-gradient-to-r from-sky-400 to-purple-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-opacity-75 transition duration-300"
        >
          Get Started
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default WebDevelopment;
