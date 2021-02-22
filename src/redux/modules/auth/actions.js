import * as types from "./types";
import {makeActionCreator} from '../../../Util';

export const loginStart = makeActionCreator(types.LOGIN_START, 'payload');
export const loginSuccess = makeActionCreator(types.LOGIN_SUCCESS, 'payload');
export const loginFailure = makeActionCreator(types.LOGIN_FAILURE, 'payload');
export const logout = makeActionCreator(types.LOGOUT);
