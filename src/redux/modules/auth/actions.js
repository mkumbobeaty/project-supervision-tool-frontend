import * as types from "./types";
import {makeActionCreator} from '../../../Util';

export const loginStart = makeActionCreator(types.LOGIN_START, 'payload');
export const loginSuccess = makeActionCreator(types.LOGIN_SUCCESS, 'payload');
export const loginFailure = makeActionCreator(types.LOGIN_FAILURE, 'payload');
export const logout = makeActionCreator(types.LOGOUT);


export const getAuthUserStart = makeActionCreator(types.GET_AUTH_USER_START);
export const getAuthUserSuccess = makeActionCreator(types.GET_AUTH_USER_SUCCESS, 'payload');
export const getAuthUserFailure = makeActionCreator(types.GET_AUTH_USER_FAILURE, 'payload');
export const setAuthUserPermissions = makeActionCreator(types.SET_AUTH_USER_PERMISSIONS,'payload');

