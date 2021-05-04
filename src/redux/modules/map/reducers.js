import * as types from "./types";
import { mapProjectTypes } from "./projects"
import { mapSubProjectTypes } from './subProjects'
import { combineReducers } from "redux";
import { projects } from './projects/reducers'
import { subProjects } from './subProjects/reducers'
import { dataSets } from './dataSets/reducers'

const initialConfigState = {
    showFeatureDetails: false,
}

const initialProjectOverViewState = {
    data: [],
    error: {}
}

const config = (state = initialConfigState, action) => {
    switch (action.type) {
        case types.SET_SHOW_FEATURE_DETAILS:
            return { ...state, showFeatureDetails: action.payload };
        default:
            return state;
    }
};

const mapLoading = (state = false, action) => {
    switch (action.type) {
        case types.GET_WFS_LAYER_DATA_START:
            return true;
        case types.GET_WFS_LAYER_DATA_SUCCESS:
            return false;
        case types.GET_WFS_LAYER_DATA_FAILURE:
            return false;
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
        // case mapProjectTypes.GET_PROJECT_START:
        //     return true;
        // case mapProjectTypes.GET_PROJECT_SUCCESS:
        //     return false;
        case mapProjectTypes.GET_PROJECT_FAILURE:
            return false;
            case mapProjectTypes.GET_PROJECTS_START:
                return true;
            case mapProjectTypes.GET_PROJECTS_SUCCESS:
                return false;
            case mapProjectTypes.GET_PROJECTS_FAILURE:
                return false;
        case mapProjectTypes.GET_SUB_PROJECT_START:
            return true;
        case mapProjectTypes.GET_SUB_PROJECT_SUCCESS:
            return false;
        case mapSubProjectTypes.GET_SUB_PROJECTS_START:
            return true;
        case mapSubProjectTypes.GET_SUB_PROJECTS_SUCCESS:
            return false;
        case mapProjectTypes.GET_SUB_PROJECT_FAILURE:
            return false;
        case mapProjectTypes.GET_SUB_PROJECT_ELEMENT_START:
            return true;
        case mapProjectTypes.GET_SUB_PROJECT_ELEMENT_SUCCESS:
            return false;
        case mapProjectTypes.GET_SUB_PROJECT_ELEMENT_FAILURE:
            return false;
        case mapSubProjectTypes.GET_SUB_PROJECTS_OVERVIEW_START:
            return true;
        case mapSubProjectTypes.GET_SUB_PROJECTS_OVERVIEW_SUCCESS:
            return false;
        case mapSubProjectTypes.GET_SUB_PROJECTS_OVERVIEW_FAILURE:
            return false;
        default:
            return state;
    }
};


const initialRegionProjects = {
    data: [],
    error: {}
}

const regionProjects = (state = initialRegionProjects, action) => {
    switch (action.type) {
        case types.GET_PROJECTS_BY_REGION_SUCCESS:
            return { ...state, data: action.payload };
        case types.GET_PROJECTS_BY_REGION_FAILURE:
            return { ...state, error: action.payload };
        case types.CLEAR_REGION_PROJECTS:
            return { ...state, data: [] };
        default:
            return state;
    }
};



const initialRegionDetails = {
    data: null,
    selectedRegionId: null,
    error: null
}
const regionDetails = (state = initialRegionDetails, action) => {
    switch (action.type) {
        case types.GET_REGION_SUCCESS:
            return { ...state, data: action.payload, selectedRegionId: action.payload.id };
        case types.CLEAR_REGION_DETAILS:
            return { ...state, data: null };
        case types.GET_REGION_FAILURE:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

/**
 * @function
 * @name wfsLayer
 * @description reducer for managing wfsLayer data
 */
const wfsLayer = (state = { data: null, error: null }, action) => {
    switch (action.type) {
        case types.GET_WFS_LAYER_DATA_SUCCESS:
            return { ...state, data: action.payload, selectedRegionId: action.payload.id };
        case types.CLEAR_WFS_LAYER_DATA:
            return { ...state, data: null };
        case types.GET_WFS_LAYER_DATA_FAILURE:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

const projectOverview = (state = initialProjectOverViewState, action) => {
    switch (action.type) {
        case types.GET_PROJECTS_OVERVIEW_SUCCESS:
            return { ...state, data: action.payload };
        case types.CLEAR_PROJECTS_OVERVIEW:
            return { ...state, data: [] };
        case types.GET_PROJECTS_OVERVIEW_FAILURE:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

const projectStatistics = (state = { data: null, loading: false, error: null }, action) => {
    switch (action.type) {
        case types.GET_PROJECT_STATISTICS_START:
            return { ...state, loading: true };
        case types.GET_PROJECT_STATISTICS_SUCCESS:
            return { ...state, data: action.payload, loading: false };
        case types.GET_PROJECT_STATISTICS_FAILURE:
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
};

const projectsStatistics = (state = { data: null, loading: false, error: null }, action) => {
    switch (action.type) {
        case types.GET_PROJECTS_STATISTICS_START:
            return { ...state, loading: true };
        case types.GET_PROJECTS_STATISTICS_SUCCESS:
            return { ...state, data: action.payload, loading: false };
        case types.CLEAR_PROJECTS_STATISTICS:
            return { ...state, data: null };
        case types.GET_PROJECTS_STATISTICS_FAILURE:
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
};

const regionProjectsStatistics = (state = { data: null, loading: false, error: null }, action) => {
    switch (action.type) {
        case types.GET_REGION_PROJECT_STATISTICS_START:
            return { ...state, loading: true };
        case types.GET_REGION_PROJECT_STATISTICS_SUCCESS:
            return { ...state, data: action.payload, loading: false };
        case types.CLEAR_REGION_PROJECTS_STATISTICS:
            return { ...state, data: null };
        case types.GET_REGION_PROJECT_STATISTICS_FAILURE:
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
};


// initial state for
// sideNavMenu
const sideNavMenuInitialState = {
    activeSideNavMenuItem: '',
    showProjectsOverview: true,
    showProjectDetails: false,
    showNationalOverview: true,
    showRegionalOverview: false,
    showSubProjectDetails: false,
    showSubProjectElementDetails: false,
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
        case types.SHOW_SUB_PROJECT_DETAILS:
            return { ...state, showSubProjectDetails: action.payload };
        case types.SHOW_SUB_PROJECT_ELEMENT_DETAILS:
            return { ...state, showSubProjectElementDetails: action.payload };
        default:
            return state;
    }
};

export const map = combineReducers({
    projects,
    subProjects,
    dataSets,
    config,
    projectOverview,
    sideNavMenu,
    wfsLayer,
    regionDetails,
    mapLoading,
    regionProjects,
    projectsStatistics,
    projectStatistics,
    regionProjectsStatistics,
});
