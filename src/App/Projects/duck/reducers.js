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

const locations = (state = { data:[], project_location:{}, error:null}, action) => {
  switch (action.type) {
    case types.GET_LOCATIONS_START:
      return {...state}
    case types.GET_LOCATIONS_SUCCESS:
      return {data: action.payload }
    case types.GET_LOCATIONS_FAILURE:
      return {error: action.payload }
      case types.CREATE_PROJECT_LOCATION_START:
        return { ...state };
      case types.CREATE_PROJECT_LOCATION_SUCCESS:
        return { ...state, project_location:action.payload }
      case types.CREATE_PROJECT_LOCATION_FAILURE:
        return  action.payload ;
      default:
        return state;
     }
}

const Projects = (state = defaultProjects, action) => {
  switch (action.type) {
    case types.GET_PROJECTS_START:
      return { ...state, loading: true };
    case types.GET_PROJECTS_SUCCESS:
      return {...state, data: action.payload, loading: false, total: action.payload.length }
    case types.GET_PROJECTS_FAILURE:
      return { ...state, error: action.message, loading: false };

    case types.OPEN_FORM:
      return { ...state, showForm: true };
    case types.CLOSE_FORM:
      return { ...state, showForm: false };
    case types.CREATE_PROJECT_START:
      return { ...state, posting: true };
    case types.CREATE_PROJECT_SUCCESS:
      return { ...state, project:action.payload, posting: false,  loading: false };
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

// sub-projects reducers
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

const sub_projects = (state = defaultSubProjects, action) => {
  switch (action.type) {
    case types.GET_SUB_PROJECTS_START:
      return { ...state, loading: true }
    case types.GET_SUB_PROJECTS_SUCCESS:
      return Object.assign(
        {},
        {
          data: action.payload,
          loading: false,
        }
      );
    case types.GET_SUB_PROJECTS_FAILURE:
      return Object.assign({}, { ...state, error: action.message, loading: false });
    case types.OPEN_SUB_PROJECTS_FORM:
      return Object.assign({}, state, { showForm: true });
    case types.CLOSE_SUB_PROJECTS_FORM:
      return Object.assign({}, state, { showForm: false });
    case types.CREATE_SUB_PROJECT_SUCCESS:
      return Object.assign({}, state, { posting: false, showForm: false, loading: true });
    case types.CREATE_SUB_PROJECT_FAILURE:
      return Object.assign({}, state, { error: action.payload.error });
    case types.UPDATE_SUB_PROJECT_SUCCESS:
      return action.payload;
    case types.UPDATE_SUB_PROJECT_FAILURE:
      return action.payload;
    case types.DELETE_SUB_PROJECT_SUCCESS:
      return action.payload;
    case types.DELETE_SUB_PROJECT_FAILURE:
      return action.payload;
    default:
      return state;
  }
};


const deleteSubProject = (state = false, action) => {
  switch (action.type) {
    case types.DELETE_SUB_PROJECT_START:
      return true;
    case types.DELETE_SUB_PROJECT_SUCCESS:
      return false;
    case types.DELETE_SUB_PROJECT_FAILURE:
      return false;
    default:
      return state;
  }
}

export const resources = combineReducers({
  selectedProjects,
  fetchingAgencies,
  agencies,
  fetchingRegions,
  fetchingDistricts,
  regions,
  districts,
  sub_projects,
  creatingSubProjects,
  deleteSubProject,
  Projects,
  project,
  deleteProjects,
  project,
  locations
});
