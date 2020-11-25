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
  export function createProjectStart() {
    return {
      type: types.CREATE_PROJECT_START,
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
  export function getProjectStart() {
    return {
        type: types.GET_PROJECT_START,
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
  
  export function getItemsStart() {
    return {
      type: types.GET_ITEMS_START,
    };
  }
  
  export function getItemsSuccess(items) {
    return {
      type: types.GET_ITEMS_SUCCESS,
      payload: items,
    };
  }
  
  export function getItemsFailure(error) {
    return {
      type: types.GET_AGENCIES_FAILURE,
      payload: error,
    };
  }
  
  /*  Agencies Action creators */
  
  export function getAgenciesStart() {
    return {
      type: types.GET_AGENCIES_START,
    };
  }
  
  export function getAgenciesSuccess(agencies) {
    return {
      type: types.GET_AGENCIES_SUCCESS,
      payload: agencies,
    };
  }
  
  export function getAgenciesFailure(error) {
    return {
      type: types.GET_AGENCIES_FAILURE,
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
  
  export function getDistrictsStart() {
    return {
      type: types.GET_DISTRICTS_START,
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
export function deleteSubProjectStart() {
  return {
    type: types.DELETE_SUB_PROJECT_START,
  };
}

export function deleteSubProjectSuccess(sub_project_id) {
  return {
    type: types.DELETE_PROJECT_SUCCESS,
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
