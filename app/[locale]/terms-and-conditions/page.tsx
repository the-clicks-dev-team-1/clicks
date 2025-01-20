import { FC } from "react";
import { getTranslations } from "next-intl/server";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;

  const t = await getTranslations({ locale, namespace: "terms" });

  return {
    title: t("title") || "Terms & Conditions",
    description:
      t("subtitle") ||
      'Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using The Clicks Full-Service Digital Marketing Agency website.',
  };
}

const TermsAndConditions: FC<{ params: { locale: string } }> = async ({
  params: { locale },
}) => {
  const t = await getTranslations({ locale, namespace: "terms" });
  const f = await getTranslations({ locale, namespace: "fields" });
  const c = await getTranslations({ locale, namespace: "contactForm.contact" });

  const sections = Object.keys(t.raw("sections"));

  return (
    <div className="bg-black light:bg-white text-white">
      <Navbar />

      <div className="bg-[var(--blue1)] light:bg-[var(--light-blue)] #bg-gradient-to-b from-sky-400 to-purple-500 py-20 text-center">
        <h1 className="text-4xl mt-10 md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to bg-purple-500 bg-opacity-50">
          {t("title")}
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-[var(--gray-blue)] light:text-[var(--gray-40)]">
          {t("subtitle")}
        </p>
      </div>

      <div className="py-20 px-4 md:px-20 lg:px-40 max-w-7xl mx-auto text-[var(--light-blue)] light:text-[var(--gray-70)]">
        {/* all sections except the last one (Contact) */}
        {sections.slice(0, -1).map((section, index) => (
          <section key={index} className="mb-10">
            <h2 className="text-3xl font-semibold mb-4">
              {t(`sections.${index}.title`)}
            </h2>
            <p className="text-[var(--gray-blue)] light:text-[var(--gray-40)]">
              {t(`sections.${index}.content`)}
            </p>
          </section>
        ))}

        <section>
          <h2 className="text-3xl font-semibold mb-4">
            {t(`sections.${sections.length - 1}.title`)}
          </h2>
          <p className="text-[var(--gray-blue)] light:text-[var(--gray-40)]">
            {t(`sections.${sections.length - 1}.content`)}
          </p>
          <p className="mt-4 text-[var(--gray-blue)] light:text-[var(--gray-40)]">
            <strong>{f("email")}:</strong>{" "}
            <a href={`mailto:${c("email")}`} className="text-sky-400">
              {c("email")}
            </a>
          </p>
          <p className="mt-2 text-[var(--gray-blue)] light:text-[var(--gray-40)]">
            <strong>{f("phone")}:</strong> {c("phone")}
          </p>
          <p className="mt-2 text-[var(--gray-blue)] light:text-[var(--gray-40)]">
            <strong>{f("address")}:</strong> {c("fullAddress")}
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
