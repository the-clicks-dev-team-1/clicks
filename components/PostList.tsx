"use client";

import { FC, useCallback, useEffect, useState } from "react";
import CategoriesFilter from "./CategoriesFilter";
import clientNew from "@/lib/contentfulNew";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

interface PostListProps {
  locale: string;
}

const PostList: FC<PostListProps> = ({ locale }) => {
  const t = useTranslations("blog");
  const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [postsToShow, setPostsToShow] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const entries = await clientNew.getEntries({
          content_type: "blogPost",
          order: ["sys.updatedAt"],
          locale,
          ...(selectedCategory && {
            "fields.category.sys.id": selectedCategory,
          }),
        });
        setPosts(entries.items);
        console.log("entries.items", entries.items);
      } catch (error) {
        console.error("Error with fetching data from Contentful:", error);
      }
    };

    fetchData();
  }, [selectedCategory, locale]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoryEntries = await clientNew.getEntries({
          content_type: "category",
          order: ["fields.title"],
          locale,
        });
        setCategories(categoryEntries.items);
      } catch (error) {
        console.error("Error with fetching categories from Contentful:", error);
      }
    };

    fetchCategories();
  }, [locale]);

  const handleShowMorePosts = useCallback(() => {
    setPostsToShow((prev) => prev + 6);
  }, []);

  // Filter posts based on the search term
  let visiblePosts = [...posts];

  const filteredPosts = visiblePosts.filter((post) =>
    post.fields.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="container md:px-10 mt-32 text-center">
        <div className="mb-5 flex justify-center">
          <input
            type="text"
            className="w-3/4 px-4 py-2 rounded-lg light:border light:border-[var(--gray-40)]"
            placeholder={t("searchPlaceholder")}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <CategoriesFilter
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>

      <div className="my-32 container md:px-10 ">
        <h2 className="text-3xl font-semibold mb-10 text-center text-[var(--light-blue)] light:text-[var(--gray-70)]">
          {t("featuredPosts")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredPosts.slice(0, postsToShow).map((post) => (
            <div
              key={post.sys.id}
              className="relative bg-[var(--blue2)] light:bg-[var(--light-blue)] rounded-lg overflow-hidden shadow-lg"
            >
              {post.fields?.cloudinaryMedia[0].url && (
                <Image
                  src={post.fields.cloudinaryMedia[0].url}
                  alt={post.fields.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-48 md:h-64"
                />
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[var(--light-blue)] light:text-[var(--gray-70)]">
                  {post.fields.title}
                </h3>
                <p className="mt-2 text-[var(--gray-blue)] light:text-[var(--gray-40)]">
                  {post.fields.description}
                </p>
                {post.fields.category && (
                  <p className="mt-2 text-[var(--gray-blue)] light:text-[var(--gray-40)] text-sm">
                    {t("category")}: {post.fields.category.fields.title}
                  </p>
                )}
                <p className="mt-2 text-[var(--gray-blue)] light:text-[var(--gray-40)] text-sm">
                  {t("author")}: {post.fields.author.fields.name}
                </p>
                <p className="mt-2 text-[var(--gray-blue)] light:text-[var(--gray-40)] text-sm">
                  {t("date")}:{" "}
                  {new Date(post.sys.updatedAt).toLocaleDateString()}
                </p>
                <Link
                  href={`/blog/${post.fields.slug}`}
                  className="inline-block mt-4 bg-[var(--ocean-blue)] #bg-gradient-to-r from-sky-400 to-purple-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-opacity-75 transition duration-300"
                >
                  {t("readMore")}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {postsToShow < filteredPosts.length && (
          <div className="text-center mt-10">
            <button
              onClick={handleShowMorePosts}
              className="px-6 py-3 bg-[var(--ocean-blue)] #bg-gradient-to-r from-sky-400 to-purple-500 text-white font-bold rounded-lg shadow-lg hover:bg-opacity-75 transition duration-300"
            >
              {t("showMore")}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default PostList;
