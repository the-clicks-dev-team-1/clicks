"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { useTranslations } from "next-intl";

export function InfiniteMovingCardsDemo() {
  const t = useTranslations("home.reviews");

  return (
    <div className="h-[20rem] mb-20 md:mb-32 rounded-md flex flex-col antialiased dark:bg-black1 #dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote: "testimonials.0.quote",
    name: "Alex Thompson",
    title: "testimonials.0.title",
  },
  {
    quote: "testimonials.1.quote",
    name: "Megan Peters",
    title: "testimonials.1.title",
  },
  {
    quote: "testimonials.2.quote",
    name: "Brian Jackson",
    title: "testimonials.2.title",
  },
  {
    quote: "testimonials.3.quote",
    name: "Sophia Lee",
    title: "testimonials.3.title",
  },
  {
    quote: "testimonials.4.quote",
    name: "Samuel Green",
    title: "testimonials.4.title",
  },
  {
    quote: "testimonials.5.quote",
    name: "Linda White",
    title: "testimonials.5.title",
  },
  {
    quote: "testimonials.6.quote",
    name: "David Johnson",
    title: "testimonials.6.title",
  },
  {
    quote: "testimonials.7.quote",
    name: "Olivia Harris",
    title: "testimonials.7.title",
  },
  {
    quote: "testimonials.8.quote",
    name: "Ethan Scott",
    title: "testimonials.8.title",
  },
  {
    quote: "testimonials.9.quote",
    name: "Grace Turner",
    title: "testimonials.9.title",
  },
];
