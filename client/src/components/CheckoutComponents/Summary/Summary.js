import React from "react";
import SummaryItem from "./SummaryItem/SummaryItem";

const Summary = ({ cart, setIsOpen, total, grandTotal }) => {
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
