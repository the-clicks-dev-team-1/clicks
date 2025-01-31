import { FC } from "react";
import { getTranslations } from "next-intl/server";
import { PiCheckCircleFill } from "react-icons/pi";
import AddOnServices from "@/components/AddOnServices";
import ContactBlock from "@/components/contactBlock";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Offers from "@/components/Offers";
import en from "@/i18n/messages/en.json";
import { Link } from "@/i18n/routing";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;

  const t = await getTranslations({ locale, namespace: "pricing" });

  return {
    title: t("metaTitle") || "Pricing",
    description:
      t("metaDesc") || "Choose the plan that suits your needs the best.",
  };
}

export interface Plan {
  link: string;
  style: string;
  name: string;
  price: string;
  features: string[];
  button: string;
}

const plansBase = [
  {
    link: "/contact",
    style:
      "rounded-3xl py-6 bg-clip-text text-transparent* text-[var(--text-label)] bg-gradient-to-b from-neutral-300 to-neutral-50 h-full flex flex-col",
  },
  {
    link: "/contact",
    style:
      "rounded-3xl py-6 bg-clip-text text-transparent* text-[var(--text-label)] bg-gradient-to-b from-neutral-300 to-neutral-50 h-full flex flex-col",
  },
  {
    link: "/contact",
    style:
      "rounded-3xl py-6 bg-clip-text text-transparent* text-[var(--text-label)] bg-gradient-to-b from-neutral-300 to-neutral-50 h-full flex flex-col ",
  },
];

let plans: Plan[] = [];
plansBase.forEach((base, index) => {
  const plan = {
    ...base,
    name: en.pricing.plans[index].name,
    price: en.pricing.plans[index].price,
    features: en.pricing.plans[index].features,
    button: en.pricing.plans[index].button,
  };
  plans.push(plan);
});

const Pricing: FC<{ params: { locale: string } }> = async ({
  params: { locale },
}) => {
  const t = await getTranslations({ locale, namespace: "pricing" });

  return (
    <div className="w-full md:items-center md:justify-center bg-[var(--bg-96)] text-[var(--text)] antialiased bg-grid-white/[0.02] relative overflow-hidden pt-24">
      <Navbar />
      <div className="flex items-center justify-center flex-col">
        <div className="text-4xl md:text-5xl py-8 md:py-20 text-slate-300 px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-sky-400 to bg-purple-500 bg-opacity-50">
          <h1>
            {t("title")} <br /> {t("subtitle")}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:p-10 #md:w-4/5 #2xl:w-3/4 max-w-7xl mb-32 items-center">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className="relative h-full flex flex-col justify-between border rounded-3xl  px-4 pb-4 pt-8 p md:pb-6 md:pt-12 light:bg-[var(--light-blue)] border-[var(--ocean-blue)]"
            >
              <div className="whitespace-nowrap absolute left-1/2 -translate-x-1/2 -top-8 flex flex-col items-center text-blue-600 bg-blue-100 py-4 px-6 rounded-xl">
                <span className="text-base">{t("moneyBack1")}</span>
                <span className="text-xs">{t("moneyBack2")}</span>
              </div>
              <div className={plan.style}>
                <div className="text-3xl md:text-4xl flex items-center font-medium text-[var(--light-blue)] light:text-[var(--gray-70)]">
                  {t(`plans.${index}.name`)}
                </div>
                <div className="text-2xl md:text-3xl pt-4 md:pt-6 text-[var(--light-blue)] light:text-[var(--gray-70)]">
                  {t(`plans.${index}.price`)}
                </div>
                <ul>
                  {plan.features.map((feature, i) => (
                    <li
                      key={feature}
                      className="text-lg py-2 flex space-x-2 items-center text-[var(--gray-blue)] light:text-[var(--gray-40)]"
                    >
                      {plan.name.includes("AI") || plan.name.includes("IA") ? (
                        <PiCheckCircleFill className="text-blue-400 mr-2 text-xl" />
                      ) : (
                        <PiCheckCircleFill className="text-green-600 mr-2 text-xl" />
                      )}
                      {t(`plans.${index}.features.${i}`)}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={plan.link}
                className="rounded-lg bg-[var(--ocean-blue)] my-4 py-2 text-white w-full mx-auto items-center flex justify-center"
              >
                {t(`plans.${index}.button`)}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="flex items-center justify-center flex-col mb-32">
        <div className="text-4xl md:text-5xl pb-8 md:pb-20 text-slate-300 px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-sky-400 to bg-purple-500 bg-opacity-50">
          {t("serviceTitle")} <br /> {t("serviceSubtitle")}
        </div>
        <Offers />
      </div> */}

      <AddOnServices />
      <ContactBlock />
      <Footer />
    </div>
  );
};

export default Pricing;
