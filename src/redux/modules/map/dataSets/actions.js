
import {makeActionCreator} from "../../../../Util";
import * as types from "./types";


// retrieve  layer(s) from Geonode

/**
 * @function
 * @name getGeonodeLayersStart
 * @return {Object} action
 * */
export const getGeonodeLayersStart = makeActionCreator(types.GET_GEONODE_LAYERS_START);

/**
 * @function
 * @name getGeonodeLayersSuccess
 * @param {Object} payload layer
 * @return {Object} action
 * */
export const getGeonodeLayersSuccess = makeActionCreator(types.GET_GEONODE_LAYERS_SUCCESS, 'payload');

/**
 * @function
 * @name getGeonodeLayersFailure
 * @param {Object} payload get layer failure response
 * @return {Object} action
 * */
export const getGeonodeLayersFailure = makeActionCreator(types.GET_GEONODE_LAYERS_FAILURE, 'payload');




/**
 * @function
 * @name setSelectedLayer
 * @param {Object} payload layer
 * @return {Object} action
 * */
export const setSelectedLayer = makeActionCreator(types.SET_SELECTED_LAYER, 'payload');

/**
 * @function
 * @name removeSelectedLayer
 * @param {Object} payload layer
 * @return {Object} action
 * */
export const removeSelectedLayer = makeActionCreator(types.REMOVE_SELECTED_LAYER, 'payload');
