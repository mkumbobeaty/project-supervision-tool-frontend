
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