import React, { useEffect } from "react";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import { Switch, Route } from "react-router-dom";
import { fetchProducts } from "./services/api";
import "./main.scss";
import Footer from "./components/Footer/Footer";
import Category from "./pages/Category/Category";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/category/:name" component={Category} />
      </Switch>

      <Footer />
    </>
  );
};

export default App;
