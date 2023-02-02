import React from "react";

// Components
import Benefits from "../sub components/Benefits";
import CustomerReview from "../sub components/CustomerReview";
import Feature from "../sub components/Feature";
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
      <Feature/>
    </div>
  );
};

export default Home;
