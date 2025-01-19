"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { useTranslations } from "next-intl";

export function TheWayWeWork() {
  const t = useTranslations("home.testimonials");

  const testimonials = [
    {
      quote: t("1.quote"),
      name: t("1.name"),
      designation: "",
      src: "/images/thewaywework/initial-meeting.png",
    },
    {
      quote: t("2.quote"),
      name: t("2.name"),
      designation: "",
      src: "/images/thewaywework/in-debth.webp",
    },
    {
      quote: t("3.quote"),
      name: t("3.name"),
      designation: "",
      src: "/images/thewaywework/strategic-planning.jpg",
    },
    {
      quote: t("4.quote"),
      name: t("4.name"),
      designation: "",
      src: "/images/thewaywework/creativity.jpg",
    },
    {
      quote: t("5.quote"),
      name: t("5.name"),
      designation: "",
      src: "/images/thewaywework/technical.jpg",
    },
    {
      quote: t("6.quote"),
      name: t("6.name"),
      designation: "",
      src: "/images/thewaywework/campaign.webp",
    },
    {
      quote: t("7.quote"),
      name: t("7.name"),
      designation: "",
      src: "/images/thewaywework/monitoring-reporting.webp",
    },
    {
      quote: t("8.quote"),
      name: t("8.name"),
      designation: "",
      src: "/images/thewaywework/Customer-Feedback.webp",
    },
  ];

  return (
    <div className="container md:mb-32 md:px-10">
      <div
        className="text-3xl md:text-7xl text-gradient bg-gradient-to-b from-sky-400 
            to bg-purple-500 bg-opacity-50 bg-clip-text text-transparent text-center"
      >
        {t("title")}
      </div>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}
