import React from "react";
import { Link } from "react-router-dom";
import Arrow from "../../assets/assets/shared/desktop/icon-arrow-right.svg";
import Headphones from "../../assets/assets/shared/desktop/image-headphones.png";
import EarPhones from "../../assets/assets/shared/desktop/image-earphones.png";
import Speakers from "../../assets/assets/shared/desktop/image-speakers.png";

const CategorieSelection = () => {
  return (
    <section className="categorie-selection container">
      <div className="cards">
        <div className="card">
          <img src={Headphones} alt="" />
          <div className="content">
            <h3>Headphones</h3>
            <Link to="/category/headphones">
              <span>Shop</span>
              <img src={Arrow} alt="arrow" />
            </Link>
          </div>
        </div>
        <div className="card">
          <img src={Speakers} alt="" />
          <div className="content">
            <h3>Speakers</h3>
            <Link to="/category/speakers">
              <span>Shop</span>
              <img src={Arrow} alt="arrow" />
            </Link>
          </div>
        </div>
        <div className="card">
          <img src={EarPhones} alt="" />
          <div className="content">
            <h3>EarPhones</h3>
            <Link to="/category/earphones">
              <span>Shop</span>
              <img src={Arrow} alt="arrow" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorieSelection;
