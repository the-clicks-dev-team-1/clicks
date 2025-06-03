import { FC } from "react";
import { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import Navbar from "@/components/navbar";
import ReviewsSlider from "@/components/ReviewsSlider";
import { Link } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;

  const t = await getTranslations({
    locale,
    namespace: "services.webdev.mainSection",
  });

  return {
    title: t("title") || "Web Development Services",
    description:
      t("description") ||
      "We build websites that not only look stunning but are also optimized for performance, scalability, and user experience",
  };
}

const WebDevelopment: FC<{ params: { locale: string } }> = async ({
  params: { locale },
}) => {
  const t = await getTranslations({ locale, namespace: "landings.websites" });

  return (
    <div className="bg-[var(--bgnew)] text-[var(--text)]">
      <Navbar />

      {/* Introduction section */}
      <div className="container md:px-10 mb-[64px] md:mb-[80px] lg:mb-[100px] pt-32 md:pt-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="mb-10">
              <div className="flex flex-col text-center lg:text-left">
                <h1 className="pb-8 md:text-5xl bg-clip-text text-black bg-gradient-to-r text-[48px] md:text-[64px] leading-[52px] md:leading-[70px] font-semibold">
                  {t("hero.title")}
                </h1>
                <p className="text-lg text-[#666368] light:text-[#666368] text-[24px] leading-[28px] font-[400]">
                  {t("hero.description")}
                </p>
              </div>
              <div className="flex justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="mt-8 rounded-[30px] bg-[#251F1F] text-white px-10 py-[16px] text-[16px] font-400"
                >
                  {t("hero.cta")}
                </Link>
              </div>
            </div>
          </div>
          <div className="relative w-full aspect-square">
            <Image
              src="/images/landings/hero-websites.png"
              alt="Web Development"
              fill
              className="object-cover"
              priority
              quality={90}
            />
          </div>
        </div>
      </div>

      {/* Why section */}
      <div className="container md:px-10 mb-[128px] lg:mb-[160px] mb-[128px]">
        <div className="pb-[5px] text-[36px] md:text-[48px] bg-clip-text text-black bg-gradient-to-r leading-[40px] md:leading-[52px] font-[600] text-center">{t("why.title")}</div>
        <div className="mt-4 text-[16px] md:text-[24px] max-w-2xl text-[#666368] light:text-[#666368] text-center mx-auto leading-[20px] md:leading-[28px] font-[400] mb-12">{t("why.text")}</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="flex flex-col items-center justify-center relative bg-gradient-to-r from-[#E5F1FF] to-[#DCE5FD] border-2 border-white rounded-lg p-6 shadow-[0px_0px_6px_rgba(0,0,0,0.15)]">
            <div className="text-[24px] leading-[28px] font-[600] text-[#241E2A] mb-2">{t("why.items.0.title")}</div>
            <div className="flex-1 text-[16px] leading-[18px] font-[400] text-[#666368]">{t("why.items.0.description")}</div>
            <Image src="/images/landings/why-websites-1.png" alt="Reason Logo" width={302} height={202} />
            <Image src="/images/landings/why-grid.svg" alt="Grid Bg" className="absolute top-[50%] -translate-y-1/2 left-0 w-full h-full right-0 z-0" width={400} height={400} />
          </div>
          <div className="flex flex-col items-center justify-center relative bg-gradient-to-r from-[#F6EAF8] to-[#EAD9FB] border-2 border-white rounded-lg p-6 shadow-[0px_0px_6px_rgba(0,0,0,0.15)]">
            <div className="text-[24px] leading-[28px] font-[600] text-[#241E2A] mb-2">{t("why.items.1.title")}</div>
            <div className="flex-1 text-[16px] leading-[18px] font-[400] text-[#666368]">{t("why.items.1.description")}</div>
            <Image src="/images/landings/why-websites-2.png" alt="Reason Logo" width={302} height={202} />
            <Image src="/images/landings/why-grid.svg" alt="Grid Bg" className="absolute top-[50%] -translate-y-1/2 left-0 w-full h-full right-0 z-0" width={400} height={400} />
          </div>
          <div className="flex flex-col items-center justify-center relative bg-gradient-to-r from-[#FDEFE6] to-[#F5E0DF] border-2 border-white rounded-lg p-6 shadow-[0px_0px_6px_rgba(0,0,0,0.15)]">
            <div className="text-[24px] leading-[28px] font-[600] text-[#241E2A] mb-2">{t("why.items.2.title")}</div>
            <div className="flex-1 text-[16px] leading-[18px] font-[400] text-[#666368]">{t("why.items.2.description")}</div>
            <Image src="/images/landings/why-websites-3.png" alt="Reason Logo" className="relative z-10" width={302} height={202} />
            <Image src="/images/landings/why-grid.svg" alt="Grid Bg" className="absolute top-[50%] -translate-y-1/2 left-0 w-full h-full right-0 z-0" width={400} height={400} />
          </div>
          <div className="flex flex-col items-center justify-center relative bg-gradient-to-r from-[#FEFAEE] to-[#FDF7E1] border-2 border-white rounded-lg p-6 shadow-[0px_0px_6px_rgba(0,0,0,0.15)]">
            <div className="text-[24px] leading-[28px] font-[600] text-[#241E2A] mb-2">{t("why.items.3.title")}</div>
            <div className="flex-1 text-[16px] leading-[18px] font-[400] text-[#666368]">{t("why.items.3.description")}</div>
            <Image src="/images/landings/why-websites-4.png" alt="Reason Logo" className="relative z-10" width={302} height={202} />
            <Image src="/images/landings/why-grid.svg" alt="Grid Bg" className="absolute top-[50%] -translate-y-1/2 left-0 w-full h-full right-0 z-0" width={400} height={400} />
          </div>
        </div>
      </div>

      {/* Work section */}
      <div className="container md:px-10 mb-[64px] md:mb-[80px] lg:mb-[100px]">
        <div className="pb-[5px] bg-clip-text text-black text-[36px] md:text-[48px] leading-[40px] md:leading-[52px] font-[600] text-center">{t("work.title")}</div>
        <div className="mt-4 max-w-2xl text-[#666368] light:text-[#666368] text-center mx-auto text-[16px] md:text-[24px] leading-[20px] md:leading-[28px] font-[400] mb-12">{t("why.text")}</div>
        <div className="flex flex-col lg:flex-row gap-8 bg-white rounded-2xl p-6 shadow-[0px_0px_6px_rgba(0,0,0,0.15)]">
          <div className="w-full lg:w-1/2">
            <div className="text-[32px] font-[600] mb-4 text-black">{t("work.items.0.title")}</div>
            <div className="text-[20px] md:text-[24px] font-[400] mb-4 text-[#666368]">{t("work.items.0.subtitle")}</div>
            <div className="text-[#666368] text-[16px] font-[400] mb-2">{t("work.items.0.text1")}</div>
            <div className="text-[#666368] text-[16px] font-[400] mb-2">{t("work.items.0.text2")}</div>
            <div className="text-[#666368] text-[16px] font-[400] mb-4">{t("work.items.0.text3")}</div>
            {/* <button className="underline text-[##241E2A] text-[16px] font-[400]">
              {t("work.cta")}
            </button> */}
          </div>
          <div className="w-full lg:w-1/2">
            <Image src="/images/landings/work-image.png" alt="Work Logo" width={576} height={592} />
          </div>
        </div>
      </div>

      {/* Reviews section */}
      <div className="container">
        <div className="relative overflow-x-hidden md:px-10 mb-64 md:mb-[80px] lg:mb-[100px] bg-gradient-to-r from-[#E5F1FF] to-[#DCE5FD] relative pt-[64px] md:pt-[80px] lg:pt-[100px] pb-[64px] md:pb-[80px] lg:pb-[100px] rounded-2xl">
          <Image src="/images/landings/reviews-bg.svg" alt="Reviews Bg" className="absolute top-0 left-0 w-full h-full" width={1920} height={1080} />
          <div className="pb-[5px] bg-clip-text text-black bg-gradient-to-r text-[48px] leading-[52px] font-[600] text-center">{t("reviews.title")}</div>
          <div className="mt-4 max-w-2xl text-[#666368] light:text-[#666368] text-center mx-auto mb-[64px] text-[24px] leading-[28px] font-[400]">{t("reviews.subtitle")}</div>
          <div className="relative z-10 lg:w-[2000px] left-1/2 -translate-x-1/2">
            <ReviewsSlider reviews={[
              {
                text: t("reviews.items.0.text"),
                position: t("reviews.items.0.position")
              },
              {
                text: t("reviews.items.1.text"),
                position: t("reviews.items.1.position")
              },
              {
                text: t("reviews.items.2.text"),
                position: t("reviews.items.2.position")
              }
            ]} />
          </div>
        </div>
      </div>

      <div className="container md:px-10 mb-[128px] lg:mb-[160px] md:mb-[180px] relative">
        <div className="flex flex-col lg:flex-row gap-8 justify-between">
          <div className="w-full lg:w-1/2 relative">
            <div className="lg:sticky top-[100px]">
              <div className="text-[36px] md:text-[48px] leading-[40px] md:leading-[52px] font-[600] mb-4 text-[#241E2A] mb-4">{t("steps.title")}</div>
              <div className="text-[16px] md:text-[24px] leading-[20px] md:leading-[28px] font-[400] mb-4 text-[#666368] text-[24px] leading-[28px] font-[400]">{t("steps.subtitle")}</div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <div className="flex flex-col bg-white rounded-2xl p-6 shadow-[0px_0px_6px_rgba(0,0,0,0.15)]">
              <div className="flex gap-4 mb-4 items-center">
                <div className="flex-1">
                  <div className="text-[32px] leading-[38px] font-[400] mb-[8px] text-[#241E2A]">{t("steps.items.0.title")}</div>
                  <div className="text-[20px] leading-[24px] font-[400] text-[#241E2A]">{t("steps.items.0.description")}</div>
                </div>
                <div>
                  <Image src="/images/landings/steps-1.png" alt="Steps 1" width={80} height={80} />
                </div>
              </div>
              <div className="text-[16px] leading-[18px] font-[400] text-[#666368]">{t("steps.items.0.text")}</div>
            </div>
            <div className="flex flex-col bg-white rounded-2xl p-6 shadow-[0px_0px_6px_rgba(0,0,0,0.15)]">
              <div className="flex gap-4 mb-4 items-center">
                <div className="flex-1">
                  <div className="text-[32px] leading-[38px] font-[400] mb-[8px] text-[#241E2A]">{t("steps.items.1.title")}</div>
                  <div className="text-[20px] leading-[24px] font-[400] text-[#241E2A]">{t("steps.items.1.description")}</div>
                </div>
                <div>
                  <Image src="/images/landings/steps-2.png" alt="Steps 1" width={80} height={80} />
                </div>
              </div>
              <div className="text-[16px] leading-[18px] font-[400] text-[#666368]">{t("steps.items.1.text")}</div>
            </div>
            <div className="flex flex-col bg-white rounded-2xl p-6 shadow-[0px_0px_6px_rgba(0,0,0,0.15)]">
              <div className="flex gap-4 mb-4 items-center">
                <div className="flex-1">
                  <div className="text-[32px] leading-[38px] font-[400] mb-[8px] text-[#241E2A]">{t("steps.items.2.title")}</div>
                  <div className="text-[20px] leading-[24px] font-[400] text-[#241E2A]">{t("steps.items.2.description")}</div>
                </div>
                <div>
                  <Image src="/images/landings/steps-3.png" alt="Steps 1" width={80} height={80} />
                </div>
              </div>
              <div className="text-[16px] leading-[18px] font-[400] text-[#666368]">{t("steps.items.2.text")}</div>
            </div>
            <div className="flex flex-col bg-white rounded-2xl p-6 shadow-[0px_0px_6px_rgba(0,0,0,0.15)]">
              <div className="flex gap-4 mb-4 items-center">
                <div className="flex-1">
                  <div className="text-[32px] leading-[38px] font-[400] mb-[8px] text-[#241E2A]">{t("steps.items.3.title")}</div>
                  <div className="text-[20px] leading-[24px] font-[400] text-[#241E2A]">{t("steps.items.3.description")}</div>
                </div>
                <div>
                  <Image src="/images/landings/steps-4.png" alt="Steps 1" width={80} height={80} />
                </div>
              </div>
              <div className="text-[16px] leading-[18px] font-[400] text-[#666368]">{t("steps.items.3.text")}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container md:px-10 mb-[128px] lg:mb-[160px] mb-[200px]">
        <div className="text-[36px] md:text-[48px] bg-clip-text text-black font-600 text-center text-[#241E2A] mb-4 leading-[40px] md:leading-[52px]">{t("pricing.title")}</div>
        <div className="max-w-2xl text-[#666368] text-center mx-auto text-[16px] md:text-[24px] leading-[20px] md:leading-[28px] font-[400] mb-12">{t("pricing.subtitle")}</div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="
            flex
            flex-col
            justify-center
            relative
            bg-gradient-to-r
            from-[#FDEFE6]
            to-[#F5E0DF]
            border-2
            border-white
            rounded-2xl
            max-w-[400px]
            px-[32px]
            py-[25px]
            mx-auto
            overflow-hidden
            shadow-[0px_0px_6px_rgba(0,0,0,0.15)]
          ">
            <Image src="/images/landings/plan-bg.svg" alt="Grid Bg" className="absolute top-0 left-0 z-0" width={503} height={754} />
            <div className="flex gap-4 items-center mb-4 relative z-10">
              <Image src="/images/landings/plan-starter.svg" alt="Plan Icon" className="" width={48} height={48} />
              <div className="text-[32px] leading-[38px] font-[600] text-[#241E2A]">{t("pricing.items.0.title")}</div>
            </div>
            <div className="text-[16px] leading-[18px] font-[400] text-[#666368] mb-4 relative z-10">{t("pricing.items.0.hint")}</div>
            <div className="flex gap-4 items-center mb-4 relative z-10">
              <div className="text-[24px] leading-[28px] font-[400] text-[#666368]">{t("from")}</div>
              <div className="text-[48px] leading-[52px] font-[600] text-[#241E2A]">$499</div>
            </div>
            <div className="text-[20px] leading-[24px] font-[400] text-[#241E2A] mb-4 relative z-10 text-left">{t("whatsIncluded")}</div>
            <div className="flex items-center gap-[12px] w-full mb-4 relative z-10">
              <Image src="/images/landings/check-icon.svg" alt="Check" className="w-4 h-4" width={20} height={20} />
              <div className="text-[16px] leading-[18px] font-[400] text-[#666368]">{t("pricing.items.0.included.0")}</div>
            </div>
            <div className="flex items-center gap-[12px] w-full mb-4 relative z-10">
              <Image src="/images/landings/check-icon.svg" alt="Check" className="w-4 h-4" width={20} height={20} />
              <div className="text-[16px] leading-[18px] font-[400] text-[#666368]">{t("pricing.items.0.included.1")}</div>
            </div>
            <div className="flex items-center gap-[12px] w-full mb-4 relative z-10">
              <Image src="/images/landings/check-icon.svg" alt="Check" className="w-4 h-4" width={20} height={20} />
              <div className="text-[16px] leading-[18px] font-[400] text-[#666368]">{t("pricing.items.0.included.2")}</div>
            </div>
            <div className="flex items-center gap-[12px] w-full mb-4 relative z-10">
              <Image src="/images/landings/check-icon.svg" alt="Check" className="w-4 h-4" width={20} height={20} />
              <div className="text-[16px] leading-[18px] font-[400] text-[#666368]">{t("pricing.items.0.included.3")}</div>
            </div>
            <Link
              href="/contact" 
              className="relative z-10 bg-[#241E2A] text-white px-[16px] py-[16px] rounded-[30px] text-[14px] leading-[14px] font-[400] text-center">{t("getStarted")}
            </Link>
          </div>
          <div className="
            flex
            flex-col
            justify-center
            relative
            bg-gradient-to-r
            from-[#E5F1FF]
            to-[#DCE5FD]
            border-2
            border-white
            rounded-2xl
            max-w-[400px]
            p-[32px]
            mx-auto
            overflow-hidden
            shadow-[0px_0px_6px_rgba(0,0,0,0.15)]
          ">
            <Image src="/images/landings/plan-bg.svg" alt="Grid Bg" className="absolute top-0 left-0 z-0" width={503} height={754} />
            <div className="flex gap-4 items-center mb-4 relative z-10 relative">
              <Image src="/images/landings/plan-business.svg" alt="Plan Icon" className="" width={48} height={48} />
              <div className="text-[32px] leading-[38px] font-[600] text-[#241E2A]">{t("pricing.items.1.title")}</div>
              <div className="absolute top-[50%] -translate-y-1/2 right-0 bg-white text-[#241E2A] px-[23px] py-[13px] rounded-lg text-[14px] leading-[14px] font-[400]">
                {t("popular")}
              </div>
            </div>
            <div className="text-[16px] leading-[18px] font-[400] text-[#666368] mb-4 relative z-10">{t("pricing.items.1.hint")}</div>
            <div className="flex gap-4 items-center mb-4 relative z-10">
              <div className="text-[24px] leading-[28px] font-[400] text-[#666368]">{t("from")}</div>
              <div className="text-[48px] leading-[52px] font-[600] text-[#241E2A]">$1,200</div>
            </div>
            <div className="text-[20px] leading-[24px] font-[400] text-[#241E2A] mb-4 relative z-10 text-left">{t("whatsIncluded")}</div>
            <div className="flex items-center gap-[12px] w-full mb-4 relative z-10">
              <Image src="/images/landings/check-icon.svg" alt="Check" className="w-4 h-4" width={20} height={20} />
              <div className="text-[16px] leading-[18px] font-[400] text-[#666368]">{t("pricing.items.1.included.0")}</div>
            </div>
            <div className="flex items-center gap-[12px] w-full mb-4 relative z-10">
              <Image src="/images/landings/check-icon.svg" alt="Check" className="w-4 h-4" width={20} height={20} />
              <div className="text-[16px] leading-[18px] font-[400] text-[#666368]">{t("pricing.items.1.included.1")}</div>
            </div>
            <div className="flex items-center gap-[12px] w-full mb-4 relative z-10">
              <Image src="/images/landings/check-icon.svg" alt="Check" className="w-4 h-4" width={20} height={20} />
              <div className="text-[16px] leading-[18px] font-[400] text-[#666368]">{t("pricing.items.1.included.2")}</div>
            </div>
            <div className="flex items-center gap-[12px] w-full mb-4 relative z-10">
              <Image src="/images/landings/check-icon.svg" alt="Check" className="w-4 h-4" width={20} height={20} />
              <div className="text-[16px] leading-[18px] font-[400] text-[#666368]">{t("pricing.items.1.included.3")}</div>
            </div>
            <Link
              href="/contact" 
              className="relative z-10 bg-[#241E2A] text-white px-[16px] py-[16px] rounded-[30px] text-[14px] leading-[14px] font-[400] text-center">{t("getStarted")}
            </Link>
          </div>
          <div className="
            flex
            flex-col
            justify-center
            relative
            bg-gradient-to-r
            from-[#F6EAF8]
            to-[#EAD9FB]
            border-2
            border-white
            max-w-[400px]
            rounded-2xl
            px-[32px]
            py-[25px]
            mx-auto
            overflow-hidden
            shadow-[0px_0px_6px_rgba(0,0,0,0.15)]
          ">
            <Image src="/images/landings/plan-bg.svg" alt="Grid Bg" className="absolute top-0 left-0 z-0" width={503} height={754} />
            <div className="flex gap-4 items-center mb-4 relative z-10">
              <Image src="/images/landings/plan-premium.svg" alt="Plan Icon" className="" width={48} height={48} />
              <div className="text-[32px] leading-[38px] font-[600] text-[#241E2A]">{t("pricing.items.2.title")}</div>
            </div>
            <div className="text-[16px] leading-[18px] font-[400] text-[#666368] mb-4 relative z-10">{t("pricing.items.2.hint")}</div>
            <div className="flex gap-4 items-center mb-4 relative z-10">
              <div className="text-[24px] leading-[28px] font-[400] text-[#666368]">{t("from")}</div>
              <div className="text-[48px] leading-[52px] font-[600] text-[#241E2A]">$2,500</div>
            </div>
            <div className="text-[20px] leading-[24px] font-[400] text-[#241E2A] mb-4 relative z-10 text-left">{t("whatsIncluded")}</div>
            <div className="flex items-center gap-[12px] w-full mb-4 relative z-10">
              <Image src="/images/landings/check-icon.svg" alt="Check" className="w-4 h-4" width={20} height={20} />
              <div className="text-[16px] leading-[18px] font-[400] text-[#666368]">{t("pricing.items.2.included.0")}</div>
            </div>
            <div className="flex items-center gap-[12px] w-full mb-4 relative z-10">
              <Image src="/images/landings/check-icon.svg" alt="Check" className="w-4 h-4" width={20} height={20} />
              <div className="text-[16px] leading-[18px] font-[400] text-[#666368]">{t("pricing.items.2.included.1")}</div>
            </div>
            <div className="flex items-center gap-[12px] w-full mb-4 relative z-10">
              <Image src="/images/landings/check-icon.svg" alt="Check" className="w-4 h-4" width={20} height={20} />
              <div className="text-[16px] leading-[18px] font-[400] text-[#666368]">{t("pricing.items.2.included.2")}</div>
            </div>
            <div className="flex items-center gap-[12px] w-full mb-4 relative z-10">
              <Image src="/images/landings/check-icon.svg" alt="Check" className="w-4 h-4" width={20} height={20} />
              <div className="text-[16px] leading-[18px] font-[400] text-[#666368]">{t("pricing.items.2.included.3")}</div>
            </div>
            <Link
              href="/contact" 
              className="relative z-10 bg-[#241E2A] text-white px-[16px] py-[16px] rounded-[30px] text-[14px] leading-[14px] font-[400] text-center">{t("getStarted")}
            </Link>
          </div>
        </div>
      </div>

      <div className="container md:px-10 mb-[64px] lg:mb-[80px] mb-[100px]">
        <div className="bg-gradient-to-r from-[#FEFAEE] to-[#FDF7E1] border-2 border-white rounded-2xl p-[48px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="">
              <div className="text-[36px] md:text-[48px] leading-[40px] md:leading-[52px] font-[600] text-[#241E2A] mb-4">{t("ready.title")}</div>
              <div className="text-[16px] md:text-[24px] leading-[20px] md:leading-[28px] font-[400] text-[#666368] mb-12">{t("ready.text")}</div>
              <button className="relative z-10 bg-[#241E2A] text-white px-[16px] py-[16px] rounded-[30px] text-[14px] leading-[14px] font-[400]">{t("startYourProject")}</button>
            </div>
            <div className="">
              <Image src="/images/landings/ready-image.png" alt="Ready Image" width={568} height={426} />
            </div>
          </div>
        </div>
      </div>
      <div className="container md:px-10 mb-8 mt-12">
        <div className="flex items-center justify-between flex-col lg:flex-row">
          <div className="mb-12 lg:mb-0">
            <Image src="/images/landings/logo.png" alt="Ready Image" width={81} height={80} />
          </div>
          <div className="flex gap-8 flex-1 justify-end flex-col md:flex-row">
            <div className="flex gap-3 items-start md:items-center">
              <Image src="/images/landings/phone-icon.png" alt="Phone Icon" width={40} height={40} />
              <div className="text-[16px] leading-[18px] font-[400] text-[#666368]">+1&nbsp;506&nbsp;889&nbsp;5740</div>
            </div>
            <div className="flex gap-3 items-start md:items-center">
              <Image src="/images/landings/email-icon.png" alt="Phone Icon" width={40} height={40} />
              <div className="text-[16px] leading-[18px] font-[400] text-[#666368]">info@theclicks.ca</div>
            </div>
            <div className="flex gap-3 items-start md:items-center">
              <Image src="/images/landings/location-icon.png" alt="Phone Icon" width={40} height={40} />
              <div className="text-[16px] leading-[18px] font-[400] text-[#666368] max-w-[188px]">
                860 Main Street, Moncton, NB, Canada, E1A 0G9</div>
            </div>
          </div>
        </div>
      </div>
      <div className="container md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center justify-between pb-[48px] pt-8 border-t border-[#DED9DF]">
          <div className="text-[16px] leading-[18px] font-[400] text-[#666368] text-center md:text-left mb-4 md:mb-0">
            Copyright © 2025 TheClicks | Powered by Smartpipl
          </div>
          <div className="flex gap-8 justify-center md:justify-end">
            <a href="https://www.instagram.com/the_clicks_marketing/" target="_blank" rel="noopener noreferrer">
              <Image src="/images/landings/instagram-icon.svg" alt="Instagram Icon" width={24} height={24} />
            </a>
            <a href="https://www.linkedin.com/company/theclicks/" target="_blank" rel="noopener noreferrer">
              <Image src="/images/landings/linkedin-icon.svg" alt="Linkedin Icon" width={24} height={24} />
            </a>
            <a href="https://www.facebook.com/theclicks.ca" target="_blank" rel="noopener noreferrer">
              <Image src="/images/landings/facebook-icon.svg" alt="Facebook Icon" width={24} height={24} />
            </a>
          </div>
        </div>
      </div>

      {/* <ContactBlock consultation={t("contactFormMessage")} /> */}

      {/* <Footer /> */}
    </div>
  );
};

export default WebDevelopment;
