import React, { Component } from "react";
import Navigation from "./Components/Navigation/Navigation";
import AssHomePage from "./Components/Navigation/AssHomePage/AssHomePage";
import HandleEvent from "./Components/HandleEvent/HandleEvent";
import ComponentWithState from "./Components/ComponentWithState/ComponentWithState";
export default class App extends Component {
  render() {
    return (
        // <AssHomePage />
        // <HandleEvent />
        <ComponentWithState />
    );
  }
}
