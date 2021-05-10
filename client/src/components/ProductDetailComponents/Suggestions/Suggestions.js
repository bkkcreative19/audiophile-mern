import React from "react";
import { Link } from "react-router-dom";
import Image from "../../../assets/assets/shared/desktop/image-xx99-mark-one-headphones.jpg";

const Suggestions = ({ others }) => {
  return (
    <section className="suggestions container">
      <h1>You may Also Like</h1>
      <div className="others">
        {others
          ? others.map((item) => {
              return (
                <div key={item.slug} className="other">
                  <img src={Image} alt="" />
                  <h3>{item.name}</h3>
                  <Link to={`/product/${item.name}`}>
                    <button>See Product</button>
                  </Link>
                </div>
              );
            })
          : "hi"}
      </div>
    </section>
  );
};

export default Suggestions;
