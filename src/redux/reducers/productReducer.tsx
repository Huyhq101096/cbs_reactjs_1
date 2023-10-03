
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { httpNonAuth } from "../../util/config";
import { DispatchType } from "../store";


export interface ProductItem {
  id: number;
  name: string;
  alias: string;
  price: number;
  description: string;
  size: string;
  shortDescription: string;
  quantity: number;
  deleted: boolean;
  categories: string;
  relatedProducts: string;
  feature: boolean;
  image: string;
}

interface ProductState {
  arrProduct: ProductItem[];
}

const initialState: ProductState = {
  arrProduct: [],
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    getProductAction: (state: ProductState,action:PayloadAction<ProductItem[]>) => {
      state.arrProduct = action.payload;
    }
  },
});

export const {getProductAction} = productReducer.actions;
export default productReducer.reducer;

export const getProductApi = () => {

  return async(dispatch:DispatchType) => {
    const res = await httpNonAuth.get('/api/product');

    const action:PayloadAction<ProductItem[]> = getProductAction(res.data.content);
    dispatch(action);
  }
}
