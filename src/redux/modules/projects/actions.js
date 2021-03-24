/*  Projects Action creators */
import * as types from "./types";
import {makeActionCreator} from "../../../Util";

// action creator for fetching project
export function getProjectsStart(params={}) {
    return {
      type: types.GET_PROJECTS_START,
      payload: params,
    };
  }
  
  export function getProjectsSuccess(projects) {
    return {
      type: types.GET_PROJECTS_SUCCESS,
      payload:projects,
    };
  }
  
  export function getProjectsFailure(message) {
    return {
      type: types.GET_PROJECTS_FAILURE,
      message,
    };
  }
  
//  creating project
  export function createProjectStart(project) {
    return {
      type: types.CREATE_PROJECT_START,
      payload:project
    };
  }
  
  export function createProjectSuccess(project) {
    return {
      type: types.CREATE_PROJECT_SUCCESS,
      payload: project,
    };
  }
  
  export function createProjectFailure(error) {
    return {
      type: types.CREATE_PROJECT_FAILURE,
      payload: error,
    };
  }
  
//   action creator for updating project
  export function updateProjectStart() {
    return {
      type: types.UPDATE_PROJECT_START,
    };
  }
  
  export function updateProjectSuccess(project) {
    return {
      type: types.UPDATE_PROJECT_SUCCESS,
      payload: project,
    };
  }
  
  export function updateProjectFailure(error) {
    return {
      type: types.UPDATE_PROJECT_FAILURE,
      payload: error,
    };
  }
  
  // deleting Project
  export function deleteProjectStart(project_id) {
    return {
      type: types.DELETE_PROJECT_START,
      payload:project_id
    };
  }
  
  export function deleteProjectSuccess(project_id) {
    return {
      type: types.DELETE_PROJECT_SUCCESS,
      payload: project_id,
    };
  }
  
  export function deleteProjectFailure(error) {
    return {
      type: types.DELETE_PROJECT_FAILURE,
      payload: error,
    };
  }
  
  /*  Single Project Action creators */
  export function getProjectStart(id) {
    return {
        type: types.GET_PROJECT_START,
        payload: id,
    };
  }

  /*  Single Project Action creators */
  export function clearProject() {
    return {
        type: types.CLEAR_PROJECT
    };
  }
  
  export function getProjectSuccess(data) {
    return {
        type: types.GET_PROJECT_SUCCESS,
        payload: data,
    };
  }
  
  export function getProjectFailure(error) {
    return {
        type: types.GET_PROJECT_FAILURE,
        payload: error,
    };
  }



  /*  Agencies Action creators */
  
  export function getRegionsStart() {
    return {
      type: types.GET_REGIONS_START,
    };
  }
  
  export function getRegionsSuccess(regions) {
    return {
      type: types.GET_REGIONS_SUCCESS,
      payload: regions,
    };
  }
  
  export function getRegionsFailure(error) {
    return {
      type: types.GET_REGIONS_FAILURE,
      payload: error,
    };
  }
  
  /*  Districts Action creators */
  
  export function getDistrictsStart(region_id) {
    return {
      type: types.GET_DISTRICTS_START,
      payload:region_id
    };
  }
  
  export function getDistrictsSuccess(districts) {
    return {
      type: types.GET_DISTRICTS_SUCCESS,
      payload: districts,
    };
  }
  
  export function getDistrictsFailure(error) {
    return {
      type: types.GET_DISTRICTS_FAILURE,
      payload: error,
    };
  }
   


// retrieve a single sub project

/**
 * @function
 * @name getSubProjectStart
 * @param {Number} subProjectId
 * @return {Object} action
 * */
export const getSubProjectStart = makeActionCreator(types.GET_SUB_PROJECT_START, 'payload');

/**
 * @function
 * @name getSubProjectSuccess
 * @param {Object} payload sub project
 * @return {Object} action
 * */
export const getSubProjectSuccess = makeActionCreator(types.GET_SUB_PROJECT_SUCCESS, 'payload');

/**
 * @function
 * @name getSubProjectFailure
 * @param {Object} payload sub project failure response
 * @return {Object} action
 * */
export const getSubProjectFailure = makeActionCreator(types.GET_SUB_PROJECT_FAILURE, 'payload');


/**
 * @function
 * @name openSubProjectForm
 * @return {Object} action
 * */
export const openSubProjectForm = makeActionCreator(types.OPEN_SUB_PROJECT_FORM);


/**
 * @function
 * @name openSubProjectSurveyForm
 * @return {Object} action
 * */
export const openSubProjectSurveyForm = makeActionCreator(types.OPEN_SUB_PROJECT_SURVEY_FORM);

/**
 * @function
 * @name closeSubProjectForm
 * @return {Object} action
 * */
export const closeSubProjectForm = makeActionCreator(types.CLOSE_SUB_PROJECT_FORM);

/**
 * @function
 * @name closeSubProjectSurveyForm
 * @return {Object} action
 * */
export const closeSubProjectSurveyForm = makeActionCreator(types.CLOSE_SUB_PROJECT_SURVEY_FORM);


/**
 * @function
 * @name clearSubProject
 * @return {Object} action
 */
export const clearSubProject = makeActionCreator(types.CLEAR_SUB_PROJECT);


// retrieve a single sub project element

/**
 * @function
 * @name getEnvironmentalCategoriesStart
 * @return {Object} action
 * */
export const getEnvironmentalCategoriesStart = makeActionCreator(types.GET_ENVIRONMENTAL_CATEGORIES_START);

/**
 * @function
 * @name getEnvironmentalCategoriesSuccess
 * @param {Object} payload environmental categories
 * @return {Object} action
 * */
export const getEnvironmentalCategoriesSuccess = makeActionCreator(types.GET_ENVIRONMENTAL_CATEGORIES_SUCCESS, 'payload');

