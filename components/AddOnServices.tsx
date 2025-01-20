"use client";

import { useTranslations } from "next-intl";
import { AnimatedTestimonials } from "./ui/animated-testimonials";
import en from "@/i18n/messages/en.json";

const AddOnServices = () => {
  const testimonials = Object.entries(en.pricing.testimonials).map(
    ([key, value]) => ({
      quote: `pricing.testimonials.${key}.quote`,
      name: `pricing.testimonials.${key}.name`,
      designation: `pricing.testimonials.${key}.designation`,
      src: `/images/addonservices/${key}.png`,
    })
  );

  const t = useTranslations("pricing");

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
