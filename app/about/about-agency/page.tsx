import { FC } from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import TextBlock from "@/components/text-block";
import Footer from "@/app/footer";
import ContactBlock from "@/app/contactBlock";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About The Clicks",
  description:
    "At The Clicks, we don't just focus on enhancing your website&apos;s visibility; we partner with you to drive meaningful results that positively impact your bottom line. Our commitment to delivering tangible business outcomes is what sets us apart in the digital marketing landscape.",
};

const AboutAgency: FC = () => {
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
                <h1>About The Clicks</h1>
              </div>
              <p className="mt-4 text-sm md:text-m font-normal text-[var(--text-gray)] text-justify">
                At The Clicks, we don&apos;t just focus on enhancing your
                website&apos;s visibility; we partner with you to drive
                meaningful results that positively impact your bottom line. Our
                commitment to delivering tangible business outcomes is what sets
                us apart in the digital marketing landscape.
              </p>
              <p className="mt-4 text-sm md:text-m font-normal text-[var(--text-gray)] text-justify">
                Our greatest asset is our team. We prioritize continuous
                learning and professional growth, ensuring that our employees
                are always at the forefront of the latest industry trends and
                practices. At The Clicks, we&apos;re more than just a marketing
                agency—we&apos;re a community, fostering a culture and mindset
                that empowers both our team and our clients to thrive.
              </p>
              <div className="mt-6 md:mt-8 flex justify-center md:justify-start relative z-20">
                <Link
                  href="/contact"
                  className="inline-block bg-gradient-to-r from-sky-400 to-purple-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-opacity-75 transition duration-300"
                >
                  Challenge Us
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center mt-4 md:mt-0 relative">
              <div className="absolute inset-0 flex justify-center items-center">
                <Image
                  src="/images/proposal.png"
                  alt="Background Image"
                  layout="intrinsic"
                  width={500}
                  height={500}
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </div>
              <Image
                src="/images/office.jpeg"
                alt="Marketing Wave"
                width={500}
                height={500}
                className="rounded-2xl object-cover relative z-10"
              />
            </div>
          </div>
        </div>

        {/* The Clicks Culture Section */}
        <div className="bg-[var(--bgnew)] text-[var(--text)] py-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-center pb-4 bg-clip-text text-transparent bg-gradient-to-b from-sky-400 to bg-purple-500 bg-opacity-50">
            The Clicks Culture
          </h2>

          {/* Culture Items */}
          <div className="space-y-12">
            {/* Culture Item 1 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <Image
                  src="/images/standup.jpeg"
                  alt="Culture Image 1"
                  width={600}
                  height={400}
                  className="rounded-2xl"
                />
              </div>
              <div className="w-full md:w-1/2 text-left md:text-right p-4 md:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  About Us
                </h3>
                <p className="text-[var(--text-gray)] text-sm md:text-m pb-6 text-justify">
                  The Clicks is a dynamic digital marketing agency where
                  creativity and innovation are at the forefront of everything
                  we do. Our team is driven by passion and energy, constantly
                  pushing the boundaries to deliver outstanding results. We are
                  perfectionists who value the quality and impact of our work,
                  and we are committed to driving business success and growth
                  for our clients in the digital space.
                </p>
                <p className="text-[var(--text-gray)] text-sm md:text-m pb-6 text-justify">
                  Our approach to governance combines structured liberalism for
                  regulated aspects of our work with a corporate noocracy that
                  prioritizes flexibility and innovation. At The Clicks, we
                  emphasize common sense and rational decision-making, ensuring
                  that every action is guided by logic and aimed at achieving
                  the best outcomes. This balance of freedom and structure,
                  coupled with our non-standard horizontal hierarchy, fosters
                  collaboration and minimizes formalities, empowering our team
                  to contribute their best.
                </p>
              </div>
            </div>

            {/* Culture Item 2 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2 text-left p-4 md:p-6 order-2 md:order-1">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  Our Team
                </h3>
                <p className="text-[var(--text-gray)] text-sm md:text-m pb-6 text-justify">
                  At The Clicks, our team is a close-knit community of
                  passionate and driven professionals who share a unified
                  vision. Each member embodies the spirit of a true
                  &quot;Clicker&quot;, characterized by ambition,
                  responsibility, and a deep commitment to excellence. Our team
                  is made up of experts who are not only skilled in their fields
                  but also innovators who constantly push boundaries to explore
                  new possibilities in digital marketing.
                </p>
                <p className="text-[var(--text-gray)] text-sm md:text-m pb-6 text-justify">
                  We cultivate an environment where equality and collaboration
                  are paramount, ensuring that every team member&apos;s voice is
                  heard and valued. While we thrive on teamwork, our culture
                  also embraces ambition and healthy competition, which drives
                  us to continually elevate our performance. This unique blend
                  of camaraderie and individual drive empowers us to
                  consistently deliver exceptional results for our clients,
                  fostering an atmosphere of creativity, initiative, and ongoing
                  growth.
                </p>
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2">
                <Image
                  src="/images/break.jpeg"
                  alt="Culture Image 2"
                  width={600}
                  height={400}
                  className="rounded-2xl"
                />
              </div>
            </div>

            {/* Culture Item 3 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <Image
                  src="/images/respect.jpeg"
                  alt="Culture Image 3"
                  width={600}
                  height={400}
                  className="rounded-2xl"
                />
              </div>
              <div className="w-full md:w-1/2 text-left md:text-right p-4 md:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  Work Process
                </h3>
                <p className="text-[var(--text-gray)] text-sm md:text-m pb-6 text-justify">
                  At The Clicks, we recognize that our people are the core of
                  our success, and their well-being and productivity are our top
                  priorities. We are committed to creating a work environment
                  that is both comfortable and highly efficient, providing our
                  team with the tools and support they need to excel. By
                  constantly enhancing our workplace, we ensure that every team
                  member can perform at their best, driving the exceptional
                  results that define our agency.
                </p>
                <p className="text-[var(--text-gray)] text-sm md:text-m pb-6 text-justify">
                  A distinctive feature of our work process is the integration
                  of gamification and automation. We make daily tasks more
                  engaging and enjoyable by incorporating elements of play,
                  which fosters a collaborative and motivated atmosphere. At the
                  same time, we utilize advanced automation to streamline
                  repetitive tasks, allowing our team to focus on high-impact,
                  strategic activities. This blend of fun and efficiency not
                  only boosts productivity but also inspires creativity and
                  innovation, enabling us to stay ahead in the ever-evolving
                  digital marketing landscape.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Values Section */}
        <TextBlock />

        {/* Team Section */}
        <div className="bg-[var(--bgnew)] py-20">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-center bg-clip-text text-transparent bg-gradient-to-b from-sky-400 to bg-purple-500 bg-opacity-50">
              Meet Our Team
            </h2>
            <div className="flex flex-wrap justify-center">
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

        {/* Contact Form Section */}
        <ContactBlock />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default AboutAgency;
