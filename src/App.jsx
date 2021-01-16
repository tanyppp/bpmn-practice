import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink,
} from "react-router-dom";
import Basic from "./pages/1.basic";
import HttpUse from "./pages/2.http-use";
import BpmnEvent from "./pages/3.bpmn-event";

function App() {
  return (
    <Router>
      <div className="nav">
        <NavLink to="/basic">1.基础</NavLink>
        <NavLink to="/http-use">2.http请求</NavLink>
        <NavLink to="/bpmn-event">3.bpmn中的事件</NavLink>
      </div>
      <div className="content">
        <Switch>
          <Route path="/basic" component={Basic} exact />
          <Route path="/http-use" component={HttpUse} exact />
          <Route path="/bpmn-event" component={BpmnEvent} exact />
          <Redirect to="/basic" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
