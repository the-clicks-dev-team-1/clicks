"use client";

import { InlineWidget } from "react-calendly";

import Navbar from "@/components/navbar";

const Book = () => {
  return (
    <>
      <div className="flex flex-col   w-full  h-screen bg-[var(--bg-96)]  bg-grid-white/[0.02]   ">
        <Navbar />
        <div
          className="text-4xl mt-36 pb-5 md:text-6xl text-center 
        bg-clip-text text-[var(--text-label)] *text-transparent* bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
        >
          <h1>Book a meeting</h1>
        </div>

        <InlineWidget url="https://calendly.com/p-demenshyn-theclicks/consultation" />
      </div>
    </>
  );
};

export default Book;
