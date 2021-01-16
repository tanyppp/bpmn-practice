import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink,
} from "react-router-dom";
import Basic from "./pages/1.basic";

function App() {
  return (
    <Router>
      <div className="nav">
        <NavLink to="/basic">1.基础</NavLink>
      </div>
      <div className="content">
        <Switch>
          <Route path="/basic" component={Basic} exact />
          <Redirect to="/basic" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
