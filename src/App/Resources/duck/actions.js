/*  Items Action creators */

import * as types from "./types";

export function openResourceForm() {
  return {
    type: types.OPEN_HUMAN_RESOURCES_FORM,
  };
}

export function closeResourceForm() {
  return {
    type: types.CLOSE_HUMAN_RESOURCES_FORM,
  };
}

export function getItemsStart() {
  return {
    type: types.GET_ITEMS_START,
  };
}

export function getItemsSuccess(humanResources) {
  return {
    type: types.GET_ITEMS_SUCCESS,
    payload: humanResources,
  };
}

export function getItemsFailure(error) {
  return {
    type: types.GET_AGENCIES_FAILURE,
    payload: error,
  };
}
/*  Agencies Action creators */

export function getAgenciesStart() {
  return {
    type: types.GET_AGENCIES_START,
  };
}

export function getAgenciesSuccess(agencies) {
  return {
    type: types.GET_AGENCIES_SUCCESS,
    payload: agencies,
  };
}

export function getAgenciesFailure(error) {
  return {
    type: types.GET_AGENCIES_FAILURE,
    payload: error,
  };
}

/*  Agencies Action creators */

export function getLocationsStart() {
  return {
    type: types.GET_LOCATIONS_START,
  };
}

export function getLocationsSuccess(locations) {
  return {
    type: types.GET_LOCATIONS_SUCCESS,
    payload: locations,
  };
}

export function getLocationsFailure(error) {
  return {
    type: types.GET_LOCATIONS_FAILURE,
    payload: error,
  };
}

/*  Human Resources Action creators */
export function getHumanResourcesRequest() {
  return {
    type: types.GET_HUMAN_RESOURCES_START,
  };
}

export function getHumanResourcesSuccess(humanResources) {
  return {
    type: types.GET_HUMAN_RESOURCES_SUCCESS,
    humanResources,
  };
}

export function getHumanResourcesFailure(message) {
  return {
    type: types.GET_HUMAN_RESOURCES_FAILURE,
    message,
  };
}

export function createHumanResourceStart() {
  return {
    type: types.CREATE_HUMAN_RESOURCES_START,
  };
}

export function createHumanResourceSuccess(humanResource) {
  return {
    type: types.CREATE_HUMAN_RESOURCES_SUCCESS,
    payload: humanResource,
  };
}

export function createHumanResourceFailure(error) {
  return {
    type: types.CREATE_HUMAN_RESOURCES_FAILURE,
    payload: error,
  };
}

export function updateHumanResourceStart() {
  return {
    type: types.UPDATE_HUMAN_RESOURCES_START,
  };
}

export function updateHumanResourceSuccess(humanResource) {
  return {
    type: types.UPDATE_HUMAN_RESOURCES_SUCCESS,
    payload: humanResource,
  };
}

export function updateHumanResourceFailure(error) {
  return {
    type: types.UPDATE_HUMAN_RESOURCES_FAILURE,
    payload: error,
  };
}

// deleting human resource
export function deleteHumanResourceStart() {
  return {
    type: types.DELETE_HUMAN_RESOURCES_START,
  };
}

export function deleteHumanResourceSuccess(humanResource) {
  return {
    type: types.DELETE_HUMAN_RESOURCES_SUCCESS,
    payload: humanResource,
  };
}

export function deleteHumanResourceFailure(error) {
  return {
    type: types.DELETE_HUMAN_RESOURCES_FAILURE,
    payload: error,
  };
}

// select single human resource
export const selectHumanResource = (selectedHumanResource) => ({
  type: types.SELECT_HUMAN_RESOURCE,
  payload: selectedHumanResource,
});

//  Initiatives

export function getInitiativesRequest() {
  return {
    type: types.GET_INITIATIVES_START,
  };
}

export function getInitiativesSuccess(initiatives) {
  return {
    type: types.GET_INITIATIVES_SUCCESS,
    initiatives,
  };
}

export function getInitiativesFailure(message) {
  return {
    type: types.GET_INITIATIVES_FAILURE,
    message,
  };
}
export function createInitiativeStart() {
  return {
    type: types.CREATE_INITIATIVE_START,
  };
}

export function createInitiativeSuccess(initiative) {
  return {
    type: types.CREATE_INITIATIVE_SUCCESS,
    payload: initiative,
  };
}

export function createInitiativeFailure(error) {
  return {
    type: types.CREATE_INITIATIVE_FAILURE,
    payload: error,
  };
}

export function updateInitiativeStart() {
  return {
    type: types.UPDATE_INITIATIVE_START,
  };
}

export function updateInitiativeSuccess(initiative) {
  return {
    type: types.UPDATE_INITIATIVE_SUCCESS,
    payload: initiative,
  };
}

export function updateInitiativeFailure(error) {
  return {
    type: types.UPDATE_INITIATIVE_FAILURE,
    payload: error,
  };
}

// deleting human resource
export function deleteInitiativeStart() {
  return {
    type: types.DELETE_INITIATIVE_START,
  };
}

export function deleteInitiativeSuccess(initiative) {
  return {
    type: types.DELETE_INITIATIVE_SUCCESS,
    payload: initiative,
  };
}

export function deleteInitiativeFailure(error) {
  return {
    type: types.DELETE_INITIATIVE_FAILURE,
    payload: error,
  };
}

// select single human resource
export const selectHumanResource = selectedHumanResource => ({
    type: types.SELECT_HUMAN_RESOURCE,
    payload: selectedHumanResource,
  });

/*  Single Human Resource  Action creators */
export function getHumanResourceStart() {
    return {
        type: types.GET_HUMAN_RESOURCE_START,
    };
}

export function getHumanResourceSuccess(data) {
    return {
        type: types.GET_HUMAN_RESOURCE_SUCCESS,
        payload: data,
    };
}

export function getHumanResourceFailure(error) {
    return {
        type: types.GET_HUMAN_RESOURCE_FAILURE,
        payload: error,
    };
}
  
export const selectInitiative = (selectedInitiative) => ({
  type: types.SELECT_INITIATIVE,
  payload: selectedInitiative,
});

export function openInitiativeForm() {
  return {
    type: types.OPEN_INITIATIVES_FORM,
  };
}

export function closeInitiativeForm() {
  return {
    type: types.CLOSE_INITIATIVES_FORM,
  };
}
