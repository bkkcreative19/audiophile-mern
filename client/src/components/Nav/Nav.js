import React, { useContext } from "react";
import Logo from "../../assets/assets/shared/desktop/logo.svg";
import { Link } from "react-router-dom";
import Cart from "../../assets/assets/shared/desktop/icon-cart.svg";
import { Context } from "../../context/Context";

const Nav = () => {
  const { isOpen, setIsOpen } = useContext(Context);
  return (
    <nav className="nav">
      <div className="nav__wrapper container">
        <img src={Logo} alt="logo" className="nav__logo" />
        <i className="fas fa-bars hamburger"></i>
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
        <img
          onClick={() => setIsOpen(!isOpen)}
          src={Cart}
          alt="cart"
          className="cart"
        />
      </div>
    </nav>
  );
};

export default Nav;
