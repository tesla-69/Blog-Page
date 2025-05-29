import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import { FiCalendar, FiClock, FiArrowLeft } from 'react-icons/fi';
import { blogPosts } from '@/lib/blogData';

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
}

function formatContent(content: string) {
  return content.split('\n\n').map((block, index) => {
    // Check if it's a code block
    if (block.startsWith('```')) {
      const code = block.replace(/```(?:bash)?\n?|\n?```$/g, '');
      return (
        <pre key={index} className="bg-gray-50 p-4 rounded-lg my-4 overflow-x-auto">
          <code className="text-sm text-gray-900">{code.trim()}</code>
        </pre>
      );
    }
    
    // Check if it's a heading
    if (block.startsWith('#')) {
      const headingMatch = block.match(/^(#+)\s+(.+)/);
      if (headingMatch) {
        const level = Math.min(headingMatch[1].length, 6);
        const text = headingMatch[2];
        const className = {
          1: 'text-4xl font-bold mt-8 mb-4 text-gray-900',
          2: 'text-3xl font-bold mt-8 mb-4 text-gray-900',
          3: 'text-2xl font-bold mt-6 mb-3 text-gray-900',
          4: 'text-xl font-bold mt-6 mb-3 text-gray-900',
          5: 'text-lg font-bold mt-4 mb-2 text-gray-900',
          6: 'text-base font-bold mt-4 mb-2 text-gray-900'
        }[level];

        switch (level) {
          case 1: return <h1 key={index} className={className}>{text}</h1>;
          case 2: return <h2 key={index} className={className}>{text}</h2>;
          case 3: return <h3 key={index} className={className}>{text}</h3>;
          case 4: return <h4 key={index} className={className}>{text}</h4>;
          case 5: return <h5 key={index} className={className}>{text}</h5>;
          case 6: return <h6 key={index} className={className}>{text}</h6>;
          default: return <p key={index} className="text-gray-900 mb-4 leading-relaxed">{block}</p>;
        }
      }
    }
    
    // Check if it's a list
    if (block.startsWith('-')) {
      return (
        <ul key={index} className="list-disc pl-6 my-4 space-y-2">
          {block.split('\n').map((item, i) => (
            <li key={i} className="text-gray-900">
              {item.replace(/^-\s+/, '')}
            </li>
          ))}
        </ul>
      );
    }
    
    // Regular paragraph
    return (
      <p key={index} className="text-gray-900 mb-4 leading-relaxed">
        {block}
      </p>
    );
  });
}

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await Promise.resolve(params);
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-12 pt-24 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <Link href="/blog" className="text-indigo-600 hover:text-indigo-700">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 py-12 pt-24">
        {/* Back to Blog */}
        <Link 
          href="/blog"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-8"
        >
          <FiArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <article className="bg-white rounded-2xl p-8 shadow-sm">
          <header className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-full">
                {post.category}
              </span>
              <span className="flex items-center text-sm text-gray-500">
                <FiClock className="w-4 h-4 mr-1" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>

            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                <span className="text-indigo-600 font-medium text-lg">
                  {post.author[0]}
                </span>
              </div>
              <div className="ml-4">
                <p className="text-lg font-medium text-gray-900">{post.author}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-2">{post.authorRole}</span>
                  <span>•</span>
                  <div className="flex items-center ml-2">
                    <FiCalendar className="w-4 h-4 mr-1" />
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative h-64 sm:h-96 rounded-xl overflow-hidden mb-8">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-900 prose-li:text-gray-900">
            {formatContent(post.content)}
          </div>

          {/* Tags */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h2 className="text-sm font-semibold text-gray-900 mb-3">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      </main>
    </div>
  );
} 