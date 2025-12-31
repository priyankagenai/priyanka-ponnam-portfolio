import React from 'react';
import { generateResume } from '../utils/resumeGenerator';

const Hero: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-900">
      {/* Background Gradient Orbs */}
      <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-2 mb-8 rounded-full bg-slate-800/80 border border-slate-700 backdrop-blur-md shadow-xl animate__animated animate__fadeInDown">
           <img 
             src="https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg" 
             alt="Google Cloud Certified" 
             className="w-6 h-6 object-contain" 
           />
           <span className="text-xs font-bold tracking-widest text-slate-300 uppercase">Google Cloud Certified Professional</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate__animated animate__fadeInUp animate__delay-1s">
          Driving Business Value with <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 animate-gradient-x">
            Cloud Data & AI
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed animate__animated animate__fadeInUp animate__delay-2s">
          I bridge the gap between complex data infrastructure and intelligent AI solutions. 
          10+ years of experience building scalable pipelines, RAG frameworks, and autonomous agents for enterprise leaders like JPMorgan Chase and Bank of America.
        </p>

        {/* CTAs */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 animate__animated animate__fadeInUp animate__delay-3s">
          <a 
            href="#projects" 
            onClick={(e) => handleNavClick(e, '#projects')}
            className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all shadow-lg shadow-blue-900/30 hover:scale-105"
          >
            View Featured Work
          </a>
          <button 
            onClick={generateResume}
            className="px-10 py-4 bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 font-semibold rounded-full transition-all hover:scale-105 flex items-center gap-2"
          >
            <i className="ph ph-download-simple"></i>
            Download CV
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;