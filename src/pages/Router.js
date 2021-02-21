import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Home";
import Perfil from "./Perfil";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/perfil/:user">
        <Perfil />
      </Route>
      <Route path="*">
        <div>Erro 404</div>
      </Route>
    </Switch>
  );
};

export default Router;
