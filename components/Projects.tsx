
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
    <section id="projects" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group bg-slate-900 rounded-xl overflow-hidden border border-slate-700 hover:border-purple-500/50 transition-all hover:-translate-y-1 shadow-xl flex flex-col h-full animate__animated animate__fadeInUp">
              <div className="relative h-48 overflow-hidden flex-shrink-0">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>
                
                <div className="mt-auto space-y-4">
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                            <span key={idx} className="px-2 py-1 bg-slate-800 text-xs text-purple-300 rounded border border-slate-700">
                            {tech}
                            </span>
                        ))}
                    </div>
                    <button 
                        onClick={() => setSelectedProject(project)}
                        className="w-full py-2 bg-slate-800 hover:bg-purple-900/30 text-purple-400 border border-slate-700 hover:border-purple-500/50 rounded-lg text-sm font-semibold transition-all flex items-center justify-center gap-2"
                    >
                        <i className="ph-bold ph-read-cv-logo"></i>
                        View Case Study
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Link to Experience for Older Projects */}
        <div className="mt-16 text-center animate__animated animate__fadeIn animate__delay-1s">
            <p className="text-slate-400">
                Looking for my foundational Data Engineering & BI work (HP, Nationwide)? <br className="hidden md:block"/>
                Check out my complete <a href="#experience" onClick={(e) => handleNavClick(e, '#experience')} className="text-blue-400 hover:text-blue-300 font-semibold hover:underline underline-offset-4 cursor-pointer">Work History</a> below.
            </p>
        </div>

        {/* Case Study Modal */}
        {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate__animated animate__fadeIn">
                <div className="bg-slate-900 rounded-2xl max-w-2xl w-full border border-slate-700 shadow-2xl flex flex-col max-h-[90vh]">
                    
                    {/* Header */}
                    <div className="p-6 border-b border-slate-800 flex justify-between items-start">
                        <div>
                             <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
                             <div className="flex flex-wrap gap-2">
                                {selectedProject.technologies.slice(0,4).map((tech, i) => (
                                     <span key={i} className="text-xs text-slate-400 bg-slate-800 px-2 py-1 rounded">{tech}</span>
                                ))}
                             </div>
                        </div>
                        <button onClick={() => setSelectedProject(null)} className="text-slate-400 hover:text-white p-2 hover:bg-slate-800 rounded-full transition-colors">
                            <i className="ph ph-x text-xl"></i>
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-6 overflow-y-auto space-y-6">
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-red-900/30 flex items-center justify-center flex-shrink-0 text-red-400">
                                    <i className="ph-fill ph-warning-circle text-xl"></i>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-1">The Challenge</h4>
                                    <p className="text-slate-400 leading-relaxed">{selectedProject.caseStudy.challenge}</p>
                                </div>
                            </div>

                             <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center flex-shrink-0 text-blue-400">
                                    <i className="ph-fill ph-lightbulb text-xl"></i>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-1">The Solution</h4>
                                    <p className="text-slate-400 leading-relaxed">{selectedProject.caseStudy.solution}</p>
                                </div>
                            </div>

                             <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-green-900/30 flex items-center justify-center flex-shrink-0 text-green-400">
                                    <i className="ph-fill ph-chart-line-up text-xl"></i>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-1">Business Impact</h4>
                                    <p className="text-slate-400 leading-relaxed">{selectedProject.caseStudy.impact}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                     <div className="p-6 border-t border-slate-800 bg-slate-900/50 rounded-b-2xl flex justify-end">
                         <button onClick={() => setSelectedProject(null)} className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                             Close Case Study
                         </button>
                     </div>
                </div>
            </div>
        )}

      </div>
    </section>
  );
};

export default Projects;
