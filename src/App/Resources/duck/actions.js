
/*  Items Action creators */

import * as types from "./types";

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

// select single human resource
export const selectHumanResource = selectedHumanResource => ({
    type: types.SELECT_HUMAN_RESOURCE,
    payload: selectedHumanResource,
  });
  