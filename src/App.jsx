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
import {
  PartCustom as PartCustomPalette,
  AllCustom as AllCustomPalette,
} from "./pages/4.custom-palette";
import {
  PartCustom as PartCustomRenderer,
  AllCustom as AllCustomRenderer,
} from "./pages/5.custom-renderer";
import {
  PartCustom as PartCustomContextPad,
  AllCustom as AllCustomContextPad,
} from "./pages/6.custom-contextpad";

function App() {
  return (
    <Router>
      <div className="nav">
        <NavLink to="/basic">1.基础</NavLink>
        <NavLink to="/http-use">2.http请求</NavLink>
        <NavLink to="/bpmn-event">3.bpmn中的事件</NavLink>
        <NavLink to="/part-custom-palette">4-1.部分自定义palette</NavLink>
        <NavLink to="/all-custom-palette">4-2.完全自定义palette</NavLink>
        <NavLink to="/part-custom-renderer">5-1.部分自定义renderer</NavLink>
        <NavLink to="/all-custom-renderer">5-2.完全自定义renderer</NavLink>
        <NavLink to="/part-custom-contextpad">6-1.部分自定义contextpad</NavLink>
        <NavLink to="/all-custom-contextpad">6-2.完全自定义contextpad</NavLink>
      </div>
      <div className="content">
        <Switch>
          <Route path="/basic" component={Basic} exact />
          <Route path="/http-use" component={HttpUse} exact />
          <Route path="/bpmn-event" component={BpmnEvent} exact />
          <Route
            path="/part-custom-palette"
            component={PartCustomPalette}
            exact
          />
          <Route
            path="/all-custom-palette"
            component={AllCustomPalette}
            exact
          />
          <Route
            path="/part-custom-renderer"
            component={PartCustomRenderer}
            exact
          />
          <Route
            path="/all-custom-renderer"
            component={AllCustomRenderer}
            exact
          />
          <Route
            path="/part-custom-contextpad"
            component={PartCustomContextPad}
            exact
          />
          <Route
            path="/all-custom-contextpad"
            component={AllCustomContextPad}
            exact
          />
          <Redirect to="/basic" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
