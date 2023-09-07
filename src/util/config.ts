

import axios, {InternalAxiosRequestConfig} from "axios";
import {history} from '../index'


// setup hằng số 
export const DOMAIN = 'https://shop.cyberlearn.vn';
export const TOKEN = 'accessToken';
export const USER_LOGIN = 'userLogin';
export const TOKEN_CYBERSOFT = ``;


export const {getStoreJson, setStoreJson, getStore, setStore} = {


    getStoreJson: (name: string): any => {
        if(localStorage.getItem(name)) {
            const strResutl: string|null |any = localStorage.getItem(name);
            return JSON.parse(strResutl);
        }
        return undefined;
    },

    setStoreJson: (name:string,data:any) : void => {
        const strJSON = JSON.stringify(data);
        localStorage.setItem(name,strJSON);

    },

    getStore: (name:string): string | null  => {
        return localStorage.getItem(name);
    },

    setStore: (name: string, data: string): void => {
        localStorage.setItem(name,data);
    }

}

// interceptor
export const http = axios.create({
    baseURL: DOMAIN,
    timeout: 30000
})

export const httpNonAuth = axios.create({
    baseURL: DOMAIN,
    timeout: 30000
})


httpNonAuth.interceptors.request.use((config: any) => {
    config.baseURL= DOMAIN;
    config.headers = {...config.headers}
    config.headers.tokenCybersoft = `TOKEN_CYBERSOFT`;
    return config
}, err => {
    return Promise.reject(err)
});

http.interceptors.request.use((config: any) => {
    config.headers = {...config.headers}
    let token = getStoreJson(USER_LOGIN)?.accessToken;
    config.headers.Authorization = `Bearer ${token}`;
    config.headers.tokenCybersoft = `TOKEN_CYBERSOFT`;
    return config
}, err => {
    return Promise.reject(err)
});


// cấu hình cho response (kết quả trả về từ api)
http.interceptors.response.use((res) => {
    return res;
}, (err) => {
    // xử lý lỗi cho api bị lỗi theo status code
    console.log(err);
    if (err.response?.status === 401) {
        // đã đăng nhập nhưng hết hạng (gọi api refesh token)

    }

    if (err.response?.status === 403) {
        alert('Không đủ quyền truy cập vào trang này !');
        history.push('/admin/login');
    }
    return Promise.reject(err);
});
