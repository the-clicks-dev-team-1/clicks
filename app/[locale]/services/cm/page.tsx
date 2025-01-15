import { FC } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import { Metadata } from "next";
import ContactBlock from "@/components/contactBlock";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Content Marketing Services",
  description:
    "Engage your audience, build trust, and drive conversions with our strategic content marketing services",
};

const servicesItems = [
  {
    count: "01",
    image: "/images/group1.png",
    title: "Content Strategy",
    description:
      " We develop a content strategy that aligns with your business goals, ensuring that every piece of content supports your overall marketing efforts.",
  },
  {
    count: "02",
    image: "/images/group3.png",
    title: "Content Creation",
    description:
      "Our team creates high-quality content tailored to your audience, from blog posts and articles to videos and infographics.",
  },
  {
    count: "03",
    image: "/images/group4.png",
    title: "Content Distribution",
    description:
      "We distribute your content across the right channels to maximize reach and engagement, ensuring it gets in front of the right audience.",
  },
  {
    count: "04",
    image: "/images/group5.png",
    title: "SEO Content",
    description:
      "Our content is optimized for search engines, helping your website rank higher in search results and driving organic traffic.",
  },
  {
    count: "05",
    image: "/images/group6.png",
    title: "Content Audits",
    description:
      "We conduct thorough content audits to identify gaps and opportunities, ensuring that your content remains effective and relevant.",
  },
  {
    count: "06",
    image: "/images/group7.png",
    title: "Analytics & Reporting",
    description:
      "We provide detailed analytics and reporting, giving you insights into how your content is performing and where improvements can be made.",
  },
];

const ContentMarketing: FC = () => {
  return (
    <div className="bg-[var(--bgnew)] text-[var(--text)]">
      <Navbar />

      <div className="container md:px-10 mb-32">
        <div className="flex flex-col pt-32 md:pt-40">
          <h1 className="mb-10 py-2 text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to bg-purple-500 bg-opacity-50">
            Content Marketing Services
          </h1>
          <p className="mt-3 text-lg md:text-xl max-w-2xl text-left text-[var(--gray-blue)] light:text-[var(--gray-40)]">
            Content is at the heart of every successful marketing campaign. From
            blog posts and articles to infographics and videos, we craft a wide
            range of content that helps you connect with potential customers and
            establish your brand as an industry leader.
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
              What is Content Marketing and Why Does It Matter?
            </h2>
            <p className="text-lg mb-6 text-[var(--gray-blue)] light:text-[var(--gray-40)]">
              Content marketing is the practice of creating and sharing
              valuable, relevant, and consistent content to attract and engage a
              clearly defined audience. It&apos;s about delivering information
              that your audience cares about, which ultimately drives profitable
              customer actions.
            </p>
            <h2 className="text-lg md:text-xl font-semibold mb-6 text-[var(--light-blue)] light:text-[var(--gray-70)]">
              Why does Content Marketing Matter?
            </h2>
            <div className="flex flex-col sm:flex-row md:flex-col gap-2 xl:flex-row justify-between items-center mb-6 text-lg text-[var(--gray-blue)] light:text-[var(--gray-40)]">
              <div className="w-full inline-block bg-gradient-to-r from-sky-400 to-purple-500 p-[1px] rounded-full">
                <span className="min-w-[148px] whitespace-nowrap w-full block bg-white dark:bg-black rounded-full px-4 py-3 text-center text-lg font-semibold">
                  build trust
                </span>
              </div>
              <div className="w-full inline-block bg-gradient-to-r from-sky-400 to-purple-500 p-[1px] rounded-full">
                <span className="min-w-[148px] whitespace-nowrap w-full text-center block bg-white dark:bg-black  rounded-full px-4 py-3 text-lg font-semibold">
                  support SEO
                </span>
              </div>
              <div className="w-full inline-block bg-gradient-to-r from-sky-400 to-purple-500 p-[1px] rounded-full">
                <span className="min-w-[148px] whitespace-nowrap w-full text-center block bg-white dark:bg-black  rounded-full px-4 py-3 text-lg font-semibold">
                  drive engagement
                </span>
              </div>
            </div>
            {/* <p className="text-lg text-[var(--gray-blue)] light:text-[var(--gray-40)]">
              Social media is one of the most powerful tools for connecting with
              your audience.
            </p> */}
          </div>
          <div className="relative w-full h-64 md:h-96">
            <Image
              src="/images/cm.jpg"
              alt="content management explanation"
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

export default ContentMarketing;
