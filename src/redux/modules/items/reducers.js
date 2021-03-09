import * as types from './types';

import {combineReducers} from "redux";

const initialItems = {
    data: [],
    loading: false,
    total: 1,
    page: 1,
    error: null,
}

const itemsData = (state = initialItems, action) => {
    switch (action.type) {
        case types.GET_ITEMS_START:
            return { ...state, loading: true }
        case types.GET_ITEMS_SUCCESS:
            return { ...state, loading: false, data: action.payload }
        case types.GET_ITEMS_FAILURE:
            return { ...state, loading: false, error: action.payload }
        default: 
            return state
    }
}

export const items = combineReducers({
    itemsData ,
});