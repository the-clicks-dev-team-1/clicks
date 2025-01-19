import { FC } from "react";
import { getTranslations } from "next-intl/server";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const Licensing: FC<{ params: { locale: string } }> = async ({
  params: { locale },
}) => {
  const t = await getTranslations({ locale, namespace: "licensing" });
  const c = await getTranslations({ locale, namespace: "contactForm" });
  const f = await getTranslations({ locale, namespace: "fields" });

  return (
    <div className="bg-[var(--bgnew)] light:bg-white text-[var(--light-blue)] light:text-[var(--gray-70)]">
      <Navbar />

      <div className="bg-[var(--blue1)] light:bg-[var(--light-blue)] #bg-gradient-to-b from-sky-400 to-purple-500 py-20 text-center">
        <h1 className="text-4xl mt-10 pb-10 md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to bg-purple-500 bg-opacity-50">
          {t("title")}
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-[var(--gray-blue)] light:text-[var(--gray-40)]">
          {t("description")}
        </p>
      </div>

      <div className="py-20 px-4 md:px-20 lg:px-40 max-w-7xl mx-auto">
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">{t("overview.title")}</h2>
          <p className="text-[var(--gray-blue)] light:text-[var(--gray-40)]">
            {t("overview.description")}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">
            {t("intellectualProperty.title")}
          </h2>
          <p className="text-[var(--gray-blue)] light:text-[var(--gray-40)]">
            {t("intellectualProperty.description")}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">
            {t("thirdParty.title")}
          </h2>
          <p className="text-[var(--gray-blue)] light:text-[var(--gray-40)]">
            {t("thirdParty.description")}
          </p>
          <ul className="list-disc list-inside mt-4 text-[var(--gray-blue)] light:text-[var(--gray-40)]">
            <li>{t("thirdParty.list.0")}</li>
            <li>{t("thirdParty.list.1")}</li>
            <li>{t("thirdParty.list.2")}</li>
            {/* Добавьте другие лицензии и третьи стороны, если необходимо */}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">
            {t("compliance.title")}
          </h2>
          <p className="text-[var(--gray-blue)] light:text-[var(--gray-40)]">
            {t("compliance.description")}
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4 text-[var(--light-blue)] light:text-[var(--gray-70)]">
            {t("contact.title")}
          </h2>
          <p className="text-[var(--gray-blue)] light:text-[var(--gray-40)]">
            {t("contact.description")}
          </p>
          <p className="mt-4 text-[var(--gray-blue)] light:text-[var(--gray-40)]">
            <strong>{f("email")}:</strong>{" "}
            <a href="mailto:info@theclicks.ca" className="text-sky-400">
              {c("contact.email")}
            </a>
          </p>
          <p className="mt-2 text-[var(--gray-blue)] light:text-[var(--gray-40)]">
            <strong>{f("phone")}:</strong> {c("contact.phone")}
          </p>
          <p className="mt-2 text-[var(--gray-blue)] light:text-[var(--gray-40)]">
            <strong>{f("address")}:</strong> {c("contact.fullAddress")}
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Licensing;
