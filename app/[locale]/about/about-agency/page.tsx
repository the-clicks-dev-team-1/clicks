import { FC } from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";
import TextBlock from "@/components/text-block";
import Footer from "@/components/footer";
import ContactBlock from "@/components/contactBlock";
import { Metadata } from "next";
import TeamSection from "@/components/TeamSection";
import { Link } from "@/i18n/routing";

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
      <div className="container md:px-10">
        {/* Header Section */}
        <div className="bg-[var(--bgnew)] py-32 md:pt-40">
          <div className="flex flex-col gap-8 mt-10 md:flex-row items-center justify-center">
            <div className="w-full md:w-1/2 flex-1 text-center md:text-left">
              <div className="mb-10 text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-sky-400 to bg-purple-500 bg-opacity-50">
                <h1>About The Clicks</h1>
              </div>
              <div className="w-full md:hidden overflow-hidden flex-1 rounded-2xl">
                <Image
                  src="/images/office.jpeg"
                  alt="Marketing Wave"
                  width={600}
                  height={400}
                  className="object-cover rounded-2xl w-full"
                  priority
                />
              </div>
              <p className="mt-4 text-sm md:text-m font-normal text-[var(--gray-blue)] light:text-[var(--gray-40)] text-justify">
                At The Clicks, we don&apos;t just focus on enhancing your
                website&apos;s visibility; we partner with you to drive
                meaningful results that positively impact your bottom line. Our
                commitment to delivering tangible business outcomes is what sets
                us apart in the digital marketing landscape.
              </p>
              <p className="mt-4 text-sm md:text-m font-normal text-[var(--gray-blue)] light:text-[var(--gray-40)] text-justify">
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
                  className="inline-block bg-[var(--ocean-blue)] #bg-gradient-to-r from-sky-400 to-purple-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-opacity-75 transition duration-300"
                >
                  Challenge Us
                </Link>
              </div>
            </div>

            <div className="hidden md:block w-full md:w-1/2 overflow-hidden flex-1 rounded-2xl">
              <Image
                src="/images/office.jpeg"
                alt="Marketing Wave"
                width={600}
                height={400}
                className="object-cover rounded-2xl w-full"
                priority
              />
            </div>
          </div>
        </div>

        {/* The Clicks Culture Section */}
        <div className="bg-[var(--bgnew)] text-[var(--text)] mb-32">
          {/* Culture Items */}
          <div className="space-y-12">
            {/* Culture Item 1 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <h2 className="md:hidden text-2xl sm:text-3xl md:text-4xl place-self-start bg-clip-text text-transparent bg-gradient-to-b from-sky-400 to bg-purple-500 bg-opacity-50">
                The Clicks Culture
              </h2>
              <div className="w-full md:w-1/2">
                <Image
                  src="/images/standup.jpeg"
                  alt="Culture Image 1"
                  width={600}
                  height={400}
                  className="object-cover rounded-2xl w-full"
                />
              </div>
              <div className="w-full md:w-1/2 text-left text-[var(--light-blue)] light:text-[var(--gray-70)]">
                <h2 className="hidden md:block mb-10 text-2xl sm:text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-sky-400 to bg-purple-500 bg-opacity-50">
                  The Clicks Culture
                </h2>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  About Us
                </h3>
                <p className="text-[var(--gray-blue)] light:text-[var(--gray-40)] text-sm md:text-m pb-6 text-justify">
                  The Clicks is a dynamic digital marketing agency where
                  creativity and innovation are at the forefront of everything
                  we do. Our team is driven by passion and energy, constantly
                  pushing the boundaries to deliver outstanding results. We are
                  perfectionists who value the quality and impact of our work,
                  and we are committed to driving business success and growth
                  for our clients in the digital space.
                </p>
                <p className="text-[var(--gray-blue)] light:text-[var(--gray-40)] text-sm md:text-m pb-6 text-justify">
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
            <div className="flex flex-col md:flex-row items-center gap-8 text-[var(--light-blue)] light:text-[var(--gray-70)]">
              <div className="w-full md:w-1/2 text-left order-2 md:order-1">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  Our Team
                </h3>
                <p className="text-[var(--gray-blue)] light:text-[var(--gray-40)] text-sm md:text-m pb-6 text-justify">
                  At The Clicks, our team is a close-knit community of
                  passionate and driven professionals who share a unified
                  vision. Each member embodies the spirit of a true
                  &quot;Clicker&quot;, characterized by ambition,
                  responsibility, and a deep commitment to excellence. Our team
                  is made up of experts who are not only skilled in their fields
                  but also innovators who constantly push boundaries to explore
                  new possibilities in digital marketing.
                </p>
                <p className="text-[var(--gray-blue)] light:text-[var(--gray-40)] text-sm md:text-m pb-6 text-justify">
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
                  className="object-cover rounded-2xl w-full"
                />
              </div>
            </div>

            {/* Culture Item 3 */}
            <div className="flex flex-col md:flex-row items-center gap-8 text-[var(--light-blue)] light:text-[var(--gray-70)]">
              <div className="w-full md:w-1/2">
                <Image
                  src="/images/respect.jpeg"
                  alt="Culture Image 3"
                  width={600}
                  height={400}
                  className="object-cover rounded-2xl w-full"
                />
              </div>
              <div className="w-full md:w-1/2 text-left">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  Work Process
                </h3>
                <p className="text-[var(--gray-blue)] light:text-[var(--gray-40)] text-sm md:text-m pb-6 text-justify">
                  At The Clicks, we recognize that our people are the core of
                  our success, and their well-being and productivity are our top
                  priorities. We are committed to creating a work environment
                  that is both comfortable and highly efficient, providing our
                  team with the tools and support they need to excel. By
                  constantly enhancing our workplace, we ensure that every team
                  member can perform at their best, driving the exceptional
                  results that define our agency.
                </p>
                <p className="text-[var(--gray-blue)] light:text-[var(--gray-40)] text-sm md:text-m pb-6 text-justify">
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

        <TeamSection />

        {/* <div className="relative w-full aspect-video">
          <iframe
            src="https://kuula.co/share/hpsvv/collection/7XkRW?logo=1&info=1&fs=1&vr=1&zoom=1&autorotate=0.3&thumbs=1&alpha=0.60"
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allowFullScreen
            allow="vr,gyroscope,accelerometer,fullscreen"
            loading="lazy"
          />
        </div> */}
      </div>
      <ContactBlock />
      <Footer />
    </div>
  );
};

export default AboutAgency;
