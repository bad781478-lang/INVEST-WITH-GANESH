import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '../components/Badge';
import { blogPosts } from '../data/consultareData';
import { ArrowUpRight } from 'lucide-react';

export const BlogsPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#f7f7f7] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl space-y-4 mb-16">
          <Badge variant="light">FROM OUR BLOG</Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-zinc-950 leading-[1.05]">
            Real Estate Guides &amp; Updates
          </h1>
          <p className="text-lg text-zinc-600 font-normal leading-relaxed">
            Helpful guides, property checklists, and updates regarding residential plotted developments and documentation in Jaipur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blogs/${post.slug}`}
              className="group flex flex-col justify-between bg-white rounded-3xl overflow-hidden border border-zinc-200/80 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-7 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-zinc-400 font-medium">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3
                    lang={post.title.match(/[\u0900-\u097F]/) ? "hi" : undefined}
                    className="text-xl font-medium tracking-tight text-zinc-950 group-hover:text-zinc-700 transition-colors leading-snug"
                  >
                    {post.title}
                  </h3>

                  <p className="text-zinc-500 text-sm line-clamp-2 leading-relaxed">
                    {post.summary}
                  </p>
                </div>
              </div>

              <div className="px-7 pb-7 pt-2 flex items-center justify-between text-sm font-medium text-zinc-900 border-t border-zinc-100">
                <span className="text-xs text-zinc-500 group-hover:text-zinc-950">Read Full Article</span>
                <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center group-hover:bg-zinc-950 group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
