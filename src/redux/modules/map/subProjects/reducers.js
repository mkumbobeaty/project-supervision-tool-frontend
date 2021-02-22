import * as types from "./types";
import {combineReducers} from "redux";


const selectedInitialState = { data: null, error: null, loading: false };


/**
 * @function
 * @name subProject
 * @description reducer that manages selected sub project instance on map
 * @param {Object} state
 * @param {Object} action
 * @return {Object} updated state
 */
const selected = (state = selectedInitialState, action) => {
    switch (action.type) {
        case types.GET_SUB_PROJECT_START:
            return { ...state, loading: true };
        case types.GET_SUB_PROJECT_SUCCESS:
            return { ...state, data: action.payload, loading: false };
        case types.GET_SUB_PROJECT_FAILURE:
            return { ...state, error: action.payload, loading: false };
        case types.CLEAR_SUB_PROJECT:
            return { ...state, data: null };
        default:
            return state;
    }
}


export const subProjects = combineReducers({
 selected
})



