import React from "react";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import { Switch, Route } from "react-router-dom";

import "./main.scss";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
