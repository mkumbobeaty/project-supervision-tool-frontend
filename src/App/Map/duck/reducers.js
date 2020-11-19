import * as types from "./types";

const initialState = {
    activeMapSideMenuItem: '',
    humanResourcesGeoJson: [],
    initiativesGeoJson: [],
    showFeatureDetails: false

}
export const map = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_ACTIVE_MAP_SIDE_MENU_ITEM:
            return {...state, activeMapSideMenuItem: action.payload};
        case types.SET_SHOW_FEATURE_DETAILS:
            return {...state, showFeatureDetails: action.payload};
        case types.SET_HUMAN_RESOURCES_GEO_JSON:
            return {...state, humanResourcesGeoJson: action.payload};
        case types.SET_INITIATIVES_GEO_JSON:
            return  {...state, initiativesGeoJson: action.payload};
        default:
            return state;
    }
};
