import * as types from "./types";
import {makeActionCreator} from '../../../Util';


/**
 * @function
 * @name setProjectsSpatialData
 * @param {Array} payload transiformed projects with spatial data
 */
export const setProjectsSpatialData = makeActionCreator(types.SET_PROJECTS_SPATIAL_DATA, 'payload');


// get project overview

/**
 * @function
 * @name getProjectsOverviewStart
 */
export const getProjectsOverviewStart = makeActionCreator(types.GET_PROJECTS_OVERVIEW_START);

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
