"use client";

import { useState } from "react";
import { PiCheckCircleFill } from "react-icons/pi";
import Image from "next/image";
import { useTranslations } from "next-intl";
import en from "@/i18n/messages/en.json";
import { Link } from "@/i18n/routing";

export interface Offer {
  style: string;
  image: string;
  name: string;
  price: string;
  priceDescription: string;
  features: string[];
  description: string;
  button: string;
}

const offersBase = [
  {
    style:
      "rounded-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    image: "/images/Group1.png",
  },
  {
    style:
      "rounded-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    image: "/images/Group2.png",
  },
  {
    style:
      "rounded-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    image: "/images/Group3.png",
  },
  {
    style:
      "rounded-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    image: "/images/Group1.png",
  },
  {
    style:
      "rounded-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    image: "/images/Group2.png",
  },
  {
    style:
      "rounded-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    image: "/images/Group3.png",
  },
  {
    style:
      "rounded-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    image: "/images/Group1.png",
  },
  {
    style:
      "rounded-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    image: "/images/Group2.png",
  },
  {
    style:
      "rounded-3xl bg-clip-text text-transparent* text-[var(--text-label)] bg-gradient-to-b from-neutral-300 to-neutral-50",
    image: "/images/Group3.png",
  },
  {
    style:
      "rounded-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    image: "/images/Group1.png",
  },
];

const offers: Offer[] = offersBase.map((base, index) => {
  const featuresLength = en.pricing.offers.offersList[index].features.length;
  return {
    ...base,
    name: `offersList.${index}.name`,
    price: `offersList.${index}.price`,
    priceDescription: `offersList.${index}.priceDescription`,
    features: Array.from(
      { length: featuresLength },
      (_, i) => `offersList.${index}.features.${i}`
    ),
    description: `offersList.${index}.description`,
    button: `offersList.${index}.button`,
  };
});

export default function Offers() {
  const t = useTranslations("pricing.offers");
  const [visibleOffers, setVisibleOffers] = useState(3);

  const handleLoadMore = () => {
    setVisibleOffers((prevVisibleOffers) => prevVisibleOffers + 3);
  };

  return (
    <>
      <div className="grid gap-6 px-4 md:px-10 py-0 max-w-7xl cursor-pointer items-center">
        {offers.slice(0, visibleOffers).map((offer, index) => (
          <div key={offer.name} className="flex flex-col">
            <div className="flex flex-col md:flex-row">
              <div className="px-20 py-20 light:bg-[var(--light-blue)] light:shadow-lg bg-[var(--blue2)] rounded-3xl w-full max-w-screen-xl relative">
                <div className="flex relative">
                  <div className="md:w-2/3">
                    <div
                      className={`text-3xl md:text-4xl font-medium ${offer.style} text-[var(--light-blue)] light:text-[var(--gray-70)] py-0`}
                    >
                      {t(`${offer.name}`)}
                    </div>
                    <div className="py-4 md:py-6 text-[var(--gray-blue)] light:text-[var(--gray-40)]">
                      {t(`${offer.description}`)}
                    </div>
                    <ul>
                      {offer.features.map((feature, i) => (
                        <li
                          key={feature}
                          className="text-lg py-2 flex space-x-2 items-center text-[var(--gray-blue)] light:text-[var(--gray-40)]"
                        >
                          <PiCheckCircleFill className="text-green-600 mr-2 text-xl" />
                          {t(feature)}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="hidden md:block absolute -right-20 -bottom-20">
                    <Image
                      src={offer.image}
                      alt="map-marker"
                      width={500}
                      height={500}
                      className="object-contain max-w-[250px] max-h-[250px] lg:max-w-[350px] lg:max-h-[350px]"
                    />
                  </div>
                </div>
              </div>

              <div className="md:w-1/3 px-8 animate-shimmer items-center justify-center light:shadow-lg rounded-3xl dark:border border-slate-800 light:border-[var(--ocean-blue)] dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] light:bg-[linear-gradient(110deg,#f8fbff,45%,#edf8fe,55%,#f8fbff)] light:bg-[var(--light-blue)] bg-[length:200%_100%] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <div className="whitespace-pre-line text-xl pt-4 md:pt-6 text-[var(--light-blue)] light:text-[var(--gray-70)]">
                  {t(`${offer.price}`)}
                </div>
                <div className="whitespace-pre-line text-sm pt-2 text-[var(--gray-blue)] light:text-[var(--gray-40)]">
                  {t(`${offer.priceDescription}`)}
                </div>
                <div className="mt-4">
                  <Link
                    href="/contact"
                    className="rounded-lg bg-[var(--ocean-blue)] my-4 py-2 text-white w-full mx-auto items-center flex justify-center"
                  >
                    {t("orderNow")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {visibleOffers < offers.length && (
        <button
          onClick={handleLoadMore}
          className="mt-10 px-4 py-2 bg-[var(--ocean-blue)] text-white rounded-lg"
        >
          {t("loadMore")}
        </button>
      )}
    </>
  );
}
