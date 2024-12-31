import { getJob } from "@/lib/data";

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const { slug } = params;

  const job = await getJob(slug);

  return {
    title: job.fields.title,
    description: job.fields.shortDescription,
  };
};

export default function JobDetailsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
