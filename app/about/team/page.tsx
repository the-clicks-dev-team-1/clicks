import { FC } from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import TextBlock from "@/components/text-block";
import Footer from "@/app/footer";
import Block4 from "@/app/block4";
import ContactBlock from "@/app/contactBlock";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet the Clickers Driving Success for Our Clients",
  description:
    "The Clicks team is a fusion of passion, experience, and innovation, where every 'Clicker' is not just an employee but a driving force behind success. We are professionals who aren't afraid to challenge traditional marketing approaches, creating solutions that change the game.",
};

const Team: FC = () => {
  return (
    <div className="bg-[var(--bgnew)] text-[var(--text)]">
      <Navbar />

      {/* Main content wrapper */}
      <div className="px-4 py-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="bg-[var(--bgnew)] py-20">
          <div className="flex flex-col mt-10 md:flex-row items-center justify-center">
            <div className="w-full md:w-1/2 px-4 md:px-16 text-center md:text-left">
              <div className="text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-sky-400 to bg-purple-500 bg-opacity-50">
                Meet the Clickers Driving Success for Our Clients.
              </div>
              <p className="mt-4 text-sm md:text-m font-normal text-[var(--text-gray)] text-justify">
                The Clicks team is a fusion of passion, experience, and
                innovation, where every &quot;Clicker&quot; is not just an
                employee but a driving force behind success. We are
                professionals who aren&apos;t afraid to challenge traditional
                marketing approaches, creating solutions that change the game.
                Our arsenal includes cutting-edge technologies, analytical
                methods, and creative strategies that help businesses attract,
                retain, and amaze their customers. Each Clicker brings their
                unique expertise, combining efforts to create marketing
                campaigns that not only meet goals but exceed them.
              </p>
              <p className="mt-4 text-sm md:text-m font-normal text-[var(--text-gray)] text-justify">
                At the heart of our work is a partnership with clients, built on
                mutual trust and understanding. We strive to ensure that every
                project is a step towards long-term success. Clickers are not
                just task executors; they are your strategic partners, helping
                to build a sustainable digital ecosystem for your business. We
                believe that together with you, we can not only keep pace with
                the times but also set trends in digital marketing.
              </p>
              <div className="mt-8 flex justify-center md:justify-start relative z-20">
                <Link
                  href="/about/careers"
                  className="inline-block bg-gradient-to-r from-sky-400 to-purple-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-opacity-75 transition duration-300"
                >
                  Join Our Team
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center mt-4 md:mt-0 relative">
              <div className="absolute inset-0 flex justify-center items-center z-10">
                <Image
                  src="/images/team.png"
                  alt="Background Image"
                  layout="intrinsic"
                  width={600}
                  height={600}
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </div>
              <Image
                src="/images/happy-team.jpg"
                alt="Happy Team"
                width={400}
                height={500}
                className="rounded-2xl object-cover relative z-10"
              />
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-[var(--bgnew)] py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-sky-400 to bg-purple-500 bg-opacity-50">
              Meet Our Team
            </h2>
            <div className="flex flex-wrap justify-center mt-8">
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                <Image
                  src="/images/paul.png"
                  alt="Team Member 1"
                  className="rounded-full mb-4 mx-auto"
                  width={200}
                  height={200}
                />
                <h3 className="text-lg sm:text-xl font-semibold">
                  Pavlo Demenshyn
                </h3>
                <p className="text-white">CEO & Founder</p>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                <Image
                  src="/images/val.png"
                  alt="Team Member 2"
                  className="rounded-full mb-4 mx-auto"
                  width={200}
                  height={200}
                />
                <h3 className="text-lg sm:text-xl font-semibold">
                  Valerii Kryshtal
                </h3>
                <p className="text-white">Co-founder</p>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                <Image
                  src="/images/kate.png"
                  alt="Team Member 3"
                  className="rounded-full mb-4 mx-auto"
                  width={200}
                  height={200}
                />
                <h3 className="text-lg sm:text-xl font-semibold">
                  Kateryna Kovalenko
                </h3>
                <p className="text-white">Creative Director & Co-founder</p>
              </div>
              {/* Add more team members as needed */}
            </div>
          </div>
        </div>

        {/* Additional Block Section */}
        <Block4 />

        {/* Careers Link */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/about/careers"
            className="inline-block bg-gradient-to-r from-sky-400 to-purple-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-opacity-75 transition duration-300"
          >
            Our Current Job Openings
          </Link>
        </div>

        {/* Contact Form Section */}
        <ContactBlock />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Team;
