import * as actions from "./actions";
import * as API from "../../../API";


/**
 * get items operation
 */
export const getItems = () => (dispatch) => {
    dispatch(actions.getItemsStart());
    API.getItems()
        .then( res => dispatch(actions.getItemsSuccess(res)) )
        .catch( err => dispatch(actions.getItemsFailure(err)))
}

/**
 * get agencies operation
 */
export const getAgencies = () => (dispatch) => {
    dispatch(actions.getAgenciesStart());
    API.getAgencies()
        .then( res => dispatch(actions.getAgenciesSuccess(res)) )
        .catch( err => dispatch(actions.getAgenciesFailure(err)))
}

/**
 * get locations operation
 */
export const getLocations = () => (dispatch) => {
    dispatch(actions.getLocationsStart());
    API.getLocations()
        .then( res => dispatch(actions.getLocationsSuccess(res)) )
        .catch( err => dispatch(actions.getLocationsFailure(err)))
}

/**
 * crete  human resources operation
 */
export const createHumanResource = (payload) => (dispatch) => {
    dispatch(actions.createHumanResourceStart());
    API.createHumanResource(payload)
        .then( res => dispatch(actions.createHumanResourceSuccess(res)) )
        .catch( err => dispatch(actions.createHumanResourceFailure(err)))
}