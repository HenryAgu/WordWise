import React from 'react'

// stylesheet
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <div className='how_it_works'>
        <h1>I’m looking for</h1>
        <div className="uses_box">
            <div className="inner_use_box box1">
                <div className="box_text">A dictionary for learning</div>
                <div className="box_arrow"></div>
            </div>
            <div className="inner_use_box box2">
                <div className="box_text">A dictionary for learning</div>
                <div className="box_arrow"></div>
            </div>
            <div className="inner_use_box box3">
                <div className="box_text">A dictionary for learning</div>
                <div className="box_arrow"></div>
            </div>
        </div>
    </div>
  )
}

export default HowItWorks