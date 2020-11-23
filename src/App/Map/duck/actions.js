import * as types from "./types";
import {makeActionCreator} from '../../../Util';


/**
 * @function
 * @name setProjectsSpatialData
 * @param {Array} payload transformed projects with spatial data
 */
export const setProjectsSpatialData = makeActionCreator(types.SET_PROJECTS_SPATIAL_DATA, 'payload');


// get projects by region
/**
 * @function
 * @name getProjectsByRegionStart
 */
 export const getProjectsByRegionStart = makeActionCreator(types.GET_PROJECTS_BY_REGION_START);

/**
 * @function
 * @name getProjectsByRegionSuccess
 * @param {Array} payload fetched projects
 */
 export const getProjectsByRegionSuccess = makeActionCreator(types.GET_PROJECTS_BY_REGION_SUCCESS, 'payload');

/**
 * @function
 * @name getProjectsByRegionFailure
 * @param {Object} payload error object returned by server
 */
 export const getProjectsByRegionFailures = makeActionCreator(types.GET_PROJECTS_BY_REGION_FAILURE, 'payload');


// get region details
/**
 * @function
 * @name getRegionStart
 */
 export const getRegionStart = makeActionCreator(types.GET_REGION_START);

/**
 * @function
 * @name getRegionSuccess
 * @param {Array} payload fetched projects
 */
 export const getRegionSuccess = makeActionCreator(types.GET_REGION_SUCCESS, 'payload');

/**
 * @function
 * @name getRegionFailure
 * @param {Object} payload error object returned by server
 */
 export const getRegionFailures = makeActionCreator(types.GET_REGION_FAILURE, 'payload');


// get project overview

/**
 * @function
 * @name getProjectsOverviewStart
 */
export const getProjectsOverviewStart = makeActionCreator(types.GET_PROJECTS_OVERVIEW_START);


/**
 * @function
 * @name clearProjectsOverview
 */
export const clearProjectsOverview = makeActionCreator(types.CLEAR_PROJECTS_OVERVIEW);

/**
 * @function
 * @name getProjectsOverviewSuccess
 */
export const getProjectsOverviewSuccess = makeActionCreator(types.GET_PROJECTS_OVERVIEW_SUCCESS, 'payload');

/**
 * @function
 * @name getProjectsOverviewFailure
 */
export const getProjectsOverviewFailure = makeActionCreator(types.GET_PROJECTS_OVERVIEW_FAILURE, 'payload');

/**
 * @function
 * @name showMapLoader
 */
export const showMapLoader = makeActionCreator(types.SHOW_MAP_LOADER, 'payload');


export function setInitiativesGeoJson(initiativesGeoJson) {
    return {
        type: types.SET_INITIATIVES_GEO_JSON,
        payload: initiativesGeoJson,
    };
}

export function setHumanResourceGeoJson(humanResourcesGeoJson) {
    return {
        type: types.SET_HUMAN_RESOURCES_GEO_JSON,
        payload: humanResourcesGeoJson,
    };
}

export function setShowFeatureDetails(bool = true) {
    return {
        type: types.SET_SHOW_FEATURE_DETAILS,
        payload: bool,
    };
}

export function setActiveMapSideMenuItem(active) {
    return {
        type: types.SET_ACTIVE_MAP_SIDE_MENU_ITEM,
        payload: active,
    };
}
