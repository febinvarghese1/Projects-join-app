import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="header-titles">
          <span className="primary-title"> Fitness Blog.</span>
          <span className="secondary-title">Get Your Ideal Body</span>
        </div>
        <img
          id="HeaderImage-1"
          src="https://images.unsplash.com/photo-1599058918144-1ffabb6ab9a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
          alt=""
        />
        <div className="cross-line"></div>
      </div>
      <div className="header-wrapper">
        <img
          id="HeaderImage-2"
          src="https://images.unsplash.com/photo-1605296867424-35fc25c9212a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
