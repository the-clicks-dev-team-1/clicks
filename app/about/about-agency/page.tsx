import { FC } from "react";
import Navbar from "@/components/navbar";
import Image from 'next/image';
import Link from 'next/link';

const AboutAgency: FC = () => {
  return (
    <div className="bg-black text-white px-6 py-8">
        <Navbar />
      {/* Header Section */}
      <section className="bg-black py-20">
      <div className="p-4 mx-auto relative z-10 w-full pt-10 pb-20 md:pt-20 flex flex-col md:flex-row items-start md:items-center">
        <div className="md:w-1/2 pl-8 md:pl-16">
            <div className="text-2xl ml-24 pb-5 md:text-4xl text-left bg-clip-text text-transparent bg-gradient-to-b from-sky-400 to bg-purple-500 bg-opacity-50">
            About The Clicks.
            </div>
            <p className="mt-4 ml-24 text-lg font-normal text-neutral-300 max-w-lg text-left">
            At The Clicks, we don't just focus on enhancing your website's visibility; 
            we partner with you to drive meaningful results that positively impact your bottom line. 
            Our commitment to delivering tangible business outcomes is what sets us apart in the digital marketing landscape.
            </p>
            <p className="mt-4 ml-24 text-lg font-normal text-neutral-300 max-w-lg text-left">
            Our greatest asset is our team. We prioritize continuous learning and professional growth, 
            ensuring that our employees are always at the forefront of the latest industry trends and practices. 
            At The Clicks, we're more than just a marketing agency—we're a community, fostering a culture and mindset that 
            empowers both our team and our clients to thrive.
            </p>
            <div className="hidden md:flex justify-start px-24 py-8">
                <Link
                href="https://buy.stripe.com/6oEg1WdsibFr1EYbIK"
                className="rounded-3xl my-4 py-2 text-white w-full mx-auto items-center flex justify-center"
                style={{
                    background: "linear-gradient(270deg, #084378, #0A437A, #483BB5, #347BB8, #12A6C8)",
                      }}
                >
                    Chalenge Us
                </Link>
            </div>
        </div>
        <div className="md:w-1/2 flex justify-center mt-4 md:mt-0">
        <Image 
            src="/images/office.jpeg" 
            alt="Marketing Wave" 
            width={521} 
            height={640}
            className="max-w-full h-auto" 
        />
        </div>
    </div>
      </section>

      {/* Mission Section */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-white">
            At The Clicks, our mission is to deliver exceptional
            [products/services] that drive growth and innovation. We strive to
            empower our clients with cutting-edge solutions tailored to their
            unique needs.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Meet Our Team</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 lg:w-1/4 p-4">
              <img
                src="/images/team-member-1.jpg"
                alt="Team Member 1"
                className="rounded-full mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-white">CEO</p>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/4 p-4">
              <img
                src="/images/team-member-2.jpg"
                alt="Team Member 2"
                className="rounded-full mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-white">CTO</p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-blackpy-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 lg:w-1/4 p-4">
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-white">
                We embrace innovation and constantly seek to improve our
                solutions to stay ahead of the curve.
              </p>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/4 p-4">
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-white">
                We conduct our business with the highest standards of ethics and
                transparency.
              </p>
            </div>
            {/* Add more values as needed */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-white mb-8">
            We're here to help! Reach out to us for any inquiries.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutAgency;
