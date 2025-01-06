import { FC } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import ContactBlock from "@/components/contactBlock";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Let's talk! We're here to help you grow your business. Reach out to us for any inquiries, and we'll get back to you as soon as possible.",
};

const Contact: FC = () => {
  return (
    <div className="bg-[var(--bgnew)] text-[var(--text)]">
      <Navbar />

      {/* Header section */}
      <div className="bg-[var(--blue1)] light:bg-[var(--ice-blue)] #bg-gradient-to-b from-sky-400 to-purple-500 py-20 mb-32 text-center">
        <h1 className="mt-10 text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to bg-purple-500 bg-opacity-50">
          Contact Us
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-[var(--gray-blue)] light:text-[var(--gray-40)]">
          Let&apos;s talk! We&apos;re here to help you grow your business. Reach
          out to us for any inquiries, and we&apos;ll get back to you as soon as
          possible.
        </p>
      </div>

      <ContactBlock />

      {/* Map Section */}
      <div className="bg-[var(--bgnew)] pb-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center text-[var(--light-blue)] light:text-[var(--gray-70)]">
            Our Location
          </h2>
          <div className="w-full h-96 bg-black rounded-lg overflow-hidden relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2767.153015562522!2d-64.78180668803813!3d46.087927291486345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ca0b939525ae901%3A0xab7cfdf6be405b97!2s860%20Main%20St%2C%20Moncton%2C%20NB%20E1C%201G2!5e0!3m2!1sen!2sca!4v1735949212605!5m2!1sen!2sca"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
