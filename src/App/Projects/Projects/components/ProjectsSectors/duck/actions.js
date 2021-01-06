
import * as types from './types'


export function openForm() {
  return {
    type: types.OPEN_FORM,
  };
}

export function closeForm() {
  return {
    type: types.CLOSE_FORM,
  };
}

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

/**
 * @function
 * @name createProjectSectorsStart
 * @param {*} project_sector 
 */
export function createProjectSectorsStart(project_sector) {
  return {
    type: types.CREATE_PROJECT_SECTOR_START,
    payload:project_sector
  };
}

/**
 * @function
 * @name createProjectSectorsSuccess
 * @param {*} project_sector 
 */
export function createProjectSectorsSuccess(project_sector) {
  return {
    type: types.CREATE_PROJECT_SECTOR_SUCCESS,
    payload: project_sector,
  };
}

/**
 * @function
 * @name createProjectSectorsFailure
 * @param {*} error 
 */
export function createProjectSectorsFailure(error) {
  return {
    type: types.CREATE_PROJECT_SECTOR_FAILURE,
    payload: error,
  };
}