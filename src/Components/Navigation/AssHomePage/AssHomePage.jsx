import React, { Component } from "react";
import AssHeader from "./AssHeader";
import Navigation from "../Navigation";

export default class AssHomePage extends Component {
  render() {
    return (
      <div>
        <AssHeader />
        <div className="row p-0 m-0">
          <div className="col-md-6">
            <Navigation />
          </div>
        </div>
      </div>
    );
  }
}
