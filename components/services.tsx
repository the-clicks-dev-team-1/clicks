"use client";

import Image from "next/image";
import { CardHoverEffectDemo } from "../app/snippets/card-hover-effect-snippet";
import { useTranslations } from "next-intl";

const Services = () => {
  const t = useTranslations("home.services");

  return (
    <div
      id="services"
      className="max-w-5xl mx-auto mt-20 md:mt-32 mb-20 md:mb-32 px-4 md:px-10"
    >
      <div className="flex md:flex md:flex-row flex-col-reverse justify-center">
        <div className="flex flex-col justify-center items-center md:w-2/3">
          <div
            className="text-4xl pb-5 md:text-7xl text-center
            bg-clip-text text-transparent 
            bg-gradient-to-b from-sky-400 
            to bg-purple-500 bg-opacity-50"
          >
            {t("ourServices")}
          </div>
          <div className="flex justify-center">
            <p className="mt-4 text-lg font-normal text-[var(--gray-blue)] light:text-[var(--gray-70)] w-full max-w-xl mx-auto px-4">
              {t("atOurCompany")}
            </p>
          </div>
        </div>

        <div className="flex justify-center py-5">
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
