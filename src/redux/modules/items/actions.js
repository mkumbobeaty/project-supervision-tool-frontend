import * as types from './types';

// action creator for fetching items
export function getItemsStart() {
    return {
        type: types.GET_ITEMS_START,
    }
}

export function getItemsSuccess(items) {
    return {
        type: types.GET_ITEMS_SUCCESS,
        payload: items
    }
}

export function getItemsFailure(error) {
    return {
        type: types.GET_ITEMS_SUCCESS,
        payload: error
    }
}

export function createItemStart(item) {
    return {
        type: types.CREATE_ITEM_START,
        payload: item,
    };
}

export function createItemSuccess(item) {
    return {
        type: types.CREATE_ITEM_SUCCESS,
        payload: item,
    };
}

export function createItemFailure(error) {
    return {
        type: types.CREATE_ITEM_FAILURE,
        payload: error,
    };
}

// editing Item
export function editItemStart(item) {
    return {
        type: types.EDIT_ITEM_START,
        payload: item
    };
}

export function editItemSuccess(item) {
    return {
        type: types.EDIT_ITEM_SUCCESS,
        payload: item,
    };
}

export function editItemFailure(error) {
    return {
        type: types.EDIT_ITEM_FAILURE,
        payload: error,
    };
}

// deleting Item
export function deleteItemStart(user_id) {
    return {
        type: types.DELETE_ITEM_START,
        payload: user_id
    };
}

export function deleteItemSuccess(user_id) {
    return {
        type: types.DELETE_ITEM_SUCCESS,
        payload: user_id,
    };
}

export function deleteItemFailure(error) {
    return {
        type: types.DELETE_ITEM_FAILURE,
        payload: error,
    };
}