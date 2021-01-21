import * as types from "./types";
import { combineReducers } from "redux";

const defaultProjects = {
    data: [],
    total: 1,
    loading: false,
    error: null,
    showForm: false,
    page: 1,
    project: {}
};

const defaultSubProjects = {
    data: [],
    total: 1,
    loading: false,
    error: null,
    showForm: false,
    posting: false,
    page: 1,
    sub_project: {}
};

/**
 * @function
 * @name regions
 * @description reducer that manages regions state
 */
const regions = (state = [], action) => {
    switch (action.type) {
        case types.GET_REGIONS_START:
            return state;
        case types.GET_REGIONS_SUCCESS:
            return action.payload;
        case types.GET_REGIONS_FAILURE:
            return action.payload;
        default:
            return state;
    }
};


/**
 * @function
 * @name environmentalCategories
 * @description reducer that manages environmental categories state
 */
const environmentalCategories = (state = { data: [], error: null, loading: false }, action) => {
    switch (action.type) {
        case types.GET_ENVIRONMENTAL_CATEGORIES_START:
            return { ...state, loading: true };
        case types.GET_ENVIRONMENTAL_CATEGORIES_SUCCESS:
            return { ...state, data: action.payload, loading: false };
        case types.GET_ENVIRONMENTAL_CATEGORIES_FAILURE:
            return { ...state, data: action.payload, loading: false };
        default:
            return state;
    }
};

const districts = (state = [], action) => {
    switch (action.type) {
        case types.GET_DISTRICTS_SUCCESS:
            return action.payload;
        case types.GET_DISTRICTS_FAILURE:
            return action.payload;
        default:
            return state;
    }
};

const locations = (state = { data: [], project_location: {}, isLoading: false, error: null }, action) => {
    switch (action.type) {
        case types.GET_LOCATIONS_START:
            return { ...state }
        case types.GET_LOCATIONS_SUCCESS:
            return { data: action.payload }
        case types.GET_LOCATIONS_FAILURE:
            return { error: action.payload }
        case types.CREATE_PROJECT_LOCATION_START:
            return { ...state, isLoading: true };
        case types.CREATE_PROJECT_LOCATION_SUCCESS:
            return { ...state, project_location: action.payload, isLoading: false }
        case types.CREATE_PROJECT_LOCATION_FAILURE:
            return { ...state, error: action.payload, isLoading: false }
        default:
            return state;
    }
}

const Projects = (state = defaultProjects, action) => {
    switch (action.type) {
        case types.GET_PROJECTS_START:
            return { ...state, loading: true };
        case types.GET_PROJECTS_SUCCESS:
            return { ...state, data: action.payload, loading: false, }
        case types.GET_PROJECTS_FAILURE:
            return { ...state, error: action.message, loading: false };
        case types.CREATE_PROJECT_START:
            return { ...state, posting: true };
        case types.CREATE_PROJECT_SUCCESS:
            return { ...state, project: action.payload, posting: false, loading: false };
        case types.CREATE_PROJECT_FAILURE:
            return { error: action.payload.error };
        case types.UPDATE_PROJECT_START:
            return { ...state, posting: true };
        case types.UPDATE_PROJECT_SUCCESS:
            return { ...state, showForm: false, posting: false };
        case types.UPDATE_PROJECT_FAILURE:
            return action.payload;
        case types.DELETE_PROJECT_START:
            return { ...state };
        case types.DELETE_PROJECT_SUCCESS:
            return { ...state, project: action.payload };
        case types.DELETE_PROJECT_FAILURE:
            return action.payload;
        default:
            return state;
    }
};

// TODO note: reducer added by EDGAR
const project = (state = { data: null, error: null, loading: false }, action) => {
    switch (action.type) {
        case types.GET_PROJECT_START:
            return { ...state, loading: true }
        case types.GET_PROJECT_SUCCESS:
            return { ...state, data: action.payload, loading: false }
        case types.CREATE_PROJECT_START:
            return { ...state, loading: true }
        case types.CREATE_PROJECT_SUCCESS:
            return { ...state, data: action.payload.data, loading: false }
        case types.CREATE_PROJECT_FAILURE:
            return { ...state, error: action.payload, loading: false }
        case types.CLEAR_PROJECT:
            return { ...state, data: null }
        case types.GET_PROJECT_FAILURE:
            return { ...state, error: action.payload, loading: false }
        default:
            return state;

    }
}

