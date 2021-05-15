import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/assets/shared/desktop/logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="left">
          <img src={Logo} alt="logo" />
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <span>Copyright 2021. All Rights Reserved</span>
        </div>
        <div className="right">
          <ul className="right__list">
            <Link to="/">
              <li className="right__list-item">Home</li>
            </Link>
            <Link to="/category/headphones">
              <li className="right__list-item">Headphones</li>
            </Link>
            <Link to="/category/speakers">
              <li className="right__list-item">Speakers</li>
            </Link>
            <Link to="/category/ear-phones">
              <li className="right__list-item">Earphones</li>
            </Link>
          </ul>
          <div className="social-logos">
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
