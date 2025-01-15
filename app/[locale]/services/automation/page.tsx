import { FC } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import { Metadata } from "next";
import ContactBlock from "@/components/contactBlock";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Marketing Automation Services",
  description:
    "Streamline your marketing processes, improve efficiency, and drive better results with our marketing automation solutions",
};

const servicesItems = [
  {
    count: "01",
    image: "/images/Group1.png",
    title: "Automation Strategy Development",
    description:
      "We help you develop a tailored marketing automation strategy that aligns with your business goals and maximizes the impact of your marketing efforts.",
  },
  {
    count: "02",
    image: "/images/Group3.png",
    title: "Email Automation",
    description:
      "We set up automated email campaigns that nurture leads, re-engage customers, and drive conversions with personalized messaging.",
  },
  {
    count: "03",
    image: "/images/Group4.png",
    title: "Lead Scoring and Nurturing",
    description:
      "Our lead scoring and nurturing services ensure that your sales team focuses on the most qualified leads, improving conversion rates.",
  },
  {
    count: "04",
    image: "/images/Group5.png",
    title: "CRM Integration",
    description:
      "We integrate your marketing automation tools with your CRM to ensure seamless data flow and better alignment between sales and marketing.",
  },
  {
    count: "05",
    image: "/images/Group6.png",
    title: "Social Media Automation",
    description:
      " We automate your social media posting, engagement, and monitoring to ensure consistent activity and maximize your social presence.",
  },
  {
    count: "06",
    image: "/images/Group7.png",
    title: "Analytics and Reporting",
    description:
      "Our detailed reports and analytics help you track the performance of your automated campaigns and make data-driven improvements.",
  },
];

const MarketingAutomation: FC = () => {
  return (
    <div className="bg-[var(--bgnew)] text-[var(--text)]">
      <Navbar />

      <div className="container md:px-10 mb-32">
        <div className="flex flex-col pt-32 md:pt-40">
          <h1 className="mb-10 py-2 text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to bg-purple-500 bg-opacity-50">
            Marketing Automation Services
          </h1>
          <p className="mt-3 text-lg md:text-xl max-w-2xl text-left text-[var(--gray-blue)] light:text-[var(--gray-40)]">
            Marketing automation streamlines your marketing efforts, allowing
            you to focus on strategy while automating repetitive tasks. Our
            marketing automation services help you set up automated workflows
            for email campaigns, lead nurturing, and customer segmentation,
            ensuring you reach the right people with the right message at the
            right time.
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
              What is Marketing Automation?
            </h2>
            <p className="text-lg mb-6 text-[var(--gray-blue)] light:text-[var(--gray-40)]">
              Marketing automation involves using software to automate
              repetitive marketing tasks, such as email campaigns, social media
              posting, and ad management. It allows businesses to nurture leads,
              personalize marketing messages, and efficiently manage marketing
              workflows.
            </p>
            <h2 className="text-lg md:text-xl font-semibold mb-6 text-[var(--light-blue)] light:text-[var(--gray-70)]">
              Why does Marketing Automation Matter?
            </h2>
            <div className="flex flex-col sm:flex-row md:flex-col gap-2 xl:flex-row justify-between items-center mb-6 text-lg text-[var(--gray-blue)] light:text-[var(--gray-40)]">
              <div className="w-full inline-block bg-gradient-to-r from-sky-400 to-purple-500 p-[1px] rounded-full">
                <span className="min-w-[148px] whitespace-nowrap w-full block bg-white dark:bg-black rounded-full px-4 py-3 text-center text-lg font-semibold">
                  productivity
                </span>
              </div>
              <div className="w-full inline-block bg-gradient-to-r from-sky-400 to-purple-500 p-[1px] rounded-full">
                <span className="min-w-[148px] whitespace-nowrap w-full text-center block bg-white dark:bg-black  rounded-full px-4 py-3 text-lg font-semibold">
                  efficiency
                </span>
              </div>
              <div className="w-full inline-block bg-gradient-to-r from-sky-400 to-purple-500 p-[1px] rounded-full">
                <span className="min-w-[148px] whitespace-nowrap w-full text-center block bg-white dark:bg-black  rounded-full px-4 py-3 text-lg font-semibold">
                  personalization
                </span>
              </div>
            </div>
            <p className="text-lg text-[var(--gray-blue)] light:text-[var(--gray-40)]">
              With the right strategy, automation can help you save time, reduce
              costs, and drive better results.
            </p>
          </div>
          <div className="relative w-full h-64 md:h-96">
            <Image
              src="/images/ma.jpg"
              alt="Marketing Automation Explanation"
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

export default MarketingAutomation;
