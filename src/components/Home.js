import React from "react";
import Benefits from "../sub components/Benefits";
import Hero from "../sub components/Hero";
import HowItWorks from "../sub components/HowItWorks";

// stylesheet
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <HowItWorks />
      <Benefits/>
    </div>
  );
};

export default Home;
