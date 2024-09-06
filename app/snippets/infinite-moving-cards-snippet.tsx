"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[30rem] rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
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
    quote:
      "The Clicks helped us turn our digital marketing around. Our website traffic doubled, and we started seeing real results in just a few months.",
    name: "Alex Thompson",
    title: "Owner, Thompson & Co.",
  },
  {
    quote:
      "Their social media strategies were spot-on. We've seen a significant increase in engagement and our brand awareness has grown tremendously.",
    name: "Megan Peters",
    title: "Marketing Manager, GreenWave Solutions",
  },
  {
    quote:
      "We were struggling with our online presence, but The Clicks provided a clear and effective plan that improved our visibility and customer reach.",
    name: "Brian Jackson",
    title: "CEO, Jackson Enterprises",
  },
  {
    quote:
      "The team at The Clicks understood our needs and delivered a tailored strategy that exceeded our expectations. Our sales have increased by 30% since we started working with them.",
    name: "Sophia Lee",
    title: "Founder, Lee&apos;s Boutique",
  },
  {
    quote:
      "Their data-driven approach was exactly what we needed. We&apos;ve seen a measurable improvement in our ROI thanks to their efforts.",
    name: "Samuel Green",
    title: "Director of Operations, FreshStart Inc.",
  },
  {
    quote:
      "The Clicks transformed our online campaigns with innovative ideas and consistent support. We&apos;re thrilled with the results.",
    name: "Linda White",
    title: "Co-Founder, EcoHarmony",
  },
  {
    quote:
      "Working with The Clicks has been a game-changer for our business. Their insights into our market have helped us to fine-tune our strategy and grow our client base.",
    name: "David Johnson",
    title: "Managing Director, BuildRight Construction",
  },
  {
    quote:
      "Their expertise in digital marketing has brought our brand to new heights. We&apos;ve never been more visible online.",
    name: "Olivia Harris",
    title: "Chief Marketing Officer, PureEssentials",
  },
  {
    quote:
      "The Clicks made a huge difference in our online strategy. We&apos;ve seen a significant increase in traffic and leads since partnering with them.",
    name: "Ethan Scott",
    title: "Owner, Scott&apos;s Landscaping",
  },
  {
    quote:
      "From the start, The Clicks has been attentive, professional, and effective. Our marketing efforts have never been stronger.",
    name: "Grace Turner",
    title: "CEO, TurnerTech Solutions",
  },
];
