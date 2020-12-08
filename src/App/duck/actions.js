
import * as types from './types'
import { makeActionCreator } from '../../Util';

/**
 * @function
 * @name reloadPage
 */
export const reloadPage = makeActionCreator(types.RELOAD_PAGE);

/**
 * @function
 * @name restoreAccessToken
 * @param {String} payload the access token
 */
export const restoreAccessToken = makeActionCreator(types.RESTORE_ACCESS_TOKEN, 'payload');


/**
 * @function
 * @name getRegionsStart
 */
export function getRegionsStart() {
    return {
        type: types.GET_REGIONS_START,
    };
}

/**
* @function
* @name getRegionsSuccess
* @param {String} payload the regions
*/
export function getRegionsSuccess(regions) {
    return {
        type: types.GET_REGIONS_SUCCESS,
        payload: regions,
    };
}

/**
* @function
* @name getRegionsFailure
* @param {String} payload error message
*/
export function getRegionsFailure(error) {
    return {
        type: types.GET_REGIONS_FAILURE,
        payload: error,
    };
}

/*  Districts Action creators */
/**
* @function
* @name getDistrictsStart
* 
*/
export function getDistrictsStart() {
    return {
        type: types.GET_DISTRICTS_START,
    };
}

/**
* @function
* @name getDistrictsSuccess
* @param {String} payload all districts available
*/
export function getDistrictsSuccess(districts) {
    return {
        type: types.GET_DISTRICTS_SUCCESS,
        payload: districts,
    };
}

/**
* @function
* @name getDistrictsFailure
* @param {String} payload the error messages
*/
export function getDistrictsFailure(error) {
    return {
        type: types.GET_DISTRICTS_FAILURE,
        payload: error,
    };
}
