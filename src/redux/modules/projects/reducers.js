import * as types from "./types";
import { combineReducers } from "redux";
import { appTypes } from "../app";

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

const projectFilter = {
    'filter[id]': '',
    'filter[project_status_id]': '',
    'filter[regions.id]': '',
};


/**
 * @function
 * @name filters
 * @description reducer that manages project filter state
 */
const filters = (state = projectFilter, action) => {
    switch (action.type) {
        case types.SET_PROJECT_STATUS_FILTER:
            return { ...state, 'filter[project_status_id]': action.payload };
        case types.SET_PROJECT_ID_FILTER:
            return { ...state, 'filter[id]': action.payload };
        case types.SET_PROJECT_REGIONS_FILTER:
            return { ...state, 'filter[regions.id]': action.payload };
        default:
            return state;
    }
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
            return { ...state, loading: true, page: 1, total: 0 };
        case types.GET_PROJECTS_SUCCESS:
            return { ...state, data: action.payload, loading: false, page: action.payload.meta.current_page, total: action.payload.meta.total }
        case types.GET_PROJECTS_FAILURE:
            return { ...state, error: action.message, loading: false, page: 1, total: 0 };
        case types.CREATE_PROJECT_START:
            return { ...state, posting: true, loading: true, };
        case types.CREATE_PROJECT_SUCCESS:
            return { ...state, project: action.payload, posting: false, loading: false };
        case types.CREATE_PROJECT_FAILURE:
            return { error: action.payload.error };
        case types.UPDATE_PROJECT_START:
            return { ...state, posting: true, loading: true };
        case types.UPDATE_PROJECT_SUCCESS:
            return { ...state, showForm: false, posting: false, loading: false, };
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
const project = (state = { data: null, error: null, loading: false, showForm: false }, action) => {
    switch (action.type) {
        case types.GET_PROJECT_START:
            return { ...state, loading: true }
        case types.GET_PROJECT_SUCCESS:
            return { ...state, data: action.payload, loading: false }
        case types.GET_PROJECT_FAILURE:
            return { ...state, error: action.payload, loading: false }
        case types.CREATE_PROJECT_START:
            return { ...state, loading: true, showForm: true }
        case types.CREATE_PROJECT_SUCCESS:
            return { ...state, data: action.payload.data, loading: false, showForm: false }
        case types.CREATE_PROJECT_FAILURE:
            return { ...state, error: action.payload, loading: false, showForm: false }
        case types.CLEAR_PROJECT:
            return { ...state, data: null }
        case appTypes.OPEN_FORM:
            return { ...state, showForm: true };
        case appTypes.CLOSE_FORM:
            return { ...state, showForm: false };
        default:
            return state;

    }
}

// selected project
const selectedProject = (state = null, action) => {
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
        case types.DELETE_SUB_PROJECT_START:
            return { ...state };
        case types.DELETE_SUB_PROJECT_SUCCESS:
            return { ...state, sub_project: action.payload };
        case types.DELETE_SUB_PROJECT_FAILURE:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};


const subProjectState = {
    data: null,
    error: null,
    loading: false,
    showForm: false,
    showCreateSurveyForm: false,
    showSurveyForm: false,
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
        case types.OPEN_SUB_PROJECT_SURVEY_FORM:
            return { ...state, showCreateSurveyForm: true };
        case types.OPEN_SURVEY_FORM:
            return { ...state, showSurveyForm: true };
        case types.CLOSE_SUB_PROJECT_FORM:
            return { ...state, showForm: false };
        case types.CLOSE_SUB_PROJECT_SURVEY_FORM:
            return { ...state, showCreateSurveyForm: false };
        case types.CLOSE_SURVEY_FORM:
            return { ...state, showSurveyForm: false };
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

const progress = (state = { data: [], error: null, loading: false }, action) => {
    switch (action.type) {
        case types.GET_PROGRESS_START:
            return { ...state, loading: true }
        case types.GET_PROGRESS_SUCCESS:
            return { ...state, data: action.payload, loading: false, }
        case types.GET_PROJECTS_FAILURE:
            return { ...state, error: action.message, loading: false };
        default:
            return state;
    }
};

const projectStatus = (state = { data: [], error: null, loading: false }, action) => {
    switch (action.type) {
        case types.GET_PROJECT_STATUS_START:
            return { ...state, loading: true }
        case types.GET_PROJECT_STATUS_SUCCESS:
            return { ...state, data: action.payload, loading: false, }
        case types.GET_PROJECT_STATUS_FAILURE:
            return { ...state, error: action.message, loading: false };
        default:
            return state;
    }
};

const projectsFilter = (state = { data: [], error: null, loading: false }, action) => {
    switch (action.type) {
        case types.GET_PROJECTS_FILTER_START:
            return { ...state, loading: true }
        case types.GET_PROJECTS_FILTER_SUCCESS:
            return { ...state, data: action.payload, loading: false, }
        case types.GET_PROJECTS_FILTER_FAILURE:
            return { ...state, error: action.message, loading: false };
        default:
            return state;
    }
};

const searchProjects = {
    data: '',
};

const search = (state = searchProjects, action) => {
    switch (action.type) {
        case types.SEARCH_PROJECTS:
            return { ...state, data: action.payload }
        default:
            return state;
    }
};

const geonodeLayers = (state = { data: [], error: null, loading: false }, action) => {
    switch (action.type) {
        case types.GET_LAYERS_START:
            return { ...state, loading: true }
        case types.GET_LAYERS_SUCCESS:
            return { ...state, data: action.payload, loading: false, }
        case types.GET_LAYERS_FAILURE:
            return { ...state, error: action.message, loading: false };
        default:
            return state;
    }
};

export const resources = combineReducers({
    selectedProject,
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
    progress,
    filters,
    projectStatus,
    projectsFilter,
    search,
    geonodeLayers
})
