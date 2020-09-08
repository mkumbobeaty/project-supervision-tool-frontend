import * as types from "./types";


export function loginStart() {
    return {
        type: types.LOGIN_START,
    };
}

export function loginSuccess(accessToken) {
    return {
        type: types.LOGIN_SUCCESS,
        payload: accessToken,
    };
}

export function loginFailure(error) {
    return {
        type: types.LOGIN_FAILURE,
        payload: error,
    };
}
