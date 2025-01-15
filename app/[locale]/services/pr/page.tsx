import { FC } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import { Metadata } from "next";
import ContactBlock from "@/components/contactBlock";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Public Relations (PR) Services",
  description:
    "Build your brand's reputation and connect with your audience through our strategic PR services",
};

const servicesItems = [
  {
    count: "01",
    image: "/images/Group1.png",
    title: "Media Relations",
    description:
      "We connect your brand with the media, securing interviews, press releases, and articles that enhance your brand's visibility.",
  },
  {
    count: "02",
    image: "/images/Group3.png",
    title: "Press Releases",
    description:
      " Our team crafts compelling press releases that capture the attention of journalists and promote your brand's news and events.",
  },
  {
    count: "03",
    image: "/images/Group4.png",
    title: "Crisis Management",
    description:
      "We provide expert crisis management services, helping you navigate and mitigate any negative situations that could harm your brand.",
  },
  {
    count: "04",
    image: "/images/Group5.png",
    title: "Event Planning",
    description:
      "We help you plan and execute successful events that generate positive media coverage and engage your audience.",
  },
  {
    count: "05",
    image: "/images/Group6.png",
    title: "Influencer Outreach",
    description:
      "We connect your brand with influencers who can help amplify your message and reach a wider audience.",
  },
  {
    count: "06",
    image: "/images/Group7.png",
    title: "Reputation Management",
    description:
      "We monitor and manage your online reputation, ensuring that your brand is presented in the best possible light.",
  },
];

const PR: FC = () => {
  return (
    <div className="bg-[var(--bgnew)] text-[var(--text)]">
      <Navbar />

      <div className="container md:px-10 mb-32">
        <div className="flex flex-col pt-32 md:pt-40">
          <h1 className="mb-10 py-2 text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to bg-purple-500 bg-opacity-50">
            Public Relations (PR) Services
          </h1>
          <p className="mt-3 text-lg md:text-xl max-w-2xl text-left text-[var(--gray-blue)] light:text-[var(--gray-40)]">
            Building a strong reputation in the marketplace is key to your
            business&apos;s long-term success. Our public relations services
            focus on creating a positive image for your brand through media
            outreach, press releases, and event coordination. We help you craft
            a narrative that resonates with your audience and positions your
            business as a trusted industry leader.
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
              What is Public Relations (PR)?
            </h2>
            <p className="text-lg mb-6 text-[var(--gray-blue)] light:text-[var(--gray-40)]">
              Public Relations (PR) is the practice of managing and guiding the
              public perception of your brand. It involves building and
              maintaining relationships with the media, managing communication
              during crises, and creating a positive image for your business.
            </p>
            <h2 className="text-lg md:text-xl font-semibold mb-6 text-[var(--light-blue)] light:text-[var(--gray-70)]">
              Why does PR Matter?
            </h2>
            <div className="flex flex-col sm:flex-row md:flex-col gap-2 xl:flex-row justify-between items-center mb-6 text-lg text-[var(--gray-blue)] light:text-[var(--gray-40)]">
              <div className="w-full inline-block bg-gradient-to-r from-sky-400 to-purple-500 p-[1px] rounded-full">
                <span className="min-w-[148px] whitespace-nowrap w-full block bg-white dark:bg-black rounded-full px-4 py-3 text-center text-lg font-semibold">
                  reputation
                </span>
              </div>
              <div className="w-full inline-block bg-gradient-to-r from-sky-400 to-purple-500 p-[1px] rounded-full">
                <span className="min-w-[148px] whitespace-nowrap w-full text-center block bg-white dark:bg-black  rounded-full px-4 py-3 text-lg font-semibold">
                  visibility
                </span>
              </div>
              <div className="w-full inline-block bg-gradient-to-r from-sky-400 to-purple-500 p-[1px] rounded-full">
                <span className="min-w-[148px] whitespace-nowrap w-full text-center block bg-white dark:bg-black  rounded-full px-4 py-3 text-lg font-semibold">
                  media relations
                </span>
              </div>
            </div>
            <p className="text-lg text-[var(--gray-blue)] light:text-[var(--gray-40)]">
              PR is essential for maintaining a strong and trustworthy brand
              presence. 
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

      <ContactBlock consultation="Reach out for a free consultation and get the answers you need." />

      <Footer />
    </div>
  );
};

export default PR;
