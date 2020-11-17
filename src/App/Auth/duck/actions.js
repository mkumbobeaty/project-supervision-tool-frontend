import * as types from "./types";


function makeActionCreator(type, ...argNames) {
    return function (...args) {
        const action = { type }
        argNames.forEach((arg, index) => {
            action[argNames[index]] = args[index]
        })
        return action
    }
}

export const loginStart = makeActionCreator(types.LOGIN_START, 'payload');
export const loginSuccess = makeActionCreator(types.LOGIN_SUCCESS, 'payload');
export const loginFailure = makeActionCreator(types.LOGIN_FAILURE, 'payload');
