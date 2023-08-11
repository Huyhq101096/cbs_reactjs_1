import React, { Component } from "react";
import Product from "./Product";
import Cart from "./Cart";

const data = [
  {
    id: 1,
    name: "red car",
    image: "./img/imgRedCar.jpg",
    price: 1000,
    quantity: 1,
  },
  {
    id: 2,
    name: "blue car",
    image: "./img/imgBlackCar.jpg",
    price: 2000,
    quantity: 1,
  },
  {
    id: 3,
    name: "green car",
    image: "./img/imgSilverCar.jpg",
    price: 3000,
    quantity: 1,
  },
  {
    id: 4,
    name: "light car",
    image: "./img/imgRedCar.jpg",
    price: 4000,
    quantity: 1,
  },
];

export default class AssCart extends Component {
  state = {
    cart: [
      {
        id: 1,
        name: "red car",
        image: "./img/imgRedCar.jpg",
        price: 1000,
        quantity: 1,
      },
    ],
  };

  addItem = (itemClick) => {

    let carts = this.state.cart;

    let productCart = carts.find((item) => item.id === itemClick.id);
    

    if (productCart) {
      productCart.quantity += 1;
    } else {
      carts.push(itemClick);
    }
    console.log(productCart)
    console.log(carts)
    this.setState({
      cart: carts,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          {data.map((car) => {
            return (
              <div className="col-3" key={car.id}>
                <Product car={car} addToCart={this.addItem} />
              </div>
            );
          })}
        </div>
        <h3>Cart</h3>
        <Cart cart={this.state.cart} />
      </div>
    );
  }
}
