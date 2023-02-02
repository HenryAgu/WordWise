import React from "react";

// stylesheet
import "./Feature.css";

// Navlink
import { Link } from "react-router-dom";

// assets
import feature1 from "../assets/feature1.svg";
import feature2 from "../assets/feature2.svg";
import feature3 from "../assets/feature3.svg";
import feature4 from "../assets/feature4.svg";
import feature5 from "../assets/feature5.svg";
import feature6 from "../assets/feature6.svg";
import feature7 from "../assets/feature7.svg";
import feature8 from "../assets/feature8.svg";
import feature9 from "../assets/feature9.svg";
import feature10 from "../assets/feature10.svg";

const Feature = () => {
  return (
    <div className="feature_container">
      <div className="feature">
        <h1>Featured In</h1>
        <div className="feature_card">
          <div className="feature_image">
            <img src={feature1} alt="" />
          </div>
          <div className="feature_image">
            <img src={feature2} alt="" />
          </div>
          <div className="feature_image">
            <img src={feature3} alt="" />
          </div>
          <div className="feature_image">
            <img src={feature4} alt="" />
          </div>
          <div className="feature_image">
            <img src={feature5} alt="" />
          </div>
          <div className="feature_image">
            <img src={feature6} alt="" />
          </div>
          <div className="feature_image">
            <img src={feature7} alt="" />
          </div>
          <div className="feature_image">
            <img src={feature8} alt="" />
          </div>
          <div className="feature_image">
            <img src={feature9} alt="" />
          </div>
          <div className="feature_image">
            <img src={feature10} alt="" />
          </div>
        </div>
      </div>
      <div className="feature_section">
        <div className="feature_section_text">
          <h2>
            Enhance Your Writing, Expand Your Word Choice, Improve Your
            Communication Today!
          </h2>
        </div>
        <div className="get_started">
          <Link to="/" className="get_started_btn">
            Try Synonym Finder for Free
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Feature;
