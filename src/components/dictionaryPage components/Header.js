import React from "react";

// stylesheet
import "./Header.css";

// components
import ResultPage from "./ResultPage";

// Navlink
import { Link } from "react-router-dom";

// React simple typewriter
import { Typewriter } from "react-simple-typewriter";

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
            <input type="text" placeholder="Search for any word or phrase" />
          </div>
          <button>
            <FaSistrix className="search_icon" />
          </button>
        </div>
        <div className="menu">
          <p>Synonyms</p>
          <p>Antonyms</p>
          <p>Dictionary</p>
        </div>
      </div>
      <div className="header_body">
        {/* first left side screen for the body */}
        {/* <div className="header_body_text">
          <h1>
            <Typewriter
              words={["Be confident in your writing and speaking."]}
              loop={2}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <p>
            Wordwise assist you in avoiding using the same word excessively
            frequently, redundantly, frequently, endlessly, etc.
          </p>
        </div> */}
        {/* second left side screen for the body */}
        <ResultPage/>
        <div className="header_body_card">
          <h3>Why Word-Wise can be Useful?</h3>
          <p>
            Synonyms can be incredibly useful for enhancing one's language
            skills, as they provide a variety of words to choose from when
            expressing thoughts and ideas. This allows for greater precision in
            communication and helps to avoid repetition and monotony.
          </p>
          <p>
            Additionally, understanding synonyms can help in expanding one's
            vocabulary and making written and spoken language more diverse and
            interesting. Regenerate response
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
