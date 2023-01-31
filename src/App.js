import React from "react";

// stylesheet
import "./App.css";

// React Helmet
import {Helmet} from "react-helmet";

// components
import Navbar from "./components/Navbar";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title> Welcome to WordWise | synonyms and antonyms finder</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="app">
        <Navbar/>
        <Home/>
      </div>
    </>
  );
};

export default App;
