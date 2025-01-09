import { FC } from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import ContactBlock from "@/components/contactBlock";
import clientNew from "@/lib/contentfulNew";
import { Metadata } from "next";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "@/components/ui/glowing-stars";

export const metadata: Metadata = {
  title: "Join Our Team",
  description:
    "We're always looking for talented and passionate individuals to join our team. Explore our current job openings and find out more about life at The Clicks.",
};

const fetchJobs = async () => {
  const res = await clientNew.getEntries({ content_type: "jobOpening" });
  return res.items;
};

const Careers: FC = async () => {
  const jobs = await fetchJobs();

  return (
    <div className="bg-[var(--bgnew)] text-[var(--text)]">
      <Navbar />

      {/* Header Section */}
      <div className="bg-[var(--blue1)] light:bg-[var(--ice-blue)] #bg-gradient-to-b from-sky-400 to-purple-500 pb-20 pt-32 text-center">
        <h1 className="text-4xl my-10 md:text-6xl font-normal bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to bg-purple-500 bg-opacity-50">
          Join Our Team
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-[var(--gray-blue)] light:text-[var(--gray-40)]">
          We&apos;re always looking for talented and passionate individuals to
          join our team. Explore our current job openings and find out more
          about life at The Clicks.
        </p>
      </div>

      {/* Open Positions Section */}
      <div className="py-20 px-4 md:px-20 lg:px-40 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Current Job Openings
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {jobs.map((job) => (
            <div
              key={job.sys.id}
              className="bg-[var(--blue2)] light:bg-[var(--light-blue)] rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-2xl font-bold">
                {typeof job.fields.title === "string" ? job.fields.title : ""}
              </h3>
              <p className="mt-2 text-lg text-[var(--text-gray)]">
                {typeof job.fields.shortDescription === "string"
                  ? job.fields.shortDescription
                  : ""}
              </p>
              <Link
                href={`/about/careers/${job.fields.slug}`} // исправлено
                className="inline-block mt-4 bg-[var(--ocean-blue)] #bg-gradient-to-r from-sky-400 to-purple-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-opacity-75 transition duration-300"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Life at The Clicks Section */}
      <div className="py-20 bg-[var(--blue2)] light:bg-[var(--ice-blue)]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <Image
                src="/images/team.jpg"
                alt="Life at The Clicks"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-semibold mb-10 bg-clip-text text-transparent bg-gradient-to-b from-sky-400 to bg-purple-500 bg-opacity-50">
                Life at The Clicks
              </h2>
              <p className="text-lg text-[var(--gray-blue)] light:text-[var(--gray-40)]">
                At The Clicks, we believe that our people are our greatest
                asset. We foster a collaborative, inclusive, and dynamic work
                environment where creativity and innovation thrive. Whether
                you&apos;re working on a challenging project or celebrating a
                team milestone, life at The Clicks is both rewarding and
                fulfilling.
              </p>
              <p className="mt-4 text-lg text-[var(--gray-blue)] light:text-[var(--gray-40)]">
                We invest in our employees&apos; growth and provide
                opportunities for continuous learning, professional development,
                and career advancement. Join us, and let&apos;s build something
                amazing together!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 px-4 md:px-20 lg:px-40 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-b from-sky-400 to bg-purple-500 bg-opacity-50">
          Our Benefits
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="flex items-center justify-center antialiased">
            <GlowingStarsBackgroundCard>
              <GlowingStarsTitle className="mb-2">
                Health & Wellness
              </GlowingStarsTitle>
              <div className="flex justify-between items-end">
                <GlowingStarsDescription>
                  Comprehensive health and wellness plans to keep you and your
                  family healthy.
                </GlowingStarsDescription>
              </div>
            </GlowingStarsBackgroundCard>
          </div>

          <div className="flex items-center justify-center antialiased">
            <GlowingStarsBackgroundCard>
              <GlowingStarsTitle className="mb-2">
                Career Growth
              </GlowingStarsTitle>
              <div className="flex justify-between items-end">
                <GlowingStarsDescription>
                  Opportunities for professional development and career
                  advancement.
                </GlowingStarsDescription>
              </div>
            </GlowingStarsBackgroundCard>
          </div>

          <div className="flex items-center justify-center antialiased">
            <GlowingStarsBackgroundCard>
              <GlowingStarsTitle className="mb-2">
                Work-Life Balance
              </GlowingStarsTitle>
              <div className="flex justify-between items-end">
                <GlowingStarsDescription>
                  Flexible work hours and remote work options to support your
                  work-life balance.
                </GlowingStarsDescription>
              </div>
            </GlowingStarsBackgroundCard>
          </div>

          <div className="flex items-center justify-center antialiased">
            <GlowingStarsBackgroundCard>
              <GlowingStarsTitle className="mb-2">
                Work Environment
              </GlowingStarsTitle>
              <div className="flex justify-between items-end">
                <GlowingStarsDescription>
                  Work with talented, supportive colleagues united by shared
                  goals.
                </GlowingStarsDescription>
              </div>
            </GlowingStarsBackgroundCard>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <ContactBlock />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Careers;
