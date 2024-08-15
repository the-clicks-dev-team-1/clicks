import { FC } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/app/footer";
import Link from "next/link";

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

      {/* Contact Form and Info */}
      <div className="py-20 px-4 md:px-20 lg:px-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Get in Touch</h2>
            <p className="text-lg mb-4">
              Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
            </p>
            <p className="text-lg mb-2">
              <strong>Email:</strong> <a href="mailto:info@theclicks.com" className="text-sky-400">sales@theclicks.com</a>
            </p>
            <p className="text-lg mb-2">
              <strong>Phone:</strong> <a href="tel:+1234567890" className="text-sky-400">+1(506)477-0324</a>
            </p>
            <p className="text-lg">
              <strong>Address:</strong> Dieppe, NB, Canada
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-block bg-gradient-to-r from-sky-400 to-purple-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-opacity-75 transition duration-300"
              >
                Let's Work Together
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Send Us a Message</h2>
            <form action="#" method="POST">
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 bg-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 bg-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full p-3 bg-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-sky-400 to-purple-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-opacity-75 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-black py-20">
        <div className="container mx-auto">
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
