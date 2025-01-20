import { FC } from "react";
import { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import ContactBlock from "@/components/contactBlock";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import TeamSection from "@/components/TeamSection";
import TextBlock from "@/components/text-block";
import { Link } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;

  const t = await getTranslations({ locale, namespace: "aboutAgency" });

  return {
    title: t("title") || "About The Clicks",
    description:
      t("description1") ||
      "At The Clicks, we don't just focus on enhancing your website's visibility; we partner with you to drive meaningful results that positively impact your bottom line. Our commitment to delivering tangible business outcomes is what sets us apart in the digital marketing landscape.",
  };
}

const AboutAgency: FC<{ params: { locale: string } }> = async ({
  params: { locale },
}) => {
  const t = await getTranslations({ locale, namespace: "aboutAgency" });
  return (
    <div className="bg-[var(--bgnew)] text-[var(--text)]">
      <Navbar />

      {/* Main content wrapper */}
      <div className="container md:px-10">
        {/* Header Section */}
        <div className="bg-[var(--bgnew)] py-32 md:pt-40">
          <div className="flex flex-col gap-8 mt-10 md:flex-row items-center justify-center">
            <div className="w-full md:w-1/2 flex-1 text-center md:text-left">
              <div className="mb-10 text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-sky-400 to bg-purple-500 bg-opacity-50">
                <h1>{t("title")}</h1>
              </div>
              <div className="w-full md:hidden overflow-hidden flex-1 rounded-2xl">
                <Image
                  src="/images/office.jpeg"
                  alt="Marketing Wave"
                  width={600}
                  height={400}
                  className="object-cover rounded-2xl w-full"
                  priority
                />
              </div>
              <p className="mt-4 text-sm md:text-m font-normal text-[var(--gray-blue)] light:text-[var(--gray-40)] text-justify">
                {t("description1")}
              </p>
              <p className="mt-4 text-sm md:text-m font-normal text-[var(--gray-blue)] light:text-[var(--gray-40)] text-justify">
                {t("description2")}
              </p>

              <div className="mt-6 md:mt-8 flex justify-center md:justify-start relative z-20">
                <Link
                  href="/contact"
                  className="inline-block bg-[var(--ocean-blue)] #bg-gradient-to-r from-sky-400 to-purple-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-opacity-75 transition duration-300"
                >
                  {t("cta")}
                </Link>
              </div>
            </div>

            <div className="hidden md:block w-full md:w-1/2 overflow-hidden flex-1 rounded-2xl">
              <Image
                src="/images/office.jpeg"
                alt="Marketing Wave"
                width={600}
                height={400}
                className="object-cover rounded-2xl w-full"
                priority
              />
            </div>
          </div>
        </div>

        {/* The Clicks Culture Section */}
        <div className="bg-[var(--bgnew)] text-[var(--text)] mb-32">
          {/* Culture Items */}
          <div className="space-y-12">
            {/* Culture Item 1 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <h2 className="md:hidden text-2xl sm:text-3xl md:text-4xl place-self-start bg-clip-text text-transparent bg-gradient-to-b from-sky-400 to bg-purple-500 bg-opacity-50">
                {t("culture")}
              </h2>
              <div className="w-full md:w-1/2">
                <Image
                  src="/images/standup.jpeg"
                  alt="Culture Image 1"
                  width={600}
                  height={400}
                  className="object-cover rounded-2xl w-full"
                />
              </div>
              <div className="w-full md:w-1/2 text-left text-[var(--light-blue)] light:text-[var(--gray-70)]">
                <h2 className="hidden md:block mb-10 text-2xl sm:text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-sky-400 to bg-purple-500 bg-opacity-50">
                  {t("culture")}
                </h2>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {t("about.title")}
                </h3>
                <p className="text-[var(--gray-blue)] light:text-[var(--gray-40)] text-sm md:text-m pb-6 text-justify">
                  {t("about.description1")}
                </p>
                <p className="text-[var(--gray-blue)] light:text-[var(--gray-40)] text-sm md:text-m pb-6 text-justify">
                  {t("about.description2")}
                </p>
              </div>
            </div>

            {/* Culture Item 2 */}
            <div className="flex flex-col md:flex-row items-center gap-8 text-[var(--light-blue)] light:text-[var(--gray-70)]">
              <div className="w-full md:w-1/2 text-left order-2 md:order-1">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {t("team.title")}
                </h3>
                <p className="text-[var(--gray-blue)] light:text-[var(--gray-40)] text-sm md:text-m pb-6 text-justify">
                  {t("team.description1")}
                </p>
                <p className="text-[var(--gray-blue)] light:text-[var(--gray-40)] text-sm md:text-m pb-6 text-justify">
                  {t("team.description2")}
                </p>
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2">
                <Image
                  src="/images/break.jpeg"
                  alt="Culture Image 2"
                  width={600}
                  height={400}
                  className="object-cover rounded-2xl w-full"
                />
              </div>
            </div>

            {/* Culture Item 3 */}
            <div className="flex flex-col md:flex-row items-center gap-8 text-[var(--light-blue)] light:text-[var(--gray-70)]">
              <div className="w-full md:w-1/2">
                <Image
                  src="/images/respect.jpeg"
                  alt="Culture Image 3"
                  width={600}
                  height={400}
                  className="object-cover rounded-2xl w-full"
                />
              </div>
              <div className="w-full md:w-1/2 text-left">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {t("workProcess.title")}
                </h3>
                <p className="text-[var(--gray-blue)] light:text-[var(--gray-40)] text-sm md:text-m pb-6 text-justify">
                  {t("workProcess.description1")}
                </p>
                <p className="text-[var(--gray-blue)] light:text-[var(--gray-40)] text-sm md:text-m pb-6 text-justify">
                  {t("workProcess.description2")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Values Section */}
        <TextBlock />

        <TeamSection />

        {/* <div className="relative w-full aspect-video">
          <iframe
            src="https://kuula.co/share/hpsvv/collection/7XkRW?logo=1&info=1&fs=1&vr=1&zoom=1&autorotate=0.3&thumbs=1&alpha=0.60"
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allowFullScreen
            allow="vr,gyroscope,accelerometer,fullscreen"
            loading="lazy"
          />
        </div> */}
      </div>
      <ContactBlock />
      <Footer />
    </div>
  );
};

export default AboutAgency;
