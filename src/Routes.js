import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, Login, Signup } from "views";

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" render={(props) => <Login {...props} />} />
        <Route path="/Signup" render={(props) => <Signup {...props} />} />
        <Route path="/" render={(props) => <Home {...props} />} />
      </Switch>
    </BrowserRouter>
  );
};
