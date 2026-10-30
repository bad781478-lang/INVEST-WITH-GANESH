import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../../data/consultareData';
import { ArrowUpRight, Calendar, User } from 'lucide-react';

export const BlogsSection: React.FC = () => {
  // Show exactly the top 2 featured articles from investwithgaaneesh.com
  const featuredArticles = blogPosts.slice(0, 2);

  return (
    <section
      id="latest-news"
      className="bg-[#faf8f5] py-16 sm:py-20 md:py-24 border-b border-zinc-200/60 scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10">
        {/* Header Block (From Our Blog / Latest News & Events) */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10 sm:mb-14 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-medium tracking-[0.14em] uppercase bg-black/5 text-zinc-800 border border-black/5 select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
            <span>FROM OUR BLOG</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-medium leading-[1.12] tracking-[-0.03em] text-zinc-950">
            Jaipur Property News &amp; Plot-Buying Guides
          </h2>

          <p className="text-[14.5px] sm:text-[16px] text-zinc-600 font-normal leading-relaxed max-w-xl mx-auto">
            Practical guides, market updates and investment insight for anyone buying plotted land in Jaipur.
          </p>
        </div>

        {/* 2 Articles Grid (Exact 2-Card Layout as in Reference) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
          {featuredArticles.map((post, index) => {
            const delayClass = index === 0 ? 'delay-100' : 'delay-250';
            const category = index === 0 ? 'Investment Guide' : 'Market Update';
            const imgAlt =
              index === 0
                ? 'Residential plots, gold and mutual funds comparison'
                : 'Jaipur Ring Road under construction with connecting road infrastructure';

            return (
              <Link
                key={post.id}
                to={`/blogs/${post.slug}`}
                className={`group relative flex flex-col bg-white rounded-2xl sm:rounded-3xl border border-zinc-200/80 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.1)] hover:border-zinc-300 hover:-translate-y-2 transition-all duration-500 [transition-timing-function:var(--ease-spring)] reveal-scale ${delayClass}`}
              >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100">
                <img
                  src={post.imageUrl}
                  alt={imgAlt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Floating Category Pill */}
                <div className="absolute top-3.5 left-3.5 pointer-events-none">
                  <span className="bg-[#161512]/80 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-1 rounded-full border border-white/15">
                    {category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  {/* Meta: Date / Author */}
                  <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{post.date}</span>
                    </span>
                    <span>/</span>
                    <span className="flex items-center gap-1.5 truncate">
                      <User className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Invest With Ganesh</span>
                    </span>
                  </div>

                  {/* Title */}
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg sm:text-xl md:text-[21px] font-semibold text-zinc-950 tracking-tight leading-snug group-hover:text-amber-800 transition-colors">
                      {post.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-zinc-100 group-hover:bg-[#161512] group-hover:text-white text-zinc-600 flex items-center justify-center transition-all duration-300 shrink-0 mt-0.5">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  {/* Excerpt / Summary */}
                  {post.summary && (
                    <p className="text-[13.5px] sm:text-[14px] text-zinc-600 leading-relaxed font-normal mt-2.5 line-clamp-2">
                      {post.summary}
                    </p>
                  )}
                </div>

                {/* Read Article Link Pill */}
                <div className="pt-2 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500">
                  <span className="font-medium text-zinc-700 group-hover:text-zinc-950 transition-colors">
                    Read Full Article &rarr;
                  </span>
                  <span className="font-mono text-zinc-400">{post.readTime}</span>
                </div>
              </div>
            </Link>
          );
        })}
        </div>

        {/* Clean, Refined "EXPLORE ALL" Button */}
        <div className="mt-10 sm:mt-12 text-center reveal-on-scroll delay-300">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 px-7 py-2.5 rounded-full border border-zinc-300 bg-white text-zinc-900 text-[13.5px] sm:text-sm font-semibold hover:border-zinc-950 hover:bg-zinc-950 hover:text-white transition-all duration-300 shadow-2xs group cursor-pointer hover:scale-105 active:scale-95"
          >
            <span>Read All Articles</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};