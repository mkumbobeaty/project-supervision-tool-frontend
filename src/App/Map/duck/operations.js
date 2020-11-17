import * as actions from './actions';
import {getGeoJsonFromLocation} from "../../../Util";

export const setActiveMapSideMenuItem = actions.setActiveMapSideMenuItem;
export const setShowFeatureDetails = actions.setShowFeatureDetails;


export const setInitiativesGeoJson = (initiatives = []) => (dispatch) => {
    const data = initiatives.map(initiative => getGeoJsonFromLocation(initiative));
    return dispatch(actions.setInitiativesGeoJson(data))
};

export const setHumanResourceGeoJson = (humanResources = []) => (dispatch) => {
    const data = humanResources.map(humanResource => getGeoJsonFromLocation(humanResource));
    return dispatch(actions.setHumanResourceGeoJson(data))
};

