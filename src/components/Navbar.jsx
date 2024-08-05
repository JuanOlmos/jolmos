import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        <a href="/"> Juan Olmos</a>
      </div>
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/publications">Publications</a>
        <a href="#cv">CV</a>
      </div>
    </nav>
  );
};

export default Navbar;
