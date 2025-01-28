import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { FC } from "react";
import en from "@/i18n/messages/en.json";
import Image from "next/image";
import { Link } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;

  const t = await getTranslations({
    locale,
    namespace: "portfolio",
  });

  return {
    title: t("title") || "Our Works",
    description:
      t("description") ||
      "With a proven track record across diverse industries, our expertise knows no bounds. We excel in adapting to unique challenges and delivering exceptional results in any sector. By leveraging our deep understanding and valuable insights, we provide tailored solutions that elevate every project we undertake.",
  };
}

const workItems = en.portfolio.items.map((item, index) => ({
  image: `/images/portfolio/${item.imageTitle}.png`,
  url: `${item.url}`,
}));

const Portfolio: FC<{ params: { locale: string } }> = async ({
  params: { locale },
}) => {
  const t = await getTranslations({ locale, namespace: "portfolio" });

  return (
    <div className="bg-[var(--bgnew)] light:bg-white text-[var(--light-blue)] light:text-[var(--gray-70)]">
      <Navbar />

      <div className="container md:px-10 mb-32">
        <div className="flex flex-col pt-32 md:pt-40">
          <h1 className="mb-10 py-2 text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to bg-purple-500 bg-opacity-50">
            {t("title")}
          </h1>
          <p className="mt-3 text-lg md:text-xl max-w-2xl text-left text-[var(--gray-blue)] light:text-[var(--gray-40)]">
            {t("description")}
          </p>
        </div>
      </div>

      <div className="container md:px-10 mb-32">
        <div className="grid grid-cols-1 #md:grid-cols-2 lg:grid-cols-2 gap-5">
          {workItems.map((item) => (
            <Link key={item.url} href={item.url} target="_blank">
              <div className="relative overflow-hidden w-full h-64 md:h-[560px] rounded-2xl">
                <Image
                  src={item.image}
                  alt={item.image}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl transition duration-500 hover:scale-110"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Portfolio;
