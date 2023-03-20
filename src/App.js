import React, { lazy, Suspense } from "react";

// React Helmet
import { Helmet } from "react-helmet";

// components
import Footer from "./components/Footer";

// Pages
// import Home from "./components/Home";
// import DictionaryPage from "./components/DictionaryPage";

// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Preloader from "./components/Preloader";

// React Lazy Pages
const Home = lazy(() => import("./components/Home"));
const DictionaryPage = lazy(() => import("./components/DictionaryPage"));

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
          <ScrollToTop/>
          <Suspense fallback={<Preloader/>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dictionary_page" element={<DictionaryPage />} />
            </Routes>
          </Suspense>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
