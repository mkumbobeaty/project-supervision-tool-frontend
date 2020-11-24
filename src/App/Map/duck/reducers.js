import * as types from "./types";
import {combineReducers} from "redux";

const initialConfigState = {
    activeMapSideMenuItem: '',
    showFeatureDetails: false,
    mapLoading: false,

}

const  initialProjectOverViewState = {
    data: [],
    error: {}
}

const config = (state = initialConfigState, action) => {
    switch (action.type) {
        case types.SHOW_MAP_LOADER:
            return {...state, mapLoading: action.payload};
        case types.SET_ACTIVE_MAP_SIDE_MENU_ITEM:
            return {...state, activeMapSideMenuItem: action.payload};
        case types.SET_SHOW_FEATURE_DETAILS:
            return {...state, showFeatureDetails: action.payload};
        default:
            return state;
    }
};


const  initialRegionProjects = {
    data: [],
    error: {}
}

const regionProjects = (state = initialRegionProjects, action) => {
    switch (action.type) {
        case types.GET_PROJECTS_BY_REGION_SUCCESS:
            return {...state, data: action.payload};
        case types.GET_PROJECTS_BY_REGION_FAILURE:
            return {...state, error: action.payload};
        default:
            return state;
    }
};



const  initialRegionDetails = {
    data: [],
    error: {}
}
const regionDetails = (state = initialRegionDetails, action) => {
    switch (action.type) {
        case types.GET_REGION_SUCCESS:
            return {...state, data: action.payload};
        case types.GET_REGION_FAILURE:
            return {...state, error: action.payload};
        default:
            return state;
    }
};

 const projectOverview = (state = initialProjectOverViewState, action) => {
    switch (action.type) {
        case types.GET_PROJECTS_OVERVIEW_SUCCESS:
            return {...state, data: action.payload};
        case types.CLEAR_PROJECTS_OVERVIEW:
            return {...state, data: []};
        case types.GET_PROJECTS_OVERVIEW_FAILURE:
            return {...state, error: action.payload};
        default:
            return state;
    }
};




export const map = combineReducers({
    config,
    projectOverview,
    regionDetails,
    regionProjects
});
