import * as types from "./types";
import {appTypes} from '../../duck';
import {combineReducers} from "redux";

const initialState = {
    isLogin: false,
    accessToken: '',
    errorMessage: ''
}

const login = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGOUT:
            return {...state, accessToken: ''};
        case appTypes.RESTORE_ACCESS_TOKEN:
            return {...state, accessToken: action.payload};
        case types.LOGIN_START:
            return {...state, isLogin: true};
        case types.LOGIN_SUCCESS:
            return {...state, accessToken: action.payload, isLogin: false, errorMessage: ''};
        case types.LOGIN_FAILURE:
            return {...state, errorMessage: action.payload, isLogin: false};
        default:
            return state;
    }
};


export const auth = combineReducers({
    login,
});

