import React from 'react'

// stylesheet
import './Preloader.scss';

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