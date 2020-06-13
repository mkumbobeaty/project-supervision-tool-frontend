import * as types from "./types";
import { combineReducers } from "redux";
// import { default as humanResourcesReducer } from "../../duck";

/**
 * State shape
 * {
 * fetchingAgencies: boolean
 * fetchingItems: boolean
 * fetchingLocations: boolean
 * items: Object[], // items
 * agencies: Object[], // agencies
 * locations: Object[], // locations
 * creatingHumanResource: boolean,
 * humanResource: Object
 * }
 */

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

const humanResource = (state = [], action) => {
  switch (action.type) {
    case types.CREATE_HUMAN_RESOURCES_SUCCESS:
      return action.payload;
    case types.CREATE_HUMAN_RESOURCES_FAILURE:
      return action.payload;
    case types.DELETE_HUMAN_RESOURCES_SUCCESS:
      return action.payload;
    case types.DELETE_HUMAN_RESOURCES_FAILURE:
      return action.payload;
    default:
      return state;
  }
};

// update human resources

const updateHumanResource = (state = false, action) => {
  switch (action.type) {
    case types.UPDATE_HUMAN_RESOURCES_START:
      return true;
    case types.UPDATE_HUMAN_RESOURCES_SUCCESS:
      return false;
    case types.UPDATE_HUMAN_RESOURCES_FAILURE:
      return false;
    default:
      return state;
  }
};

const updatedHumanResource = (state = [], action) => {
  switch (action.type) {
    case types.UPDATE_HUMAN_RESOURCES_SUCCESS:
      return action.payload;
    case types.UPDATE_HUMAN_RESOURCES_FAILURE:
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
  items,
  fetchingAgencies,
  agencies,
  fetchingLocations,
  locations,
  creatingHumanResource,
  humanResource,
  updateHumanResource,
  updatedHumanResource,
  deleteHumanResource
});
