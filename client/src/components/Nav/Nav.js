import React from "react";
import Logo from "../../assets/assets/shared/desktop/logo.svg";
import { Link } from "react-router-dom";
import Cart from "../../assets/assets/shared/desktop/icon-cart.svg";

const Nav = () => {
  return (
    <nav className="nav container">
      <img src={Logo} alt="logo" className="nav__logo" />
      <ul className="nav__list">
        <Link to="/">
          <li className="nav__list-item">Home</li>
        </Link>
        <Link to="/headphones">
          <li className="nav__list-item">Headphones</li>
        </Link>
        <Link to="/speakers">
          <li className="nav__list-item">Speakers</li>
        </Link>
        <Link to="/ear-phones">
          <li className="nav__list-item">Earphones</li>
        </Link>
      </ul>
      <img src={Cart} alt="cart" className="nav__cart" />
    </nav>
  );
};

export default Nav;
