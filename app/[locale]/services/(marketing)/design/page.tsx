import { FC } from "react";
import { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import ContactBlock from "@/components/contactBlock";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ServiceCard from "@/components/ServiceCard";
import en from "@/i18n/messages/en.json";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;

  const t = await getTranslations({
    locale,
    namespace: "services.design.mainSection",
  });

  return {
    title: t("title") || "Graphic Design Services",
    description:
      t("description") ||
      "Elevate your brand with stunning visuals and creative graphic design solutions tailored to your needs",
  };
}

const servicesItems = en.services.design.items.map((_, index) => ({
  count: `0${index + 1}`,
  image: `/images/Group${index + 1}.png`,
  title: `items.${index}.title`,
  description: `items.${index}.description`,
}));

const GraphicDesign: FC<{ params: { locale: string } }> = async ({
  params: { locale },
}) => {
  const t = await getTranslations({ locale, namespace: "services.design" });

  return (
    <div className="bg-[var(--bgnew)] text-[var(--text)]">
      <Navbar />

      {/* Introduction section */}
      <div className="container md:px-10 mb-32 pt-32 md:pt-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="mb-10">
              <div className="flex flex-col">
                <h1 className="pb-[5px] text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to bg-purple-500 bg-opacity-50">
                  {t("mainSection.title")}
                </h1>
                <p className="mt-2 text-lg md:text-xl max-w-2xl text-left text-[var(--gray-blue)] light:text-[var(--gray-40)]">
                  {t("mainSection.description")}
                </p>
              </div>
            </div>
            {/* <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-[var(--light-blue)] light:text-[var(--gray-70)]">
              {t("what.title")}
            </h2>
            <p className="text-lg mb-6 text-[var(--gray-blue)] light:text-[var(--gray-40)]">
              {t("what.description")}
            </p> */}
            <h2 className="text-lg md:text-xl font-semibold mb-2 text-[var(--light-blue)] light:text-[var(--gray-70)]">
              {t("why.title")}
            </h2>

            {/* <div className="flex flex-col sm:flex-row md:flex-col gap-2 xl:flex-row justify-between mb-6 text-lg text-[var(--gray-blue)] light:text-[var(--gray-40)]">
              <div className="flex-1 flex">
                <div className="h-full w-full inline-block bg-gradient-to-r from-sky-400 to-purple-500 p-[1px] rounded-full">
                  <span className="h-full min-w-[148px] w-full flex items-center justify-center text-center block bg-white dark:bg-black rounded-full px-4 py-3 text-lg font-semibold">
                    {t("why.benefitsList.0")}
                  </span>
                </div>
              </div>

              <div className="flex-1 flex">
                <div className="h-full w-full inline-block bg-gradient-to-r from-sky-400 to-purple-500 p-[1px] rounded-full">
                  <span className="h-full min-w-[148px] w-full flex items-center justify-center text-center block bg-white dark:bg-black rounded-full px-4 py-3 text-lg font-semibold">
                    {t("why.benefitsList.1")}
                  </span>
                </div>
              </div>

              <div className="flex-1 flex">
                <div className="h-full w-full inline-block bg-gradient-to-r from-sky-400 to-purple-500 p-[1px] rounded-full">
                  <span className="h-full min-w-[148px] w-full flex items-center justify-center text-center block bg-white dark:bg-black rounded-full px-4 py-3 text-lg font-semibold">
                    {t("why.benefitsList.2")}
                  </span>
                </div>
              </div>
            </div> */}

            <p className="text-lg text-[var(--gray-blue)] light:text-[var(--gray-40)]">
              {t("why.description")}
            </p>
          </div>
          <div className="relative w-full h-96 md:h-full md:max-h-[800px]">
            <Image
              src="/images/gd.jpg"
              alt="Graphic Design Explanation"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-2xl object-cover"
              priority
              quality={90}
            />
          </div>
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

      <ContactBlock consultation={t("contactFormMessage")} />

      <Footer />
    </div>
  );
};

export default GraphicDesign;
