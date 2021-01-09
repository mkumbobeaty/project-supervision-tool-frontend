import { combineReducers } from "redux";
import * as types from "./types";

const initialData = {
  error: null,
  showForm: false,
  posting: false,
};


const sectors = (state = [], action) => {
    switch (action.type) {
      case types.GET_SECTORS_START:
        return state
      case types.GET_SECTORS_SUCCESS:
        return action.payload 
      case types.GET_SECTORS_FAILURE:
        return  action.payload
      default:
        return state;
  
    }
  }

  const project_sectors = (state = initialData, action) => {
    switch (action.type) {
      case types.OPEN_FORM:
        return { ...state, showForm: true };
      case types.CLOSE_FORM:
        return { ...state, showForm: false };
      case types.CREATE_PROJECT_SECTOR_START:
        return { ...state, posting: true, showForm:true };
      case types.CREATE_PROJECT_SECTOR_SUCCESS:
        return { ...state, posting: false, showForm: true  };
      case types.CREATE_PROJECT_SECTOR_FAILURE:
        return { error: action.payload.error,posting: false, showForm: false };
      default:
        return state;
    }
  };


  export const sectorsData = combineReducers ({
    sectors,
    project_sectors
  });
