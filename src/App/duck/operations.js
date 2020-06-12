import * as actions from './actions';
import {appServices} from "../../API";
import {getHumanResourcesFailure, getHumanResourcesRequest, getHumanResourcesSuccess} from "./actions";



export const openResourceForm = actions.openResourceForm;
export const closeResourceForm = actions.closeResourceForm;

export function getHumanResources(page) {
    return dispatch => {
        dispatch(getHumanResourcesRequest());
        appServices.fetchHumanResources(page).then(
            res => {
                dispatch(getHumanResourcesSuccess(res));
            },
            error => {
                dispatch(getHumanResourcesFailure(error));
            }
        );
    };
}