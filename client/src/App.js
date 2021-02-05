import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/home" component={Home} />
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
