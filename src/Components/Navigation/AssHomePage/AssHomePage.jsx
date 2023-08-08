import React, { Component } from "react";
import AssHeader from "./AssHeader";
import Navigation from "../Navigation";
import AssFooter from "./AssFooter";

export default class AssHomePage extends Component {
  render() {
    return (
      <div>
        <AssHeader />
        <div className="row p-0 m-0">
          <div className="col-md-6 m-0 p-0">
            <Navigation />
          </div>
          <div className="col-md-6 m-0 p-0">
          </div>
        </div>
        <AssFooter />
      </div>
    );
  }
}
