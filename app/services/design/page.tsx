import { FC } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/app/footer";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import ContactServiceForm from "@/components/ContactServiceForm";

export const metadata: Metadata = {
  title: "Graphic Design Services",
  description:
    "Elevate your brand with stunning visuals and creative graphic design solutions tailored to your needs",
};

const GraphicDesign: FC = () => {
  return (
    <div className="bg-[var(--bgnew)] text-[var(--text)]">
      <Navbar />

      {/* Header section with form */}
      <div className="bg-gradient-to-b from-sky-400 to-purple-500 py-20 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-20 px-4 md:px-20 lg:px-40">
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-5xl font-bold">
              Graphic Design Services
            </h1>
            <p className="mt-10 text-lg md:text-xl max-w-2xl mx-auto text-left">
              Elevate your brand with stunning visuals and creative graphic
              design solutions tailored to your needs.
            </p>
            <p className="mt-3 text-lg md:text-xl max-w-2xl mx-auto text-left">
              First impressions matter, and your brand&apos;s visuals play a
              critical role in how your business is perceived. Our graphic
              design services bring your brand to life with professional,
              high-quality designs that communicate your message clearly and
              effectively. From logos and branding materials to marketing
              collateral and web design, we create visuals that resonate with
              your audience.
            </p>
            <p className="mt-3 text-lg md:text-xl max-w-2xl mx-auto text-left">
              Our team works closely with you to understand your vision and
              translate it into stunning designs that align with your brand
              identity. Whether you need a complete rebranding or fresh
              promotional materials, our graphic design services ensure your
              brand stands out.
            </p>
          </div>
          <div className="flex flex-col justify-between">
            <h2 className="text-2xl font-semibold mb-4">
              Get a Free Graphic Design Consultation
            </h2>
            <ContactServiceForm />
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-20 px-4 md:px-20 lg:px-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              What is Graphic Design and Why Does It Matter?
            </h2>
            <p className="text-lg mb-4">
              Graphic design is the art of creating visual content to
              communicate messages. It involves combining images, typography,
              and color to create materials that capture attention and convey a
              specific message to your audience.
            </p>
            <p className="text-lg mb-4">
              Whether it&apos;s for your website, social media, or print
              materials, strong graphic design is essential for making a lasting
              impression and building a cohesive brand identity that resonates
              with your audience.
            </p>
            <p className="text-lg">
              Our graphic design services are designed to help you create
              visually compelling materials that not only look great but also
              achieve your business goals.
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

      {/* Why Graphic Design Matters Section */}
      <div className="py-20 px-4 md:px-20 lg:px-40 bg-[var(--bg900)]">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
          Why Graphic Design Matters?
        </h2>
        <p className="text-lg text-center mb-10 max-w-3xl mx-auto">
          Graphic design is crucial for creating a strong visual identity for
          your brand. It helps you communicate your message more effectively,
          engage your audience, and differentiate your business from
          competitors.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Brand Identity</h3>
            <p>
              Graphic design helps you create a consistent visual identity that
              strengthens your brand and makes it easily recognizable.
            </p>
          </div>
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Engagement</h3>
            <p>
              Well-designed visuals capture attention and encourage your
              audience to engage with your content, whether online or offline.
            </p>
          </div>
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Communication</h3>
            <p>
              Effective graphic design communicates your message clearly and
              persuasively, helping you connect with your audience on a deeper
              level.
            </p>
          </div>
        </div>
      </div>

      {/* Our Graphic Design Services Section */}
      <div className="py-20 px-4 md:px-20 lg:px-40">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
          Our Graphic Design Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Logo Design</h3>
            <p>
              We create unique and memorable logos that represent your brand and
              make a lasting impression on your audience.
            </p>
          </div>
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Branding</h3>
            <p>
              Our branding services ensure that every aspect of your visual
              identity is consistent, cohesive, and aligned with your brand
              values.
            </p>
          </div>
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Print Design</h3>
            <p>
              We design stunning print materials, including brochures, business
              cards, and posters, that effectively communicate your message.
            </p>
          </div>
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Web Design</h3>
            <p>
              Our web design services combine aesthetics with functionality to
              create visually appealing websites that drive results.
            </p>
          </div>
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">
              Social Media Graphics
            </h3>
            <p>
              We create engaging social media graphics that capture attention,
              increase engagement, and drive traffic to your online platforms.
            </p>
          </div>
          <div className="bg-[var(--bg800)] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Infographics</h3>
            <p>
              Our infographics simplify complex information and present it in an
              easy-to-understand, visually appealing format.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action section */}
      <div className="py-20 px-4 md:px-20 lg:px-40 text-center bg-[var(--bgnew)]">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Ready to Elevate Your Brand with Stunning Designs?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Contact us today to learn more about our graphic design services and
          how we can help you create visuals that make an impact.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-gradient-to-r from-sky-400 to-purple-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-opacity-75 transition duration-300"
        >
          Get in Touch
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default GraphicDesign;
