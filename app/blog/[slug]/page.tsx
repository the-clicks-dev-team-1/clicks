"use client";

import { FC, useEffect, useState } from "react";
import client from "@/lib/contentful";
import Navbar from "@/components/navbar";
import Footer from "@/app/footer";
import ContactBlock from "@/app/contactBlock";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

type PostProps = {
  params: { slug: string };
};

const BlogPost: FC<PostProps> = ({ params }) => {
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
        const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
        if (!space || !accessToken) {
          console.error(
            "Expected parameters space or accessToken are missing."
          );
          throw new Error(
            "Expected parameters space or accessToken are missing"
          );
        }

        const entries = await client.getEntries({
          content_type: "blogPost",
          "fields.slug": params.slug,
        });

        if (entries.items.length > 0) {
          setPost(entries.items[0]);
        } else {
          setError(true);
        }
      } catch (error) {
        console.error("Ошибка получения данных c Contentful:", error);
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

  if (error || !post) {
    return <div>Post not found</div>;
  }

  const { title, description, body, featuredImage, category } = post.fields;

  return (
    <div className="bg-[var(--bgnew)] text-[var(--text)]">
      <Navbar />

      <div className="py-20 px-4 md:px-20 lg:px-40 max-w-7xl mx-auto">
        <h1 className="text-4xl mt-10 md:text-6xl font-bold">{title}</h1>

        {featuredImage && featuredImage.fields?.file?.url ? (
          <div className="mt-8">
            <Image
              src={`https:${featuredImage.fields.file.url}`}
              alt={title}
              width={800}
              height={400}
              className="object-cover w-full h-auto rounded-lg"
            />
          </div>
        ) : (
          <p>Image not available.</p>
        )}

        {description && (
          <div className="mt-4 text-[var(--text-gray)]">
            <p>{description}</p>
          </div>
        )}

        {body && (
          <div className="mt-10 prose prose-invert max-w-none text-[var(--text-gray)]">
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>{body}</ReactMarkdown>
          </div>
        )}

        {category?.fields?.title && (
          <div className="mt-4 text-[var(--text-gray)]">
            <strong>Category: </strong>
            {category.fields.title}
          </div>
        )}
      </div>

      <ContactBlock />
      <Footer />
    </div>
  );
};

export default BlogPost;
