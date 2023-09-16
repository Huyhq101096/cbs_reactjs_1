import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DispatchType } from "../store";
import axios from "axios";
import { USER_LOGIN } from "../../util/config";

interface userLogin {
    accessToken: string;
    email: string;
    password: string;
}

export interface UserState {
    userLogin: userLogin;
}

const initialState: UserState = {
    userLogin: {
        email: "",
        password: "",
        accessToken: "",
    },
};

const userReducer = createSlice({
    name: "userReducer",
    initialState,
    reducers: {
        loginAction: (state: UserState, action: PayloadAction<userLogin>) => {
            state.userLogin = action.payload;
        },
    },
});

export const { loginAction } = userReducer.actions;

export default userReducer.reducer;

// ----------async action----------

export const loginActionApi = (userLogin: any) => {
    // userLogin: {email: string, password: string}

    return async (dispatch: DispatchType) => {
        // call api
        const res = await axios({
            url: "https://shop.cyberlearn.vn/api/Users/signin",
            method: "POST",
            data: userLogin,
        });
        // login success
        const action = loginAction(res.data.content);
        dispatch(action);

        // save token to local storage
        localStorage.setItem(USER_LOGIN, res.data.content);
    };
};
