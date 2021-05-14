import React from "react";
import Nav from "../../Nav/Nav";

import bgImage from "../../../assets/assets/home/desktop/image-hero.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__wrapper container">
        <div className="hero__content">
          <h3>New product</h3>
          <h1>XX99 Mark II Headphones</h1>
          <p>
            Experience natural, life like audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button className="hero__btn">See Product</button>
        </div>
        <div className="hero__image"></div>
      </div>
    </section>
  );
};

export default Hero;
