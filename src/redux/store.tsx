import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer";
import detailReducer from "./reducers/detailReducer"
import counterReducer from "./reducers/counterReducer";
import userReducer from "./reducers/userReducer";


export const store = configureStore({
  reducer: {
    productReducer: productReducer,
    detailReducer: detailReducer,
    counterReducer: counterReducer,
    userReducer: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type DispatchType = typeof store.dispatch;
