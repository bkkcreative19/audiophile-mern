import { useEffect } from "react";
import Home from "./pages/Home/Home";

import { Switch, Route } from "react-router-dom";
import "./main.scss";
import Footer from "./components/Footer/Footer";
import Category from "./pages/Category/Category";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Cart from "./components/Cart";
import { useContext } from "react";
import { Context } from "./context/Context";
import Checkout from "./pages/Checkout/Checkout";
import Nav from "./components/Nav/Nav";
import Nav2 from "./components/Nav2/Nav2";

const App = () => {
  const { isOpen, setIsOpen } = useContext(Context);
  const closeMenu = () => {
    console.log(isOpen);
    setIsOpen(false);
  };

  return (
    <>
      <Nav />
      {isOpen && <Cart />}
      <div onClick={closeMenu} className={isOpen ? "wrapper" : ""}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/category/:name" component={Category} />
          <Route exact path="/product/:name" component={ProductDetail} />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </div>
      <Footer />
    </>
  );
};

export default App;
