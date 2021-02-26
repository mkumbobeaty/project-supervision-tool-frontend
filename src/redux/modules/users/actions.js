import * as types from './types';

// action creator for fetching users
export function getUsersStart () {
    return {
        type: types.GET_USERS_START,
    }
}

export function getUsersSuccess (users) {
    return {
        type: types.GET_USERS_SUCCESS,
        payload: users
    }
}

export function getUsersFailure (error) {
    return {
        type: types.GET_USERS_SUCCESS,
        payload: error
    }
}