// selected human resource
const selectedProjects = (state = null, action) => {
    switch (action.type) {
        case types.SELECT_PROJECT:
            return action.payload;
        default:
            return state;
    }
};


/**
 * @function
 * @name creatingSubProjects
 * @description reducer that manages sub project instance
 * @param {Object} state
 * @param {Object} action
 * @return {Object} updated state
 * 
 */
const creatingSubProjects = (state = false, action) => {
    switch (action.type) {
        case types.CREATE_SUB_PROJECT_START:
            return true;
        case types.CREATE_SUB_PROJECT_SUCCESS:
            return false;
        case types.CREATE_SUB_PROJECT_FAILURE:
            return false;
        default:
            return state;
    }
};

/**
 * @function
 * @name sub_projects
 * @description reducer that manages sub projects
 * @param {Object} state
 * @param {Object} action
 * @return {Object} updated state
 */
const sub_projects = (state = defaultSubProjects, action) => {
    switch (action.type) {
        case types.GET_SUB_PROJECTS_START:
            return { ...state, loading: true }
        case types.GET_SUB_PROJECTS_SUCCESS:
            return { ...state, data: action.payload, loading: false, }
        case types.GET_SUB_PROJECTS_FAILURE:
            return { ...state, error: action.message, loading: false };
        case types.DELETE_SUB_PROJECT_START:
            return { ...state };
        case types.DELETE_SUB_PROJECT_SUCCESS:
            return { ...state, sub_project: action.payload };
        case types.DELETE_SUB_PROJECT_FAILURE:
            return { ...state, error: action.payload };;
        default:
            return state;
    }
};


const subProjectState = {
    data: null,
    error: null,
    loading: false,
    showForm: false,
    posting: false
};
/**
 * @function
 * @name subProject
 * @description reducer that manages sub project instance
 * @param {Object} state
 * @param {Object} action
 * @return {Object} updated state
 */
const subProject = (state = subProjectState, action) => {
    switch (action.type) {
        case types.GET_SUB_PROJECT_START:
            return { ...state, loading: true };
        case types.OPEN_SUB_PROJECT_FORM:
            return { ...state, showForm: true };
        case types.CLOSE_SUB_PROJECT_FORM:
            return { ...state, showForm: false };
        case types.GET_SUB_PROJECT_SUCCESS:
            return { ...state, data: action.payload, loading: false };
        case types.CREATE_SUB_PROJECT_SUCCESS:
            return { ...state, data: action.payload, loading: false };
        case types.GET_SUB_PROJECT_FAILURE:
            return { ...state, error: action.payload, loading: false };
        case types.CLEAR_SUB_PROJECT:
            return { ...state, data: null };
        default:
            return state;
    }
}


/**
 * @function
 * @name subProjectElement
 * @description reducer that manages sub project element instance
 * @param {Object} state
 * @param {Object} action
 * @return {Object} updated state
 */
const subProjectElement = (state = { data: null, error: null, loading: false }, action) => {
    switch (action.type) {
        case types.GET_SUB_PROJECT_ELEMENT_START:
            return { ...state, loading: true };
        case types.GET_SUB_PROJECT_ELEMENT_SUCCESS:
            return { ...state, data: action.payload, loading: false };
        case types.GET_SUB_PROJECT_ELEMENT_FAILURE:
            return { ...state, error: action.payload, loading: false };
        case types.CLEAR_SUB_PROJECT_ELEMENT:
            return { ...state, data: null };
        default:
            return state;
    }
}

const items = (state = { data: [], error: null, loading: false }, action) => {
    switch (action.type) {
        case types.GET_ITEMS_START:
            return { ...state, loading: true }
        case types.GET_ITEMS_SUCCESS:
            return { ...state, data: action.payload, loading: false, }
        case types.GET_ITEMS_FAILURE:
            return { ...state, error: action.message, loading: false };
        default:
            return state;
    }
};


export const resources = combineReducers({
    selectedProjects,
    Projects,
    project,
    locations,
    regions,
    districts,
    sub_projects,
    subProjectElement,
    subProject,
    creatingSubProjects,
    environmentalCategories,
    items,
})
