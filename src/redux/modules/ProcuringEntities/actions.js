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
 * @param {Object} payload procuringEntity
 * @return {Object} action
 * */
export const getProcuringEntitiesSuccess = makeActionCreator(types.GET_PROCURING_ENTITIES_SUCCESS, 'payload');

/**
 * @function
 * @name getProcuringEntitiesFailure
 * @param {Object} payload procuringEntity failure response
 * @return {Object} action
 * */
export const getProcuringEntitiesFailure = makeActionCreator(types.GET_PROCURING_ENTITIES_FAILURE, 'payload');


/**
 * @function
 * @name deleteProcuringEntityStart
 * @return {Object} action
 * */
export const deleteProcuringEntityStart = makeActionCreator(types.DELETE_PROURING_ENTITY_START, 'payload');

/**
 * @function
 * @name deleteProcuringEntitySuccess
 * @param {Object} payload procuringEntity
 * @return {Object} action
 * */
export const deleteProcuringEntitySuccess = makeActionCreator(types.DELETE_PROURING_ENTITY_SUCCESS, 'payload');

/**
 * @function
 * @name deleteProcuringEntityFailure
 * @param {Object} payload procuringEntity failure response
 * @return {Object} action
 * */
export const deleteProcuringEntityFailure = makeActionCreator(types.DELETE_PROURING_ENTITY_FAILURE, 'payload');

