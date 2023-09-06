import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

const Cart = (props: Props) => {
  return (
    <div className="card">
      <img src="https://i.pravatar.cc?u=9" alt="..." />
      <div className="card-body">
        <h3>Product Name</h3>
        <p>1000 $</p>
        <NavLink className="btn btn-dark" to={`/detail/1`}>
          <i className="fa fa-cart-plus"></i> View detail
        </NavLink>
      </div>
    </div>
  );
};

export default Cart;
