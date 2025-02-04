"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

const Block: React.FC = () => {
  const t = useTranslations("home.block");
  return (
    <div className="mb-10 px-4 md:px-10 mx-auto relative z-10 w-full max-w-7xl flex flex-col-reverse md:flex-row 1items-center justify-center">
      <div className="md:w-1/2 md:pl-10">
        <div className="max-w-[84%] text-2xl mb-10 pb-[2px] md:text-4xl text-left bg-clip-text text-transparent bg-gradient-to-b from-sky-400 to bg-purple-500 bg-opacity-50">
          {t("whileYouSpentTime")}
        </div>
        <p className="text-lg font-normal text-[var(--gray-blue)] light:text-[var(--gray-70)] max-w-lg text-left">
          {t("weLeverageTopTier")}
        </p>
      </div>
      <div className="hidden md:flex md:w-1/2 h-full w-full flex justify-center items-center relative flex justify-center">
        <Image
          src="/images/wave.png"
          alt="Marketing Wave"
          width={521}
          height={360}
          className="max-w-full h-[360px]"
          // className="w-[521px] h-[360px]"
        />
      </div>
    </div>
  );
};

export default Block;
