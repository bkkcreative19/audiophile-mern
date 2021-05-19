import React from "react";
import {Link} from 'react-router-dom'
import ZX9 from "../../../assets/assets/home/desktop/image-speaker-zx9.png";
import EarPhones from "../../../assets/assets/home/desktop/image-earphones-yx1.jpg";
import Pattern from "../../../assets/assets/home/desktop/pattern-circles.svg";

const HomePromos = () => {
  return (
    <section className="home-promos container">
      <div className="zx9-speaker">
        <img className="pattern" src={Pattern} alt="" />
        <img className="test" src={ZX9} alt="" />

        <div className="content">
          <h1>ZX9 Speaker</h1>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link to='/product/ZX9 Speaker'><button className="btn">See product</button></Link>
        </div>
      </div>
      <div className="zx7-speaker">
        <div className="content">
          <h3>ZX7 Speaker</h3>
          <Link to='/product/ZX7 Speaker'><button className="btn">See product</button></Link>
        </div>
      </div>
      <div className="yx1-ear-phones">
        <div className="image">
          <img src={EarPhones} alt="ear-phones" />
        </div>

        <div className="content">
          <h3>YX1 earphones</h3>
          <Link to='/product/YX1 Wireless Earphones'><button className="btn">See product</button></Link>
        </div>
      </div>
    </section>
  );
};

export default HomePromos;
