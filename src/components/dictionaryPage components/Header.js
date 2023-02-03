import React from "react";

// stylesheet
import "./Header.css";

// Navlink
import { Link } from "react-router-dom";

// react icons
import { FaSistrix } from "react-icons/fa";

// assets
import Logo from "../../assets/Logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header_nav">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="search_bar">
          <div className="search_box">
            <FaSistrix />
            <input type="text" placeholder="Search for any word or phrase"/>
          </div>
          <button>
            <FaSistrix className="search_icon"/>
          </button>
        </div>
        <div className="menu">
          <p>Synonyms</p>
          <p>Antonyms</p>
          <p>Dictionary</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
