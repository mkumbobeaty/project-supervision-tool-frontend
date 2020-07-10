import * as types from "./types";
import { combineReducers } from "redux";
// import { default as humanResourcesReducer } from "../../duck";

/**
 * State shape
 * {
 * fetchingAgencies: boolean
 * fetchingItems: boolean
 * selectedHumanResource: Object
 * fetchingLocations: boolean
 * items: Object[], // items
 * agencies: Object[], // agencies
 * locations: Object[], // locations
 * creatingHumanResource: boolean,
 * humanResource: Object
 * }
 */
const defaultHumanResource = {
  data: [],
  total: 0,
  initLoading: true,
  loading: false,
  error: null,
  showForm: false,
  posting: false,
  page: 0,
};

const fetchHumanResources = (state = false, action) => {
  switch (action.type) {
    case types.GET_HUMAN_RESOURCES_START:
      return true;
    case types.GET_HUMAN_RESOURCES_SUCCESS:
      return false;
    case types.GET_HUMAN_RESOURCES_FAILURE:
      return false;
    default:
      return state;
  }
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

const fetchingLocations = (state = false, action) => {
  switch (action.type) {
    case types.GET_LOCATIONS_START:
      return true;
    case types.GET_LOCATIONS_SUCCESS:
      return false;
    case types.GET_LOCATIONS_FAILURE:
      return false;
    default:
      return state;
  }
};

const locations = (state = [], action) => {
  switch (action.type) {
    case types.GET_LOCATIONS_SUCCESS:
      return action.payload;
    case types.GET_LOCATIONS_FAILURE:
      return action.payload;
    default:
      return state;
  }
};

const creatingHumanResource = (state = false, action) => {
  switch (action.type) {
    case types.CREATE_HUMAN_RESOURCES_START:
      return true;
    case types.CREATE_HUMAN_RESOURCES_SUCCESS:
      return false;
    case types.CREATE_HUMAN_RESOURCES_FAILURE:
      return false;
    default:
      return state;
  }
};

const humanResource = (state = defaultHumanResource, action) => {
  switch (action.type) {
    case types.GET_HUMAN_RESOURCES_START:
      return { loading: true };
    case types.GET_HUMAN_RESOURCES_SUCCESS:
      return Object.assign(
        {},
        {
          ...state,
          data: action.humanResources.data,
          total: action.humanResources.total,
          page: action.humanResources.page,
          initLoading: false,
          showForm: false,
          loading: false,
        }
      );
    case types.GET_HUMAN_RESOURCES_FAILURE:
      return { ...state, error: action.message, loading: false };
    case types.OPEN_HUMAN_RESOURCES_FORM:
      return { ...state, showForm: true };
    case types.CLOSE_HUMAN_RESOURCES_FORM:
      return { ...state, showForm: false };
    case types.CREATE_HUMAN_RESOURCES_SUCCESS:
      return { posting: false, showForm: false, loading: true };
    case types.CREATE_HUMAN_RESOURCES_FAILURE:
      return { error: action.payload.error };
    case types.UPDATE_HUMAN_RESOURCES_START:
      return { ...state };
    case types.UPDATE_HUMAN_RESOURCES_SUCCESS:
      return { ...state, showForm: false };
    case types.UPDATE_HUMAN_RESOURCES_FAILURE:
      return action.payload;
    case types.DELETE_HUMAN_RESOURCES_SUCCESS:
      return action.payload;
    case types.DELETE_HUMAN_RESOURCES_FAILURE:
      return action.payload;
    default:
      return state;
  }
};

// selected human resource
const selectedHumanResource = (state = null, action) => {
  switch (action.type) {
    case types.SELECT_HUMAN_RESOURCE:
      return action.payload;
    default:
      return state;
  }
};

const deleteHumanResource = (state = false, action) => {
  switch (action.type) {
    case types.DELETE_HUMAN_RESOURCES_START:
      return true;
    case types.DELETE_HUMAN_RESOURCES_SUCCESS:
      return false;
    case types.DELETE_HUMAN_RESOURCES_FAILURE:
      return false;
    default:
      return state;
  }
};

export const resources = combineReducers({
  fetchingItems,
  selectedHumanResource,
  items,
  fetchingAgencies,
  agencies,
  fetchingLocations,
  locations,
  fetchHumanResources,
  creatingHumanResource,
  humanResource,
  deleteHumanResource,
});
