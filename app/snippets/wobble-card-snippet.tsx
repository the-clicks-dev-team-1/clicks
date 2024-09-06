"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-transperent min-h-[500px] lg:min-h-[300px]"
        className="bg-transperent opacity-100"
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Global Marketing Expertise
          </h2>
          <p className="mt-4 text-left  text-base/6 text-white">
            At The Clicks, we leverage our broad expertise across diverse
            marketing domains to offer rapid scalability and adaptable
            engagement models. Our goal is to help clients refine their
            marketing strategies, foster a data-centric culture, and achieve
            sustainable growth.
          </p>
        </div>
        <Image
          src="/images/quality.png"
          width={300}
          height={300}
          alt="global marketing expertise"
          className="absolute -right-4 lg:-right-[5%] filter -bottom-5 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 bg-transperent min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Your Growth Ally
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          We are committed to delivering immediate outcomes while fostering your
          long-term success. At The Clicks, your ROI and revenue go beyond mere
          metrics—we substantiate our impact by supporting your marketing
          initiatives throughout the entire customer journey to maximize
          results.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 bg-transperent min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Data-Driven, Predictable, and Transparent
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Our meticulously developed methods and processes have empowered a wide
          range of businesses, from startups to established enterprises, across
          more than 10 industries. We maintain our agility, adaptability, and
          ease of collaboration, regardless of our extensive experience.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 bg-transperent min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Tailored Marketing Solutions
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          We customize our strategies to meet your specific business needs and
          objectives, ensuring every marketing plan aligns with your goals. Our
          team stays updated on the latest trends and technologies to provide
          the best outcomes.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 bg-transperent min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Holistic Customer Engagement
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          We integrate multiple touchpoints and channels to create seamless
          customer experiences. Our comprehensive strategy covers everything
          from initial awareness to post-purchase support, enhancing customer
          loyalty and driving repeat business.
        </p>
      </WobbleCard>
      {/* <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-transparent min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Data-Driven, Predictable, and Transparent 
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                Our meticulously developed methods and processes have empowered a wide range of businesses, from startups to established enterprises, across more than 10 industries. 
                We maintain our agility, adaptability, and ease of collaboration, regardless of our extensive experience.
            </p>
        </div>
        <Image
        src="/images/growth.png"
        width={360}
        height={360}
        alt="your growth ally"
        className="absolute -right-0 lg:-right-[-1%] filter -bottom-0 object-contain rounded-2xl"
        />
        </WobbleCard> */}
    </div>
  );
}
