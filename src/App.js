import React from "react";

// React Helmet
import { Helmet } from "react-helmet";

// components
import Home from "./components/Home";
import Footer from "./components/Footer";

// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DictionaryPage from "./components/DictionaryPage";

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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dictionary_page" element={<DictionaryPage/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
