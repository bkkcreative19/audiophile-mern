import React from "react";
import Image from "../../../../assets/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg";

const CheckoutModal = () => {
  // if (isOpen) {
  //   document.addEventListener("click", closeMenu);
  // }
  // console.log(document.);

  return (
    <div className="checkout-modal-wrapper">
      <div className="checkout-modal">
        <div className="check">
          <i className="fas fa-check"></i>
        </div>
        <h1>Thank You For Your Order</h1>
        <p>You will receive an email confirmation shortly.</p>

        <div className="item-showcase">
          <div className="items">
            <div className="summary-item">
              <div className="image">
                <img src={Image} alt="summary-item" />
              </div>

              <div className="info">
                <h3>XX99 MK II x 1</h3>
                <span>$2,999</span>
              </div>

              <span className="quantity">x1</span>
            </div>
            <p className="others">and 2 other item(s)</p>
          </div>

          <div className="grand-total">
            <h3>Grand Total</h3>
            <p>$5,526</p>
          </div>
        </div>
        <button className="pay">Back to Home</button>
      </div>
    </div>
  );
};

export default CheckoutModal;
