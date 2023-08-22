import {configureStore} from '@reduxjs/toolkit'


export const store = configureStore({
    reducer: {
        likeReducer:(state = 10,action) => {
            if(action.type == 'increaseLike') {
                state += action.payload;
            }
            return state;
        } ,
        imgReducer: (state = './img/imgBlackCar.jpg',action) => {


            return state
        }
    }
})
