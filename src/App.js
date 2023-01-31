import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// stylesheet
import "./App.css";
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  let square = useRef(null)
  useEffect(()=>{
    gsap.to(square, {
      scrollTrigger: {
        trigger: square,
        scrub: 1,
        // markers: true,
        toggleActions: "restart complete resume reset",
      },
      x: 1000,
      // rotation: 360,
      duration: 3
    })
  },[])
  return (
    <>
      <div className="div1"></div>
      <div className="div2"></div>
      <div className="div3">
        <div className="sqaure" ref={el =>{square = el}}>
        </div>
      </div>
    </>
  );
};

export default App;