/**
 * @function
 * @name getEnvironmentalCategoriesFailure
 * @param {Object} payload error  response
 * @return {Object} action
 * */
export const getEnvironmentalCategoriesFailure = makeActionCreator(types.GET_ENVIRONMENTAL_CATEGORIES_FAILURE, 'payload');

// retrieve a single sub project element

/**
 * @function
 * @name getSubProjectElementStart
 * @param {Number} subProjectElementId
 * @return {Object} action
 * */
export const getSubProjectElementStart = makeActionCreator(types.GET_SUB_PROJECT_ELEMENT_START, 'payload');

/**
 * @function
 * @name getSubProjectElementSuccess
 * @param {Object} payload sub project element
 * @return {Object} action
 * */
export const getSubProjectElementSuccess = makeActionCreator(types.GET_SUB_PROJECT_ELEMENT_SUCCESS, 'payload');

/**
 * @function
 * @name getSubProjectElementFailure
 * @param {Object} payload sub project element failure response
 * @return {Object} action
 * */
export const getSubProjectElementFailure = makeActionCreator(types.GET_SUB_PROJECT_ELEMENT_FAILURE, 'payload');


/**
 * @function
 * @name clearSubProjectElement
 * @return {Object} action
 */
export const clearSubProjectElement = makeActionCreator(types.CLEAR_SUB_PROJECT_ELEMENT);


export function createSubProjectStart(payload) {
  return {
    type: types.CREATE_SUB_PROJECT_START,
    payload
  };
}

export function createSubProjectSuccess(sub_project) {
  return {
    type: types.CREATE_SUB_PROJECT_SUCCESS,
    payload: sub_project,
  };
}

export function createSubProjectFailure(error) {
  return {
    type: types.CREATE_SUB_PROJECT_FAILURE,
    payload: error,
  };
}

export function updateSubProjectStart() {
  return {
    type: types.UPDATE_SUB_PROJECT_START,
  };
}

export function updateSubProjectSuccess(sub_project) {
  return {
    type: types.UPDATE_SUB_PROJECT_SUCCESS,
    payload: sub_project,
  };
}

export function updateSubProjectFailure(error) {
  return {
    type: types.UPDATE_SUB_PROJECT_FAILURE,
    payload: error,
  };
}

// deleting 
export function deleteSubProjectStart(project_id) {
  return {
    type: types.DELETE_SUB_PROJECT_START,
    payload:project_id
  };
}

export function deleteSubProjectSuccess(sub_project_id) {
  return {
    type: types.DELETE_SUB_PROJECT_SUCCESS,
    payload: sub_project_id,
  };
}

export function deleteSubProjectFailure(error) {
  return {
    type: types.DELETE_PROJECT_FAILURE,
    payload: error,
  };
}
  
export const selectSubProject = (selected_sub_project) => ({
  type: types.SELECT_SUB_PROJECT,
  payload: selected_sub_project,
});

export const selectProject = (selected_project) => ({
  type: types.SELECT_PROJECT,
  payload: selected_project,
});

/**
 * @function
 * @name getLocationsStart
 * @param {String} payload the location
 */  
 export function getLocationsStart() {
  return {
    type: types.GET_LOCATIONS_START,
  };
}

/**
 * @function
 * @name getLocationsSuccess
 * @param {*} location 
 */
export function getLocationsSuccess(locations) {
  return {
    type: types.GET_LOCATIONS_SUCCESS,
    payload: locations,
  };
}

/**
 * @function
 * @name getLocationsFailure
 * @param {*} error 
 */
export function getLocationsFailure(error) {
  return {
    type: types.GET_PROJECTS_FAILURE,
    payload: error,
  };
}

/**
 * @function
 * @name createProjectLocationStart
 * @param {*} project_location 
 */
export function createProjectLocationStart(project_location) {
  return {
    type: types.CREATE_PROJECT_LOCATION_START,
    payload:project_location
  };
}

/**
 * @function
 * @name createProjectLocationSuccess
 * @param {*} project_location 
 */
export function createProjectLocationSuccess(project_location) {
  return {
    type: types.CREATE_PROJECT_LOCATION_SUCCESS,
    payload: project_location,
  };
}

/**
 * @function
 * @name createProjectLocationFailure
 * @param {*} error 
 */
export function createProjectLocationFailure(error) {
  return {
    type: types.CREATE_PROJECT_LOCATION_FAILURE,
    payload: error,
  };
}

/**
 * @function
 * @name getItemsStart
 * @return {Object} action
 * */
export const getItemsStart = makeActionCreator(types.GET_ITEMS_START);

/**
 * @function
 * @name getItemsSuccess
 * @param {Object} payload Items
 * @return {Object} action
 * */
export const getItemsSuccess = makeActionCreator(types.GET_ITEMS_SUCCESS, 'payload');

/**
 * @function
 * @name getItemsFailure
 * @param {Object} payload  Items failure response
 * @return {Object} action
 * */
export const getItemsFailure = makeActionCreator(types.GET_ITEMS_FAILURE, 'payload');


/**
 * @function
 * @name getProgressStart
 * @return {Object} action
 * */
export const getProgressStart = makeActionCreator(types.GET_PROGRESS_START);

/**
 * @function
 * @name getProgressSuccess
 * @param {Object} payload Progress
 * @return {Object} action
 * */
export const getProgressSuccess = makeActionCreator(types.GET_PROGRESS_SUCCESS, 'payload');

/**
 * @function
 * @name getProgressFailure
 * @param {Object} payload  Progress failure response
 * @return {Object} action
 * */
export const getProgressFailure = makeActionCreator(types.GET_PROJECTS_FAILURE, 'payload');

