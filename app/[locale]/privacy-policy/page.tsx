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

  const t = await getTranslations({ locale, namespace: "privacyPolicy" });

  return {
    title: t("title") || "Privacy Policy",
    description:
      t("metaDesc") ||
      "This Privacy Policy explains how The Clicks Full-Service Digital Marketing Agency collects, uses, and discloses your information.",
  };
}

const PrivacyPolicy: FC<{ params: { locale: string } }> = async ({
  params: { locale },
}) => {
  const t = await getTranslations({ locale, namespace: "privacyPolicy" });
  const f = await getTranslations({ locale, namespace: "fields" });
  const c = await getTranslations({ locale, namespace: "contactForm.contact" });

  const sections = Object.keys(t.raw("sections"));

  const renderItems = (sectionNumber: string) => {
    try {
      const items = t.raw(
        `sections.${sectionNumber}.items`
      ) as unknown as string[];

      if (items && Array.isArray(items) && items.length > 0) {
        return (
          <ul className="list-disc list-inside mt-4 text-[var(--gray-blue)] light:text-[var(--gray-40)]">
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        );
      }
    } catch {
      return null; // if there are no items
    }
  };

  const renderContact = (sectionNumber: string) => {
    try {
      const contact = t.raw(
        `sections.${sectionNumber}.contact`
      ) as unknown as Record<string, string>;

      if (contact && typeof contact === "object") {
        return (
          <div className="text-[var(--gray-blue)] light:text-[var(--gray-40)]">
            <p className="mt-4">
              <strong>{f("email")}:</strong>{" "}
              <a href={`mailto:${c("email")}`} className="text-sky-400">
                {c("email")}
                {/* {contact.email} */}
              </a>
            </p>
            <p className="mt-2">
              <strong>{f("phone")}:</strong> {c("phone")}
            </p>
            <p className="mt-2">
              <strong>{f("address")}:</strong> {c("fullAddress")}
            </p>
          </div>
        );
      }
    } catch {
      return null;
    }
  };

  return (
    <div className="bg-[var(--bgnew)] text-[var(--light-blue)] light:text-[var(--gray-70)]">
      <Navbar />

      <div className="bg-[var(--blue1)] light:bg-[var(--light-blue)] py-20 text-center">
        <h1 className="text-4xl mt-10 md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to bg-purple-500 bg-opacity-50">
          {t("title")}
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-[var(--gray-blue)] light:text-[var(--gray-40)]">
          {t("subtitle")}
        </p>
      </div>

      <div className="py-20 px-4 md:px-20 lg:px-40 max-w-7xl mx-auto">
        {sections.map((sectionNumber) => (
          <section key={sectionNumber} className="mb-10">
            <h2 className="text-3xl font-semibold mb-4">
              {t(`sections.${sectionNumber}.title`)}
            </h2>
            <p className="text-[var(--gray-blue)] light:text-[var(--gray-40)]">
              {t(`sections.${sectionNumber}.content`)}
            </p>
            {renderItems(sectionNumber)}
            {renderContact(sectionNumber)}
          </section>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
