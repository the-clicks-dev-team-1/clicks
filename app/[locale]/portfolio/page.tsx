import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { FC } from "react";
import { CardHoverEffectPortfolio } from "@/components/ui/card-hover-effect-portfolio";

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

      <CardHoverEffectPortfolio />

      <Footer />
    </div>
  );
};

export default Portfolio;
