import React from "react";
import "../styles/Navbar.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

function Navbar(){
    return(
        
        <nav className="navbar">
            <h1 className="logo">Sai Putta</h1>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="https://github.com/tharunputta157" target="_blank"><i className="fa-brands fa-github"></i></a></li>
                <li><a href="https://www.linkedin.com/in/tharunputta" target="_blank"><i className="fab fa-linkedin"></i></a></li>
            </ul>
        </nav>
            
        
    )
}

export default Navbar;