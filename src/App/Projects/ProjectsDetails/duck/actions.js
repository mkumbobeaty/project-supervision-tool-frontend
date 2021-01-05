
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

/**
 * @function
 * @name getFundingOrgStart
 * @param {String} payload
 */  
export function getFundingOrgStart() {
  return {
    type: types.GET_FUNDING_ORG_START,
  };
}

/**
 * @function
 * @name getFundingOrgSuccess
 * @param {*} fund 
 */
export function getFundingOrgSuccess(fund) {
  return {
    type: types.GET_FUNDING_ORG_SUCCESS,
    payload: fund,
  };
}

/**
 * @function
 * @name getFundingOrgFailure
 * @param {*} error 
 */
export function getFundingOrgFailure(error) {
  return {
    type: types.GET_FUNDING_ORG_FAILURE,
    payload: error,
  };
}


// action creator for fetching agencies
export function getAgenciesStart() {
  return {
    type: types.GET_AGENCIES_START,
  };
}

export function getAgenciesSuccess(agencies) {
  return {
    type: types.GET_AGENCIES_SUCCESS,
    payload:agencies,
  };
}

export function getAgenciesFailure(message) {
  return {
    type: types.GET_AGENCIES_FAILURE,
    message,
  };
}

// action creator for fetching currencies
export function getCurrenciesStart() {
  return {
    type: types.GET_CURRENCIES_START,
  };
}

export function getCurrenciesSuccess(currencies) {
  return {
    type: types.GET_CURRENCIES_SUCCESS,
    payload:currencies,
  };
}

export function getCurrenciesFailure(message) {
  return {
    type: types.GET_CURRENCIES_FAILURE,
    message,
  };
}