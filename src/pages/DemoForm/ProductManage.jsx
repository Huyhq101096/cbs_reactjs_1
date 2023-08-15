import React, { Component } from "react";
import FormProduct from "./FormProduct";

export default class ProductManage extends Component {
  state = {
    arrProduct: [
      {
        id: "11",
        name: "iphone",
        price: 1000,
        image: "./img/applephone.jppg",
        description: "iphone pro max",
        type: "phone",
      },
    ],
  };

  render() {
    return (
      <div className="container">
        <h3>Product Manage</h3>
        <FormProduct />

        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>image</th>
              <th>price</th>
              <th>description</th>
              <th>type</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>product 1</td>
              <td>
                <img src="./img/imgRedCar.jpg" alt="..." width={50} />
              </td>
              <td>1000</td>
              <td>Product 1 description</td>
              <td>Phone</td>
              <td>
                <button className="btn btn-primary mx-2">
                  <i className="fa fa-edit" />
                </button>
                <button className="btn btn-danger mx-2">
                  <i className="fa fa-trash" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
