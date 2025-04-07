import React, { useState, useEffect, useRef } from "react";
import "../styles/Navbar.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

function Navbar() {
  const [menuOpen, setMenuopen] = useState(false);  // State for controlling menu visibility
  const navLinksRef = useRef(null);  // Ref for the nav links (dropdown)
  const hamburgerRef = useRef(null); // Ref for the hamburger icon

  // Toggle menu visibility
  const toggleMenu = () => {
    setMenuopen(!menuOpen); 
  };

  // Close the dropdown if clicked outside the menu or hamburger
  const handleClickOutside = (event) => {
    if (
      navLinksRef.current && !navLinksRef.current.contains(event.target) &&
      hamburgerRef.current && !hamburgerRef.current.contains(event.target)
    ) {
      setMenuopen(false); // Close the dropdown menu
    }
  };

  // Adding event listener for clicks outside the menu when the component mounts
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);


  return (
    <nav className="navbar">
      <a href="#"><h1 className="logo">Sai Putta</h1></a>

      {/* Hamburger icon */}
      <div className="hamburger" onClick={toggleMenu} ref={hamburgerRef}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navigation links */}
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`} ref={navLinksRef}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="https://github.com/tharunputta157" target="_blank"><i className="fa-brands fa-github"></i></a></li>
        <li><a href="https://www.linkedin.com/in/tharunputta" target="_blank"><i className="fab fa-linkedin"></i></a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
