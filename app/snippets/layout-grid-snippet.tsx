"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

export function LayoutGridDemo() {
  return (
    <div className="min-h-screen w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-bold md:text-4xl text-xl text-[var(--light-blue)]">
        Strategic Session at The Clicks
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-[var(--gray-blue)]">
        At The Clicks, our team gathered in the conference room to
        collaboratively develop innovative marketing solutions and strategies
        for our clients.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-bold md:text-4xl text-xl text-[var(--light-blue)]">
        Collaborative Work in Progress
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-[var(--gray-blue)]">
        At The Clicks, our team members are deeply engaged in the creative
        process, utilizing technology to bring innovative marketing strategies
        to life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-bold md:text-4xl text-xl text-[var(--light-blue)]">
        Engaged in Learning and Development
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-[var(--gray-blue)]">
        The Clicks team actively participates in seminars and workshops to stay
        ahead in the ever-evolving world of digital marketing, ensuring our
        clients receive the most informed and effective strategies.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-bold md:text-4xl text-xl text-[var(--light-blue)]">
        Strategic Planning in Action
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-[var(--gray-blue)]">
        At The Clicks, our team collaborates in dynamic brainstorming sessions,
        transforming ideas into actionable strategies that drive business
        success for our clients.
      </p>
    </div>
  );
};
const SkeletonFive = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-bold md:text-4xl text-xl text-[var(--light-blue)]">
        Creative Collaboration
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-[var(--gray-blue)]">
        The Clicks fosters a culture of creativity and teamwork, where our
        diverse team members come together to share ideas and create innovative
        solutions that drive our clients success.
      </p>
    </div>
  );
};

const SkeletonSix = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-bold md:text-4xl text-xl text-[var(--light-blue)]">
        Dynamic Teamwork in Action
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-[var(--gray-blue)]">
        At The Clicks, our team thrives on collaboration, bringing together a
        blend of expertise and creativity to deliver exceptional results for our
        clients in the fast-paced world of digital marketing.
      </p>
    </div>
  );
};
const SkeletonSeven = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-bold md:text-4xl text-xl text-[var(--light-blue)]">
        Embracing Agile for Continuous Improvement
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-[var(--gray-blue)]">
        At The Clicks, our team adopts Agile methodologies to stay adaptive and
        responsive to change, ensuring that we continuously deliver value and
        meet the evolving needs of our clients. Through iterative planning and
        collaboration, we drive projects forward with efficiency and innovation.
      </p>
    </div>
  );
};
const SkeletonEight = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-bold md:text-4xl text-xl text-[var(--light-blue)]">
        Connecting Beyond Borders
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-[var(--gray-blue)]">
        At The Clicks, we leverage digital tools to stay connected with our
        global team and clients. Virtual meetings are a cornerstone of our
        collaborative approach, allowing us to maintain strong relationships and
        ensure seamless project execution, no matter the distance.
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
