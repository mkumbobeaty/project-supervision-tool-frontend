
import * as types from './types'

/**
 * @function
 * @name getBorrowersStart
 * @param {String} payload the Borrowers
 */  
export function getBorrowersStart() {
  return {
    type: types.GET_BORROWERS_START,
  };
}

/**
 * @function
 * @name getBorrowersSuccess
 * @param {*} Borrowers 
 */
export function getBorrowersSuccess(borrowers) {
  return {
    type: types.GET_BORROWERS_SUCCESS,
    payload: borrowers,
  };
}

/**
 * @function
 * @name getBorrowersFailure
 * @param {*} error 
 */
export function getBorrowersFailure(error) {
  return {
    type: types.GET_BORROWERS_FAILURE,
    payload: error,
  };
}
