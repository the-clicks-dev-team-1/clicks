import { FC } from "react";
import Navbar from "@/components/navbar";
import Image from 'next/image';
import Link from 'next/link';
import TextBlock from "@/components/text-block";
import Footer from "@/app/footer";
import Block4 from "@/app/block4";

const Team: FC = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      
      {/* Main content wrapper to ensure consistent padding */}
      <div className="px-4 py-8">
      
        {/* Header div */}
        <div className="bg-black py-20">
          <div className="mx-auto relative z-10 w-full pt-10 pb-20 md:pt-20 flex flex-col md:flex-row items-center justify-center">
            <div className="w-full md:w-1/2 px-4 md:px-16 text-center md:text-left">
              <div className="text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-sky-400 to bg-purple-500 bg-opacity-50">
                Meet the Clickers Driving Success for Our Clients.
              </div>
              <p className="mt-4 text-sm md:text-m font-normal text-neutral-300 text-justify">
                The Clicks team is a fusion of passion, experience, and innovation, where every "Clicker" 
                is not just an employee but a driving force behind success. We are professionals who aren’t 
                afraid to challenge traditional marketing approaches, creating solutions that change the game. 
                Our arsenal includes cutting-edge technologies, analytical methods, and creative strategies 
                that help businesses attract, retain, and amaze their customers. Each Clicker brings their unique expertise, 
                combining efforts to create marketing campaigns that not only meet goals but exceed them.
              </p>
              <p className="mt-4 text-sm md:text-m font-normal text-neutral-300 text-justify">
                At the heart of our work is a partnership with clients, built on mutual trust and understanding. 
                We strive to ensure that every project is a step towards long-term success. 
                Clickers are not just task executors; they are your strategic partners, 
                helping to build a sustainable digital ecosystem for your business. 
                We believe that together with you, we can not only keep pace with the times but also set trends in digital marketing.
              </p>
              <div className="mt-8">
              <Link
                href="/contact"
                className="inline-block bg-gradient-to-r from-sky-400 to-purple-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-opacity-75 transition duration-300"
              >
                Join Our Team
              </Link>
            </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center mt-4 md:mt-0 relative">
              <div className="absolute inset-0 flex justify-center items-center">
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
                alt="Marketing Wave"
                width={400}
                height={500}
                className="rounded-2xl object-cover relative z-10"
              />
            </div>
          </div>
        </div>

        {/* Team div */}
        <div className="bg-black py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-center bg-clip-text text-transparent bg-gradient-to-b from-sky-400 to bg-purple-500 bg-opacity-50">Meet Our Team</h2>
            <div className="flex flex-wrap justify-center mt-8">
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                <img
                  src="/images/paul.png"
                  alt="Team Member 1"
                  className="rounded-full mb-4 mx-auto"
                  style={{ width: '200px', height: '200px' }} 
                />
                <h3 className="text-lg sm:text-xl font-semibold">Pavlo Demenshyn</h3>
                <p className="text-white">CEO & Founder</p>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                <img
                  src="/images/val.png"
                  alt="Team Member 2"
                  className="rounded-full mb-4 mx-auto"
                  style={{ width: '200px', height: '200px' }} 
                />
                <h3 className="text-lg sm:text-xl font-semibold">Valerii Kryshtal</h3>
                <p className="text-white">Co-founder</p>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                <img
                  src="/images/kate.png"
                  alt="Team Member 3"
                  className="rounded-full mb-4 mx-auto"
                  style={{ width: '200px', height: '200px' }} 
                />
                <h3 className="text-lg sm:text-xl font-semibold">Kateryna Kovalenko</h3>
                <p className="text-white">Creative Director & Co-founder</p>
              </div>
              {/* Add more team members as needed */}
            </div>
          </div>
        </div>

        <Block4 />

        <div className="mt-2 md:mt-8 flex justify-center">
              <Link
                href="/contact"
                className="inline-block bg-gradient-to-r from-sky-400 to-purple-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-opacity-75 transition duration-300"
              >
                Our Current Job Openings
              </Link>
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

        {/* Footer div */}
        <Footer />
      </div>
    </div>
  );
};

export default Team;
