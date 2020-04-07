import React from "react";
import "./App.css";
import { SignIn } from "./modules/auth/SignIn";
import { ResponsiveDrawer } from "./modules/menu/ResponsiveDrawer";

const App = () => {
  return (
    <div>
        {/* <SignIn /> */}
        <ResponsiveDrawer />
    </div>
  );
}

export default App;
