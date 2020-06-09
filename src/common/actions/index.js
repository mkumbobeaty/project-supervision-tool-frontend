// constants

import { appServices } from "../Sercives";

/* Action types */
export const GET_HUMAN_RESOURCES_START = "GET_HUMAN_RESOURCES_START";
export const GET_HUMAN_RESOURCES_SUCCESS = "GET_HUMAN_RESOURCES_SUCCESS";
export const GET_HUMAN_RESOURCES_FAILURE = "GET_HUMAN_RESOURCES_FAILURE";

/* Action creator */

export function getHumanResourcesRequest() {
  return {
    type: GET_HUMAN_RESOURCES_START,
  };
}

export function getHumanResourcesSuccess(humanResources) {
  return {
    type: GET_HUMAN_RESOURCES_SUCCESS,
    humanResources,
  };
}

export function getHumanResourcesFailure(message) {
  return {
    type: GET_HUMAN_RESOURCES_FAILURE,
    message,
  };
}

export function getHumanResources(page) {
  return dispatch => {
    dispatch(getHumanResourcesRequest());
    appServices.fetchHumanResources(page).then(
      res => {
        dispatch(getHumanResourcesSuccess(res));
      },
      error => {
        dispatch(getHumanResourcesFailure(error));
      }
    );
  };
}