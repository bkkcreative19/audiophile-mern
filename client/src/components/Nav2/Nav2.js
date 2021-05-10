import React from "react";
import Logo from "../../assets/assets/shared/desktop/logo.svg";
import { Link } from "react-router-dom";
import Cart from "../../assets/assets/shared/desktop/icon-cart.svg";
import "./Nav2.scss";
const Nav2 = () => {
  return (
    <nav className="nav">
      <div className="wrapper container">
        <img src={Logo} alt="logo" className="nav__logo" />
        <ul className="nav__list">
          <Link to="/">
            <li className="nav__list-item">Home</li>
          </Link>
          <Link to="/category/headphones">
            <li className="nav__list-item">Headphones</li>
          </Link>
          <Link to="/category/speakers">
            <li className="nav__list-item">Speakers</li>
          </Link>
          <Link to="/category/earphones">
            <li className="nav__list-item">Earphones</li>
          </Link>
        </ul>
        <img src={Cart} alt="cart" className="nav__cart" />
      </div>
    </nav>
  );
};

export default Nav2;
