import { FC } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import { Metadata } from "next";
import ContactBlock from "@/components/contactBlock";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Email Marketing Services",
  description:
    "Connect with your audience, build relationships, and drive conversions with our targeted email marketing strategies",
};

const servicesItems = [
  {
    count: "01",
    image: "/images/group1.png",
    title: "Campaign Strategy",
    description:
      "We develop a comprehensive email marketing strategy tailored to your business goals and audience, ensuring your campaigns are effective.",
  },
  {
    count: "02",
    image: "/images/group3.png",
    title: "Email Design",
    description:
      "Our team creates visually appealing and responsive email designs that capture attention and drive action.",
  },
  {
    count: "03",
    image: "/images/group4.png",
    title: "List Management",
    description:
      "We manage your email lists, ensuring they are clean, segmented, and targeted to maximize engagement and deliverability.",
  },
  {
    count: "04",
    image: "/images/group5.png",
    title: "Automation",
    description:
      "We set up automated email workflows that nurture leads and drive conversions, freeing up your time while delivering results.",
  },
  {
    count: "05",
    image: "/images/group6.png",
    title: "Analytics & Reporting",
    description:
      "Our detailed analytics and reports give you insights into the performance of your campaigns, helping you make data-driven decisions.",
  },
  {
    count: "06",
    image: "/images/group7.png",
    title: "A/B Testing",
    description:
      "We conduct A/B testing on subject lines, content, and designs to optimize your emails for better performance and higher conversions.",
  },
];

const EmailMarketing: FC = () => {
  return (
    <div className="bg-[var(--bgnew)] text-[var(--text)]">
      <Navbar />

      <div className="container md:px-10 mb-32">
        <div className="flex flex-col pt-32 md:pt-40">
          <h1 className="mb-10 py-2 text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to bg-purple-500 bg-opacity-50">
            Email Marketing Services
          </h1>
          <p className="mt-3 text-lg md:text-xl max-w-2xl text-left text-[var(--gray-blue)] light:text-[var(--gray-40)]">
            Connect with your audience, build relationships, and drive
            conversions with our targeted email marketing strategies. Our email
            marketing services are tailored to deliver personalized, high-impact
            campaigns that engage your audience and drive conversions.
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
              What is Email Marketing?
            </h2>
            <p className="text-lg mb-6 text-[var(--gray-blue)] light:text-[var(--gray-40)]">
              Email marketing is a powerful tool for businesses to communicate
              directly with their audience. By sending personalized, targeted
              messages, you can build relationships, promote your brand, and
              drive sales.
            </p>
            <h2 className="text-lg md:text-xl font-semibold mb-6 text-[var(--light-blue)] light:text-[var(--gray-70)]">
              Why does Email Marketing Matter?
            </h2>
            <div className="flex flex-col sm:flex-row md:flex-col gap-2 xl:flex-row justify-between items-center mb-6 text-lg text-[var(--gray-blue)] light:text-[var(--gray-40)]">
              <div className="w-full inline-block bg-gradient-to-r from-sky-400 to-purple-500 p-[1px] rounded-full">
                <span className="min-w-[148px] whitespace-nowrap w-full block bg-white dark:bg-black rounded-full px-4 py-3 text-center text-lg font-semibold">
                  cost-effective
                </span>
              </div>
              <div className="w-full inline-block bg-gradient-to-r from-sky-400 to-purple-500 p-[1px] rounded-full">
                <span className="min-w-[148px] whitespace-nowrap w-full text-center block bg-white dark:bg-black  rounded-full px-4 py-3 text-lg font-semibold">
                  personalization
                </span>
              </div>
              <div className="w-full inline-block bg-gradient-to-r from-sky-400 to-purple-500 p-[1px] rounded-full">
                <span className="min-w-[148px] whitespace-nowrap w-full text-center block bg-white dark:bg-black  rounded-full px-4 py-3 text-lg font-semibold">
                  communication
                </span>
              </div>
            </div>
            <p className="text-lg text-[var(--gray-blue)] light:text-[var(--gray-40)]">
              With the right strategy, email marketing can be one of the most
              cost-effective ways to grow your business.
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

      <ContactBlock consultation="Reach out for a free consultation and get the answers you need." />

      <Footer />
    </div>
  );
};

export default EmailMarketing;
