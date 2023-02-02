import React from "react";

// React Helmet
import { Helmet } from "react-helmet";

// components
import Navbar from "./components/Navbar";
import Home from "./components/Home";

// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title> Welcome to WordWise | synonyms and antonyms finder</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="app">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
