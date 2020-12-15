/*  Projects Action creators */
import * as types from "./types";

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


  export function openProjectForm() {
    return {
      type: types.OPEN_PROJECTS_FORM,
    };
  }
  
  export function closeProjectForm() {
    return {
      type: types.CLOSE_PROJECTS_FORM,
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

export function openSubProjectForm() {
  return {
    type: types.OPEN_SUB_PROJECTS_FORM,
  };
}

export function closeSubProjectForm() {
  return {
    type: types.CLOSE_SUB_PROJECTS_FORM,
  };
}

export const selectProject = (selected_project) => ({
  type: types.SELECT_PROJECT,
  payload: selected_project,
});

export function openProjectsForm() {
  return {
    type: types.OPEN_PROJECTS_FORM,
  };
}

export function closeProjectsForm() {
  return {
    type: types.CLOSE_PROJECTS_FORM 
  };
}


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