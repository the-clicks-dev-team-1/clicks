import { FC } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import { Metadata } from "next";
import ContactBlock from "@/components/contactBlock";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Social Media Marketing (SMM) Services",
  description:
    "Build your brand, engage with your audience, and drive traffic through our expert SMM strategies",
};

const servicesItems = [
  {
    count: "01",
    image: "/images/group1.png",
    title: "Content Creation",
    description:
      "We create engaging and relevant content that resonates with your audience and drives engagement on social media.",
  },
  {
    count: "02",
    image: "/images/group3.png",
    title: "Social Media Management",
    description:
      "Our team manages your social media profiles, ensuring consistent activity and engagement with your audience.",
  },
  {
    count: "03",
    image: "/images/group4.png",
    title: "Paid Social Advertising",
    description:
      "We design and manage targeted ad campaigns on social media platforms to increase your reach and drive conversions.",
  },
  {
    count: "04",
    image: "/images/group5.png",
    title: "Community Management",
    description:
      "We help build and manage online communities around your brand, fostering engagement and loyalty.",
  },
  {
    count: "05",
    image: "/images/group6.png",
    title: "Social Media Audits",
    description:
      "We conduct comprehensive audits of your social media presence, providing insights and recommendations for improvement.",
  },
  {
    count: "06",
    image: "/images/group7.png",
    title: "Analytics & Reporting",
    description:
      "Our detailed analytics and reports help you understand the performance of your social media campaigns and make data-driven decisions.",
  },
];

const SMM: FC = () => {
  return (
    <div className="bg-[var(--bgnew)] text-[var(--text)]">
      <Navbar />

      <div className="container md:px-10 mb-32">
        <div className="flex flex-col pt-32 md:pt-40">
          <h1 className="mb-10 py-2 text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to bg-purple-500 bg-opacity-50">
            Social Media Marketing (SMM) Services
          </h1>
          <p className="mt-3 text-lg md:text-xl max-w-2xl text-left text-[var(--gray-blue)] light:text-[var(--gray-40)]">
            Social Media Marketing (SMM) is essential for building your
            brand&apos;s online presence and engaging directly with your
            audience. Our SMM services focus on creating compelling content that
            resonates with your target demographic across platforms like
            Facebook, Instagram, LinkedIn, and Twitter.
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
              What is SMM and Why Does It Matter?
            </h2>
            <p className="text-lg mb-6 text-[var(--gray-blue)] light:text-[var(--gray-40)]">
              Social media platforms like Facebook, Instagram, Twitter, and
              LinkedIn are where people spend a significant amount of their time
              online. By leveraging these platforms, you can reach your target
              audience, engage with them, and build strong customer
              relationships.
            </p>
            <h2 className="text-lg md:text-xl font-semibold mb-6 text-[var(--light-blue)] light:text-[var(--gray-70)]">
              Why does SMM Matter?
            </h2>
            <div className="flex flex-col sm:flex-row md:flex-col gap-2 xl:flex-row justify-between items-center mb-6 text-lg text-[var(--gray-blue)] light:text-[var(--gray-40)]">
              <div className="w-full inline-block bg-gradient-to-r from-sky-400 to-purple-500 p-[1px] rounded-full">
                <span className="min-w-[148px] whitespace-nowrap w-full block bg-white dark:bg-black rounded-full px-4 py-3 text-center text-lg font-semibold">
                  brand awareness
                </span>
              </div>
              <div className="w-full inline-block bg-gradient-to-r from-sky-400 to-purple-500 p-[1px] rounded-full">
                <span className="min-w-[148px] whitespace-nowrap w-full text-center block bg-white dark:bg-black  rounded-full px-4 py-3 text-lg font-semibold">
                  interaction
                </span>
              </div>
              <div className="w-full inline-block bg-gradient-to-r from-sky-400 to-purple-500 p-[1px] rounded-full">
                <span className="min-w-[148px] whitespace-nowrap w-full text-center block bg-white dark:bg-black  rounded-full px-4 py-3 text-lg font-semibold">
                  lead generation
                </span>
              </div>
            </div>
            <p className="text-lg text-[var(--gray-blue)] light:text-[var(--gray-40)]">
              Social media is one of the most powerful tools for connecting with
              your audience.
            </p>
          </div>
          <div className="relative w-full h-64 md:h-96">
            <Image
              src="/images/smm.jpg"
              alt="smm explanation"
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

export default SMM;
