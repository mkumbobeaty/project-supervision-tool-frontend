import * as types from "./types";
import {combineReducers} from "redux";


const layers = (state = {data: null , loading: false, error: null  }, action) => {
    switch (action.type) {
        case types.GET_GEONODE_LAYERS_START:
            return { ...state, loading: true};
        case types.GET_GEONODE_LAYERS_SUCCESS:
            return {...state, data: action.payload, loading: false};
        case types.GET_GEONODE_LAYERS_FAILURE:
            return {...state, error: action.payload, loading: false};
        default:
            return state;
    }
};



export const dataSets = combineReducers({
   layers
})
