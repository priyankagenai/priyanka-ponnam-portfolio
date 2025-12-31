
import React from 'react';
import { BLOG_POSTS } from '../constants';

const Insights: React.FC = () => {
  return (
    <section id="insights" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Tech Insights</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            My latest thoughts on Generative AI agents, Data Engineering patterns, and Cloud Architecture.
          </p>
          <div className="w-20 h-1 bg-green-500 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {BLOG_POSTS.map((post) => (
            <a 
              key={post.id} 
              href={post.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-green-500/50 transition-all hover:-translate-y-1 block"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-semibold text-green-400 bg-green-900/20 px-3 py-1 rounded-full border border-green-900/50">
                  {post.category}
                </span>
                <span className="text-xs text-slate-500">{post.readTime}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                {post.title}
              </h3>
              
              <p className="text-slate-400 text-sm mb-6 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex items-center text-sm font-medium text-blue-400 group-hover:text-blue-300 transition-colors mt-auto">
                Read on LinkedIn 
                <i className="ph-bold ph-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-12 text-center">
             <a 
                href="https://www.linkedin.com/in/priyanka-ponnam-95b322270"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-slate-300 rounded-full border border-slate-700 hover:bg-slate-700 hover:text-white transition-colors"
             >
                <i className="ph-fill ph-newspaper"></i>
                Follow me for more updates
             </a>
        </div>
      </div>
    </section>
  );
};

export default Insights;
