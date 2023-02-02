import React from 'react';

// stylesheet
import './Footer.css';

// assets
import footerLogo from '../assets/Logo.svg';

const Footer = () => {
  return (
    <footer>
        <div className="footer_logo">
            <img src={footerLogo} alt="" />
        </div>
        <div className="footer_text">
            <p>Copyright © 2023 Synonym Finder • All Rights Reserved.</p>
        </div>
    </footer>
  )
}

export default Footer