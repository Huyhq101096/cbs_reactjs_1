import React, { Component } from "react";

export default class HandleEvent extends Component {
  handleChangeColor = (e) => {
    e.target.className = "btn btn-dark";
  };

  handleChangeColor1(e) {
    e.target.className = "btn btn-dark";
  }

  render() {
    return (
      <div>
        <div className="container">
          <button
            className="btn btn-success"
            id="btn"
            onClick={(e) => {
              e.target.className = "btn btn-dark";
            }}
          >
            Click me
          </button>
        </div>

        <button
          className="btn btn-success"
          id="btn"
          onClick={this.handleChangeColor1()}
        >
          Click me
        </button>

        <h3 id="title">title</h3>
        <input
          type="text"
          onInput={(e) => {
            let { value } = e.target;
            document.querySelector("#title").innerHTML = value;
          }}
        ></input>
      </div>
    );
  }
}
