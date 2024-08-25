import { FC } from "react";
import Navbar from "@/components/navbar";
import Image from 'next/image';
import Link from 'next/link';
import Footer from "@/app/footer";
import Form from "@/components/form";

const Blog: FC = () => {
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

      {/* Featured Posts Section */}
      <div className="py-20 px-4 md:px-20 lg:px-40 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-center">Featured Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Example Featured Post */}
          <div className="relative bg-neutral-800 rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="/images/featured-post-1.jpg"
              alt="Featured Post 1"
              width={600}
              height={400}
              className="object-cover w-full h-48 md:h-64"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold">How AI is Revolutionizing Digital Marketing</h3>
              <p className="mt-2 text-neutral-300">
                Discover how AI is transforming the digital marketing landscape and how you can leverage it to stay ahead of the curve.
              </p>
              <Link 
                href="/blog/ai-revolutionizing-digital-marketing"
                className="inline-block mt-4 bg-gradient-to-r from-sky-400 to-purple-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-opacity-75 transition duration-300"
              >
                Read More
              </Link>
            </div>
          </div>

          {/* Repeat for other featured posts */}
          <div className="relative bg-neutral-800 rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="/images/featured-post-2.jpg"
              alt="Featured Post 2"
              width={600}
              height={400}
              className="object-cover w-full h-48 md:h-64"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold">Top 10 Digital Marketing Trends in 2024</h3>
              <p className="mt-2 text-neutral-300">
                Stay on top of the latest trends in digital marketing with our expert analysis and predictions for 2024.
              </p>
              <Link 
                href="/blog/top-digital-marketing-trends-2024"
                className="inline-block mt-4 bg-gradient-to-r from-sky-400 to-purple-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-opacity-75 transition duration-300"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Articles Section */}
      <div className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-b from-sky-400 to bg-purple-500 bg-opacity-50">Recent Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Example Recent Article */}
            <div className="bg-neutral-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold">The Importance of SEO in 2024</h3>
              <p className="mt-2 text-neutral-300">
                SEO continues to be a vital component of digital marketing strategies. Learn why it's more important than ever in 2024.
              </p>
              <Link 
                href="/blog/importance-of-seo-2024"
                className="inline-block mt-4 text-sky-400 font-bold"
              >
                Continue Reading &rarr;
              </Link>
            </div>

            {/* Repeat for other recent articles */}
            <div className="bg-neutral-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold">Maximizing Your Social Media ROI</h3>
              <p className="mt-2 text-neutral-300">
                Social media marketing can be a powerful tool if done right. Learn how to maximize your ROI in this comprehensive guide.
              </p>
              <Link 
                href="/blog/maximizing-social-media-roi"
                className="inline-block mt-4 text-sky-400 font-bold"
              >
                Continue Reading &rarr;
              </Link>
            </div>

            <div className="bg-neutral-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold">Email Marketing Best Practices for 2024</h3>
              <p className="mt-2 text-neutral-300">
                Email marketing remains a powerful tool in digital marketing. Discover the best practices for 2024.
              </p>
              <Link 
                href="/blog/email-marketing-best-practices-2024"
                className="inline-block mt-4 text-sky-400 font-bold"
              >
                Continue Reading &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-20 px-4 md:px-20 lg:px-40 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-center">Explore Categories</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {/* Example Category */}
          <Link href="/blog/category/seo" className="bg-neutral-800 rounded-lg px-6 py-3 text-lg font-bold shadow-lg hover:bg-neutral-700 transition duration-300">
            SEO
          </Link>
          <Link href="/blog/category/social-media" className="bg-neutral-800 rounded-lg px-6 py-3 text-lg font-bold shadow-lg hover:bg-neutral-700 transition duration-300">
            Social Media
          </Link>
          <Link href="/blog/category/content-marketing" className="bg-neutral-800 rounded-lg px-6 py-3 text-lg font-bold shadow-lg hover:bg-neutral-700 transition duration-300">
            Content Marketing
          </Link>
          {/* Add more categories as needed */}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-sky-400 to bg-purple-500 bg-opacity-50">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-lg text-neutral-300 max-w-xl mx-auto">
            Get the latest insights and trends delivered straight to your inbox. Subscribe to our newsletter and never miss an update.
          </p>
          <form action="#" method="POST" className="mt-6 flex flex-col sm:flex-row items-center justify-center">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full sm:w-auto p-3 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-sky-400 sm:flex-1"
              required
            />
            <button
              type="submit"
              className="mt-4 sm:mt-0 sm:ml-4 bg-gradient-to-r from-sky-400 to-purple-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-opacity-75 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Contact Form Section */}
      <Form />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Blog;
