import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { detailedBlogArticles } from '../data/blogArticlesData';
import { blogPosts } from '../data/consultareData';
import {
  ArrowLeft,
  Clock,
  Calendar,
  Share2,
  Check,
  Phone,
  MessageCircle,
  ShieldCheck,
  ChevronDown,
  Sparkles,
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  Info,
  CheckCircle2,
  MapPin,
} from 'lucide-react';

export const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const article = slug ? detailedBlogArticles[slug] : undefined;
  const basicPost = blogPosts.find((p) => p.slug === slug);

  // Scroll progress tracker
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update document title and scroll to top on slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
    if (article) {
      document.title = `${article.hindiTitle} | Invest With Ganesh`;
    } else if (basicPost) {
      document.title = `${basicPost.title} | Invest With Ganesh`;
    }
  }, [slug, article, basicPost]);

  if (!article && !basicPost) {
    return <Navigate to="/blogs" replace />;
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShareWhatsApp = () => {
    const title = article ? article.hindiTitle : basicPost?.title;
    const url = window.location.href;
    const shareText = encodeURIComponent(`${title}\n\nRead full article by Ganesh Yadav:\n${url}`);
    window.open(`https://api.whatsapp.com/send?text=${shareText}`, '_blank');
  };

  return (
    <div className="bg-[#fbfbfb] min-h-screen text-zinc-900 selection:bg-amber-100 selection:text-amber-900">
      {/* Top Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-amber-500 via-[#BD9A68] to-amber-600 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="pt-28 sm:pt-32 pb-24 max-w-5xl mx-auto px-5 sm:px-8 md:px-10">
        {/* Navigation Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center justify-between reveal-fade">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-600 hover:text-zinc-950 transition-colors group bg-white px-3.5 py-1.5 rounded-full border border-zinc-200/80 shadow-xs"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1 text-[#BD9A68]" />
            <span>सभी लेख (All Guides)</span>
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              title="Copy link to clipboard"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-zinc-200 text-zinc-700 hover:border-zinc-300 hover:text-zinc-950 shadow-xs transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">लिंक कॉपी हुआ!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-zinc-500" />
                  <span>शेयर करें</span>
                </>
              )}
            </button>
            <button
              onClick={handleShareWhatsApp}
              title="Share on WhatsApp"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 shadow-xs transition-colors cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span className="hidden sm:inline">WhatsApp</span>
            </button>
          </div>
        </nav>

        {/* Hero Header */}
        <header className="space-y-5 mb-10 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/70 text-[#966b2a] text-[11px] font-mono tracking-wider font-semibold uppercase">
            <Sparkles className="w-3 h-3 text-[#BD9A68]" />
            <span>{article?.badge || 'VERIFIED REAL ESTATE GUIDE'}</span>
          </div>

          <h1
            lang="hi"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-semibold text-zinc-950 tracking-tight leading-[1.2] font-['Plus_Jakarta_Sans',sans-serif]"
          >
            {article?.hindiTitle || basicPost?.title}
          </h1>

          {article?.englishTitle && (
            <p className="text-base sm:text-lg text-zinc-600 font-medium leading-snug">
              {article.englishTitle}
            </p>
          )}

          {/* Author & Meta Bar */}
          <div className="pt-4 border-t border-b border-zinc-200/80 py-4 flex flex-wrap items-center justify-between gap-4 reveal-on-scroll delay-100">
            <div className="flex items-center gap-3">
              <img
                src={article?.author.avatar || '/wmremove-transformed.jpeg'}
                alt="Ganesh Yadav — Invest With Ganesh"
                className="w-12 h-12 rounded-full object-cover object-top border-2 border-amber-400 shadow-xs"
              />
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-bold text-zinc-950">{article?.author.name || 'Ganesh Yadav'}</span>
                  <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <ShieldCheck className="w-3 h-3" />
                    सत्यापित सलाहकार
                  </span>
                </div>
                <p className="text-xs text-zinc-500 font-normal">
                  {article?.author.experience || '5+ Years in Jaipur Real Estate'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-zinc-500">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                {article?.date || basicPost?.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-zinc-400" />
                {article?.readTime || basicPost?.readTime}
              </span>
            </div>
          </div>
        </header>

        {/* Featured Hero Image */}
        <div className="mb-12 reveal-scale delay-150">
          <div className="rounded-3xl overflow-hidden aspect-[16/9] shadow-md border border-zinc-200/80 bg-zinc-900 relative group">
            <img
              src={article?.imageUrl || basicPost?.imageUrl || '/invest/image-33.jpg'}
              alt={article?.hindiTitle || basicPost?.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 text-white text-xs sm:text-sm font-medium bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl">
              📍 {article?.imageCaption || 'जयपुर के प्रमुख रेजिडेंशियल टाउनशिप्स और ग्रोथ कॉरिडोर का विश्लेषण'}
            </div>
          </div>
        </div>

        {/* Key Highlights Grid (त्वरित सारांश) */}
        {article?.keyHighlights && article.keyHighlights.length > 0 && (
          <div className="mb-12 bg-gradient-to-br from-amber-50/70 via-white to-amber-50/30 rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-xs reveal-on-scroll">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-xl bg-[#BD9A68] text-white flex items-center justify-center font-bold text-sm shadow-xs">
                ⚡
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-zinc-950">
                  इस लेख के 4 सबसे महत्वपूर्ण बिंदु (Key Takeaways)
                </h3>
                <p className="text-xs text-zinc-500">त्वरित जानकारी जो आपको निर्णय लेने में मदद करेगी</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {article.keyHighlights.map((hl, idx) => (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl p-4 sm:p-5 border border-amber-100/90 shadow-2xs space-y-2 hover:border-amber-300 transition-colors reveal-on-scroll ${
                    idx % 2 === 0 ? 'delay-100' : 'delay-200'
                  }`}
                >
                  <div className="flex items-center gap-2 text-[#966b2a] font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#BD9A68] shrink-0" />
                    <span>{hl.title}</span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-zinc-600 leading-relaxed font-normal">
                    {hl.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Table of Contents Bar */}
        {article?.tableOfContents && article.tableOfContents.length > 0 && (
          <div className="mb-12 bg-white rounded-2xl p-5 sm:p-6 border border-zinc-200/80 shadow-xs reveal-on-scroll delay-100">
            <div className="flex items-center justify-between mb-3 border-b border-zinc-100 pb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-bold flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-[#BD9A68]" />
                विषय-सूची (Table of Contents)
              </span>
              <span className="text-[11px] text-zinc-400">सीधे अनुभाग पर जाएं</span>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {article.tableOfContents.map((toc) => (
                <a
                  key={toc.id}
                  href={`#${toc.id}`}
                  className="text-xs font-medium text-zinc-700 bg-zinc-50 hover:bg-amber-50 hover:text-amber-900 border border-zinc-200/80 hover:border-amber-200 rounded-lg px-3 py-1.5 transition-colors"
                >
                  {toc.label}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Main Article Content Card */}
        <article className="bg-white rounded-3xl p-6 sm:p-10 md:p-14 border border-zinc-200/80 shadow-xs space-y-12 reveal-on-scroll">
          {/* Executive Summary */}
          <div className="border-l-4 border-[#BD9A68] pl-5 sm:pl-7 py-2 bg-amber-50/40 rounded-r-2xl reveal-on-scroll">
            <p className="text-base sm:text-lg md:text-xl font-normal text-zinc-900 leading-relaxed">
              {article?.summary || basicPost?.summary}
            </p>
          </div>

          {/* Render All Rich Sections */}
          {article?.sections && article.sections.length > 0 ? (
            article.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28 space-y-6 pt-4 border-t border-zinc-100 first:border-0 first:pt-0 reveal-on-scroll">
                {/* Section Header */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold text-[#BD9A68] px-2 py-0.5 rounded bg-amber-50 border border-amber-200/60">
                      SECTION {section.number}
                    </span>
                    <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                      {section.headingEnglish}
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-zinc-950 leading-snug">
                    {section.headingHindi}
                  </h2>
                </div>

                {/* Paragraphs */}
                <div className="space-y-4 text-zinc-700 leading-relaxed text-[15px] sm:text-[16.5px]">
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>

                {/* Optional Alert Box */}
                {section.alert && (
                  <div
                    className={`rounded-2xl p-5 border flex items-start gap-3.5 my-6 reveal-on-scroll delay-100 ${
                      section.alert.type === 'warning'
                        ? 'bg-rose-50/60 border-rose-200 text-rose-950'
                        : section.alert.type === 'tip'
                        ? 'bg-emerald-50/60 border-emerald-200 text-emerald-950'
                        : 'bg-amber-50/60 border-amber-200 text-amber-950'
                    }`}
                  >
                    <div className="shrink-0 mt-0.5">
                      {section.alert.type === 'warning' ? (
                        <AlertTriangle className="w-5 h-5 text-rose-600" />
                      ) : section.alert.type === 'tip' ? (
                        <Sparkles className="w-5 h-5 text-emerald-600" />
                      ) : (
                        <Info className="w-5 h-5 text-amber-600" />
                      )}
                    </div>
                    <div className="space-y-1 text-sm">
                      <h4 className="font-bold">{section.alert.title}</h4>
                      <p className="opacity-90 leading-relaxed">{section.alert.text}</p>
                    </div>
                  </div>
                )}

                {/* Optional Table */}
                {section.table && (
                  <div className="my-8 overflow-hidden rounded-2xl border border-zinc-200/90 shadow-2xs bg-white reveal-scale delay-100">
                    <div className="bg-zinc-950 text-white px-5 py-3 text-sm font-semibold flex items-center justify-between">
                      <span>📊 {section.table.title}</span>
                      <span className="text-[11px] text-zinc-400 font-mono">2026 VERIFIED</span>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs sm:text-sm">
                        <thead className="bg-zinc-100/90 text-zinc-900 border-b border-zinc-200">
                          <tr>
                            {section.table.headers.map((h, hIdx) => (
                              <th key={hIdx} className="p-3.5 sm:p-4 font-bold whitespace-nowrap">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-200/60">
                          {section.table.rows.map((row, rIdx) => (
                            <tr
                              key={rIdx}
                              className={rIdx % 2 === 0 ? 'bg-white' : 'bg-zinc-50/50 hover:bg-amber-50/30 transition-colors'}
                            >
                              {row.map((cell, cIdx) => (
                                <td
                                  key={cIdx}
                                  className={`p-3.5 sm:p-4 ${
                                    cIdx === 0
                                      ? 'font-semibold text-zinc-950'
                                      : cIdx === 1
                                      ? 'text-emerald-800 font-medium'
                                      : 'text-zinc-700'
                                  }`}
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Optional Cards Grid */}
                {section.cards && section.cards.length > 0 && (
                  <div className="grid grid-cols-1 gap-5 my-6">
                    {section.cards.map((card, cIdx) => (
                      <div
                        key={cIdx}
                        className="rounded-2xl p-6 border border-zinc-200/80 bg-gradient-to-br from-white to-zinc-50/40 shadow-2xs space-y-3 hover:border-zinc-300 transition-all reveal-on-scroll delay-100"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3 className="text-base sm:text-lg font-bold text-zinc-950">
                            {card.title}
                          </h3>
                          {card.tag && (
                            <span
                              className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                                card.tagColor === 'emerald'
                                  ? 'bg-emerald-100 text-emerald-800'
                                  : card.tagColor === 'amber'
                                  ? 'bg-amber-100 text-amber-900'
                                  : card.tagColor === 'purple'
                                  ? 'bg-purple-100 text-purple-900'
                                  : 'bg-blue-100 text-blue-900'
                              }`}
                            >
                              {card.tag}
                            </span>
                          )}
                        </div>
                        {card.subtitle && (
                          <p className="text-xs font-semibold text-zinc-500">{card.subtitle}</p>
                        )}
                        <p className="text-sm text-zinc-700 leading-relaxed font-normal">
                          {card.description}
                        </p>
                        {card.bullets && card.bullets.length > 0 && (
                          <ul className="space-y-1.5 pt-2 border-t border-zinc-100">
                            {card.bullets.map((b, bIdx) => (
                              <li key={bIdx} className="text-xs sm:text-[13px] text-zinc-600 flex items-start gap-2">
                                <span className="text-[#BD9A68] font-bold mt-0.5">•</span>
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Optional Steps / Strategy Breakdown */}
                {section.steps && section.steps.length > 0 && (
                  <div className="space-y-4 my-6">
                    {section.steps.map((st, sIdx) => (
                      <div
                        key={sIdx}
                        className="rounded-2xl p-5 border border-zinc-200 bg-white flex flex-col sm:flex-row items-start gap-4 shadow-2xs reveal-on-scroll delay-100"
                      >
                        <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 text-[#BD9A68] flex items-center justify-center font-bold text-xl shrink-0 shadow-xs">
                          {st.stepNumber}
                        </div>
                        <div className="space-y-1.5">
                          <h4 className="text-base font-bold text-zinc-950">{st.title}</h4>
                          <p className="text-sm text-zinc-600 leading-relaxed">{st.description}</p>
                          {st.details && st.details.length > 0 && (
                            <ul className="space-y-1 pt-1 text-xs text-zinc-500">
                              {st.details.map((d, dIdx) => (
                                <li key={dIdx} className="flex items-center gap-1.5">
                                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                  <span>{d}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Optional Quote Callout */}
                {section.quote && (
                  <blockquote className="my-8 rounded-2xl bg-[#161512] text-white p-6 sm:p-8 relative overflow-hidden shadow-md reveal-scale delay-150">
                    <div className="absolute top-2 right-4 text-7xl font-serif text-white/5 select-none pointer-events-none">
                      “
                    </div>
                    <p className="text-base sm:text-lg italic font-normal text-zinc-100 leading-relaxed relative z-10 mb-4">
                      {section.quote.text}
                    </p>
                    <div className="flex items-center gap-3 relative z-10 pt-3 border-t border-white/10">
                      <img
                        src="/wmremove-transformed.jpeg"
                        alt="Ganesh Yadav"
                        className="w-10 h-10 rounded-full object-cover border border-amber-400"
                      />
                      <div>
                        <p className="text-xs font-bold text-white">{section.quote.author}</p>
                        <p className="text-[11px] text-amber-400">JDA &amp; RERA Approved Plots Specialist</p>
                      </div>
                    </div>
                  </blockquote>
                )}
              </section>
            ))
          ) : (
            /* Fallback generic layout if custom article not mapped */
            <div className="space-y-6 reveal-on-scroll">
              <h2 className="text-2xl font-bold text-zinc-950">1. Plotted Land Considerations</h2>
              <p>
                Plotted land offers flexibility for buyers looking to construct an independent home tailored to their family's needs. Unlike multi-story units, owning an individual plot provides direct control over the structure and land usage in accordance with local municipal building bylaws.
              </p>
            </div>
          )}

          {/* Interactive FAQ Section */}
          {article?.faqs && article.faqs.length > 0 && (
            <div id="faqs" className="scroll-mt-28 pt-8 border-t border-zinc-200 reveal-on-scroll">
              <div className="mb-6 space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-[#BD9A68] font-bold">
                  FREQUENTLY ASKED QUESTIONS
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-950">
                  अक्सर पूछे जाने वाले सवाल (FAQs)
                </h3>
              </div>

              <div className="space-y-3">
                {article.faqs.map((faq, fIdx) => {
                  const isOpen = activeFaq === fIdx;
                  return (
                    <div
                      key={fIdx}
                      className={`rounded-2xl border border-zinc-200/90 overflow-hidden bg-zinc-50/50 transition-colors reveal-on-scroll ${
                        fIdx % 2 === 0 ? 'delay-75' : 'delay-150'
                      }`}
                    >
                      <button
                        onClick={() => setActiveFaq(isOpen ? null : fIdx)}
                        className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-zinc-950 hover:bg-zinc-100/70 transition-colors cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <span className="flex items-center gap-2.5">
                          <span className="w-6 h-6 rounded-full bg-amber-100 text-[#966b2a] flex items-center justify-center text-xs font-bold shrink-0">
                            Q
                          </span>
                          <span>{faq.question}</span>
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-zinc-500 transition-transform duration-200 shrink-0 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="p-4 sm:p-5 pt-0 text-sm text-zinc-700 leading-relaxed border-t border-zinc-200/50 bg-white">
                          <p>{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Author Advisory Box */}
          <div className="pt-8 border-t border-zinc-200 reveal-on-scroll delay-100">
            <div className="bg-gradient-to-br from-[#1b1916] to-[#121110] text-white rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-4 text-center md:text-left">
                  <div className="relative inline-block">
                    <img
                      src={article?.author.avatar || '/wmremove-transformed.jpeg'}
                      alt="Ganesh Yadav"
                      className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover object-top border-2 border-[#BD9A68] shadow-md mx-auto md:mx-0"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white rounded-full p-1 shadow-sm">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div className="md:col-span-8 space-y-3 text-center md:text-left">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 font-bold block">
                    ABOUT THE AUTHOR &amp; REAL ESTATE CONSULTANT
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {article?.author.name || 'Ganesh Yadav'}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                    {article?.author.bio ||
                      'Expert guidance on JDA and RERA approved plotted developments in Jaipur, with transparent title verification and on-ground site walk-throughs.'}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
                    <a
                      href={`tel:${article?.author.phone || '+917851982209'}`}
                      className="inline-flex items-center gap-2 rounded-xl bg-white text-zinc-950 px-4 py-2 text-xs font-bold hover:bg-zinc-100 transition-colors shadow-sm"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#BD9A68]" />
                      <span>कॉल करें (+91-7851982209)</span>
                    </a>
                    <a
                      href={article?.author.whatsappUrl || 'https://wa.me/917851982209'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 text-white px-4 py-2 text-xs font-bold hover:bg-emerald-500 transition-colors shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp पर बात करें</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Recommended Townships Section */}
        {article?.relatedProjects && article.relatedProjects.length > 0 && (
          <section className="mt-16 space-y-6 reveal-on-scroll">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#BD9A68] font-bold">
                  VERIFIED PLOTS IN JAIPUR
                </span>
                <h3 className="text-2xl font-bold text-zinc-950">
                  इस लेख से जुड़े अनुशंसित प्रोजेक्ट्स
                </h3>
              </div>
              <Link
                to="/projects"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-700 hover:text-zinc-950 transition-colors"
              >
                <span>सभी प्रोजेक्ट्स देखें</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#BD9A68]" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {article.relatedProjects.map((proj, pIdx) => {
                const delays = ['delay-100', 'delay-200', 'delay-300'];
                const delayClass = delays[pIdx % delays.length];

                return (
                  <Link
                    key={pIdx}
                    to={`/projects/${proj.slug}`}
                    className={`group bg-white rounded-3xl overflow-hidden border border-zinc-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between reveal-on-scroll ${delayClass}`}
                  >
                    <div>
                      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
                        <img
                          src={proj.imageUrl}
                          alt={proj.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <span className="absolute top-3 left-3 bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                          {proj.status}
                        </span>
                      </div>

                      <div className="p-5 space-y-2">
                        <h4 className="text-base font-bold text-zinc-950 group-hover:text-[#BD9A68] transition-colors">
                          {proj.name}
                        </h4>
                        <p className="text-xs text-zinc-500 flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                          <span>{proj.location}</span>
                        </p>
                        <p className="text-xs font-medium text-emerald-700 pt-1">
                          ✓ {proj.approval}
                        </p>
                      </div>
                    </div>

                    <div className="px-5 pb-5 pt-2 flex items-center justify-between text-xs font-bold text-zinc-900 border-t border-zinc-100">
                      <span className="text-zinc-500 group-hover:text-zinc-950">टाउनशिप विवरण देखें</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#BD9A68] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* Bottom Consultation Banner */}
        <section className="mt-16 bg-gradient-to-r from-zinc-900 to-zinc-950 text-white rounded-3xl p-8 sm:p-12 text-center space-y-5 shadow-xl border border-zinc-800 reveal-scale delay-100">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#BD9A68] font-bold block">
            FREE PROPERTY ADVICE
          </span>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight max-w-2xl mx-auto">
            जयपुर में सही प्लॉट चुनने को लेकर मन में कोई भी सवाल है?
          </h3>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed">
            मिस्टर गणेश यादव से सीधे मार्गदर्शन लें। वे स्वयं आपको मौके पर ले जाकर सड़क की चौड़ाई, जेडीए लेआउट और रेरा दस्तावेजों की सत्यापित प्रतियां दिखाएंगे।
          </p>
          <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="rounded-xl bg-white text-zinc-950 px-6 py-3 text-sm font-bold hover:bg-zinc-100 transition-colors shadow-md"
            >
              फ्री साइट विजिट बुक करें
            </Link>
            <a
              href="https://wa.me/917851982209?text=Hi%20Ganesh%2C%20I%20read%20your%20blog%20and%20need%20expert%20guidance%20on%20buying%20plots%20in%20Jaipur."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-emerald-600 text-white px-6 py-3 text-sm font-bold hover:bg-emerald-500 transition-colors shadow-md inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp पर पूछें</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};
