import * as actions from "./actions";
import * as API from "../../../API";

//
export const selectHumanResource = actions.selectHumanResource;

/**
 * get items operation
 */
export const getItems = () => (dispatch) => {
  dispatch(actions.getItemsStart());
  API.getItems()
    .then((res) => dispatch(actions.getItemsSuccess(res)))
    .catch((err) => dispatch(actions.getItemsFailure(err)));
};

export const openResourceForm = actions.openResourceForm;
export const closeResourceForm = actions.closeResourceForm;
export const openInitiativeForm = actions.openInitiativeForm;
export const closeInitiativeForm = actions.closeInitiativeForm;

export const getHumanResources = (page) => (dispatch) => {
  dispatch(actions.getHumanResourcesRequest());
  API.fetchHumanResources(page)
    .then((res) => dispatch(actions.getHumanResourcesSuccess(res)))
    .catch((err) => dispatch(actions.getHumanResourcesFailure(err)));
};
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
 * get locations operation
 */
export const getLocations = () => (dispatch) => {
  dispatch(actions.getLocationsStart());
  API.getLocations()
    .then((res) => dispatch(actions.getLocationsSuccess(res)))
    .catch((err) => dispatch(actions.getLocationsFailure(err)));
};

/**
 * create  human resources operation
 */
export const createHumanResource = (payload) => (dispatch) => {
  dispatch(actions.createHumanResourceStart());
  API.createHumanResource(payload)
    .then((res) => dispatch(actions.createHumanResourceSuccess(res)))
    .catch((err) => dispatch(actions.createHumanResourceFailure(err)));
};

/**
 * update human resources operation
 */
export const updateHumanResource = (payload) => (dispatch) => {
  dispatch(actions.updateHumanResourceStart());
  debugger;
  API.updateHumanResource(payload, payload.id)
    .then((res) => dispatch(actions.updateHumanResourceSuccess(res)))
    .catch((err) => dispatch(actions.updateHumanResourceFailure(err)));
};

/**
 * delete human resources operation
 */
export const deleteHumanResource = (payload) => (dispatch) => {
  dispatch(actions.deleteHumanResourceStart());
  API.deleteHumanResource(payload)
    .then((res) => dispatch(actions.deleteHumanResourceSuccess(res)))
    .catch((err) => dispatch(actions.deleteHumanResourceFailure(err)));
};


// Initiative
export const getInitiatives = (page) => (dispatch) => {
  dispatch(actions.getInitiativesRequest());
  API.fetchInitiatives(page)
    .then((res) => dispatch(actions.getInitiativesSuccess(res)))
    .catch((err) => dispatch(actions.getInitiativesFailure(err)));
};

/**
 * create  human resources operation
 */
export const createInitiative = (payload) => (dispatch) => {
  dispatch(actions.createInitiativeStart());
  API.createInitiative(payload)
    .then((res) => dispatch(actions.createInitiativeSuccess(res)))
    .catch((err) => dispatch(actions.createInitiativeFailure(err)));
};

/**
 * update human resources operation
 */
export const updateInitiative = (payload) => (dispatch) => {
  dispatch(actions.updateInitiativeStart());
  debugger;
  API.updateInitiative(payload, payload.id)
    .then((res) => dispatch(actions.updateInitiativeSuccess(res)))
    .catch((err) => dispatch(actions.updateInitiativeFailure(err)));
};

/**
 * delete human resources operation
 */
export const deleteInitiative = (payload) => (dispatch) => {
  dispatch(actions.deleteInitiativeStart());
  API.deleteInitiative(payload)
    .then((res) => dispatch(actions.deleteInitiativeSuccess(res)))
    .catch((err) => dispatch(actions.deleteInitiativeFailure(err)));
};