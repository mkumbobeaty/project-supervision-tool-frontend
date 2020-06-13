import * as types from './types';
import {combineReducers} from "redux";
import {default as humanResourcesReducer} from "../../duck";

/**
 * State shape
 * {
 * fetchingAgencies: boolean
 * fetchingItems: boolean
 * items: Object[], // items
 * agencies: Object[], // agencies
 * }
 */


 const fetchingAgencies = (state = false, action) => {
    switch (action.type) {
        case types.GET_AGENCIES_START:
            return true;
        case types.GET_AGENCIES_SUCCESS:
            return false;
        case types.GET_AGENCIES_FAILURE:
            return false;
        default:
            return state;
    }
};

 const agencies = (state = [], action) => {
    switch (action.type) {
        case types.GET_AGENCIES_SUCCESS:
            return action.payload;
        case types.GET_AGENCIES_FAILURE:
            return action.payload;
        default:
            return state;
    }
};

 const fetchingItems = (state = false, action) => {
    switch (action.type) {
        case types.GET_ITEMS_START:
            return true;
        case types.GET_ITEMS_SUCCESS:
            return false;
        case types.GET_ITEMS_FAILURE:
            return false;
        default:
            return state;
    }
};

 const items = (state = [], action) => {
    switch (action.type) {
        case types.GET_ITEMS_SUCCESS:
            return action.payload;
        case types.GET_ITEMS_FAILURE:
            return action.payload;
        default:
            return state;
    }
};


export const resources   = combineReducers({
    fetchingItems, items, fetchingAgencies, agencies
});
