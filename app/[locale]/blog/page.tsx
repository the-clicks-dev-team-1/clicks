"use client";

import { FC, useEffect, useState, useRef, useCallback } from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Footer from "@/components/footer";
import client from "@/lib/contentful"; // Импортируем клиент Contentful
import ContactBlock from "../../../components/contactBlock";
import SubscriptionForm from "../../../components/subscription";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Link } from "@/i18n/routing";

const Blog: FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [postsToShow, setPostsToShow] = useState(6);

  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const entries = await client.getEntries({
          content_type: "blogPost",
          order: ["-fields.publishDate"],
          ...(selectedCategory && {
            "fields.category.sys.id": selectedCategory,
          }),
        });
        setPosts(entries.items);
      } catch (error) {
        console.error("Ошибка получения данных с Contentful:", error);
      }
    };

    fetchData();
  }, [selectedCategory]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoryEntries = await client.getEntries({
          content_type: "category",
          order: ["fields.title"],
        });
        setCategories(categoryEntries.items);
      } catch (error) {
        console.error("Ошибка получения категорий с Contentful:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryChange = useCallback(
    (categoryId: string | null) => {
      if (selectedCategory === categoryId) {
        setSelectedCategory(null); // Отменить выбор категории
      } else {
        setSelectedCategory(categoryId); // Выбрать новую категорию
      }
      // if (carouselRef.current) {
      //   carouselRef.current.scrollLeft = 0; // Сбрасываем позицию прокрутки
      // }
    },
    [selectedCategory]
  );

  const scrollLeft = useCallback(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= 200; // Прокрутка влево на 200px
    }
  }, []);

  const scrollRight = useCallback(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 200; // Прокрутка вправо на 200px
    }
  }, []);

  const handleShowMorePosts = useCallback(() => {
    setPostsToShow((prev) => prev + 6);
  }, []);

  // Filter posts based on the search term
  let visiblePosts = [...posts];

  const filteredPosts = visiblePosts.filter((post) =>
    post.fields.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[var(--bgnew)] text-[var(--text)]">
      <Navbar />

      {/* Header Section */}
      <div className="pt-32 bg-[var(--blue1)] light:bg-[var(--ice-blue)] #bg-gradient-to-b from-sky-400 to-purple-500 py-20 text-center">
        <h1 className="py-4 text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to bg-purple-500 bg-opacity-50">
          The Clicks Blog
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-[var(--gray-blue)] light:text-[var(--gray-40)]">
          Stay updated with the latest insights, tips, and trends in digital
          marketing. Our blog is your go-to resource for all things marketing.
        </p>
      </div>

      {/* Categories Filter Section */}
      <div className="container md:px-10 mt-32 text-center">
        <div className="mb-5 flex justify-center">
          <input
            type="text"
            className="w-3/4 px-4 py-2 rounded-lg light:border light:border-[var(--gray-40)]"
            placeholder="Search by post title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex justify-between items-center">
          <button
            onClick={scrollLeft}
            className="text-[var(--gray-0)] bg-[var(--gray-40)] p-2 rounded-full hover:bg-[var(--blue2)]"
          >
            <BiChevronLeft size={30} />
          </button>
          <div
            className="overflow-hidden flex-1 mx-4 flex items-center"
            ref={carouselRef}
            style={{ scrollBehavior: "smooth" }}
          >
            <div className="flex">
              <button
                onClick={() => handleCategoryChange(null)}
                className={`px-4 py-2 mx-2 flex-shrink-0 w-48 h-24 rounded-lg text-center flex items-center justify-center ${
                  selectedCategory === null
                    ? "bg-[var(--ocean-blue)]"
                    : "bg-[var(--gray-40)]"
                } text-white font-bold shadow-lg hover:bg-[var(--blue2)] transition duration-300`}
              >
                All Categories
              </button>
              {categories.map((category) => (
                <button
                  key={category.sys.id}
                  onClick={() => handleCategoryChange(category.sys.id)}
                  className={`px-4 py-2 mx-2 flex-shrink-0 w-48 h-24 rounded-lg text-center flex items-center justify-center ${
                    selectedCategory === category.sys.id
                      ? "bg-[var(--ocean-blue)]"
                      : "bg-[var(--gray-40)]"
                  } text-white font-bold shadow-lg hover:bg-[var(--blue2)] transition duration-300 whitespace-normal`}
                >
                  {category.fields.title}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={scrollRight}
            className="text-[var(--gray-0)] bg-[var(--gray-40)] p-2 rounded-full hover:bg-[var(--blue2)]"
          >
            <BiChevronRight size={30} />
          </button>
        </div>
      </div>

      {/* Featured Posts Section */}
      <div className="my-32 container md:px-10 ">
        <h2 className="text-3xl font-semibold mb-10 text-center text-[var(--light-blue)] light:text-[var(--gray-70)]">
          Featured Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredPosts.slice(0, postsToShow).map((post) => (
            <div
              key={post.sys.id}
              className="relative bg-[var(--blue2)] light:bg-[var(--light-blue)] rounded-lg overflow-hidden shadow-lg"
            >
              {post.fields?.previewImage?.fields?.file?.url && (
                <Image
                  src={`https:${post.fields.previewImage.fields.file.url}`}
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
                    Category: {post.fields.category.fields.title}
                  </p>
                )}
                <p className="mt-2 text-[var(--gray-blue)] light:text-[var(--gray-40)] text-sm">
                  Author: {post.fields.author}
                </p>
                <p className="mt-2 text-[var(--gray-blue)] light:text-[var(--gray-40)] text-sm">
                  Publish Date:{" "}
                  {new Date(post.fields.publishDate).toLocaleDateString()}
                </p>
                <Link
                  href={`/blog/${post.fields.slug}`}
                  className="inline-block mt-4 bg-[var(--ocean-blue)] #bg-gradient-to-r from-sky-400 to-purple-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-opacity-75 transition duration-300"
                >
                  Read More
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
              Show More Posts
            </button>
          </div>
        )}
      </div>

      <SubscriptionForm />

      <ContactBlock />

      <Footer />
    </div>
  );
};

export default Blog;
