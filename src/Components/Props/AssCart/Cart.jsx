import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    const { cart, deleteItem, changeQuantity} = this.props;

    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>image</th>
              <th>name</th>
              <th>quantity</th>
              <th>total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((cartItem) => {
              return (
                <tr key={cartItem.id}>
                  <td>{cartItem.id}</td>
                  <td>
                    <img src={cartItem.image} alt="" width={50} />
                  </td>
                  <td>{cartItem.name}</td>
                  <td>{cartItem.price}</td>
                  <td>
                    <button 
                    className="btn btn-primary mx-2"
                    onClick= {() => {
                      changeQuantity(cartItem.id,1)
                    }}
                    >+</button>
                    {cartItem.quantity}
                    <button 
                    className="btn btn-primary mx-2"
                    onClick= {() => {
                      changeQuantity(cartItem.id,-1)
                    }}
                    >-</button>
                  </td>
                  <td>{cartItem.quantity * cartItem.price}</td>
                  <td>
                    <button className="btn btn-danger" onClick={() => {
                      deleteItem(cartItem.id)
                    }}>
                      <i className="fa fa-trash" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
