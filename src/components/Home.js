import React from "react";

// Components
import Benefits from "../sub components/Benefits";
import CustomerReview from "../sub components/CustomerReview";
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
      <CustomerReview/>
    </div>
  );
};

export default Home;
