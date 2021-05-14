import React from "react";

const Features = ({ product }) => {
  return (
    <section className="features container">
      {product.features ? (
        <>
          <div className="description">
            <h3>Features</h3>
            <p>{product.features.split("\n\n")[0]}</p>
            <br />
            <p>{product.features.split("\n\n")[1]}</p>
          </div>
          <div className="in-the-box">
            <h3>In the Box</h3>
            <ul className="list">
              {product.includes.map((item) => {
                return (
                  <span className="qty" key={item.item}>
                    {item.quantity}x <span className="item">{item.item}</span>
                  </span>
                );
              })}
            </ul>
          </div>
        </>
      ) : (
        "hi"
      )}
    </section>
  );
};

export default Features;
