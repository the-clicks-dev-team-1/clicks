import { getBlogPost, getJob } from "@/lib/data";

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const { slug } = params;

  const job = await getBlogPost(slug);

  return {
    title: job.fields.title,
    description: job.fields.description,
  };
};

export default function BlogPostLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
