import { FC } from "react";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Navbar from "@/components/navbar";
import CalendlyWidget from "@/components/CalendlyWidget";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;

  const t = await getTranslations({ locale, namespace: "book" });

  return {
    title: t("title") || "Book a meeting",
    description:
      t("description") ||
      "Let's talk! We're here to help you grow your business. Reach out to us for any inquiries, and we'll get back to you as soon as possible.",
  };
}

const Book: FC<{ params: { locale: string } }> = async ({
  params: { locale },
}) => {
  const t = await getTranslations({ locale, namespace: "book" });

  return (
    <>
      <div className="flex flex-col w-full  h-screen bg-[var(--bg-96)] bg-grid-white/[0.02]">
        <Navbar />
        <div
          className="text-4xl mt-36 pb-5 md:text-6xl text-center 
        bg-clip-text text-[var(--text-label)] *text-transparent* bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
        >
          <h1>{t("title")}</h1>
        </div>

        <CalendlyWidget />
      </div>
    </>
  );
};

export default Book;
