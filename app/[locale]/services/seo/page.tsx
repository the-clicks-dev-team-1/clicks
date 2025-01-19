import { FC } from "react";
import { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import ContactBlock from "@/components/contactBlock";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ServiceCard from "@/components/ServiceCard";
import en from "@/i18n/messages/en.json";

export const metadata: Metadata = {
  title: "Search Engine Optimization (SEO) Services",
  description:
    "Increase your online visibility and drive more traffic to your website with our expert SEO services",
};

const servicesItems2 = [
  {
    count: "01",
    image: "/images/Group1.png",
    title: "On-Page SEO",
    description:
      "We optimize your website's content, meta tags, and structure to ensure it's search engine friendly.",
  },
  {
    count: "02",
    image: "/images/Group3.png",
    title: "Off-Page SEO",
    description:
      "Our off-page SEO strategies focus on building high-quality backlinks to boost your site's authority.",
  },
  {
    count: "03",
    image: "/images/Group4.png",
    title: "Technical SEO",
    description:
      "We improve your website's technical aspects, such as page speed and mobile-friendliness, to enhance its search engine performance.",
  },
  {
    count: "04",
    image: "/images/Group5.png",
    title: "Local SEO",
    description:
      "We help your business rank higher in local search results, making it easier for local customers to find you.",
  },
  {
    count: "05",
    image: "/images/Group6.png",
    title: "E-commerce SEO",
    description:
      "Our e-commerce SEO services are designed to drive traffic to your online store and increase sales.",
  },
  {
    count: "06",
    image: "/images/Group7.png",
    title: "SEO Audits",
    description:
      "We perform comprehensive SEO audits to identify areas for improvement and optimize your site for better performance.",
  },
];

const servicesItems = en.services.seo.items.map((_, index) => ({
  count: `0${index + 1}`,
  image: `/images/Group${index + 1}.png`,
  title: `items.${index}.title`,
  description: `items.${index}.description`,
}));

const SEO: FC<{ params: { locale: string } }> = async ({
  params: { locale },
}) => {
  const t = await getTranslations({ locale, namespace: "services.seo" });

  return (
    <div className="bg-[var(--bgnew)] text-[var(--text)]">
      <Navbar />

      <div className="container md:px-10 mb-32">
        <div className="flex flex-col pt-32 md:pt-40">
          <h1 className="mb-10 py-2 text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to bg-purple-500 bg-opacity-50">
            {t("mainSection.title")}
          </h1>
          <p className="mt-3 text-lg md:text-xl max-w-2xl text-left text-[var(--gray-blue)] light:text-[var(--gray-40)]">
            {t("mainSection.description")}
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
              title={t(item.title)}
              description={t(item.description)}
            />
          ))}
        </div>
      </div>

      {/* Introduction section */}
      <div className="container md:px-10 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[var(--light-blue)] light:text-[var(--gray-70)]">
              {t("what.title")}
            </h2>
            <p className="text-lg mb-6 text-[var(--gray-blue)] light:text-[var(--gray-40)]">
              {t("what.description")}
            </p>
            <h2 className="text-lg md:text-xl font-semibold mb-6 text-[var(--light-blue)] light:text-[var(--gray-70)]">
              {t("why.title")}
            </h2>
            <div className="flex flex-col sm:flex-row md:flex-col gap-2 xl:flex-row justify-between items-center mb-6 text-lg text-[var(--gray-blue)] light:text-[var(--gray-40)]">
              <div className="w-full inline-block bg-gradient-to-r from-sky-400 to-purple-500 p-[1px] rounded-full">
                <span className="min-w-[148px] whitespace-nowrap w-full block bg-white dark:bg-black rounded-full px-4 py-3 text-center text-lg font-semibold">
                  {t("why.benefitsList.0")}
                </span>
              </div>
              <div className="w-full inline-block bg-gradient-to-r from-sky-400 to-purple-500 p-[1px] rounded-full">
                <span className="min-w-[148px] whitespace-nowrap w-full text-center block bg-white dark:bg-black  rounded-full px-4 py-3 text-lg font-semibold">
                  {t("why.benefitsList.1")}
                </span>
              </div>
              <div className="w-full inline-block bg-gradient-to-r from-sky-400 to-purple-500 p-[1px] rounded-full">
                <span className="min-w-[148px] whitespace-nowrap w-full text-center block bg-white dark:bg-black  rounded-full px-4 py-3 text-lg font-semibold">
                  {t("why.benefitsList.2")}
                </span>
              </div>
            </div>
            {/* <p className="text-lg text-[var(--gray-blue)] light:text-[var(--gray-40)]">
                           {t("why.description")}
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

      <ContactBlock consultation={t("contactFormMessage")} />

      <Footer />
    </div>
  );
};

export default SEO;
