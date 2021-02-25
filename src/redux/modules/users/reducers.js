import * as types from './types';

import {combineReducers} from "redux";

const initialUsers = {
    data: [],
    loading: false,
    total: 1,
    page: 1,
    error: null,
}

const usersData = (state = initialUsers, action) => {
    switch (action.type) {
        case types.GET_USERS_START:
            return { ...state, loading: true }
        case types.GET_USERS_SUCCESS:
            return { ...state, loading: false, data: action.payload }
        case types.GET_USERS_FAILURE:
            return { ...state, loading: false, error: action.payload }
        default: 
            return state
    }
}

export const users = combineReducers({
    usersData ,
});