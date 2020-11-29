import * as types from './types';

export function getFocalPeopleStart() {
    return {
      type: types.GET_FOCAL_PEOPLE_START,
    };
  }
  
  export function getFocalPeopleSuccess(focalPeople) {
    return {
      type: types.GET_FOCAL_PEOPLE_SUCCESS,
      payload: focalPeople,
    };
  }
  
  export function getFocalPeopleFailure(error) {
    return {
      type: types.GET_FOCAL_PEOPLE_FAILURE,
      payload: error,
    };
  }