"use client";

import { FC, useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Image from 'next/image';
import Link from 'next/link';
import Footer from "@/app/footer";
import client from "@/lib/contentful"; // Импортируем клиент Contentful
import ContactBlock from "../contactBlock";
import SubscriptionForm from "../subscription";

const Blog: FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const entries = await client.getEntries({
          content_type: "blogPost",
          order: ["-fields.publishDate"],
          ...(selectedCategory && {
            'fields.category.sys.id': selectedCategory,
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
    setSelectedCategory(categoryId);
  };

  return (
    <div className="bg-black text-white">
      <Navbar />

      {/* Header Section */}
      <div className="bg-gradient-to-b from-sky-400 to-purple-500 py-20 text-center">
        <h1 className="text-4xl mt-10 md:text-6xl font-bold">The Clicks Blog</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          Stay updated with the latest insights, tips, and trends in digital marketing. Our blog is your go-to resource for all things marketing.
        </p>
      </div>

      {/* Categories Filter Section */}
      <div className="py-10 px-4 md:px-20 lg:px-40 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-5">Filter by Category</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => handleCategoryChange(null)}
            className={`px-4 py-2 rounded-lg ${
              !selectedCategory ? "bg-sky-500" : "bg-neutral-800"
            } text-white font-bold shadow-lg hover:bg-neutral-700 transition duration-300`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category.sys.id}
              onClick={() => handleCategoryChange(category.sys.id)}
              className={`px-4 py-2 rounded-lg ${
                selectedCategory === category.sys.id ? "bg-sky-500" : "bg-neutral-800"
              } text-white font-bold shadow-lg hover:bg-neutral-700 transition duration-300`}
            >
              {category.fields.title}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Posts Section */}
      <div className="py-20 px-4 md:px-20 lg:px-40 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-center">Featured Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {posts.map((post) => (
            <div key={post.sys.id} className="relative bg-neutral-800 rounded-lg overflow-hidden shadow-lg">
              <Image 
                src={post.fields?.image?.fields?.file?.url ? `https:${post.fields?.image?.fields?.file?.url}` : ""}
                alt={post.fields?.title}
                width={600}
                height={400}
                className="object-cover w-full h-48 md:h-64"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold">{post.fields.title}</h3>
                <p className="mt-2 text-neutral-300">
                  {post.fields.description}
                </p>
                <Link 
                  href={`/blog/${post.fields.slug}`}
                  className="inline-block mt-4 bg-gradient-to-r from-sky-400 to-purple-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-opacity-75 transition duration-300"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Newsletter Section */}
      <SubscriptionForm />


      {/* Contact Form Section */}
      <ContactBlock/>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Blog;
