import { getJob } from "@/lib/data";

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const { slug } = params;

  try {
    const job = await getJob(slug);

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

export default function JobDetailsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
