"use client";

import { InfiniteMovingCardsDemo } from "../app/snippets/infinite-moving-cards-snippet";

const Reviews = () => {
  return (
    <div className="full-w">
      <div
        className="text-4xl mt-10 pb-5 md:text-7xl px-6 text-center
            bg-clip-text text-transparent 
            bg-gradient-to-b from-sky-400 
            to bg-purple-500 bg-opacity-50"
      >
        Customer Reviews
      </div>
      {/* <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-centre mx-auto px-4">
            We are proud of the work we do and the relationships we build with our clients. 
            Here are some of the kind words they have shared with us.
            </p> */}

      <InfiniteMovingCardsDemo />
    </div>
  );
};

export default Reviews;
