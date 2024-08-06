import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/kv_logo_3.png";
import "./css/Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="kv_logo.png" />
        </Link>
        <p>
          Kinase <span>Vault</span>
        </p>
      </div>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/cite">Cite</Link>
        <Link to="/resources">Resources</Link>
      </div>
      <div className="login">
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
