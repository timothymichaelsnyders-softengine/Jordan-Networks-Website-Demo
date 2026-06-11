import { useState } from 'react';
import { Search, BookOpen, Clock, User, X, ChevronRight, FileText, Share2 } from 'lucide-react';
import { INSIGHTS } from '../data';
import { InsightPost } from '../types';
import { motion, AnimatePresence } from 'motion/react';

export default function KnowledgeCenter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedPost, setSelectedPost] = useState<InsightPost | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  const categories = ['All', 'Security', 'Infrastructure', 'IT Strategy'];

  // Filter posts based on category & search query
  const filteredPosts = INSIGHTS.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleShare = () => {
    setIsCopied(true);
    navigator.clipboard.writeText(window.location.origin + '#' + selectedPost?.id);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div id="knowledge-center-root" className="space-y-6">
      
      {/* Search & Categories Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-slate-900 border border-slate-800 p-4 rounded-xl shadow-md">
        {/* Categories toggler */}
        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
          {categories.map(cat => (
            <button
              key={cat}
              type="button"
              id={`cat-${cat.toLowerCase().replace(' ', '-')}-btn`}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg border transition ${
                activeCategory === cat 
                  ? 'bg-cyan-500 border-cyan-400 text-slate-950 font-bold' 
                  : 'bg-transparent border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-80 shrink-0">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
          <input
            type="text"
            id="knowledge-search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search resources, POPIA, firewalls..."
            className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2 pl-9 pr-4 text-xs focus:border-cyan-500 focus:outline-none text-slate-200 placeholder-slate-500"
          />
        </div>
      </div>

      {/* Grid of Articles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredPosts.map(post => (
            <motion.div
              layout
              key={post.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-slate-900 border border-slate-850 hover:border-slate-750 p-5 rounded-xl shadow-xl hover:shadow-2xl flex flex-col justify-between group transition duration-300"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center text-[10px] font-mono">
                  <span className="text-cyan-400 font-bold uppercase tracking-wider">{post.category}</span>
                  <span className="text-slate-500">{post.date}</span>
                </div>

                <h5 className="font-bold text-sm text-white group-hover:text-cyan-300 transition duration-200 leading-snug line-clamp-2">
                  {post.title}
                </h5>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-850/60 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1 font-mono">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </span>

                <button
                  type="button"
                  id={`read-post-${post.id}-btn`}
                  onClick={() => setSelectedPost(post)}
                  className="text-cyan-400 hover:text-cyan-300 font-bold group-hover:underline flex items-center gap-0.5"
                >
                  Read Blueprint
                  <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition" />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {filteredPosts.length === 0 && (
          <div className="col-span-full text-center py-12 bg-slate-900/40 border border-slate-800 rounded-xl">
            <BookOpen className="h-10 w-10 text-slate-600 mx-auto mb-3" />
            <h6 className="font-semibold text-white">No manuals matched your search parameters</h6>
            <p className="text-xs text-slate-400 mt-1">Try seeking simple words like "security", "POPIA", "power", or "hybrid".</p>
          </div>
        )}
      </div>

      {/* Article Detail Modal View */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Overlay background black */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
              className="absolute inset-0 bg-slate-950"
            />

            {/* Modal Box */}
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-5 md:p-8 max-h-[85vh] overflow-y-auto z-10 text-slate-200 text-left scrollbar-thin"
            >
              {/* Close Button top corner */}
              <button
                type="button"
                id="close-post-modal-btn"
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-white transition"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Tag and date indicators */}
              <div className="flex items-center gap-3 text-xs font-mono text-slate-500 mb-3 ml-0.5">
                <span className="text-cyan-400 font-extrabold uppercase tracking-widest">{selectedPost.category}</span>
                <span>•</span>
                <span>{selectedPost.date}</span>
                <span>•</span>
                <span>{selectedPost.readTime}</span>
              </div>

              {/* Core title */}
              <h4 className="text-lg md:text-xl font-bold tracking-tight text-white mb-4 pr-10 leading-snug">
                {selectedPost.title}
              </h4>

              {/* Author details */}
              <div className="p-3 bg-slate-950 border border-slate-850 rounded-xl flex items-center gap-2.5 mb-6">
                <div className="h-9 w-9 rounded-full bg-cyan-950 border border-cyan-800/40 flex items-center justify-center text-cyan-400 shrink-0">
                  <User className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">{selectedPost.author}</span>
                  <span className="text-[10px] text-slate-500 font-mono">Jordan Networks Technical Advisory Council</span>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="space-y-4 text-xs md:text-sm text-slate-300 leading-relaxed font-sans border-b border-slate-850 pb-5 mb-5 whitespace-pre-line">
                <p className="italic text-slate-400 border-l-2 border-cyan-500 pl-3 py-1 bg-slate-950/20 mb-4 rounded-r">
                  {selectedPost.excerpt}
                </p>
                {selectedPost.content}
              </div>

              {/* Footer and Sharing widgets */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
                <div className="text-[10px] text-slate-500 font-mono uppercase">
                  © 2026 JORDAN NETWORKS (PTY) LTD • LICENSED RESEARCH MANUAL
                </div>
                
                <div className="flex items-center gap-2 font-mono text-xs">
                  <button
                    type="button"
                    onClick={handleShare}
                    className="py-1.5 px-3 bg-slate-950 border border-slate-800 rounded-lg hover:border-slate-700 hover:text-white transition flex items-center gap-1 text-slate-400"
                  >
                    <Share2 className="h-3.5 w-3.5" />
                    {isCopied ? 'Copied URL!' : 'Share Copied'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedPost(null)}
                    className="py-1.5 px-3 bg-cyan-500 text-slate-950 hover:bg-cyan-400 rounded-lg transition font-bold"
                  >
                    Close Manual
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
