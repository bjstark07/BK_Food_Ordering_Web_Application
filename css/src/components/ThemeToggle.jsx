// ThemeToggle.jsx
import { useEffect, useState } from 'react';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', dark);
  }, [dark]);

  return (
    <button className="theme-toggle" onClick={() => setDark(!dark)}>
      {dark ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggle;
