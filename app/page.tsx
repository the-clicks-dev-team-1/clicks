import Navbar from "@/components/navbar";
import Link from "next/link";
import SliderOne from "@/components/ui/slider";
import Block from "../components/block";
import Services from "../components/services";
import Reviews from "../components/reviews";
import Footer from "../components/footer";
import Block2 from "../components/block2";
import Steps from "../components/steps";
import ContactBlock from "../components/contactBlock";

export default function Home() {
  return (
    <div className="w-full md:items-center md:justify-center bg-[var(--bg-99)] text-[var(--text)] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar />
      {/* <Spotlight
        className="hidden md:flex md:left-80 md:-top-75"
        fill="white"
      /> */}
      <div className="container md:px-10 relative z-10 w-full pt-32 mb-32 md:pt-40 #light:bg-[var(--ice-blue)]">
        <h1 className="mb-4 text-4xl md:text-7xl pb-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-sky-400 to bg-purple-500 bg-opacity-50">
          Transform your business <br /> with artificial intelligence
        </h1>
        <p className="mb-10 text-lg font-normal text-[var(--gray-blue)] light:text-[var(--gray-70)] max-w-lg text-center mx-auto">
          Revolutionize operations, optimize processes, and drive growth with
          smarter decisions and innovation.
        </p>
        <div className="flex justify-center">
          <Link
            href="/book"
            className="inline-block bg-[var(--ocean-blue)] #bg-gradient-to-r from-sky-400 to-purple-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-opacity-75 transition duration-300 light:bg-[var(--ocean-blue)] light:bg-none"
          >
            Book A Call
          </Link>
        </div>
      </div>
      <div className="mx-auto relative z-10 w-full">
        <div className="w-full">
          <SliderOne />
          <Block />
          <Block2 />
          {/* <Block3 /> */}
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
