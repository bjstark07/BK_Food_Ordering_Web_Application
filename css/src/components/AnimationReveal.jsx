// AnimationReveal.jsx
import { useEffect } from 'react';
import './AnimationReveal.css';

const AnimationReveal = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          entry.target.classList.toggle('visible', entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );
    sections.forEach(sec => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return null; // Just runs the logic
};

export default AnimationReveal;
