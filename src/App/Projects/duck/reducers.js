import * as types from "./types";
import { combineReducers } from "redux";
// import { default as ProjectsReducer } from "../../duck";

/**
 * State shape
 * {
 * fetchingAgencies: boolean
 * fetchingItems: boolean
 * selectedProjects: Object
 * fetchingLocations: boolean
 * items: Object[], // items
 * agencies: Object[], // agencies
 * locations: Object[], // locations
 * creatingProjects: boolean,
 * Projects: Object
 * }
 */
const defaultProjects = {
  data: [],
  total: 1,
  loading: false,
  error: null,
  showForm: false,
  posting: false,
  page: 1,
};

const projectstate = {
  ProjectsDetail: {},
  total: 1,
  page: 1,
  loading: false,
};



const fetchingAgencies = (state = false, action) => {
  switch (action.type) {
    case types.GET_AGENCIES_START:
      return true;
    case types.GET_AGENCIES_SUCCESS:
      return false;
    case types.GET_AGENCIES_FAILURE:
      return false;
    default:
      return state;
  }
};

const agencies = (state = [], action) => {
  switch (action.type) {
    case types.GET_AGENCIES_SUCCESS:
      return action.payload;
    case types.GET_AGENCIES_FAILURE:
      return action.payload;
    default:
      return state;
  }
};

const fetchingItems = (state = false, action) => {
  switch (action.type) {
    case types.GET_ITEMS_START:
      return true;
    case types.GET_ITEMS_SUCCESS:
      return false;
    case types.GET_ITEMS_FAILURE:
      return false;
    default:
      return state;
  }
};

const items = (state = [], action) => {
  switch (action.type) {
    case types.GET_ITEMS_SUCCESS:
      return action.payload;
    case types.GET_ITEMS_FAILURE:
      return action.payload;
    default:
      return state;
  }
};

const fetchingRegions = (state = false, action) => {
  switch (action.type) {
    case types.GET_REGIONS_START:
      return true;
    case types.GET_REGIONS_SUCCESS:
      return false;
    case types.GET_REGIONS_FAILURE:
      return false;
    default:
      return state;
  }
};

const fetchingDistricts = (state = false, action) => {
  switch (action.type) {
    case types.GET_DISTRICTS_START:
      return true;
    case types.GET_DISTRICTS_SUCCESS:
      return false;
    case types.GET_DISTRICTS_FAILURE:
      return false;
    default:
      return state;
  }
};

const regions = (state = [], action) => {
  switch (action.type) {
    case types.GET_REGIONS_SUCCESS:
      return action.payload;
    case types.GET_REGIONS_FAILURE:
      return action.payload;
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

// fetching projects reducers
const fetchProjects = (state = false, action) => {
  switch (action.type) {
    case types.GET_PROJECTS_START:
      return true;
    case types.GET_PROJECTS_SUCCESS:
      return false;
    case types.GET_PROJECTS_FAILURE:
      return false;
    default:
      return state;
  }
};

const Projects = (state = defaultProjects, action) => {
  switch (action.type) {
    case types.GET_PROJECTS_START:
      return { ...state, loading: true };
    case types.GET_PROJECTS_SUCCESS:
      return Object.assign(
        {},
        {
          data: action.payload,
          loading: false,
        }
      );
    case types.GET_PROJECTS_FAILURE:
      return { ...state, error: action.message, loading: false };

    case types.OPEN_PROJECTS_FORM:
      return { ...state, showForm: true };
    case types.CLOSE_PROJECTS_FORM:
      return { ...state, showForm: false };
    case types.CREATE_PROJECT_START:
      return { ...state, posting: true };
    case types.CREATE_PROJECT_SUCCESS:
      return { ...state, posting: false, showForm: false, loading: true };
    case types.CREATE_PROJECT_FAILURE:
      return { error: action.payload.error };
    case types.UPDATE_PROJECT_START:
      return { ...state, posting: true };
    case types.UPDATE_PROJECT_SUCCESS:
      return { ...state, showForm: false, posting: false };
    case types.UPDATE_PROJECT_FAILURE:
      return action.payload;
    case types.DELETE_PROJECT_SUCCESS:
      return action.payload;
    case types.DELETE_PROJECT_FAILURE:
      return action.payload;
    default:
      return state;
  }
};

const Project = (state = projectstate, action) => {
  switch (action.type) {
    case types.GET_PROJECT_START:
      return { ...state, loading: true }
    case types.GET_PROJECT_SUCCESS:
      return {
        ...state,
        ProjectsDetail: action.payload,
        loading: false,
      };
    case types.GET_PROJECT_FAILURE:
      return { ...state, error: action.message, loading: false };
    default:
      return state;
  }
};


// TODO note: project reducer added by edgar
const projects = (state = {data: [], error: null, loading: false}, action) => {
  switch (action.type) {
    case types.GET_PROJECTS_START:
      return { ...state, loading: true}
    case types.GET_PROJECTS_SUCCESS:
      return { ...state, data: action.payload, loading: false}
    case types.GET_PROJECTS_FAILURE:
      return { ...state, error: action.payload, loading: false}
    default:
      return state;

  }
}

// TODO note: reducer added by EDGAR
const project = (state = {data: null, error: null, loading: false}, action) => {
  switch (action.type) {
    case types.GET_PROJECT_START:
      return { ...state, loading: true}
    case types.GET_PROJECT_SUCCESS:
      return { ...state, data: action.payload, loading: false}
    case types.CLEAR_PROJECT:
      return { ...state, data: null}
    case types.GET_PROJECT_FAILURE:
      return { ...state, error: action.payload, loading: false}
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

const deleteProjects = (state = false, action) => {
  switch (action.type) {
    case types.DELETE_PROJECT_START:
      return true;
    case types.DELETE_PROJECT_SUCCESS:
      return false;
    case types.DELETE_PROJECT_FAILURE:
      return false;
    default:
      return state;
  }
};

export const resources = combineReducers({
  fetchingItems,
  selectedProjects,
  items,
  fetchingAgencies,
  agencies,
  fetchingRegions,
  fetchingDistricts,
  regions,
  districts,
  fetchProjects,
  Projects,
  Project,
  deleteProjects,
  project,
  projects,
  });
