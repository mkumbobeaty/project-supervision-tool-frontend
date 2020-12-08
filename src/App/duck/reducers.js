import { combineReducers } from "redux";
import * as types from "./types";

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

export const initReducer = combineReducers(
    fetchingDistricts,
    fetchingRegions,
    regions,
    districts

)