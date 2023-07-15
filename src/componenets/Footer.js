import React from 'react';
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const yearRange = `2018 - ${currentYear}`;

  return (
    <footer className="footer" style={{ backgroundColor: "#181818" }}>
      <p className="footer-text">
        &copy; {yearRange} Xzect Labs Pvt. Ltd. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
