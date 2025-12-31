import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-900 relative">
      <div className="container mx-auto px-6">
        
        {/* Unique Quote Section */}
        <div className="flex flex-col items-center justify-center text-center mb-20 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
            <i className="ph-fill ph-quotes text-6xl text-slate-700 mb-6 opacity-50"></i>
            <h3 className="relative z-10 text-2xl md:text-4xl font-light text-slate-200 italic max-w-4xl leading-relaxed">
              "In the noise of big data, I engineer the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-semibold not-italic">signal</span> that drives Artificial Intelligence."
            </h3>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Stat 1 */}
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all group">
                <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <i className="ph ph-trend-up text-2xl text-blue-400 group-hover:text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">10+ Years Experience</h3>
                <p className="text-slate-400 leading-relaxed">
                    Solid foundation in Business Intelligence, Data Warehousing, and Cloud Architecture across Finance, Healthcare, and Tech sectors.
                </p>
            </div>

            {/* Stat 2 */}
             <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all group">
                <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                    <i className="ph ph-certificate text-2xl text-purple-400 group-hover:text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Certified Pro</h3>
                <p className="text-slate-400 leading-relaxed">
                    Google Cloud Certified Professional Data Engineer. Proficient in delivering secure, compliant, and scalable cloud solutions.
                </p>
            </div>

             {/* Stat 3 */}
             <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-teal-500/50 transition-all group">
                <div className="w-12 h-12 bg-teal-900/50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors">
                    <i className="ph ph-brain text-2xl text-teal-400 group-hover:text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">GenAI & RAG</h3>
                <p className="text-slate-400 leading-relaxed">
                    Expertise in building RAG pipelines, Vector Search implementations, and Fine-tuning LLMs using Bedrock and Vertex AI.
                </p>
            </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
            <p className="text-lg text-slate-300 leading-loose mb-6">
                I am a seasoned Data Engineer and Cloud AI Engineer with a proven track record of modernizing data infrastructure.
                My expertise spans the entire data lifecycle—from ingestion and ETL to advanced analytics and machine learning.
                Recently, I have been focused on leveraging Generative AI to solve complex business problems, building intelligent agents and semantic search engines.
            </p>
            <div className="p-6 bg-slate-800/30 rounded-xl border border-slate-700/50 inline-block">
                <h4 className="text-white font-semibold mb-2">Education</h4>
                <p className="text-slate-400 text-sm">Masters in IT & Management, St Francis College, NY (May 2025)</p>
                <p className="text-slate-400 text-sm">Bachelors in Electronics, Osmania University (May 2014)</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;