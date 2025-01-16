"use client";

import { FC, useEffect, useState } from "react";
import Image from "next/image";
import clientNew from "@/lib/contentfulNew";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ContactBlock from "@/components/contactBlock";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { useLocale, useTranslations } from "next-intl";

type JobProps = {
  params: { slug: string };
};

const JobDetail: FC<JobProps> = ({ params }) => {
  const t = useTranslations("JobDetail");
  const locale = useLocale();
  const [job, setJob] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const entries = await clientNew.getEntries({
          content_type: "jobOpening",
          "fields.slug": params.slug,
          locale,
        });

        if (entries.items.length > 0) {
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
  }, [params.slug, locale]);

  if (loading) {
    return <LoadingSpinner color="#b1b7c9" />;
  }

  if (error || !job) {
    return <div>{t("jobNotFound")}</div>;
  }

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

      <div className="py-20 pt-32 container md:px-10">
        <h1 className="text-4xl my-10 md:text-6xl font-bold text-[var(--light-blue)] light:text-[var(--gray-70)]">
          {title}
        </h1>

        {image[0]?.url && (
          <div className="mt-8 flex justify-center items-center relative w-full h-[500px]">
            <Image
              src={`${image[0].url}`}
              alt={title}
              fill
              className="object-cover rounded-xl max-w-[800px] place-self-center"
              priority
            />
          </div>
        )}

        {shortDescription && (
          <div className="mt-10 text-[var(--gray-blue)] light:text-[var(--gray-40)]">
            <p>{shortDescription}</p>
          </div>
        )}

        {description && (
          <div className="mt-10 prose prose-invert max-w-none text-[var(--gray-blue)] light:text-[var(--gray-40)]">
            {documentToReactComponents(description as Document)}
          </div>
        )}

        {location && (
          <div className="mt-4 text-[var(--gray-blue)] light:text-[var(--gray-40)]">
            <strong>{t("location")}: </strong>
            {location.lat}, {location.lon}
          </div>
        )}

        {salary && (
          <div className="mt-4 text-[var(--gray-blue)] light:text-[var(--gray-40)]">
            <strong>{t("salary")}: </strong>${salary} {t("perYear")}
          </div>
        )}

        {jobType && (
          <div className="mt-4 text-[var(--gray-blue)] light:text-[var(--gray-40)]">
            <strong>{t("jobType")}: </strong>
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
