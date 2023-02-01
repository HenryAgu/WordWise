import React from "react";
import Hero from "../sub components/Hero";
import HowItWorks from "../sub components/HowItWorks";

// stylesheet
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <HowItWorks />
    </div>
  );
};

export default Home;
