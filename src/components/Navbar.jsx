import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        <Link to="/">Juan Olmos</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/publications">Publications</Link>
        <Link to="/cv">CV</Link>
      </div>
    </nav>
  );
};

export default Navbar;
