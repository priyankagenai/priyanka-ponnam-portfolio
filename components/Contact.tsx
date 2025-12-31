import React from 'react';

const Contact: React.FC = () => {
  const targetRoles = [
    "Data Engineer",
    "Cloud Data Engineer",
    "AI Engineer",
    "ML Engineer",
    "Data Scientist",
    "Data Architect"
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-800 to-slate-900 p-8 md:p-12 rounded-3xl border border-slate-700 shadow-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Collaborate?</h2>
          
          <p className="text-slate-400 mb-8 text-lg max-w-2xl mx-auto">
            I am actively seeking new opportunities to leverage my experience in scalable data architecture and generative AI. 
          </p>

          <div className="mb-10">
            <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-4">Open to Roles Including</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {targetRoles.map((role, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-full text-slate-300 text-sm hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all cursor-default"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
            <a
              href="mailto:priyanka240630@gmail.com"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors shadow-lg shadow-blue-900/20"
            >
              <i className="ph-fill ph-envelope-simple text-xl"></i>
              priyanka240630@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/priyanka-ponnam-95b322270"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-semibold transition-colors border border-slate-600 shadow-lg"
            >
              <i className="ph-fill ph-linkedin-logo text-xl"></i>
              LinkedIn
            </a>
          </div>

          <div className="pt-8 border-t border-slate-700 text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Priyanka Ponnam. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;