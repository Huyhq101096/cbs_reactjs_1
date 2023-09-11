import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { httpNonAuth } from "../../util/config";
import { DispatchType } from "../store";

interface DetailItem {
    id: number,
    name: string,
    image: string
}


interface DetailState {
   detail: DetailItem
}


const initialState: DetailState = {
    detail: {
        id: 0,
        name: '',
        image: ''
    }
}

const detailReducer = createSlice({
    name: "detailReducer",
    initialState,
    reducers: {
        getDetailAction: (state: DetailState,action:PayloadAction<DetailState>) => {
            state.detail = action.payload.detail;
        }
    }
})

export const {getDetailAction} = detailReducer.actions;
export default detailReducer.reducer;

export const getDetailApi = (number: any) => {
    return async(dispatch:DispatchType) => {
        const res = await httpNonAuth.get('/api/product');
        const action:PayloadAction<DetailState> = getDetailAction(res.data.content);
        dispatch(action)

    }
}



