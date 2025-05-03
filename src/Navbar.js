import React from "react";
import "./App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo Container */}
      <div className="logo-container">
        <img
          src={require("./assets/y_logo.png")}
          alt="Logo"
          className="logo"
        />
      </div>

      {/* Navigation Icons (GitHub, LinkedIn, Mail) */}
      <div className="nav-icons">
        <div className="nav-item" data-title="GitHub">
          <a href="https://github.com/Pravin-byte" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>
        <div className="nav-item" data-title="LinkedIn">
          <a href="https://www.linkedin.com/in/pravinbyte/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <div className="nav-item" data-title="Mail">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=pravin2210019@ssn.edu.in">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;