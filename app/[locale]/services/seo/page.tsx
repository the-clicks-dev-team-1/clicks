import { FC } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import { Metadata } from "next";
import ContactBlock from "@/components/contactBlock";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Search Engine Optimization (SEO) Services",
  description:
    "Increase your online visibility and drive more traffic to your website with our expert SEO services",
};

const servicesItems = [
  {
    count: "01",
    image: "/images/group1.png",
    title: "On-Page SEO",
    description:
      "We optimize your website's content, meta tags, and structure to ensure it's search engine friendly.",
  },
  {
    count: "02",
    image: "/images/group3.png",
    title: "Off-Page SEO",
    description:
      "Our off-page SEO strategies focus on building high-quality backlinks to boost your site's authority.",
  },
  {
    count: "03",
    image: "/images/group4.png",
    title: "Technical SEO",
    description:
      "We improve your website's technical aspects, such as page speed and mobile-friendliness, to enhance its search engine performance.",
  },
  {
    count: "04",
    image: "/images/group5.png",
    title: "Local SEO",
    description:
      "We help your business rank higher in local search results, making it easier for local customers to find you.",
  },
  {
    count: "05",
    image: "/images/group6.png",
    title: "E-commerce SEO",
    description:
      "Our e-commerce SEO services are designed to drive traffic to your online store and increase sales.",
  },
  {
    count: "06",
    image: "/images/group7.png",
    title: "SEO Audits",
    description:
      "We perform comprehensive SEO audits to identify areas for improvement and optimize your site for better performance.",
  },
];

const SEO: FC = () => {
  return (
    <div className="bg-[var(--bgnew)] text-[var(--text)]">
      <Navbar />

      <div className="container md:px-10 mb-32">
        <div className="flex flex-col pt-32 md:pt-40">
          <h1 className="mb-10 py-2 text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to bg-purple-500 bg-opacity-50">
            Search Engine Optimization (SEO) Services
          </h1>
          <p className="mt-3 text-lg md:text-xl max-w-2xl text-left text-[var(--gray-blue)] light:text-[var(--gray-40)]">
            Increase your online visibility and drive more traffic to your
            website with our expert SEO services. Our SEO services focus on
            improving your website&apos;s visibility on search engines like
            Google, helping potential customers find you when they&apos;re
            searching for your products or services.
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
              What is SEO and Why Does It Matter?
            </h2>
            <p className="text-lg mb-6 text-[var(--gray-blue)] light:text-[var(--gray-40)]">
              SEO, or Search Engine Optimization, is the practice of improving
              your website&apos;s visibility on search engines like Google. When
              people search for products or services that you offer, you want
              your website to appear at the top of the results. SEO helps make
              that happen.
            </p>
            <h2 className="text-lg md:text-xl font-semibold mb-6 text-[var(--light-blue)] light:text-[var(--gray-70)]">
              By optimizing your website for search engines, you can increase:
            </h2>
            <div className="flex flex-col sm:flex-row md:flex-col gap-2 xl:flex-row justify-between items-center mb-6 text-lg text-[var(--gray-blue)] light:text-[var(--gray-40)]">
              <div className="w-full inline-block bg-gradient-to-r from-sky-400 to-purple-500 p-[1px] rounded-full">
                <span className="min-w-[148px] whitespace-nowrap w-full block bg-white dark:bg-black rounded-full px-4 py-3 text-center text-lg font-semibold">
                  visibility
                </span>
              </div>
              <div className="w-full inline-block bg-gradient-to-r from-sky-400 to-purple-500 p-[1px] rounded-full">
                <span className="min-w-[148px] whitespace-nowrap w-full text-center block bg-white dark:bg-black  rounded-full px-4 py-3 text-lg font-semibold">
                  traffic
                </span>
              </div>
              <div className="w-full inline-block bg-gradient-to-r from-sky-400 to-purple-500 p-[1px] rounded-full">
                <span className="min-w-[148px] whitespace-nowrap w-full text-center block bg-white dark:bg-black  rounded-full px-4 py-3 text-lg font-semibold">
                  user experience
                </span>
              </div>
            </div>
            {/* <p className="text-lg text-[var(--gray-blue)] light:text-[var(--gray-40)]">
              A well-defined strategy is essential for the growth and
              sustainability of any business.
            </p> */}
          </div>
          <div className="relative w-full h-64 md:h-96">
            <Image
              src="/images/seo-hero.jpg"
              alt="seo explanation"
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

export default SEO;
