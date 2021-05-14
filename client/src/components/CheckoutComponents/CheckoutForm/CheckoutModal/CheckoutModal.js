import React, { useContext } from "react";
import Image from "../../../../assets/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg";
import { Context } from "../../../../context/Context";

const CheckoutModal = ({ grandTotal }) => {
  const { cart } = useContext(Context);
  console.log(cart);
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
            {cart.length > 0 ? (
              <>
                <div className="summary-item">
                  <div className="image">
                    <img src={Image} alt="summary-item" />
                  </div>

                  <div className="info">
                    <h3>{cart[0].name}</h3>
                    <span>{cart[0].price}</span>
                  </div>

                  <span className="quantity">x{cart[0].quantity}</span>
                </div>
                <p className="others">
                  {cart.length === 2
                    ? `and ${cart.length - 1} other item`
                    : `and ${cart.length - 1} other items`}
                </p>{" "}
              </>
            ) : (
              "nope"
            )}
          </div>

          <div className="grand-total">
            <h3>Grand Total</h3>
            <p className="price">${grandTotal}</p>
          </div>
        </div>
        <button className="pay">Back to Home</button>
      </div>
    </div>
  );
};

export default CheckoutModal;
