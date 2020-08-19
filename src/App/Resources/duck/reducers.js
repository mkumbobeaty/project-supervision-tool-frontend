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
  total: 1,
  loading: false,
  error: null,
  showForm: false,
  posting: false,
  page: 1,
};

const humanResourceState = {
  humanresourceDetail: {},
  total: 1,
  page: 1,
  loading: false,
};

const defaultInitiative
= {
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

const humanResources = (state = defaultHumanResource, action) => {
  switch (action.type) {
    case types.GET_HUMAN_RESOURCES_START:
      return { ...state, loading: true };
    case types.GET_HUMAN_RESOURCES_SUCCESS:
      return Object.assign(
        {},
        {
          ...state,
          data: action.humanResources.data,
          total: action.humanResources.meta.total,
          page: action.humanResources.meta.current_page,
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
    case types.CREATE_HUMAN_RESOURCES_START:
      return { ...state, posting: true };
    case types.CREATE_HUMAN_RESOURCES_SUCCESS:
      return { ...state, posting: false, showForm: false, loading: true };
    case types.CREATE_HUMAN_RESOURCES_FAILURE:
      return { error: action.payload.error };
    case types.UPDATE_HUMAN_RESOURCES_START:
      return { ...state, posting: true };
    case types.UPDATE_HUMAN_RESOURCES_SUCCESS:
      return { ...state, showForm: false,posting:false };
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

const humanResource = (state = humanResourceState, action) => {
  switch (action.type) {
    case types.GET_HUMAN_RESOURCE_START:
      return { ...state, loading: true }
    case types.GET_HUMAN_RESOURCE_SUCCESS:
      return  {
        ...state,
        humanresourceDetail: action.payload,
        loading: false,
      };
    case types.GET_HUMAN_RESOURCE_FAILURE:
      return { ...state, error: action.message, loading: false };
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

// Initiatives

const creatingInitiative = (state = false, action) => {
  switch (action.type) {
    case types.CREATE_INITIATIVE_START:
      return true;
    case types.CREATE_INITIATIVE_SUCCESS:
      return false;
    case types.CREATE_INITIATIVE_FAILURE:
      return false;
    default:
      return state;
  }
};

const initiative = (state = defaultInitiative, action) => {
  switch (action.type) {
    case types.GET_INITIATIVES_START:
      return {loading:true}
    case types.GET_INITIATIVES_SUCCESS:
      return Object.assign(
        {},
        {
          ...state,
          data: action.initiatives.data,
          total: action.initiatives.total,
          page: action.initiatives.page,
          initLoading: false,
          showForm: false,
          loading: false,
        }
      );
    case types.GET_INITIATIVES_FAILURE:
      return Object.assign({}, { ...state, error: action.message, loading:false });
    case types.OPEN_INITIATIVES_FORM:
      return Object.assign({}, state, { showForm: true });
    case types.CLOSE_INITIATIVES_FORM:
      return Object.assign({}, state, { showForm: false });
    case types.CREATE_INITIATIVE_SUCCESS:
      return Object.assign({}, state, { posting: false, showForm: false, loading:true });
    case types.CREATE_INITIATIVE_FAILURE:
      // return action.payload;
      return Object.assign({}, state, { error: action.payload.error });
    case types.UPDATE_INITIATIVE_SUCCESS:
      return action.payload;
    case types.UPDATE_INITIATIVE_FAILURE:
      return action.payload;
    case types.DELETE_INITIATIVE_SUCCESS:
      return action.payload;
    case types.DELETE_INITIATIVE_FAILURE:
      return action.payload;
    default:
      return state;
  }
};


const updateInitiative = (state = false, action) => {
  switch (action.type) {
    case types.UPDATE_INITIATIVE_START:
      return true;
    case types.UPDATE_INITIATIVE_SUCCESS:
      return false;
    case types.UPDATE_INITIATIVE_FAILURE:
      return false;
    default:
      return state;
  }
};

const selectedInitiative = (state = null, action) => {
  switch (action.type) {
    case types.SELECT_INITIATIVE:
      return action.payload;
    default:
      return state;
  }
};

const deleteInitiative = (state = false, action) => {
  switch (action.type) {
    case types.DELETE_INITIATIVE_START:
      return true;
    case types.DELETE_INITIATIVE_SUCCESS:
      return false;
    case types.DELETE_INITIATIVE_FAILURE:
      return false;
    default:
      return state;
  }
}

export const resources = combineReducers({
  fetchingItems,
  selectedInitiative,
  selectedHumanResource,
  items,
  fetchingAgencies,
  agencies,
  fetchingRegions,
  fetchingDistricts,
  regions,
  districts,
  fetchHumanResources,
  humanResources,
  humanResource,
  deleteHumanResource,
  creatingInitiative,
  updateInitiative,
  initiative,
  deleteInitiative,

});
