import React, { Component } from "react";
import Child from "./Child";
import axios from "axios";

export default class LifeCycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrProduct: [],
    };

    console.log("constructor");
  }

  static getDerivedStateFromProps(newState, newProps) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  getAllProductApi = async () => {
    // Gọi api
    const res = await axios({
      url: "https://shop.cyberlearn.vn/api/product",
      method: "GET",
    });
    console.log(res.data.content);

    this.setState({
      arrProduct: res.data.content,
    });
  };

  shouldComponentUpdate(newProps,newState) {
    console.log('shouldComponentUpdate')
    return true;
}

  render() {
    console.log("render");
    return (
      <div className="container">
        <h3>LifeCycleDemo</h3>
        <Child />
        <hr />
        <h3>Gọi api từ backend</h3>
        <button className="btn btn-dark" onClick={() => {
            this.getAllProductApi();
        }}>
          Get all product
        </button>
        <div className="row">
          {this.state.arrProduct.map((item) => {
            return (
              <div className="col-4 mt-2" key={item.id}>
                <div className="card">
                  <img src={item.image} alt="..." />
                  <div className="card-body">
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                    <button className="btn btn-dark">View detail</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  componentDidMount() {
    // thường dùng để gọi api và đưa vào state.

    console.log("componentDidMount");
    // this.getAllProductApi()
  }
}
