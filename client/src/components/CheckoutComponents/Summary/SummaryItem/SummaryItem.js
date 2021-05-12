import React from "react";
import Image from "../../../../assets/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg";

const SummaryItem = ({ item }) => {
  return (
    <div className="summary-item">
      <div className="image">
        <img src={item.image} alt="summary-item" />
      </div>

      <div className="info">
        <h3>{item.name}</h3>
        <span>${item.price}</span>
      </div>

      <span className="quantity">x{item.quantity}</span>
    </div>
  );
};

export default SummaryItem;
