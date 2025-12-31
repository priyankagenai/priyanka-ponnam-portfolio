
import React from 'react';
import { CERTIFICATIONS } from '../constants';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {CERTIFICATIONS.map((cert) => (
            <div key={cert.id} className="bg-slate-800 rounded-2xl p-8 max-w-sm w-full border border-slate-700 shadow-xl hover:border-yellow-500/50 transition-all duration-300 group flex flex-col items-center text-center relative overflow-hidden">
                
                {/* Glow Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl group-hover:bg-yellow-500/20 transition-colors"></div>

                <div className="relative z-10 mb-6 transition-transform duration-300 group-hover:scale-110">
                   <img 
                    src={cert.logoUrl} 
                    alt={cert.name} 
                    className="w-32 h-32 object-contain drop-shadow-lg" 
                   />
                </div>
                
                <h3 className="relative z-10 text-xl font-bold text-white mb-2">{cert.name}</h3>
                <p className="relative z-10 text-slate-400 mb-4">{cert.issuer}</p>
                
                <div className="relative z-10 mt-auto w-full pt-4 border-t border-slate-700/50">
                     <div className="flex flex-col gap-2 items-center">
                        <span className="flex items-center gap-2 text-green-400 text-sm font-bold bg-green-900/20 px-4 py-1.5 rounded-full border border-green-900/50">
                            <i className="ph-fill ph-check-circle"></i>
                            Active
                        </span>
                        <span className="text-xs text-slate-500 font-medium">
                            {cert.expirationDate}
                        </span>
                     </div>
                </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
