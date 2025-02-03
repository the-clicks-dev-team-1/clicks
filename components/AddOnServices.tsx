"use client";

import { useTranslations } from "next-intl";
import { AnimatedTestimonials } from "./ui/animated-testimonials";
import en from "@/i18n/messages/en.json";

const AddOnServices = () => {
  const t = useTranslations("pricing");

  const testimonials = Object.entries(en.pricing.testimonials).map(
    ([key, value]) => ({
      quote: t(`testimonials.${key}.quote`),
      name: t(`testimonials.${key}.name`),
      designation: t(`testimonials.${key}.designation`),
      src: `/images/addonservices/${key}.png`,
    })
  );

  return (
    <div className="container mb-20 md:mb-32 md:px-10">
      <div className="font-bold text-2xl md:text-3xl text-gradient bg-gradient-to-b from-sky-400 to bg-purple-500 bg-opacity-50 bg-clip-text text-transparent">
        {t("addOns")}
      </div>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
};

export default AddOnServices;
