import React from "react";
import "./app.css";
import { Home, Cart } from "../pages";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    // Switch делает так, что срабатывает только один роутер, остальные игнорируются
    <Switch>
      {/* exact - только точное совпадение '/' */}
      <Route path="/" component={Home} exact />
      <Route path="/cart" component={Cart} />
    </Switch>
  );
};

export default App;
