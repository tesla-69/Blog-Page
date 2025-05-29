'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Next.js',
    excerpt: 'Learn how to build modern web applications with Next.js',
    date: 'Mar 16, 2024',
    author: 'John Doe',
    authorRole: 'Frontend Developer',
    imageUrl: '/images/blog-1.svg',
    readTime: '5 min read',
    category: 'Framework',
    slug: 'getting-started-with-nextjs'
  },
  {
    id: 2,
    title: 'Mastering Tailwind CSS',
    excerpt: 'A comprehensive guide to styling with Tailwind CSS',
    date: 'Mar 15, 2024',
    author: 'Jane Smith',
    authorRole: 'UI Designer',
    imageUrl: '/images/blog-2.svg',
    readTime: '8 min read',
    category: 'Styling',
    slug: 'mastering-tailwind-css'
  },
  {
    id: 3,
    title: 'Web Development Best Practices',
    excerpt: 'Essential tips for modern web development',
    date: 'Mar 14, 2024',
    author: 'Mike Johnson',
    authorRole: 'Senior Developer',
    imageUrl: '/images/blog-3.svg',
    readTime: '10 min read',
    category: 'Development',
    slug: 'web-development-best-practices'
  }
];

const BlogCard = ({ post }: { post: typeof blogPosts[0] }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article 
      className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/blog/${post.slug}`} className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className={`object-cover transform transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-800">
            {post.category}
          </span>
        </div>
      </Link>
      <div className="flex-1 p-6">
        <div className="flex items-center gap-x-2 text-sm text-gray-600 mb-3">
          <time dateTime={post.date}>{post.date}</time>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-200 mb-2">
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h3>
        <p className="text-gray-600 line-clamp-2 mb-4">
          {post.excerpt}
        </p>
        <div className="flex items-center mt-auto">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">{post.author}</p>
            <p className="text-sm text-gray-500">{post.authorRole}</p>
          </div>
          <Link 
            href={`/blog/${post.slug}`}
            className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
};

const RecentBlogs = () => {
  return (
    <section id="recent-posts" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-indigo-100 text-indigo-700 mb-6">
            Latest Updates
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            Recent Blog Posts
          </h2>
          <p className="text-lg leading-8 text-gray-600">
            Stay up to date with our latest articles and updates on web development, design, and best practices.
          </p>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentBlogs; 