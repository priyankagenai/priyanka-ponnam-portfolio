import React, { useState, useEffect } from 'react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 md:bottom-6 md:right-24 z-40 bg-slate-700 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg border border-slate-600 transition-all duration-300 hover:-translate-y-1 animate__animated animate__fadeIn"
          aria-label="Scroll to top"
        >
          <i className="ph-bold ph-arrow-up text-xl"></i>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;