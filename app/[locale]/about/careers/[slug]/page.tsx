import Image from "next/image";
import clientNew from "@/lib/contentfulNew";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ContactBlock from "@/components/contactBlock";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import { getJob } from "@/lib/data";
import { getTranslations } from "next-intl/server";

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string; locale: string };
}) => {
  const { slug, locale } = params;

  try {
    const job = await getJob(slug, locale);

    if (!job) {
      return {
        title: "Job Not Found",
        description: "The requested job position could not be found.",
      };
    }

    return {
      title: job.fields.title,
      description: job.fields.shortDescription,
    };
  } catch (error) {
    console.error("Error fetching job:", error);
    return {
      title: "Error Loading Job",
      description: "There was an error loading the job details.",
    };
  }
};

const JobDetail = async ({
  params,
}: {
  params: { slug: string; locale: string };
}) => {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "JobDetail",
  });
  let job: any = null;
  let error = false;

  try {
    const entries = await clientNew.getEntries({
      content_type: "jobOpening",
      "fields.slug": params.slug,
      locale: params.locale,
    });

    if (entries.items.length > 0) {
      job = entries.items[0];
    } else {
      error = true;
    }
  } catch (error) {
    console.error("Error fetching data from Contentful:", error);
    error = true;
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
