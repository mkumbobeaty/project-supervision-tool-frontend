/*  Projects Action creators */
import * as types from "./types";
import {makeActionCreator} from "../../../Util";

// action creator for fetching project
export function getProjectsStart() {
    return {
      type: types.GET_PROJECTS_START,
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
   
//  SubProjects
export function getSubProjectsStart() {
  return {
    type: types.GET_SUB_PROJECTS_START,
  };
}

export function getSubProjectsSuccess(sub_projects) {
  return {
    type: types.GET_SUB_PROJECTS_SUCCESS,
    payload:sub_projects,
  };
}

export function getSubProjectsFailure(message) {
  return {
    type: types.GET_SUB_PROJECTS_FAILURE,
    message,
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
 * @name clearSubProject
 * @return {Object} action
 */
export const clearSubProject = makeActionCreator(types.CLEAR_SUB_PROJECT);


export function createSubProjectStart() {
  return {
    type: types.CREATE_SUB_PROJECT_START,
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