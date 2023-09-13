import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { DispatchType } from '../store';
import axios from 'axios';

export interface UserState {
    email: string;
    password: string;
}

const initialState: UserState = {
    email: '',
    password: '',
}

const userReducer = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {
        loginAction: (state: UserState, action: PayloadAction<string>) => {
            state.email = action.payload;
        }
    }
});

export const { loginAction } = userReducer.actions

export default userReducer.reducer


// ----------async action----------

export const loginActionApi = (userLogin: any) => {  // userLogin: {email: string, password: string}    

    return async (dispatch: DispatchType) => {

        // call api
        const res = await axios({
            url: 'https:/shop.cyberlearn.vn/api/Users/signin',
            method: 'POST',
            data: userLogin
        });
        // login success
        const action = loginAction(res.data.content);
        dispatch(action);
    }
}