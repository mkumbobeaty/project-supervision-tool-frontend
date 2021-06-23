/*  Projects Action creators */
import * as types from "./types";
import {makeActionCreator} from "../../../Util";

/**
 * @function
 * @name getProcuringEntitiesStart
 * @return {Object} action
 * */
export const getProcuringEntitiesStart = makeActionCreator(types.GET_PROCURING_ENTITIES_START, 'payload');

/**
 * @function
 * @name getProcuringEntitiesSuccess
 * @param {Object} payload tickets
 * @return {Object} action
 * */
export const getProcuringEntitiesSuccess = makeActionCreator(types.GET_PROCURING_ENTITIES_SUCCESS, 'payload');

/**
 * @function
 * @name getProcuringEntitiesFailure
 * @param {Object} payload ticketst failure response
 * @return {Object} action
 * */
export const getProcuringEntitiesFailure = makeActionCreator(types.GET_PROCURING_ENTITIES_FAILURE, 'payload');

