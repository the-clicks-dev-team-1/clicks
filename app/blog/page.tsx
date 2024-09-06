"use client";

import { FC, useEffect, useState, useRef } from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/app/footer";
import client from "@/lib/contentful"; // Импортируем клиент Contentful
import ContactBlock from "../contactBlock";
import SubscriptionForm from "../subscription";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Metadata } from "next";

const Blog: FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [visiblePosts, setVisiblePosts] = useState(6);

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

  const handleCategoryChange = (categoryId: string | null) => {
    if (selectedCategory === categoryId) {
      setSelectedCategory(null); // Отменить выбор категории
    } else {
      setSelectedCategory(categoryId); // Выбрать новую категорию
    }
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = 0; // Сбрасываем позицию прокрутки
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= 200; // Прокрутка влево на 200px
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 200; // Прокрутка вправо на 200px
    }
  };

  const handleShowMorePosts = () => {
    setVisiblePosts((prev) => prev + 6);
  };

  return (
    <div className="bg-[var(--bgnew)] text-[var(--text)]">
      <Navbar />

      {/* Header Section */}
      <div className="bg-gradient-to-b from-sky-400 to-purple-500 py-20 text-center">
        <h1 className="text-4xl mt-10 md:text-6xl font-bold">
          The Clicks Blog
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          Stay updated with the latest insights, tips, and trends in digital
          marketing. Our blog is your go-to resource for all things marketing.
        </p>
      </div>

      {/* Categories Filter Section */}
      <div className="py-10 px-4 md:px-20 lg:px-40 max-w-7xl mx-auto text-center">
        <div className="mb-5 flex justify-center">
          <input
            type="text"
            className="w-1/2 px-4 py-2 rounded-lg text-black"
            placeholder="Search categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex justify-between items-center">
          <button
            onClick={scrollLeft}
            className="text-white bg-neutral-800 p-2 rounded-full hover:bg-neutral-700"
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
                  selectedCategory === null ? "bg-sky-500" : "bg-[var(--bg800)]"
                } text-white font-bold shadow-lg hover:bg-neutral-700 transition duration-300`}
              >
                All Categories
              </button>
              {categories.map((category) => (
                <button
                  key={category.sys.id}
                  onClick={() => handleCategoryChange(category.sys.id)}
                  className={`px-4 py-2 mx-2 flex-shrink-0 w-48 h-24 rounded-lg text-center flex items-center justify-center ${
                    selectedCategory === category.sys.id
                      ? "bg-sky-500"
                      : "bg-neutral-800"
                  } text-white font-bold shadow-lg hover:bg-neutral-700 transition duration-300 whitespace-normal`}
                >
                  {category.fields.title}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={scrollRight}
            className="text-white bg-neutral-800 p-2 rounded-full hover:bg-neutral-700"
          >
            <BiChevronRight size={30} />
          </button>
        </div>
      </div>

      {/* Featured Posts Section */}
      <div className="py-20 px-4 md:px-20 lg:px-40 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Featured Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {posts.slice(0, visiblePosts).map((post) => (
            <div
              key={post.sys.id}
              className="relative bg-[var(--bg800-w)] rounded-lg overflow-hidden shadow-lg"
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
                <h3 className="text-2xl font-bold">{post.fields.title}</h3>
                <p className="mt-2 text-[var(--text-gray)]">
                  {post.fields.description}
                </p>
                {post.fields.category && (
                  <p className="mt-2 text-neutral-500 text-sm">
                    Category: {post.fields.category.fields.title}
                  </p>
                )}
                <p className="mt-2 text-neutral-500 text-sm">
                  Author: {post.fields.author}
                </p>
                <p className="mt-2 text-neutral-500 text-sm">
                  Publish Date:{" "}
                  {new Date(post.fields.publishDate).toLocaleDateString()}
                </p>
                <Link
                  href={`/blog/${post.fields.slug}`}
                  className="inline-block mt-4 bg-gradient-to-r from-sky-400 to-purple-500 text-white font-bold py-2 px-4 rounded-3xl shadow-lg hover:bg-opacity-75 transition duration-300"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
        {visiblePosts < posts.length && (
          <div className="text-center mt-10">
            <button
              onClick={handleShowMorePosts}
              className="px-6 py-3 bg-gradient-to-r from-sky-400 to-purple-500 text-white font-bold rounded-3xl shadow-lg hover:bg-opacity-75 transition duration-300"
            >
              Show More Posts
            </button>
          </div>
        )}
      </div>

      {/* Newsletter Section */}
      <SubscriptionForm />

      {/* Contact Form Section */}
      <ContactBlock />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Blog;
