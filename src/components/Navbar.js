import React from "react";

// stylesheet
import "./Navbar.scss";

// Navlink
import { Link } from "react-router-dom";

// assets
import Logo from "../assets/Logo.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <div className="logo">
          <a href="#top">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div className="get_started">
          <Link to="/dictionary_page" className="get_started_btn">
            Get Started
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
