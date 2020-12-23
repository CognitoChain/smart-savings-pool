import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./views";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
