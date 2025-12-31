import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Work History</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-700 transform md:-translate-x-1/2"></div>

            <div className="space-y-12">
                {EXPERIENCES.map((exp, index) => (
                    <div key={exp.id} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} md:items-start w-full`}>
                        
                        {/* Center Dot */}
                        <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 z-10 top-8"></div>

                        {/* Date Side (Desktop Only) */}
                        <div className={`hidden md:block w-1/2 px-10 pt-6 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                            <span className="text-slate-400 font-bold tracking-wider text-lg block">{exp.period}</span>
                        </div>

                        {/* Card Side */}
                        <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-md hover:border-blue-500/30 transition-all relative">
                                
                                 {/* Mobile Date */}
                                 <span className="md:hidden text-xs font-semibold text-blue-400 mb-2 block">{exp.period}</span>
                                
                                {/* Card Content */}
                                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                <p className="text-lg text-blue-400 mb-4">{exp.company}</p>
                                <ul className="space-y-2 mb-4">
                                    {exp.description.map((desc, i) => (
                                        <li key={i} className="text-slate-400 text-sm leading-relaxed flex items-start">
                                            <i className="ph-fill ph-caret-right text-blue-500 mt-0.5 mr-2 flex-shrink-0"></i>
                                            {desc}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-700/50">
                                    {exp.technologies.map((tech, i) => (
                                        <span key={i} className="text-xs font-mono text-slate-500">#{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;