import React from "react";

// stylesheet
import "../dictionaryPage components/ResultPage.css";

const ResultPage = ({ data }) => {
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
          {data.map((data) => (
            <div className="result_card">
              <div className="title">
                <h3>{data.word}</h3>
                <p>{data.meanings[0].partOfSpeech}</p>
              </div>
              <div className="result_text">
                <p>
                  <span>Definition: {data.meanings[0].partOfSpeech}.</span> {data.meanings[0].definitions[0].definition}
                </p>
                <p className="usage">
                  <span>Usage:</span> {data.meanings[0].definitions[0].example}
                </p>
                <p>
                  <span>Synonyms:</span> {data.meanings[0].synonyms.join(', ')} 
                </p>
                <p>
                  <span>Antonyms:</span> {data.meanings[0].antonyms.join(', ')}
                </p>
              </div>
              <div className="line"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ResultPage;
