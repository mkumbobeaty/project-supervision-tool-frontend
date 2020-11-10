import * as actions from "./actions";
import * as API from "../../../API";

//
export const selectProject = actions.selectProject;
export const selectInitiative = actions.selectInitiative;

/**
 * get items operation
 */
export const getItems = () => (dispatch) => {
  dispatch(actions.getItemsStart());
  API.getItems()
    .then((res) => dispatch(actions.getItemsSuccess(res)))
    .catch((err) => dispatch(actions.getItemsFailure(err)));
};

export const openProjectForm = actions.openProjectForm;
export const closeProjectForm = actions.closeProjectForm;
export const openInitiativeForm = actions.openInitiativeForm;
export const closeInitiativeForm = actions.closeInitiativeForm;

/**
 * get agencies operation
 */
export const getAgencies = () => (dispatch) => {
  dispatch(actions.getAgenciesStart());
  API.getAgencies()
    .then((res) => dispatch(actions.getAgenciesSuccess(res)))
    .catch((err) => dispatch(actions.getAgenciesFailure(err)));
};

/**
 * get regions operation
 */
export const getRegions = () => (dispatch) => {
  dispatch(actions.getRegionsStart());
  API.getRegions()
    .then((res) => dispatch(actions.getRegionsSuccess(res)))
    .catch((err) => dispatch(actions.getRegionsFailure(err)));
};

/**
 * get districts operation
 */
export const getDistricts = (regionId) => (dispatch) => {
  dispatch(actions.getDistrictsStart());
  API.getDistricts(regionId)
    .then((res) => dispatch(actions.getDistrictsSuccess(res)))
    .catch((err) => dispatch(actions.getDistrictsFailure(err)));
};

/** get projects operation */
export const getProjects = (page) => (dispatch) => {
  dispatch(actions.getProjectsRequest());
  API.fetchProjects(page)
    .then((res) => dispatch(actions.getProjectsSuccess(res)))
    .catch((err) => dispatch(actions.getProjectsFailure(err)));
};

/**
 * create  project operation
 */
export const createProject = (payload) => (dispatch) => {
  dispatch(actions.createProjectStart());
  API.createProjects(payload)
    .then((res) => {
      dispatch(actions.createProjectSuccess(res));
      dispatch(getProjects());
    })
    .catch((err) => dispatch(actions.createProjectFailure(err)));
};

/**
 * update project operation
 */
export const updateProject = (payload, projectId) => (dispatch) => {
  dispatch(actions.updateProjectStart());
  API.updateProject(payload, projectId)
    .then((res) => {
      dispatch(actions.updateProjectSuccess(res));
      dispatch(getProjects());
    })
    .catch((err) => dispatch(actions.updateProjectFailure(err)));
};

/**
 * delete project operation
 */
export const deleteProject = (payload) => (dispatch) => {
  dispatch(actions.deleteProjectStart());
  API.deleteProject(payload)
    .then((res) => {
      dispatch(actions.deleteProjectSuccess(res));
      dispatch(getProjects());
    })
    .catch((err) => dispatch(actions.deleteProjectFailure(err)));
};

/**
 * get single human resource operation
 */
export const getProject = (payload) => (dispatch) => {
  dispatch(actions.getProjectStart());
  API.getProject(payload)
    .then((res) => {
      dispatch(actions.getProjectSuccess(res.data));
    })
    .catch((err) => dispatch(actions.getProjectFailure(err)));
};

/** search projects */
export const searchProjects = (searchValue) => (dispatch) => {
  dispatch(actions.getProjectsRequest());
  debugger
  API.searchProjects(searchValue)
    .then((res) => dispatch(actions.getProjectsSuccess(res)))
    .catch((err) => dispatch(actions.getProjectsFailure(err)));
};

// Initiative
export const getInitiatives = (page) => (dispatch) => {
  dispatch(actions.getInitiativesRequest());
  API.fetchInitiatives(page)
    .then((res) => dispatch(actions.getInitiativesSuccess(res)))
    .catch((err) => dispatch(actions.getInitiativesFailure(err)));
};

/**
 * cretives operation
 */
export const createInitiative = (payload) => (dispatch) => {
  dispatch(actions.createInitiativeStart());
  API.createInitiative(payload)
    .then((res) => dispatch(actions.createInitiativeSuccess(res)))
    .catch((err) => dispatch(actions.createInitiativeFailure(err)));
};

/**
 * uptives operation
 */
export const updateInitiative = (payload) => (dispatch) => {
  dispatch(actions.updateInitiativeStart());
  debugger;
  API.updateInitiative(payload, payload.id)
    .then((res) => dispatch(actions.updateInitiativeSuccess(res)))
    .catch((err) => dispatch(actions.updateInitiativeFailure(err)));
};

/**
 * delete Initiatives operation
 */
export const deleteInitiative = (payload) => (dispatch) => {
  dispatch(actions.deleteInitiativeStart());
  API.deleteInitiative(payload)
    .then((res) => dispatch(actions.deleteInitiativeSuccess(res)))
    .catch((err) => dispatch(actions.deleteInitiativeFailure(err)));
};
