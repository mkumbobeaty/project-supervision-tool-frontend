import { combineReducers } from "redux";
import * as types from "./types";

const initialData = {
  data: [],
  total: 1,
  loading: false,
  error: null,
  page: 1,
  procuringEntity: {},
  showForm: false,
};


const procuringEntities = (state = initialData, action) => {
  switch (action.type) {
    case types.GET_PROCURING_ENTITIES_START:
      return { ...state, loading: true }
    case types.GET_PROCURING_ENTITIES_SUCCESS:
      return { data: action.payload, loading: false, }
    case types.GET_PROCURING_ENTITIES_FAILURE:
      return { ...state, loading: false, error: action.payload }
    case types.DELETE_PROURING_ENTITY_START:
      return { ...state };
    case types.DELETE_PROURING_ENTITY_SUCCESS:
      return { ...state, procuringEntity: action.payload };
    case types.DELETE_PROURING_ENTITY_FAILURE:
      return action.payload;
    case types.SELECT_PROURING_ENTITY:
      return { ...state, procuringEntity: action.payload };
    case types.OPEN_PROURING_ENTITY:
      return { ...state, showForm: true };
    case types.CLOSE_PROURING_ENTITY:
      return { ...state, showForm: false };
      case types.CREATE_PROURING_ENTITY_START:
        return { ...state, loading: true };
      case types.CREATE_PROURING_ENTITY_SUCCESS:
        return { ...state, procuringEntity: action.payload, loading: false };
      case types.CREATE_PROURING_ENTITY_FAILURE:
        return { ...state, error: action.payload, loading: false };
    default:
      return state;

  }
}


export const procuringEntityResource = combineReducers({
  procuringEntities
})