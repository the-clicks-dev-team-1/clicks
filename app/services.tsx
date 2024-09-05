"use client";

import { CardHoverEffectDemo } from "./snippets/card-hover-effect-snippet";

const Services = () => {
  return (
    <div className="max-w-5xl mx-auto py-20">
      <div
        className="text-4xl pb-5 md:text-7xl px-6 text-center
            bg-clip-text text-transparent 
            bg-gradient-to-b from-sky-400 
            to bg-purple-500 bg-opacity-50"
      >
        Our Services
      </div>
      <p className="mt-4 text-lg font-normal text-[var(--gray)] max-w-lg text-centre mx-auto px-4">
        At our company, we cater to businesses of all sizes, ensuring that both
        small enterprises and large corporations receive top-notch services. Our
        dedicated efforts are aimed at fostering the growth and prosperity of
        your business.
      </p>

      <CardHoverEffectDemo />
    </div>
  );
};

export default Services;
