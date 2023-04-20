import React from 'react';

// stylesheet
import './Footer.scss';

// assets
import footerLogo from '../assets/Logo.svg';

const Footer = () => {
  return (
    <footer>
        <div className="footer_logo">
        <a href="#top">
            <img src={footerLogo} alt="Logo" />
          </a>

        </div>
        <div className="footer_text">
            <p>Copyright © 2023 Synonym Finder • All Rights Reserved.</p>
        </div>
    </footer>
  )
}

export default Footer