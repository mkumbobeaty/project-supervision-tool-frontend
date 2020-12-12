import * as types from "./types";
import { projectTypes } from "../../Projects/duck"
import {combineReducers} from "redux";

const initialConfigState = {
    showFeatureDetails: false,
}

const  initialProjectOverViewState = {
    data: [],
    error: {}
}

const config = (state = initialConfigState, action) => {
    switch (action.type) {
        case types.SET_SHOW_FEATURE_DETAILS:
            return {...state, showFeatureDetails: action.payload};
        default:
            return state;
    }
};

const mapLoading = (state = false, action) => {
    switch (action.type) {
        case types.GET_PROJECTS_OVERVIEW_START:
            return true;
        case types.SHOW_MAP_LOADER:
            return action.payload;
        case types.GET_PROJECTS_OVERVIEW_SUCCESS:
            return false;
        case types.GET_PROJECTS_OVERVIEW_FAILURE:
            return false;
        case types.GET_REGION_START:
            return true;
        case types.GET_REGION_SUCCESS:
            return false;
        case types.GET_REGION_FAILURE:
            return false;
        case projectTypes.GET_PROJECT_START:
            return true;
        case projectTypes.GET_PROJECT_SUCCESS:
            return false;
        case projectTypes.GET_PROJECT_FAILURE:
            return false;
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
        case types.CLEAR_REGION_PROJECTS:
            return {...state, data: []};
        default:
            return state;
    }
};



const  initialRegionDetails = {
    data: null,
    selectedRegionId: null,
    error: null
}
const regionDetails = (state = initialRegionDetails, action) => {
    switch (action.type) {
        case types.GET_REGION_SUCCESS:
            return {...state, data: action.payload, selectedRegionId: action.payload.id};
        case types.CLEAR_REGION_DETAILS:
            return {...state, data: null};
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

 const projectStatistics = (state = {data: null , loading: false, error: null  }, action) => {
    switch (action.type) {
        case types.GET_PROJECT_STATISTICS_START:
            return { ...state, loading: true};
        case types.GET_PROJECT_STATISTICS_SUCCESS:
            return {...state, data: action.payload, loading: false};
        case types.GET_PROJECT_STATISTICS_FAILURE:
            return {...state, error: action.payload, loading: false};
        default:
            return state;
    }
};

 const projectsStatistics = (state = {data: null , loading: false, error: null  }, action) => {
    switch (action.type) {
        case types.GET_PROJECTS_STATISTICS_START:
            return { ...state, loading: true};
        case types.GET_PROJECTS_STATISTICS_SUCCESS:
            return {...state, data: action.payload, loading: false};
        case types.CLEAR_PROJECTS_STATISTICS:
            return {...state, data: null};
        case types.GET_PROJECTS_STATISTICS_FAILURE:
            return {...state, error: action.payload, loading: false};
        default:
            return state;
    }
};

 const regionProjectsStatistics = (state = {data: null , loading: false, error: null  }, action) => {
    switch (action.type) {
        case types.GET_REGION_PROJECT_STATISTICS_START:
            return { ...state, loading: true};
        case types.GET_REGION_PROJECT_STATISTICS_SUCCESS:
            return {...state, data: action.payload, loading: false};
        case types.CLEAR_REGION_PROJECTS_STATISTICS:
            return {...state, data: null};
        case types.GET_REGION_PROJECT_STATISTICS_FAILURE:
            return {...state, error: action.payload, loading: false};
        default:
            return state;
    }
};


 // initial state for
// sideNavMenu
const sideNavMenuInitialState = {
    activeSideNavMenuItem: 'projects',
    showProjectsOverview: true,
    showProjectDetails: false,
    showNationalOverview: true,
    showRegionalOverview: false,
}

 /**
  * @function
  * @name sideNavMenu
  * @description reducer that manages UI state of sideNavMenu
  */
 const sideNavMenu = (state = sideNavMenuInitialState, action) => {
    switch (action.type) {
        case types.SET_ACTIVE_MAP_SIDE_MENU_ITEM:
            return { ...state, activeSideNavMenuItem: action.payload };
        case types.SHOW_NATIONAL_PROJECTS_OVERVIEW:
            return { ...state, showNationalOverview: action.payload };
        case types.SHOW_REGIONAL_PROJECTS_OVERVIEW:
            return { ...state, showRegionalOverview: action.payload };
        case types.SHOW_PROJECTS_OVERVIEW:
            return { ...state, showProjectsOverview: action.payload };
        case types.SHOW_PROJECT_DETAILS:
            return { ...state, showProjectDetails: action.payload };
        default:
            return state;
    }
};

export const map = combineReducers({
    config,
    projectOverview,
    sideNavMenu,
    regionDetails,
    mapLoading,
    regionProjects,
    projectsStatistics,
    projectStatistics,
    regionProjectsStatistics,
});
