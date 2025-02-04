"use client";

import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import { useTranslations } from "next-intl";

export function WobbleCardDemo() {
  const t = useTranslations("home.wobbleCard");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full px-4 md:px-10">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full #bg-transperent #light:bg-white min-h-[500px] lg:min-h-[300px] light:shadow-lg"
        className="#bg-transperent opacity-100 bg-[var(--blue2)] light:bg-[var(--light-blue)] light:shadow-lg"
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-[var(--light-blue)] light:text-[var(--gray-70)]">
            {t("1.title")}
          </h2>
          <p className="mt-4 text-left  text-base/6 text-[var(--gray-blue)] light:text-[var(--gray-40)]">
            {t("1.description")}
          </p>
        </div>
        <Image
          src="/images/quality.png"
          width={300}
          height={300}
          priority
          alt="global marketing expertise"
          style={{ width: "300px", height: "300px" }}
          className="absolute right-4 md:right-[5%] filter -bottom-20 md:bottom-[10%] object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 #bg-transperent min-h-[300px] light:shadow-lg"
        className="light:bg-[var(--light-blue)] bg-[var(--blue2)]"
      >
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-[var(--light-blue)] light:text-[var(--gray-70)]">
          {t("2.title")}
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-[var(--gray-blue)] light:text-[var(--gray-40)]">
          {t("2.description")}
        </p>
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 #bg-transperent min-h-[300px] light:shadow-lg"
        className="light:bg-[var(--light-blue)] bg-[var(--blue2)]"
      >
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-[var(--light-blue)] light:text-[var(--gray-70)]">
          {t("3.title")}
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-[var(--gray-blue)] light:text-[var(--gray-40)]">
          {t("3.description")}
        </p>
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 #bg-transperent min-h-[300px] light:shadow-lg"
        className="light:bg-[var(--light-blue)] bg-[var(--blue2)]"
      >
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-[var(--light-blue)] light:text-[var(--gray-70)]">
          {t("4.title")}
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-[var(--gray-blue)] light:text-[var(--gray-40)]">
          {t("4.description")}
        </p>
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 #bg-transperent min-h-[300px] light:shadow-lg"
        className="light:bg-[var(--light-blue)] bg-[var(--blue2)]"
      >
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-[var(--light-blue)] light:text-[var(--gray-70)]">
          {t("5.title")}
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-[var(--gray-blue)] light:text-[var(--gray-40)]">
          {t("5.description")}
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
