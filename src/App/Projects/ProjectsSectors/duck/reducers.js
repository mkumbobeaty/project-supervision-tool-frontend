import * as types from "./types";

export const sectors = (state = [], action) => {
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