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
  export function deleteProjectStart() {
    return {
      type: types.DELETE_PROJECT_START,
    };
  }
  
  export function deleteProjectSuccess(project) {
    return {
      type: types.DELETE_PROJECT_SUCCESS,
      payload: project,
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
   
//  Initiatives

export function getInitiativesRequest() {
  return {
    type: types.GET_INITIATIVES_START,
  };
}

export function getInitiativesSuccess(initiatives) {
  return {
    type: types.GET_INITIATIVES_SUCCESS,
    initiatives,
  };
}

export function getInitiativesFailure(message) {
  return {
    type: types.GET_INITIATIVES_FAILURE,
    message,
  };
}
export function createInitiativeStart() {
  return {
    type: types.CREATE_INITIATIVE_START,
  };
}

export function createInitiativeSuccess(initiative) {
  return {
    type: types.CREATE_INITIATIVE_SUCCESS,
    payload: initiative,
  };
}

export function createInitiativeFailure(error) {
  return {
    type: types.CREATE_INITIATIVE_FAILURE,
    payload: error,
  };
}

export function updateInitiativeStart() {
  return {
    type: types.UPDATE_INITIATIVE_START,
  };
}

export function updateInitiativeSuccess(initiative) {
  return {
    type: types.UPDATE_INITIATIVE_SUCCESS,
    payload: initiative,
  };
}

export function updateInitiativeFailure(error) {
  return {
    type: types.UPDATE_INITIATIVE_FAILURE,
    payload: error,
  };
}

// deleting 
export function deleteInitiativeStart() {
  return {
    type: types.DELETE_INITIATIVE_START,
  };
}

export function deleteInitiativeSuccess(initiative) {
  return {
    type: types.DELETE_INITIATIVE_SUCCESS,
    payload: initiative,
  };
}

export function deleteInitiativeFailure(error) {
  return {
    type: types.DELETE_INITIATIVE_FAILURE,
    payload: error,
  };
}
  
export const selectInitiative = (selectedInitiative) => ({
  type: types.SELECT_INITIATIVE,
  payload: selectedInitiative,
});

export function openInitiativeForm() {
  return {
    type: types.OPEN_INITIATIVES_FORM,
  };
}

export function closeInitiativeForm() {
  return {
    type: types.CLOSE_INITIATIVES_FORM,
  };
}
