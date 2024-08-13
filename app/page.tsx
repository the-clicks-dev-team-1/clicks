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
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
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
        <div className="flex justify-center"> {/* Add a flex container here to center the button */}
          <Link
            href="https://buy.stripe.com/6oEg1WdsibFr1EYbIK"
            className="rounded-3xl my-4 py-2 px-6 text-white items-center flex justify-center"
            style={{
              background: "linear-gradient(270deg, #084378, #0A437A, #483BB5, #347BB8, #12A6C8)",
            }}
          >
            Book a Call
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
          <Footer />
        </div>
      </div>
    </div>
  );
}
