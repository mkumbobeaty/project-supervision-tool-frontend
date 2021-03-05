import * as types from "./types";
import {combineReducers} from "redux";


const selectedInitialState = { data: null, error: null, loading: false };

const selected = (state = selectedInitialState, action) => {
    switch (action.type) {
        case types.GET_PROJECT_START:
            return { ...state, loading: true }
        case types.GET_PROJECT_SUCCESS:
            return { ...state, data: action.payload, loading: false }
        case types.CLEAR_PROJECT:
            return { ...state, data: null }
        case types.GET_PROJECT_FAILURE:
            return { ...state, error: action.payload, loading: false }
        default:
            return state;

    }
}


export const projects = combineReducers({
 selected
})
