import { FC } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import { Metadata } from "next";
import ContactBlock from "@/components/contactBlock";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Web Development Services",
  description:
    "We build websites that not only look stunning but are also optimized for performance, scalability, and user experience",
};

const servicesItems = [
  {
    count: "01",
    image: "/images/group1.png",
    title: "Custom Website Development",
    description:
      "Tailored website solutions designed to meet your business requirements, built with the latest web technologies.",
  },
  {
    count: "02",
    image: "/images/group3.png",
    title: "eCommerce Solutions",
    description:
      "We create powerful eCommerce platforms that provide an intuitive shopping experience, helping you increase sales and grow your business.",
  },
  {
    count: "03",
    image: "/images/group4.png",
    title: "Content Management Systems (CMS)",
    description:
      " Manage your website content easily with our custom CMS solutions, designed to be user-friendly and scalable.",
  },
  {
    count: "04",
    image: "/images/group5.png",
    title: "Responsive Web Design",
    description:
      "We ensure your website looks great on all devices, providing a seamless experience for users on mobile, tablet, and desktop.",
  },
  {
    count: "05",
    image: "/images/group6.png",
    title: "Web Application Development",
    description:
      "Custom web applications built to streamline your business processes and improve efficiency.",
  },
  {
    count: "06",
    image: "/images/group7.png",
    title: "SEO Optimization",
    description:
      "We build websites that are optimized for search engines, ensuring your business gets the visibility it deserves.",
  },
];

const WebDevelopment: FC = () => {
  return (
    <div className="bg-[var(--bgnew)] text-[var(--text)]">
      <Navbar />

      <div className="container md:px-10 mb-32">
        <div className="flex flex-col pt-32 md:pt-40">
          <h1 className="mb-10 py-2 text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to bg-purple-500 bg-opacity-50">
            Web Development Services
          </h1>
          {/* <p className="mt-10 text-lg md:text-xl max-w-2xl mx-auto text-left">
              We build websites that not only look stunning but are also
              optimized for performance, scalability, and user experience.
            </p> */}
          <p className="mt-3 text-lg md:text-xl max-w-2xl text-left text-[var(--gray-blue)] light:text-[var(--gray-40)]">
            A well-designed website is the cornerstone of your digital presence.
            Our website development services focus on creating responsive,
            user-friendly sites that not only look great but also deliver
            results.
          </p>
        </div>

        {/* <ContactServiceForm /> */}
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
              Why Choose Us for Web Development?
            </h2>
            <p className="text-lg mb-6 text-[var(--gray-blue)] light:text-[var(--gray-40)]">
              Our team of experts specializes in creating websites:
            </p>
            <div className="flex flex-col sm:flex-row md:flex-col gap-2 xl:flex-row justify-between items-center mb-6 text-lg text-[var(--gray-blue)] light:text-[var(--gray-40)]">
              <div className="w-full inline-block bg-gradient-to-r from-sky-400 to-purple-500 p-[1px] rounded-full">
                <span className="min-w-[148px] w-full block bg-white dark:bg-black rounded-full px-4 py-3 text-center text-lg font-semibold outline-[3px] outline-dotted outline-transparent">
                  responsive
                </span>
              </div>
              <div className="w-full inline-block bg-gradient-to-r from-sky-400 to-purple-500 p-[1px] rounded-full">
                <span className="min-w-[148px] w-full text-center block bg-white dark:bg-black  rounded-full px-4 py-3 text-lg font-semibold outline-[3px] outline-dotted outline-transparent">
                  dynamic
                </span>
              </div>
              <div className="w-full inline-block bg-gradient-to-r from-sky-400 to-purple-500 p-[1px] rounded-full">
                <span className="min-w-[148px] w-full text-center block bg-white dark:bg-black  rounded-full px-4 py-3 text-lg font-semibold outline-[3px] outline-dotted outline-transparent">
                  SEO-friendly
                </span>
              </div>
            </div>
            <p className="text-lg text-[var(--gray-blue)] light:text-[var(--gray-40)]">
              We utilize the latest technologies and frameworks to build
              scalable and maintainable web solutions. Whether you need a simple
              website or a complex web application, we have the expertise to
              bring your vision to life.
            </p>
          </div>
          <div className="relative w-full h-64 md:h-96">
            <Image
              src="/images/web-developer.jpg"
              alt="Web Development"
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

export default WebDevelopment;
