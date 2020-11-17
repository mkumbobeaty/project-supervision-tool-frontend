import * as types from "./types";
import {combineReducers} from "redux";


const isLogin = (state = false, action) => {
    switch (action.type) {
        case types.LOGIN_START:
            return true;
        case types.LOGIN_SUCCESS:
            return false;
        case types.LOGIN_FAILURE:
            return false;
        default:
            return state;
    }
};


const login = (state = {}, action) => {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return action.payload;
        case types.LOGIN_FAILURE:
            return action.payload;
        default:
            return state;
    }
};


export const auth = combineReducers({
    isLogin,
    login,

});

