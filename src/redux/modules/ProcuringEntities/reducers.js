import { combineReducers } from "redux";
import * as types from "./types";

const initialData = {
  data: [],
  total: 1,
  loading: false,
  error: null,
  page: 1,
};


const procuringEntities = (state = initialData, action) => {
  switch (action.type) {
    case types.GET_PROCURING_ENTITIES_START:
      return { ...state, loading: true }
    case types.GET_PROCURING_ENTITIES_SUCCESS:
      return {  data: action.payload, loading: false, }
    case types.GET_PROCURING_ENTITIES_FAILURE:
      return { ...state, loading: false, error: action.payload }
    default:
      return state;

  }
}


export const procuringEntityResource = combineReducers({
  procuringEntities
})