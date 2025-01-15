import { FC } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import { Metadata } from "next";
import ContactBlock from "@/components/contactBlock";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Strategy Development Services",
  description:
    "Crafting tailored strategies to drive your business forward and achieve long-term success",
};

const servicesItems = [
  {
    count: "01",
    image: "/images/Group1.png",
    title: "Business Strategy",
    description:
      "We help you define your company's vision, mission, and long-term objectives, ensuring that your business strategy is aligned with your goals.",
  },
  {
    count: "02",
    image: "/images/Group3.png",
    title: "Market Analysis",
    description:
      "Our market analysis services provide insights into your industry, competitors, and market trends, helping you make informed strategic decisions.",
  },
  {
    count: "03",
    image: "/images/Group4.png",
    title: "Financial Planning",
    description:
      "We assist in developing financial plans that support your strategic goals, ensuring your business is financially prepared for growth.",
  },
  {
    count: "04",
    image: "/images/Group5.png",
    title: "Risk Management",
    description:
      "We help identify potential risks and develop strategies to mitigate them, ensuring your business is resilient and prepared for challenges.",
  },
  {
    count: "05",
    image: "/images/Group6.png",
    title: "Operational Strategy",
    description:
      "Our operational strategy services focus on improving efficiency and effectiveness, ensuring that your operations are aligned with your strategic goals.",
  },
  {
    count: "06",
    image: "/images/Group7.png",
    title: "Performance Measurement",
    description:
      "We develop metrics and KPIs to track your progress, ensuring that your strategy is delivering the desired results.",
  },
];

const StrategyDevelopment: FC = () => {
  return (
    <div className="bg-[var(--bgnew)] text-[var(--text)]">
      <Navbar />

      <div className="container md:px-10 mb-32">
        <div className="flex flex-col pt-32 md:pt-40">
          <h1 className="mb-10 py-2 text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to bg-purple-500 bg-opacity-50">
            Strategy Development Services
          </h1>
          {/* <p className="mt-10 text-lg md:text-xl max-w-2xl mx-auto text-left">
              We build websites that not only look stunning but are also
              optimized for performance, scalability, and user experience.
            </p> */}
          <p className="mt-3 text-lg md:text-xl max-w-2xl text-left text-[var(--gray-blue)] light:text-[var(--gray-40)]">
            Developing a strong digital marketing strategy is crucial for
            business success in today&apos;s competitive landscape. Our strategy
            development services help you define clear objectives, identify your
            target audience, and create a tailored approach that leverages the
            most effective marketing channels.
            {/* <br /> We prioritize functionality, ensuring that
              your website is easy to navigate and optimized for both desktop
              and mobile devices, enhancing the user experience. */}
          </p>
          {/* <p className="mt-3 text-lg md:text-xl max-w-2xl mx-auto text-left">
              From e-commerce platforms to corporate websites, we build sites
              tailored to your business needs. Our team of developers and
              designers work closely with you to ensure the final product
              reflects your brand identity and meets your goals, while also
              being scalable and adaptable to future needs.
            </p> */}
        </div>

        {/* <ContactServiceForm /> */}
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
              What is Strategy Development?
            </h2>
            <p className="text-lg mb-6 text-[var(--gray-blue)] light:text-[var(--gray-40)]">
              Our strategy development services are designed to help you clarify
              your vision, develop actionable plans, and navigate the challenges
              of achieving your goals.
            </p>
            <h2 className="text-lg md:text-xl font-semibold mb-6 text-[var(--light-blue)] light:text-[var(--gray-70)]">
              Why does Strategy Development Matter?
            </h2>
            <div className="flex flex-col sm:flex-row md:flex-col gap-2 xl:flex-row justify-between items-center mb-6 text-lg text-[var(--gray-blue)] light:text-[var(--gray-40)]">
              <div className="w-full inline-block bg-gradient-to-r from-sky-400 to-purple-500 p-[1px] rounded-full">
                <span className="min-w-[148px] whitespace-nowrap w-full block bg-white dark:bg-black rounded-full px-4 py-3 text-center text-lg font-semibold">
                  clear direction
                </span>
              </div>
              <div className="w-full inline-block bg-gradient-to-r from-sky-400 to-purple-500 p-[1px] rounded-full">
                <span className="min-w-[148px] whitespace-nowrap w-full text-center block bg-white dark:bg-black  rounded-full px-4 py-3 text-lg font-semibold">
                  resourcing
                </span>
              </div>
              <div className="w-full inline-block bg-gradient-to-r from-sky-400 to-purple-500 p-[1px] rounded-full">
                <span className="min-w-[148px] whitespace-nowrap w-full text-center block bg-white dark:bg-black  rounded-full px-4 py-3 text-lg font-semibold">
                  long-term success
                </span>
              </div>
            </div>
            <p className="text-lg text-[var(--gray-blue)] light:text-[var(--gray-40)]">
              A well-defined strategy is essential for the growth and
              sustainability of any business.
            </p>
          </div>
          <div className="relative w-full h-64 md:h-96">
            <Image
              src="/images/stratdev.jpg"
              alt="Strategy Development"
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

export default StrategyDevelopment;
