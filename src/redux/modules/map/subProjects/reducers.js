import * as types from "./types";
import { combineReducers } from "redux";


const selectedInitialState = { data: null, error: null, loading: false };
const sideNavMenuInitialState = {
    showNationalOverview: true,
    showSubProjectOverview: true,
    showRegionalOverview: false,
}

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

const subProjectsStatistics = (state = { data: null, loading: false, error: null }, action) => {
    switch (action.type) {
        case types.GET_SUB_PROJECT_STATISTICS_START:
            return { ...state, loading: true };
        case types.GET_SUB_PROJECT_STATISTICS_SUCCESS:
            return { ...state, data: action.payload, loading: false };
        case types.CLEAR_SUB_PROJECTS_STATISTICS:
            return { ...state, data: null };
        case types.GET_SUB_PROJECT_STATISTICS_FAILURE:
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
};

const subProjectOverview = (state = {
    dataoverview: []
}, action) => {
    switch (action.type) {
        case types.GET_SUB_PROJECTS_OVERVIEW_START:
            return { ...state }
        case types.GET_SUB_PROJECTS_OVERVIEW_SUCCESS:
            return { ...state, dataoverview: action.payload };
        case types.CLEAR_SUB_PROJECTS_OVERVIEW:
            return { ...state, dataoverview: [] };
        case types.GET_SUB_PROJECTS_OVERVIEW_FAILURE:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

const regionSubProjects = (state = {data:[], error:null}, action) => {
    switch (action.type) {
        case types.GET_SUB_PROJECTS_REGIONS_OVERVIEW_SUCCESS:
            return { ...state, data: action.payload };
        case types.GET_SUB_PROJECTS_REGIONS_OVERVIEW_FAILURE:
            return { ...state, error: action.payload };
        case types.CLEAR_SUB_PROJECTS_REGIONS_OVERVIEW:
            return { ...state, data: [] };
        default:
            return state;
    }
};

const regionSubProjectsStatistics = (state = { data: null, loading: false, error: null }, action) => {
    switch (action.type) {
        case types.GET_REGION_SUB_PROJECT_STATISTICS_START:
            return { ...state, loading: true };
        case types.GET_REGION_SUB_PROJECT_STATISTICS_SUCCESS:
            return { ...state, data: action.payload, loading: false };
        case types.CLEAR_REGION_SUB_PROJECTS_STATISTICS:
            return { ...state, data: null };
        case types.GET_REGION_SUB_PROJECT_STATISTICS_FAILURE:
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
};

/**
 * @function
 * @name sideNavMenu
 * @description reducer that manages UI state of sideNavMenu
 */
const sideNavMenu = (state = sideNavMenuInitialState, action) => {
    switch (action.type) {
        case types.SHOW_NATIONAL_SUB_PROJECTS_OVERVIEW:
            return { ...state, showNationalOverview: action.payload };
        case types.SHOW_SUB_PROJECTS_OVERVIEW:
            return { ...state, showSubProjectOverview: action.payload }
        case types.SHOW_REGIONAL_SUB_PROJECTS_OVERVIEW:
            return { ...state, showRegionalOverview: action.payload };
        default:
            return state;
    }
};

export const subProjects = combineReducers({
    selected,
    sideNavMenu,
    subProjectsStatistics,
    subProjectOverview,
    regionSubProjects,
    regionSubProjectsStatistics
})



