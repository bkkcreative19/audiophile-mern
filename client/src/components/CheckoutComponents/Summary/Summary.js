import React from "react";
import SummaryItem from "./SummaryItem/SummaryItem";

const Summary = ({ cart, setIsOpen }) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let priceItems = [];
  let quantity = [];
  let total = 0;
  let grandTotal = 0;
  if (cart.length > 0) {
    priceItems = cart.map((item) => item.price);
    quantity = cart.map((item) => item.quantity);
    console.log(quantity);
    total = priceItems.reduce(reducer);
    total = total * quantity.reduce(reducer);
    grandTotal = priceItems.reduce(reducer) + 50 + 1097;
  }

  return (
    <div className="summary">
      <h2>Summary</h2>
      {cart.map((item, i) => {
        return <SummaryItem key={item[i]} item={item} />;
      })}

      <div className="info">
        <div className="total">
          <h4>Total</h4>
          <span>$ {total}</span>
        </div>
        <div className="shipping">
          <h4>Shipping</h4>
          <span>$ 50</span>
        </div>
        <div className="vat">
          <h4>Vat (Included)</h4>
          <span>$ 1,097</span>
        </div>
        <div className="grand-total">
          <h4>Grand Total</h4>
          <span>$ {grandTotal}</span>
        </div>
        <button onClick={setIsOpen} className="pay">
          Continue & Pay
        </button>
      </div>
    </div>
  );
};

export default Summary;
