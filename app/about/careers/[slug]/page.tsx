"use client";

import { FC, useEffect, useState } from "react";
import Image from "next/image";
import client from "@/lib/contentful";
import Navbar from "@/components/navbar";
import Footer from "@/app/footer";
import ContactBlock from "@/app/contactBlock";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import { string } from "zod";

type JobProps = {
  params: { slug: string };
};

const JobDetail: FC<JobProps> = ({ params }) => {
  const [job, setJob] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching data for slug:", params.slug);

      try {
        const entries = await client.getEntries({
          content_type: "jobOpening",
          "fields.slug": params.slug,
        });

        console.log("Entries fetched:", entries);

        if (entries.items.length > 0) {
          console.log("Job found:", entries.items[0]);
          setJob(entries.items[0]);
        } else {
          console.warn("No job found for slug:", params.slug);
          setError(true);
        }
      } catch (error) {
        console.error("Error fetching data from Contentful:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !job) {
    return <div>Job not found</div>;
  }

  // Проверка и извлечение данных из job.fields
  const {
    title,
    shortDescription,
    description,
    image,
    location,
    salary,
    jobType,
  } = job.fields;

  return (
    <div className="bg-[var(--bgnew)] text-[var(--text)]">
      <Navbar />

      <div className="py-20 px-4 md:px-20 lg:px-40 max-w-7xl mx-auto">
        <h1 className="text-4xl mt-10 md:text-6xl font-bold">{title}</h1>

        {image?.fields?.file?.url && (
          <div className="mt-8">
            <Image
              src={`https:${image.fields.file.url}`}
              alt={title}
              width={800}
              height={400}
              className="object-cover w-full h-auto rounded-lg"
            />
          </div>
        )}

        {shortDescription && (
          <div className="mt-4 text-[var(--text-gray)]">
            <p>{shortDescription}</p>
          </div>
        )}

        {description && (
          <div className="mt-10 prose prose-invert max-w-none text-[var(--text-gray)]">
            {documentToReactComponents(description as Document)}
          </div>
        )}

        {location && (
          <div className="mt-4 text-[var(--text-gray)]">
            <strong>Location: </strong>
            {location.lat}, {location.lon}
          </div>
        )}

        {salary && (
          <div className="mt-4 text-[var(--text-gray)]">
            <strong>Salary: </strong>${salary} per year
          </div>
        )}

        {jobType && (
          <div className="mt-4 text-[var(--text-gray)]">
            <strong>Job Type: </strong>
            {jobType}
          </div>
        )}
      </div>

      <ContactBlock />
      <Footer />
    </div>
  );
};

export default JobDetail;
