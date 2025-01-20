import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ContactBlock from "@/components/contactBlock";
import Image from "next/image";
import clientNew from "@/lib/contentfulNew";
import { renderNode } from "@/lib/renderNode";
import type { Entry, EntryCollection, EntrySkeletonType } from "contentful";
import { getTranslations } from "next-intl/server";
import { getBlogPost } from "@/lib/data";

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string; locale: string };
}) => {
  const { slug, locale } = params;

  const post = await getBlogPost(slug, locale);

  return {
    title: post.fields.title,
    description: post.fields.description,
  };
};

interface BlogPostFields extends EntrySkeletonType {
  title: string;
  description?: string;
  body?: any;
  cloudinaryMedia?: { url: string }[];
  category?: Entry<CategoryFields>;
}

interface CategoryFields extends EntrySkeletonType {
  title: string;
}

type BlogPostEntry = Entry<BlogPostFields>;

const BlogPost = async ({
  params,
}: {
  params: { slug: string; locale: string };
}) => {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "blogPost",
  });
  let post: BlogPostEntry | null = null;
  let error = false;

  try {
    const entries: EntryCollection<BlogPostFields> = await clientNew.getEntries(
      {
        content_type: "blogPost",
        "fields.slug": params.slug,
        locale: params.locale,
      }
    );

    if (entries.items.length > 0) {
      post = entries.items[0];
    } else {
      error = true;
    }
  } catch (error) {
    console.error("Error with fetching data from Contentful:", error);
    error = true;
  }

  if (error || !post) {
    return <div>{t("postNotFound")}</div>;
  }

  const { title, description, body, cloudinaryMedia, category } =
    post.fields as unknown as BlogPostFields;

  return (
    <div className="bg-[var(--bgnew)] text-[var(--text)]">
      <Navbar />

      <div className="py-32 md:pt-40 container md:px-10">
        <h1
          className="text-4xl mt-10 md:text-6xl font-bold text-[var(--light-blue)] light:text-[var(--gray-70)]
"
        >
          {title}
        </h1>

        {cloudinaryMedia && cloudinaryMedia[0]?.url ? (
          <div className="mt-8">
            <Image
              src={cloudinaryMedia[0].url}
              alt={title}
              width={800}
              height={400}
              className="object-cover w-full h-auto rounded-lg"
            />
          </div>
        ) : (
          <p>{t("imageNotAvailable")}</p>
        )}

        {description && (
          <div className="mt-4 text-[var(--gray-blue)] light:text-[var(--gray-40)]">
            <p>{description}</p>
          </div>
        )}

        {body && (
          <div className="mt-10 prose prose-p:my-0 prose-li:my-5 max-w-none text-[var(--gray-blue)] light:text-[var(--gray-40)]">
            {renderNode(body)}
          </div>
        )}

        {category && (category as Entry<CategoryFields>).fields?.title && (
          <div className="mt-4 text-[var(--gray-blue)] light:text-[var(--gray-40)]">
            <strong>{t("category")}: </strong>
            {category.fields.title as React.ReactNode}
          </div>
        )}
      </div>

      <ContactBlock />
      <Footer />
    </div>
  );
};

export default BlogPost;
