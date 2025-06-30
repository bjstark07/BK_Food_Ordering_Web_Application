import React, { useRef, useEffect } from 'react';
import './Navbar.css'; // You can style it separately

const Navbar = () => {
  const navCheckRef = useRef(null);
  const navbarRef = useRef(null);
  const navBtnRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        navCheckRef.current?.checked &&
        !navbarRef.current.contains(e.target) &&
        !navBtnRef.current.contains(e.target)
      ) {
        navCheckRef.current.checked = false;
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
    if (navCheckRef.current) navCheckRef.current.checked = false;
  };

  return (
    <>
      <input type="checkbox" id="nav-check" hidden ref={navCheckRef} />
      <div className="nav-btn" ref={navBtnRef}>
        <label htmlFor="nav-check">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="30" height="30" fill="#d35400">
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </label>
      </div>

      <nav className="navbar" ref={navbarRef}>
        <ul className="nav-items">
          {['home', 'features', 'about', 'menu', 'contact'].map(section => (
            <li key={section}>
              <a
                href={`#${section}`}
                className="nav-link"
                onClick={(e) => scrollToSection(e, section)}
              >
                {section.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
