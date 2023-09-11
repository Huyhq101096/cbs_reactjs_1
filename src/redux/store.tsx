import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer";
import detailReducer from "./reducers/detailReducer"


export const store = configureStore({
  reducer: {
    productReducer: productReducer,
    detailReducer: detailReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type DispatchType = typeof store.dispatch;
