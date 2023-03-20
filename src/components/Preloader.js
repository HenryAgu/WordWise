import React from 'react'

// stylesheet
import './Preloader.css';

// assets
import PreloadImage from '../assets/Benefitlogo.svg';

const Preloader = () => {
  return (
    <div className='preloader'>
      <img src={PreloadImage} alt="" />
    </div>
  )
}

export default Preloader;