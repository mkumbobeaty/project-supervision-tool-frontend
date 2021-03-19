import * as types from './types';

import { combineReducers } from "redux";

const initialUsers = {
    data: null,
    loading: false,
    total: 1,
    page: 1,
    error: null,
    user: {},
    showForm: false,
}

const usersData = (state = initialUsers, action) => {
    switch (action.type) {
        case types.GET_USERS_START:
            return { ...state, loading: true }
        case types.GET_USERS_SUCCESS:
            return { ...state, loading: false, data: action.payload, 
                total: action.payload.meta.total, page: action.payload.meta.current_page }
        case types.GET_USERS_FAILURE:
            return { ...state, loading: false, error: action.payload }
        case types.CREATE_USER_START:
            return { ...state, loading: true };
        case types.CREATE_USER_SUCCESS:
            return { ...state, user: action.payload, loading: false };
        case types.CREATE_USER_FAILURE:
            return { error: action.payload.error };
        case types.EDIT_USER_START:
            return { ...state, loading:true };
        case types.EDIT_USER_SUCCESS:
            return { ...state, user: action.payload, loading:false };
        case types.EDIT_USER_FAILURE:
            return action.payload;
        case types.DELETE_USER_START:
            return { ...state, loading: true };
        case types.DELETE_USER_SUCCESS:
            return { ...state, user: action.payload, loading: false };
        case types.DELETE_USER_FAILURE:
            return action.payload;
        default:
            return state
    }
}

export const users = combineReducers({
    usersData,
});