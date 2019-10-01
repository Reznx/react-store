import React from "react";
import "./app.css";
import { Home, Cart } from "../pages";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cart" component={Cart} />
    </Switch>
  );
};

export default App;
