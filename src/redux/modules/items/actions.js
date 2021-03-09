import * as types from './types';

// action creator for fetching items
export function getItemsStart () {
    return {
        type: types.GET_ITEMS_START,
    }
}

export function getItemsSuccess (items) {
    return {
        type: types.GET_ITEMS_SUCCESS,
        payload: items
    }
}

export function getItemsFailure (error) {
    return {
        type: types.GET_ITEMS_SUCCESS,
        payload: error
    }
}