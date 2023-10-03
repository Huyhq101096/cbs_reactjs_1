import React, { useEffect } from "react";
import CartProduct from "../../components/CartProduct/CartProduct";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../redux/store";
import {
  ProductItem,
  getProductApi,
} from "../../redux/reducers/productReducer";

type Props = {};


const HomePage = (props: Props) => {
  const { arrProduct } = useSelector(
    (state: RootState) => state.productReducer
  );
  const dispatch: DispatchType = useDispatch();

  const getApiProduct = () => {
    const actionAsync = getProductApi();
    dispatch(actionAsync);
  };

  useEffect(() => {
    getApiProduct();
  }, []);

  return (
    <div className="container">
      <h3>Home</h3>
      <div className="row">
        {arrProduct.map((prod: ProductItem, index: Number) => {
          return (
            <div className="col-4 mt-2" key={prod.id}>
              <CartProduct prod={prod} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
