// constants

import { appServices } from "../../API";

/* Action types */
import * as types from './types';

/* Action creators */

export function getHumanResourcesRequest() {
    return {
        type: types.GET_HUMAN_RESOURCES_START,
    };
}

export function getHumanResourcesSuccess(humanResources) {
    return {
        type: types.GET_HUMAN_RESOURCES_SUCCESS,
        humanResources,
    };
}

export function getHumanResourcesFailure(message) {
    return {
        type: types.GET_HUMAN_RESOURCES_FAILURE,
        message,
    };
}


export function openResourceForm() {
    return {
        type: types.OPEN_HUMAN_RESOURCES_FORM,
    };
}

export function closeResourceForm() {
    return {
        type: types.CLOSE_HUMAN_RESOURCES_FORM,
    };
}