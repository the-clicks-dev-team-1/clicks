import { FC } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/app/footer";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import ContactServiceForm from "@/components/ContactServiceForm";

export const metadata: Metadata = {
  title: "Email Marketing Services",
  description:
    "Connect with your audience, build relationships, and drive conversions with our targeted email marketing strategies",
};

const EmailMarketing: FC = () => {
  return (
    <div className="bg-[var(--bgnew)] text-[var(--text)]">
      <Navbar />

      {/* Header section with form */}
      <div className="bg-gradient-to-b from-sky-400 to-purple-500 py-20 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-20 px-4 md:px-20 lg:px-40">
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-5xl font-bold">
              Email Marketing Services
            </h1>
            <p className="mt-10 text-lg md:text-xl max-w-2xl mx-auto text-left">
              Connect with your audience, build relationships, and drive
              conversions with our targeted email marketing strategies.
            </p>
            <p className="mt-3 text-lg md:text-xl max-w-2xl mx-auto text-left">
              Email marketing remains one of the most effective ways to nurture
              leads and build lasting customer relationships. Our email
              marketing services are tailored to deliver personalized,
              high-impact campaigns that engage your audience and drive
              conversions. From crafting compelling messages to automating
              follow-ups, we ensure your email campaigns are optimized for
              success.
            </p>
            <p className="mt-3 text-lg md:text-xl max-w-2xl mx-auto text-left">
              With our data-driven approach, we track open rates,
              click-throughs, and conversions to refine strategies and improve
              results. Whether you&apos;re launching a new product, promoting a
              sale, or nurturing leads, our email marketing campaigns are
              designed to deliver measurable outcomes.
            </p>
          </div>
          <div className="flex flex-col justify-between">
            <h2 className="text-2xl font-semibold mb-4">
              Get a Free Email Marketing Consultation
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
              What is Email Marketing and Why Does It Matter?
            </h2>
            <p className="text-lg mb-4">
              Email marketing is a powerful tool for businesses to communicate
              directly with their audience. By sending personalized, targeted
              messages, you can build relationships, promote your brand, and
              drive sales.
            </p>
            <p className="text-lg mb-4">
              Unlike social media, where algorithms control visibility, email
              marketing allows you to reach your audience directly. This makes
              it one of the most effective channels for driving engagement and
              conversions.
            </p>
            <p className="text-lg">
              Our email marketing services are designed to help you create
              compelling email campaigns that resonate with your audience and
              deliver measurable results.
            </p>
          </div>
          <div className="relative w-full h-64 md:h-96">
            <Image
              src="/images/em.jpg"
              alt="Email Marketing Explanation"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Why Email Marketing Matters Section */}
      <div className="py-20 px-4 md:px-20 lg:px-40 bg-[var(--bg900)]">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
          Why Email Marketing Matters?
        </h2>
        <p className="text-lg text-center mb-10 max-w-3xl mx-auto">
          Email marketing is crucial for businesses looking to maintain direct
          communication with their audience, nurture leads, and drive repeat
          business. With the right strategy, email marketing can be one of the
          most cost-effective ways to grow your business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Direct Communication</h3>
            <p>
              Email marketing allows you to communicate directly with your
              audience, ensuring your message is delivered to their inbox.
            </p>
          </div>
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Personalization</h3>
            <p>
              By sending personalized emails, you can create a more meaningful
              connection with your audience, leading to higher engagement.
            </p>
          </div>
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Cost-Effective</h3>
            <p>
              Email marketing is one of the most cost-effective marketing
              channels, providing a high return on investment with minimal
              costs.
            </p>
          </div>
        </div>
      </div>

      {/* Our Email Marketing Services Section */}
      <div className="py-20 px-4 md:px-20 lg:px-40">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
          Our Email Marketing Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Campaign Strategy</h3>
            <p>
              We develop a comprehensive email marketing strategy tailored to
              your business goals and audience, ensuring your campaigns are
              effective.
            </p>
          </div>
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Email Design</h3>
            <p>
              Our team creates visually appealing and responsive email designs
              that capture attention and drive action.
            </p>
          </div>
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">List Management</h3>
            <p>
              We manage your email lists, ensuring they are clean, segmented,
              and targeted to maximize engagement and deliverability.
            </p>
          </div>
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Automation</h3>
            <p>
              We set up automated email workflows that nurture leads and drive
              conversions, freeing up your time while delivering results.
            </p>
          </div>
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">
              Analytics & Reporting
            </h3>
            <p>
              Our detailed analytics and reports give you insights into the
              performance of your campaigns, helping you make data-driven
              decisions.
            </p>
          </div>
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">A/B Testing</h3>
            <p>
              We conduct A/B testing on subject lines, content, and designs to
              optimize your emails for better performance and higher
              conversions.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action section */}
      <div className="py-20 px-4 md:px-20 lg:px-40 text-center bg-[var(--bgnew)]">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Ready to Boost Your Email Marketing Strategy?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Contact us today to learn more about our email marketing services and
          how we can help you build strong relationships with your audience.
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

export default EmailMarketing;
