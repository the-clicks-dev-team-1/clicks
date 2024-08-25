import { FC } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/app/footer";
import Link from "next/link";
import Form from "@/components/form";

const Contact: FC = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />

      {/* Header section */}
      <div className="bg-gradient-to-b from-sky-400 to-purple-500 py-20 text-center">
        <h1 className="mt-10 text-3xl md:text-5xl font-bold">Contact Us</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          Let’s talk! We’re here to help you grow your business. Reach out to us for any inquiries, and we’ll get back to you as soon as possible.
        </p>
      </div>

      <Form />

      {/* Map Section */}
      <div className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Our Location</h2>
          <div className="w-full h-96 bg-black rounded-lg overflow-hidden relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354346826157!2d-122.41941548468194!3d37.774929279759596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808eafbb7493%3A0x8a079cfbf11555f4!2sIgnite%20Digital!5e0!3m2!1sen!2sus!4v1618951371307!5m2!1sen!2sus"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
