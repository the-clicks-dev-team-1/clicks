import { FC } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import { Metadata } from "next";
import ContactBlock from "@/components/contactBlock";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Graphic Design Services",
  description:
    "Elevate your brand with stunning visuals and creative graphic design solutions tailored to your needs",
};

const servicesItems = [
  {
    count: "01",
    image: "/images/group1.png",
    title: "Logo Design",
    description:
      "We create unique and memorable logos that represent your brand and make a lasting impression on your audience.",
  },
  {
    count: "02",
    image: "/images/group3.png",
    title: "Branding",
    description:
      "Our branding services ensure that every aspect of your visual identity is consistent, cohesive, and aligned with your brand values.",
  },
  {
    count: "03",
    image: "/images/group4.png",
    title: "Print Design",
    description:
      "We design stunning print materials, including brochures, business cards, and posters, that effectively communicate your message.",
  },
  {
    count: "04",
    image: "/images/group5.png",
    title: "Web Design",
    description:
      "Our web design services combine aesthetics with functionality to create visually appealing websites that drive results.",
  },
  {
    count: "05",
    image: "/images/group6.png",
    title: "Social Media Graphics",
    description:
      "We create engaging social media graphics that capture attention, increase engagement, and drive traffic to your online platforms.",
  },
  {
    count: "06",
    image: "/images/group7.png",
    title: "Infographics",
    description:
      "Our infographics simplify complex information and present it in an easy-to-understand, visually appealing format.",
  },
];

const GraphicDesign: FC = () => {
  return (
    <div className="bg-[var(--bgnew)] text-[var(--text)]">
      <Navbar />

      <div className="container md:px-10 mb-32">
        <div className="flex flex-col pt-32 md:pt-40">
          <h1 className="mb-10 py-2 text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to bg-purple-500 bg-opacity-50">
            Graphic Design Services
          </h1>
          <p className="mt-3 text-lg md:text-xl max-w-2xl text-left text-[var(--gray-blue)] light:text-[var(--gray-40)]">
            First impressions matter, and your brand&apos;s visuals play a
            critical role in how your business is perceived. Our graphic design
            services bring your brand to life with professional, high-quality
            designs that communicate your message clearly and effectively.
          </p>
        </div>
      </div>

      {/* Services section */}
      <div className="container md:px-10 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicesItems.map((item) => (
            <ServiceCard
              key={item.count}
              count={item.count}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>

      {/* Introduction section */}
      <div className="container md:px-10 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[var(--light-blue)] light:text-[var(--gray-70)]">
              What is Graphic Design?
            </h2>
            <p className="text-lg mb-6 text-[var(--gray-blue)] light:text-[var(--gray-40)]">
              Graphic design is the art of creating visual content to
              communicate messages. It involves combining images, typography,
              and color to create materials that capture attention and convey a
              specific message to your audience.
            </p>
            <h2 className="text-lg md:text-xl font-semibold mb-6 text-[var(--light-blue)] light:text-[var(--gray-70)]">
              Why does Graphic Design Matter?
            </h2>
            <div className="flex flex-col sm:flex-row md:flex-col gap-2 xl:flex-row justify-between items-center mb-6 text-lg text-[var(--gray-blue)] light:text-[var(--gray-40)]">
              <div className="w-full inline-block bg-gradient-to-r from-sky-400 to-purple-500 p-[1px] rounded-full">
                <span className="min-w-[148px] whitespace-nowrap w-full block bg-white dark:bg-black rounded-full px-4 py-3 text-center text-lg font-semibold">
                  engagement
                </span>
              </div>
              <div className="w-full inline-block bg-gradient-to-r from-sky-400 to-purple-500 p-[1px] rounded-full">
                <span className="min-w-[148px] whitespace-nowrap w-full text-center block bg-white dark:bg-black  rounded-full px-4 py-3 text-lg font-semibold">
                  communication
                </span>
              </div>
              <div className="w-full inline-block bg-gradient-to-r from-sky-400 to-purple-500 p-[1px] rounded-full">
                <span className="min-w-[148px] whitespace-nowrap w-full text-center block bg-white dark:bg-black  rounded-full px-4 py-3 text-lg font-semibold">
                  brand identity
                </span>
              </div>
            </div>
            <p className="text-lg text-[var(--gray-blue)] light:text-[var(--gray-40)]">
              Graphic design is crucial for creating a strong visual identity
              for your brand.
            </p>
          </div>
          <div className="relative w-full h-64 md:h-96">
            <Image
              src="/images/gd.jpg"
              alt="Graphic Design Explanation"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      <ContactBlock consultation="Reach out for a free consultation and get the answers you need." />

      <Footer />
    </div>
  );
};

export default GraphicDesign;
