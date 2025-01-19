import { FC } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ContactBlock from "../../../components/contactBlock";
import SubscriptionForm from "../../../components/subscription";
import { getTranslations } from "next-intl/server";
import PostList from "@/components/PostList";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;

  const t = await getTranslations({ locale, namespace: "blog" });

  return {
    title: t("title") || "The Clicks Blog",
    description:
      t("text") ||
      "Stay updated with the latest insights, tips, and trends in digital marketing. Our blog is your go-to resource for all things marketing.", // Fallback to default description
  };
}

const Blog: FC<{ params: { locale: string } }> = async ({
  params: { locale },
}) => {
  const t = await getTranslations({ locale, namespace: "blog" });

  return (
    <div className="bg-[var(--bgnew)] text-[var(--text)]">
      <Navbar />

      {/* Header Section */}
      <div className="pt-32 md:pt-40 bg-[var(--blue1)] light:bg-[var(--ice-blue)] #bg-gradient-to-b from-sky-400 to-purple-500 py-20 text-center">
        <h1 className="py-4 text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to bg-purple-500 bg-opacity-50">
          {t("title")}
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-[var(--gray-blue)] light:text-[var(--gray-40)]">
          {t("text")}
        </p>
      </div>

      <PostList locale={locale} />

      <SubscriptionForm />

      <ContactBlock />

      <Footer />
    </div>
  );
};

export default Blog;
