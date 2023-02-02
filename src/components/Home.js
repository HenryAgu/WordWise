import React from "react";

// Components
import Benefits from "../home components/Benefits";
import CustomerReview from "../home components/CustomerReview";
import Feature from "../home components/Feature";
import Hero from "../home components/Hero";
import HowItWorks from "../home components/HowItWorks";

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
