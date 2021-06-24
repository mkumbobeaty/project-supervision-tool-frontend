/*  ProcuringEntitys Action creators */
import * as types from "./types";
import { makeActionCreator } from "../../../Util";

/**
 * @const
 * @name getProcuringEntitiesStart
 * @return {Object} action
 * */
export const getProcuringEntitiesStart = makeActionCreator(types.GET_PROCURING_ENTITIES_START, 'payload');

/**
 * @const
 * @name getProcuringEntitiesSuccess
 * @param {Object} payload procuringEntity
 * @return {Object} action
 * */
export const getProcuringEntitiesSuccess = makeActionCreator(types.GET_PROCURING_ENTITIES_SUCCESS, 'payload');

/**
 * @const
 * @name getProcuringEntitiesFailure
 * @param {Object} payload procuringEntity failure response
 * @return {Object} action
 * */
export const getProcuringEntitiesFailure = makeActionCreator(types.GET_PROCURING_ENTITIES_FAILURE, 'payload');


/**
 * @const
 * @name deleteProcuringEntityStart
 * @return {Object} action
 * */
export const deleteProcuringEntityStart = makeActionCreator(types.DELETE_PROURING_ENTITY_START, 'payload');

/**
 * @const
 * @name deleteProcuringEntitySuccess
 * @param {Object} payload procuringEntity
 * @return {Object} action
 * */
export const deleteProcuringEntitySuccess = makeActionCreator(types.DELETE_PROURING_ENTITY_SUCCESS, 'payload');

/**
 * @const
 * @name deleteProcuringEntityFailure
 * @param {Object} payload procuringEntity failure response
 * @return {Object} action
 * */
export const deleteProcuringEntityFailure = makeActionCreator(types.DELETE_PROURING_ENTITY_FAILURE, 'payload');

/**
 * @const
 * @name createProcuringEntityStart
 * @return {Object} action
 * */
export const createProcuringEntityStart = makeActionCreator(types.CREATE_PROURING_ENTITY_START, 'payload');

/**
 * @const
 * @name createProcuringEntitySuccess
 * @param {Object} payload 
 * @return {Object} action
 * */
export const createProcuringEntitySuccess = makeActionCreator(types.CREATE_PROURING_ENTITY_SUCCESS, 'payload');

/**
 * @const
 * @name createProcuringEntityFailure
 * @param {Object} payload failure response
 * @return {Object} action
 * */
export const createProcuringEntityFailure = makeActionCreator(types.CREATE_PROURING_ENTITY_FAILURE, 'payload');

/**
 * @const
 * @name selectProcuringEntity
 * @param {Object} payload failure response
 * @return {Object} action
 * */
export const selectProcuringEntity = makeActionCreator(types.SELECT_PROURING_ENTITY, 'payload');

/**
 * @const
 * @name openProcuringEntityForm
 * @param {Object} payload failure response
 * @return {Object} action
 * */
export const openProcuringEntityForm = makeActionCreator(types.OPEN_PROURING_ENTITY);

/**
 * @const
 * @name closeProcuringEntityForm
 * @param {Object} payload failure response
 * @return {Object} action
 * */
export const closeProcuringEntityForm = makeActionCreator(types.CLOSE_PROURING_ENTITY);
/**
 * @const
 * @name updateProcuringEntityStart
 * @param {Object} payload failure response
 * @return {Object} action
 * */

export const updateProcuringEntityStart = makeActionCreator(types.UPDATE_PROURING_ENTITY_START, 'payload')

/**
 * @const
 * @name updateProcuringEntitySuccess
 * @param {Object} payload failure response
 * @return {Object} action
 * */
export const updateProcuringEntitySuccess = makeActionCreator(types.UPDATE_PROURING_ENTITY_START, 'payload');

/**
* @const
* @name updateProcuringEntityFailure
* @param {Object} payload failure response
* @return {Object} action
* */
export const updateProcuringEntityFailure = makeActionCreator(types.UPDATE_PROURING_ENTITY_FAILURE, 'payload');
