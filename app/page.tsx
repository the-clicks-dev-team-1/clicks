import Navbar from "@/components/navbar";
import { Spotlight } from "@/components/ui/spotlight";
import Link from "next/link";
import SliderOne from "@/components/ui/slider";
import Block from "./block";
import Services from "./services";
import Reviews from "./reviews";
import Footer from "./footer";
import Block2 from "./block2";
import Block3 from "./block3";
import Steps from "./steps";

export default function Home() {
  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.99] text-white antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar />
      <Spotlight 
        className="hidden md:flex md:left-80 md:-top-75"
        fill="white"
      />
      <div className="p-4 mx-auto relative z-10 w-full pt-32 md:pt-40 px-2"> {/* Adjusted padding here */}
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-sky-400 to bg-purple-500 bg-opacity-50">
          Transform your business <br /> with artificial intelligence
        </div>
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
          Revolutionize operations, optimize processes, and drive growth with smarter decisions and innovation.
        </p>
        <div className="flex justify-center mt-2"> {/* Add a flex container here to center the button */}
        <Link
                href="/contact"
                className="inline-block bg-gradient-to-r from-sky-400 to-purple-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-opacity-75 transition duration-300"
              >
                Book A Call
              </Link>
        </div>
        <div className="w-full pt-20 ">
          <SliderOne />
          <Block />
          <Block2 />
          <Block3 />
          <Services />
          <Steps />
          <Reviews />

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

          <Footer />
        </div>
      </div>
    </div>
  );
}
