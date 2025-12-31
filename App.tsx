
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechMarquee from './components/TechMarquee';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Skills />
        <Certifications />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <ChatWidget />
      <ScrollToTop />
    </div>
  );
}

export default App;