import React from 'react'
import { NavLink } from "react-router-dom";
import { ProductModel } from '../../models/interface/ProductModel';
type Props = {
  prod?: ProductModel
}

const CartProduct = ({prod}: Props) => {
  return (
    <div className="card">
      <img src={prod?.image} alt="..." />
      <div className="card-body">
        <h3>{prod?.name}</h3>
        <p>{prod?.price} $</p>
        <NavLink className="btn btn-dark" to={`/detail/${prod?.id}`}>
          <i className="fa fa-cart-plus"></i> View detail
        </NavLink>
      </div>
    </div>
  )
}

export default CartProduct