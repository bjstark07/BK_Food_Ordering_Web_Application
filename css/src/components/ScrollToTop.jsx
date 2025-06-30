import React, { useEffect, useState } from 'react';
import './ScrollToTop.css';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(window.scrollY > 300);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return visible ? (
    <button className="scroll-to-top" onClick={scrollTop}>
      ↑
    </button>
  ) : null;
};

export default ScrollToTop;
