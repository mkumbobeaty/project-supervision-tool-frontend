
import * as types from './types'

/**
 * @function
 * @name getSectorsStart
 * @param {String} payload the sectors
 */  
export function getSectorsStart() {
  return {
    type: types.GET_SECTORS_START,
  };
}

/**
 * @function
 * @name getSectorsSuccess
 * @param {*} sectors 
 */
export function getSectorsSuccess(sectors) {
  return {
    type: types.GET_SECTORS_SUCCESS,
    payload: sectors,
  };
}

/**
 * @function
 * @name getSectorsFailure
 * @param {*} error 
 */
export function getSectorsFailure(error) {
  return {
    type: types.GET_SECTORS_FAILURE,
    payload: error,
  };
}