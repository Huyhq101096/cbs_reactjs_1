import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { httpNonAuth } from "../../util/config";
import { DispatchType } from "../store";

// interface phải đúng với response trả về
export interface DetailItem {
  id: number;
  name: string;
  alias: string;
}

interface DetailState {
  detail: DetailItem;
}

const initialState: DetailState = {
  detail: {
    id: 0,
    name: "",
    alias: "",
  },
};

const detailReducer = createSlice({
  name: "detailReducer",
  initialState,
  reducers: {
    getDetailAction: (
      state: DetailState,
      action: PayloadAction<DetailItem>
    ) => {
      state.detail = action.payload;
    },
  },
});

export const { getDetailAction } = detailReducer.actions;

export default detailReducer.reducer;

export const getDetailApi = (number: any) => {
  return async (dispatch: DispatchType) => {
    const res = await httpNonAuth.get("/api/Product/getbyid/?id=" + number);
    const action: PayloadAction<DetailItem> = getDetailAction(
      res.data.content
    );
    console.log("Action Type:", action.payload);
    dispatch(action);
  };
};
