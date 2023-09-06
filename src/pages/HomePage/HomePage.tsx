import React from "react";
import CartProduct from "../../components/CartProduct/CartProduct";

type Props = {};

const HomePage = (props: Props) => {

  let product = {
    id: 1,
    name: 'ultraboost',
    price: 1000,
    image: 'https://zocker.vn/pic/Product/giay-zocker-inspire-xanh-chuoi-2_3472_HasThumb_Thumb.webp'
  }

  return (
    <div className="container">
      <h3>Home</h3>
      <div className="row">
        <div className="col-4 mt-2">
          <CartProduct prod={product}  />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
