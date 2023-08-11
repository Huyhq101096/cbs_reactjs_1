import React, { Component } from "react";

export default class Product extends Component {
  render() {
    const { car, addToCart } = this.props;

    return (
      <div className="card">
        <img src={car.image} alt="..." />
        <div className="card-body">
          <h3>Red car</h3>
          <p>{car.price} $</p>
          <button
            className="btn btn-dark"
            onClick={() => {
              addToCart(car);
            }}
          >
            <i className="fa fa-cart-plus"></i>
            Add to cart
          </button>
        </div>
      </div>
    );
  }
}
