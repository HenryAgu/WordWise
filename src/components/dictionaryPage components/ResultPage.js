import React from "react";

// stylesheet
import "../dictionaryPage components/ResultPage.css";

const ResultPage = () => {
  return (
    <>
      {/* second left side screen for the body */}
      <div className="second_header_body_text">
        <div className="header_body_text_top">
          <div className="inner_top top_one">
            <p>All Info</p>
          </div>
          <div className="inner_top">
            <p>Synonyms</p>
          </div>
          <div className="inner_top">
            <p>Antonyms</p>
          </div>
        </div>
        <div className="result">
          <div className="result_card">
            <div className="title">
              <h3>Man</h3>
              <p>Noun</p>
            </div>
            <div className="result_text">
              <p>
                <span>Definition: noun.</span> ['ˈmæn'] an adult person who is male (as
                opposed to a woman)
              </p>
              <p className="usage"><span>Usage:</span> there were two women and six men on the bus</p>
              <p><span>Synonyms:</span> Father, Son, Husband, Dude</p>
              <p><span>Antonyms:</span> Woman, Adult friend</p>
            </div>
            <div className="line"></div>
          </div>
        </div>
        <div className="result">
          <div className="result_card">
            <div className="title">
              <h3>Man</h3>
              <p>Noun</p>
            </div>
            <div className="result_text">
              <p>
                <span>Definition: noun.</span> ['ˈmæn'] an adult person who is male (as
                opposed to a woman)
              </p>
              <p className="usage"><span>Usage:</span> there were two women and six men on the bus</p>
              <p><span>Synonyms:</span> Father, Son, Husband, Dude</p>
              <p><span>Antonyms:</span> Woman, Adult friend</p>
            </div>
            <div className="line"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultPage;
