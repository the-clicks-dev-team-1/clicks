import { FC } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/app/footer";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import ContactServiceForm from "@/components/ContactServiceForm";

export const metadata: Metadata = {
  title: "Public Relations (PR) Services",
  description:
    "Build your brand's reputation and connect with your audience through our strategic PR services",
};

const PR: FC = () => {
  return (
    <div className="bg-[var(--bgnew)] text-[var(--text)]">
      <Navbar />

      {/* Header section with form */}
      <div className="bg-gradient-to-b from-sky-400 to-purple-500 py-20 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-20 px-4 md:px-20 lg:px-40">
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-5xl font-bold">
              Public Relations (PR) Services
            </h1>
            <p className="mt-10 text-lg md:text-xl max-w-2xl mx-auto text-left">
              Build your brand&apos;s reputation and connect with your audience
              through our strategic PR services.
            </p>
            <p className="mt-3 text-lg md:text-xl max-w-2xl mx-auto text-left">
              Building a strong reputation in the marketplace is key to your
              business&apos;s long-term success. Our public relations services
              focus on creating a positive image for your brand through media
              outreach, press releases, and event coordination. We help you
              craft a narrative that resonates with your audience and positions
              your business as a trusted industry leader.
            </p>
            <p className="mt-3 text-lg md:text-xl max-w-2xl mx-auto text-left">
              With targeted PR campaigns, we ensure your brand gains visibility
              in the right channels. Whether it&apos;s managing media
              relationships or handling crisis communication, our PR team is
              dedicated to enhancing your reputation and driving meaningful
              engagement with your stakeholders.
            </p>
          </div>
          <div className="flex flex-col justify-between">
            <h2 className="text-2xl font-semibold mb-4">
              Get a Free PR Consultation
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
              What is Public Relations (PR) and Why Does It Matter?
            </h2>
            <p className="text-lg mb-4">
              Public Relations (PR) is the practice of managing and guiding the
              public perception of your brand. It involves building and
              maintaining relationships with the media, managing communication
              during crises, and creating a positive image for your business.
            </p>
            <p className="text-lg mb-4">
              In today&apos;s highly connected world, having a strong PR
              strategy is essential for building brand credibility, gaining
              media coverage, and engaging with your audience effectively.
            </p>
            <p className="text-lg">
              Our PR services are designed to help you craft compelling
              messages, reach your target audience, and enhance your
              brand&apos;s reputation through strategic media relations and
              communication tactics.
            </p>
          </div>
          <div className="relative w-full h-64 md:h-96">
            <Image
              src="/images/pr.jpg"
              alt="Public Relations Explanation"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Why PR Matters Section */}
      <div className="py-20 px-4 md:px-20 lg:px-40 bg-[var(--bg900)]">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
          Why PR Matters?
        </h2>
        <p className="text-lg text-center mb-10 max-w-3xl mx-auto">
          PR is crucial for building and maintaining a positive public image for
          your brand. With the right PR strategy, you can manage your
          brand&apos;s reputation, connect with your audience, and ensure your
          message reaches the right people.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">
              Reputation Management
            </h3>
            <p>
              PR helps you manage your brand&apos;s reputation by crafting
              positive narratives and handling negative publicity effectively.
            </p>
          </div>
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Media Relations</h3>
            <p>
              Our media relations services help you secure positive media
              coverage, enhancing your brand&apos;s visibility and credibility.
            </p>
          </div>
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Crisis Communication</h3>
            <p>
              We help you manage communication during crises, ensuring that your
              brand&apos;s message is clear, consistent, and positive.
            </p>
          </div>
        </div>
      </div>

      {/* Our PR Services Section */}
      <div className="py-20 px-4 md:px-20 lg:px-40">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
          Our PR Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Media Relations</h3>
            <p>
              We connect your brand with the media, securing interviews, press
              releases, and articles that enhance your brand&apos;s visibility.
            </p>
          </div>
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Press Releases</h3>
            <p>
              Our team crafts compelling press releases that capture the
              attention of journalists and promote your brand&apos;s news and
              events.
            </p>
          </div>
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Crisis Management</h3>
            <p>
              We provide expert crisis management services, helping you navigate
              and mitigate any negative situations that could harm your brand.
            </p>
          </div>
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Event Planning</h3>
            <p>
              We help you plan and execute successful events that generate
              positive media coverage and engage your audience.
            </p>
          </div>
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Influencer Outreach</h3>
            <p>
              We connect your brand with influencers who can help amplify your
              message and reach a wider audience.
            </p>
          </div>
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">
              Reputation Management
            </h3>
            <p>
              We monitor and manage your online reputation, ensuring that your
              brand is presented in the best possible light.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action section */}
      <div className="py-20 px-4 md:px-20 lg:px-40 text-center bg-[var(--bgnew)]">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Ready to Build a Stronger Public Image?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Contact us today to learn more about our PR services and how we can
          help you build and maintain a positive brand reputation.
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

export default PR;
