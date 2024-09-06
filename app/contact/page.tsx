import { FC } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/app/footer";
import Link from "next/link";
import ContactBlock from "@/app/contactBlock";
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
      <div className="bg-gradient-to-b from-sky-400 to-purple-500 py-20 text-center">
        <h1 className="mt-10 text-3xl md:text-5xl font-bold">Contact Us</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          Let&apos;s talk! We&apos;re here to help you grow your business. Reach
          out to us for any inquiries, and we&apos;ll get back to you as soon as
          possible.
        </p>
      </div>

      <ContactBlock />

      {/* Map Section */}
      <div className="bg-[var(--bgnew)] py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
            Our Location
          </h2>
          <div className="w-full h-96 bg-black rounded-lg overflow-hidden relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2767.7873200168383!2d-64.71621872303768!3d46.075281771090545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ca0bb9236cf14cf%3A0x3695526673f08b58!2s46%20D%C3%A9sir%C3%A9%20Court%2C%20Dieppe%2C%20NB%20E1A%200G9!5e0!3m2!1sen!2sca!4v1725258385935!5m2!1sen!2sca"
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
