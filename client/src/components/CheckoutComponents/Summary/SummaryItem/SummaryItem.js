import React, { useState, useEffect } from "react";
import Image from "../../../../assets/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg";

const SummaryItem = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  useEffect(() => {
    setQuantity(item.quantity);
    console.log(item.quantity);
  }, [item.quantity]);

  return (
    <div className="summary-item">
      <div className="image">
        <img src={item.image} alt="summary-item" />
      </div>

      <div className="info">
        <h3>{item.name}</h3>
        <span>${item.price}</span>
      </div>

      <span className="quantity">x{quantity}</span>
    </div>
  );
};

export default SummaryItem;
