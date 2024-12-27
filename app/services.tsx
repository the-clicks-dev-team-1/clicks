"use client";

import Image from "next/image";
import { CardHoverEffectDemo } from "./snippets/card-hover-effect-snippet";

const Services = () => {
  return (
    <div className="max-w-5xl mx-auto py-20">
      <div className="flex md:flex md:flex-row flex-col-reverse px-8 justify-center">
        <div className="flex flex-col justify-center items-center md:w-2/3">
          <div
            className="text-4xl pb-5 md:text-7xl text-center
            bg-clip-text text-transparent 
            bg-gradient-to-b from-sky-400 
            to bg-purple-500 bg-opacity-50"
          >
            Our Services
          </div>
          <div className="flex justify-center">
            <p className="mt-4 text-lg font-normal text-[var(--gray)] w-full max-w-xl mx-auto px-4">
              At our company, we cater to businesses of all sizes, ensuring that
              both small enterprises and large corporations receive top-notch
              services. Our dedicated efforts are aimed at fostering the growth
              and prosperity of your business.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-4 md:mt-0">
          <Image
            src="/images/wave.png"
            alt="Marketing Wave"
            width={521}
            height={640}
            className="max-w-full h-auto"
          />
        </div>
      </div>

      <CardHoverEffectDemo />
    </div>
  );
};

export default Services;
