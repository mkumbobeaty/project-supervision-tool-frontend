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
            case types.CREATE_ITEM_START:
                return { ...state, loading: true };
            case types.CREATE_ITEM_SUCCESS:
                return { ...state, item: action.payload, loading: false };
            case types.CREATE_ITEM_FAILURE:
                return { error: action.payload.error };
            case types.EDIT_ITEM_START:
                return { ...state, loading:true };
            case types.EDIT_ITEM_SUCCESS:
                return { ...state, item: action.payload, loading:false };
            case types.EDIT_ITEM_FAILURE:
                return action.payload;
            case types.DELETE_ITEM_START:
                return { ...state, loading: true };
            case types.DELETE_ITEM_SUCCESS:
                return { ...state, item: action.payload, loading: false };
            case types.DELETE_ITEM_FAILURE:
                return action.payload;
            default:
                return state
    }
}

export const items = combineReducers({
    itemsData ,
});