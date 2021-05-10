import Home from "./pages/Home/Home";
import { Switch, Route } from "react-router-dom";
import "./main.scss";
import Footer from "./components/Footer/Footer";
import Category from "./pages/Category/Category";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Cart from "./components/Cart";
import { useContext } from "react";
import { Context } from "./context/Context";

const App = () => {
  const { isOpen } = useContext(Context);
  return (
    <>
      {isOpen ? <Cart /> : ""}
      <div className="wrapper">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/category/:name" component={Category} />
          <Route exact path="/product/:name" component={ProductDetail} />
        </Switch>

        <Footer />
      </div>
    </>
  );
};

export default App;
