import React from 'react';

const TechMarquee: React.FC = () => {
  const techs = [
    { name: 'AWS', icon: 'devicon-amazonwebservices-plain-wordmark' },
    { name: 'Google Cloud', icon: 'devicon-googlecloud-plain' },
    { name: 'Python', icon: 'devicon-python-plain' },
    { name: 'Docker', icon: 'devicon-docker-plain' },
    { name: 'Kubernetes', icon: 'devicon-kubernetes-plain' },
    { name: 'Terraform', icon: 'devicon-terraform-plain' },
    { name: 'Apache Spark', icon: 'devicon-apachespark-original' },
    { name: 'Kafka', icon: 'devicon-apachekafka-original' },
    { name: 'Snowflake', icon: 'devicon-snowflake-original' },
    { name: 'Pandas', icon: 'devicon-pandas-original' },
    { name: 'GitLab', icon: 'devicon-gitlab-plain' },
    { name: 'Jenkins', icon: 'devicon-jenkins-plain' },
    { name: 'React', icon: 'devicon-react-original' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' }
  ];

  return (
    <div className="bg-slate-900 border-y border-slate-800 py-8 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-10"></div>
      
      <div className="flex w-[200%] animate-marquee">
        {/* First set of icons */}
        <div className="flex justify-around min-w-[50%] items-center gap-12 px-12">
          {techs.map((tech, index) => (
            <div key={`tech-1-${index}`} className="flex flex-col items-center gap-2 group opacity-50 hover:opacity-100 transition-opacity">
              <i className={`${tech.icon} text-5xl text-slate-300 group-hover:text-blue-400 transition-colors`}></i>
              <span className="text-xs text-slate-500 font-mono hidden group-hover:block transition-all">{tech.name}</span>
            </div>
          ))}
        </div>
        
        {/* Duplicate set for infinite loop */}
        <div className="flex justify-around min-w-[50%] items-center gap-12 px-12">
          {techs.map((tech, index) => (
            <div key={`tech-2-${index}`} className="flex flex-col items-center gap-2 group opacity-50 hover:opacity-100 transition-opacity">
              <i className={`${tech.icon} text-5xl text-slate-300 group-hover:text-blue-400 transition-colors`}></i>
              <span className="text-xs text-slate-500 font-mono hidden group-hover:block transition-all">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechMarquee;