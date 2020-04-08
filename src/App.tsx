import React from "react";
import "./App.css";
import { SignIn } from "./modules/auth/SignIn";
import { ResponsiveDrawer } from "./modules/menu/ResponsiveDrawer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <ResponsiveDrawer />
        </Route>
        {/* <Route path="/">
          <SignIn />
        </Route> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
