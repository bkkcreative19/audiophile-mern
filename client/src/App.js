import Home from "./pages/Home/Home";
import { Switch, Route } from "react-router-dom";
import "./main.scss";
import Footer from "./components/Footer/Footer";
import Category from "./pages/Category/Category";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/category/:name" component={Category} />
        <Route exact path="/product/:name" component={ProductDetail} />
      </Switch>

      <Footer />
    </>
  );
};

export default App;
