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
import ContactBlock from "./contactBlock";

export default function Home() {
  return (
    <div className="w-full md:items-center md:justify-center bg-[var(--bg-99)] text-[var(--text)] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar />
      <Spotlight
        className="hidden md:flex md:left-80 md:-top-75"
        fill="white"
      />
      <div className="p-4 mx-auto relative z-10 w-full pt-32 md:pt-40 px-2">
        {" "}
        {/* Adjusted padding here */}
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-sky-400 to bg-purple-500 bg-opacity-50">
          <h1>
            Transform your business <br /> with artificial intelligence
          </h1>
        </div>
        <p className="mt-4 text-lg font-normal text-[var(--gray)] max-w-lg text-center mx-auto px-4">
          Revolutionize operations, optimize processes, and drive growth with
          smarter decisions and innovation.
        </p>
        <div className="flex justify-center mt-2">
          {" "}
          {/* Add a flex container here to center the button */}
          <Link
            href="/book"
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
          <ContactBlock />
          <Footer />
        </div>
      </div>
    </div>
  );
}
