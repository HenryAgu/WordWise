import React from "react";

// Components
import Navbar from '../components/Navbar';
import Benefits from "../components/home components/Benefits";
import CustomerReview from "../components/home components/CustomerReview";
import Feature from "../components/home components/Feature";
import Hero from "../components/home components/Hero";
import HowItWorks from "../components/home components/HowItWorks";


const Home = () => {
  return (
    <div className="home">
      <Navbar/>
      <Hero />
      <HowItWorks />
      <Benefits/>
      <CustomerReview/>
      <Feature/>
    </div>
  );
};

export default Home;
