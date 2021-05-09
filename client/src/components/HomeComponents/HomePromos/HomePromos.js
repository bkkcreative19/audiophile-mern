import React from "react";

import ZX9 from "../../../assets/assets/home/desktop/image-speaker-zx9.png";
import ZX7 from "../../../assets/assets/home/desktop/image-speaker-zx7.jpg";
import EarPhones from "../../../assets/assets/home/desktop/image-earphones-yx1.jpg";
import Pattern from "../../../assets/assets/home/desktop/pattern-circles.svg";

const HomePromos = () => {
  return (
    <section className="home-promos container">
      <div className="zx9-speaker">
        <img className="pattern" src={Pattern} alt="" />
        <img className="test" src={ZX9} alt="" />

        <div className="content">
          <h1>ZX9 speaker</h1>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button className="btn">See product</button>
        </div>
      </div>
      <div className="zx7-speaker">
        <div className="content">
          <h3>ZX7 speaker</h3>
          <button className="btn">See product</button>
        </div>
      </div>
      <div className="yx1-ear-phones">
        <img src={EarPhones} alt="ear-phones" />
        <div className="content">
          <h3>YX1 earphones</h3>
          <button className="btn">See product</button>
        </div>
      </div>
    </section>
  );
};

export default HomePromos;