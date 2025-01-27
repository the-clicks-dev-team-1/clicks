"use client";

import React from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { useTranslations } from "next-intl";

export function LayoutGridDemo() {
  return (
    <div className="min-h-screen w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  const t = useTranslations("team.imageDescriptions.0");
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-bold md:text-4xl text-xl text-[var(--light-blue)]">
        {t("title")}
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-[var(--gray-blue)]">
        {t("description")}
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  const t = useTranslations("team.imageDescriptions.1");

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-bold md:text-4xl text-xl text-[var(--light-blue)]">
        {t("title")}
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-[var(--gray-blue)]">
        {t("description")}
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  const t = useTranslations("team.imageDescriptions.2");

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-bold md:text-4xl text-xl text-[var(--light-blue)]">
        {t("title")}
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-[var(--gray-blue)]">
        {t("description")}
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  const t = useTranslations("team.imageDescriptions.3");

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-bold md:text-4xl text-xl text-[var(--light-blue)]">
        {t("title")}
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-[var(--gray-blue)]">
        {t("description")}
      </p>
    </div>
  );
};
const SkeletonFive = () => {
  const t = useTranslations("team.imageDescriptions.4");

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-bold md:text-4xl text-xl text-[var(--light-blue)]">
        {t("title")}
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-[var(--gray-blue)]">
        {t("description")}
      </p>
    </div>
  );
};

const SkeletonSix = () => {
  const t = useTranslations("team.imageDescriptions.5");

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-bold md:text-4xl text-xl text-[var(--light-blue)]">
        {t("title")}
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-[var(--gray-blue)]">
        {t("description")}
      </p>
    </div>
  );
};
const SkeletonSeven = () => {
  const t = useTranslations("team.imageDescriptions.6");

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-bold md:text-4xl text-xl text-[var(--light-blue)]">
        {t("title")}
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-[var(--gray-blue)]">
        {t("description")}
      </p>
    </div>
  );
};
const SkeletonEight = () => {
  const t = useTranslations("team.imageDescriptions.7");

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-bold md:text-4xl text-xl text-[var(--light-blue)]">
        {t("title")}
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-[var(--gray-blue)]">
        {t("description")}
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/images/1.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/images/2.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/images/3.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/images/4.jpg",
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "md:col-span-2",
    thumbnail: "/images/5.jpg",
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "col-span-1",
    thumbnail: "/images/6.jpg",
  },
  {
    id: 7,
    content: <SkeletonSeven />,
    className: "col-span-1",
    thumbnail: "/images/7.jpg",
  },
  {
    id: 8,
    content: <SkeletonEight />,
    className: "md:col-span-2",
    thumbnail: "/images/8.jpg",
  },
];
