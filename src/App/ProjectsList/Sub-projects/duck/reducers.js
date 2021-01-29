import * as types from "./types";
import {combineReducers} from "redux";
import { act } from "react-dom/test-utils";

/**
 * @function
 * @name sub_project_items
 * @description reducer that manages sub projects Items
 * @param {Object} state
 * @param {Object} action
 * @return {Object} updated state
 */
const sub_project_items = (state = {data: [], error: null, loading: false}, action) => {
  switch (action.type) {
    case types.GET_SUB_PROJECT_ITEMS_START:
      return { ...state, loading: true }
    case types.GET_SUB_PROJECT_ITEMS_SUCCESS:
      return {...state, data: action.payload, loading: false, }
    case types.GET_SUB_PROJECT_ITEMS_FAILURE:
      return { ...state, error: action.message, loading: false };
    case types.CREATE_SUB_PROJECT_ITEM_START:
      return { ...state, loading:false};
    case types.CREATE_SUB_PROJECT_ITEM_SUCCESS:
      return { ...state, data:action.payload, loading:true};
    case types.CREATE_SUB_PROJECT_ITEM_FAILURE:
      return {...state, error:action.payload, loading:true}
     default:
      return state;
  }
};


/**
 * @function
 * @name sub_project_items
 * @description reducer that manages sub projects Items
 * @param {Object} state
 * @param {Object} action
 * @return {Object} updated state
 */
const sub_project_equipments = (state = {data: [], error: null, loading: false}, action) => {
  switch (action.type) {
    case types.GET_SUB_PROJECT_EQUIPMENTS_START:
      return { ...state, loading: true }
    case types.GET_SUB_PROJECT_EQUIPMENTS_SUCCESS:
      return {...state, data: action.payload, loading: false, }
    case types.GET_SUB_PROJECT_EQUIPMENTS_FAILURE:
      return { ...state, error: action.message, loading: false };
     default:
      return state;
  }
};

export const subProjectResources = combineReducers({
    sub_project_items,
    sub_project_equipments
  })