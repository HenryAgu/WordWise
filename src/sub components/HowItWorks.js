import React from "react";

// stylesheet
import "./HowItWorks.css";

// assets
import blueArrow from "../assets/BlueArrow.svg";
import redArrow from "../assets/RedArrow.svg";
import greenArrow from "../assets/GreenArrow.svg";

import step1 from "../assets/step1.svg";
import step2 from "../assets/step2.svg";
import step3 from "../assets/step3.svg";

const HowItWorks = () => {
  return (
    <div className="how_it_works">
      <h1>I’m looking for</h1>
      <div className="uses_box">
        <div className="inner_use_box box1">
          <div className="box_text">A dictionary for learning</div>
          <div className="box_arrow">
            <img src={blueArrow} alt="" />
          </div>
        </div>
        <div className="inner_use_box box2">
          <div className="box_text">
            A Scientific and fun way to improve vocabulary
          </div>
          <div className="box_arrow">
            <img src={redArrow} alt="" />
          </div>
        </div>
        <div className="inner_use_box box3">
          <div className="box_text">A better way to teach word</div>
          <div className="box_arrow">
            <img src={greenArrow} alt="" />
          </div>
        </div>
      </div>
      {/* How it works header */}
      <div className="how_header">
        <h3>How it works</h3>
        <h2>Easy steps to get Synonyms & Antonyms of words.</h2>
      </div>
      {/* Steps box */}
      <div className="step_box">
        <div className="step_container">
          <div className="inner_step_box">
            <img src={step1} alt="" />
            <h3>Get Started</h3>
            <p>
              By getting started on the platform, you can use our features to
              find your Antonyms & Synonyms easily.
            </p>
          </div>
          <div className="inner_step_box">
            <img src={step2} alt="" />
            <h3>Enter word</h3>
            <p>
              Easily enter the word which you need to find the Antonyms &
              Synonyms.
            </p>
          </div>
          <div className="inner_step_box">
            <img src={step3} alt="" />
            <h3>Search the word</h3>
            <p>
              Search the entered word which to find as many Antonyms & Synonyms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
