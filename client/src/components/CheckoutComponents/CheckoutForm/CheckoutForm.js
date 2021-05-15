import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Summary from "../Summary/Summary";
import PropTypes from "prop-types";
import CheckoutModal from "../CheckoutModal/CheckoutModal";

const CheckoutForm = ({ cart }) => {
  const [selected, setSelected] = useState("e-money");
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  const handleClick = () => {
    setIsOpen(true);
  };

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  let priceItems = [];
  let total = 0;
  let grandTotal = 0;

  if (cart.length > 0) {
    priceItems = cart.map((item) => item.price * item.quantity);

    total = priceItems.reduce(reducer);
    grandTotal = priceItems.reduce(reducer) + 50 + 1097;
  }

  const history = useHistory();
  return (
    <div className="checkout-test container">
      <Link onClick={history.goBack} className="go-back">
        Go Back
      </Link>
      <div className="checkout-wrapper">
        <section className="checkout-form">
          <h1>Checkout</h1>
          <div className="billing">
            <h3>Billing Details</h3>
            <div className="billing-container">
              <div className="name">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="Alexei Ward" />
              </div>
              <div className="email">
                <label htmlFor="email">Email Address</label>
                <input id="email" type="email" placeholder="alexei@gmail.com" />
              </div>
              <div className="phone">
                <label htmlFor="phone">Phone Number</label>
                <input id="phone" type="text" placeholder="+1 202-567-8967" />
              </div>
            </div>
          </div>
          <div className="shipping">
            <h3>Shipping Info</h3>
            <div className="shipping-container">
              <div className="address">
                <label htmlFor="address">Address</label>
                <input id="address" type="text" placeholder="+1 202-567-8967" />
              </div>
              <div className="zip-and-city-country">
                <div className="zip">
                  <label htmlFor="zip">Zip Code</label>
                  <input id="zip" type="text" placeholder="+1 202-567-8967" />
                </div>
                <div className="city">
                  <label htmlFor="city">City</label>
                  <input id="city" type="text" placeholder="+1 202-567-8967" />
                </div>
                <div className="country">
                  <label htmlFor="country">Country</label>
                  <input id="country" type="text" placeholder="United States" />
                </div>
              </div>
            </div>
          </div>
          <div className="payment">
            <h3>Payment Details</h3>
            <div onChange={handleChange} className="payment-method">
              <label htmlFor="method">Payment Method</label>
              <div className="options">
                <div className="emoney">
                  <input
                    type="radio"
                    id="e-money"
                    name="method"
                    value="e-money"
                  />
                  <label for="e-money">e-Money</label>
                </div>
                <div className="cash-on-delivery">
                  <input
                    type="radio"
                    id="cash-on-delivery"
                    name="method"
                    value="cash-on-delivery"
                  />
                  <label for="cash-on-delivery">Cash on Delivery</label>
                </div>
              </div>
            </div>
            {selected === "e-money" ? (
              <div className="emony-info">
                <div className="emony-number">
                  <label htmlFor="emony-number">e-Money Number</label>
                  <input
                    id="emony-number"
                    type="text"
                    placeholder="236778765"
                  />
                </div>
                <div className="emony-pin">
                  <label htmlFor="emony-pin">e-Money PIN</label>
                  <input id="emony-pin" type="text" placeholder="6578" />
                </div>
              </div>
            ) : (
              <p className="cash-on">
                The ‘Cash on Delivery’ option enables you to pay in cash when
                our delivery courier arrives at your residence. Just make sure
                your address is correct so that your order will not be
                cancelled.
              </p>
            )}
          </div>
        </section>
        <Summary
          total={total}
          grandTotal={grandTotal}
          setIsOpen={handleClick}
          cart={cart}
        />
        {isOpen && <CheckoutModal grandTotal={grandTotal} />}
      </div>
    </div>
  );
};

CheckoutForm.propTypes = {
  cart: PropTypes.array.isRequired,
};

export default CheckoutForm;
