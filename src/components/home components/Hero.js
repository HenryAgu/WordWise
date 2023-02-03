import React from "react";

// stylesheet
import "./Hero.css";

// assets
import HeroImage from "../../assets/Hero.svg";

// Navlink
import { Link } from "react-router-dom";

// react icons
import { FaSistrix } from "react-icons/fa";

// React simple typewriter
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div className="hero" id="top">
      <div className="hero_content">
        <div className="hero_text">
          <h1>Get the synonyms & Antonyms of any words of your choice</h1>
          <p>
            With more than 500000 synonyms and antonyms. Get as many synonyms
            and antonyms to different words with ease.
          </p>
          <div className="search_area">
            <h3>Search for words</h3>
            <div className="search_box">
              <FaSistrix className="search_icon" />
              <p>
                e.g{" "}
                <span>
                  {" "}
                  <Typewriter
                    words={["Dance", "Delighted","Substandard","Enormous","Ecstatic"]}
                    loop={5}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </p>
            </div>
            <Link to="/dictionary_page" className="search_btn">
              Get Started
            </Link>
          </div>
        </div>
        <div className="hero_image">
          <img src={HeroImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
