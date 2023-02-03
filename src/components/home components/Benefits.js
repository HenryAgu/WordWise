import React from "react";

// stylesheet
import "./Benefits.css";

// assets
import benefitLogo from "../../assets/Benefitlogo.svg";
import benefitImage1 from "../../assets/benefitImage1.svg";
import benefitImage2 from "../../assets/benefitImage2.svg";

const Benefits = () => {
  return (
    <div className="benefit_container">
      <div className="benefit">
        <div className="benefit_logo">
          <img src={benefitLogo} alt="" />
        </div>
        <div className="benefit_text">
          <h3>#1 largest Synonyms & Antonyms Finder</h3>
          <p>
            With quick search of Antonyms & Synonyms, you can easily improve
            your English proficiency and also help to enhance the writing
            quality and provide readers with a crisp and unique outlook of the
            text and unlock new levels while gaining real-world communication
            skills
          </p>
        </div>
      </div>
      {/* Benefit Header */}
      <div className="benefit_header">
        <h1>
          Benefits of using <span>DISCOVER</span>
        </h1>
      </div>
      <div className="benefit_boxes">
        <div className="inner_box benefit_box1">
          <img src={benefitImage1} alt="" />
          <h3>Effective and efficient</h3>
          <p>
            Our results effectively and efficiently teach reading, listening,
            and speaking skills
          </p>
        </div>
        <div className="inner_box benefit_box2">
          <img src={benefitImage2} alt="" />
          <h3>Staying motivated</h3>
          <p>
            We make it easy to form a habit of language learning and improving
            English Language.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
