import { combineReducers } from "redux";
import * as types from "./types";

const defultFocalPeople = {
    data: [],
    loading: false,
    error: null
}

// fetching projects reducers
const fetchFacalPeople = (state = false, action) => {
    switch (action.type) {
        case types.GET_FOCAL_PEOPLE_START:
            return true;
        case types.GET_FOCAL_PEOPLE_SUCCESS:
            return false;
        case types.GET_FOCAL_PEOPLE_FAILURE:
            return false;
        default:
            return state;
    }
};

const fetchfocalPeoples = (state = defultFocalPeople, action) => {
    switch (action.type) {
        case types.GET_FOCAL_PEOPLE_START:
            return { ...state, loading: true };
        case types.GET_FOCAL_PEOPLE_SUCCESS:
            return Object.assign(
                {},
                {
                    data: action.payload,
                    loading: false,

                }
            );
        case types.GET_FOCAL_PEOPLE_FAILURE:
            return { ...state, error: action.payload, loading: false };
        default:
            return state
    }
}


export const focalPeoples = combineReducers ({
    fetchFacalPeople,
    fetchfocalPeoples,

})