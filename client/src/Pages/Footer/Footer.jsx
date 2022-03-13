import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footerLeft">
        <i className="navIcons">
          <FaInstagram />
        </i>
        <i className="navIcons">
          <FaFacebook />
        </i>
        <i className="navIcons">
          <FaTwitter />
        </i>
      </div>
      <div className="footerCenter">
        <h1 className="navbar-logo">Fit Forward</h1>
      </div>
      <div className="footerRight">
        fitness blog done by FV
      </div>
    </div>
  );
};

export default Footer;
