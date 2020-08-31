import * as types from "./types";

export function setInitiativesGeoJson(initiativesGeoJson) {
    return {
        type: types.SET_INITIATIVES_GEO_JSON,
        payload: initiativesGeoJson,
    };
}

export function setHumanResourceGeoJson(humanResourcesGeoJson) {
    return {
        type: types.SET_HUMAN_RESOURCES_GEO_JSON,
        payload: humanResourcesGeoJson,
    };
}

export function setActiveMapSideMenuItem(active) {
    return {
        type: types.SET_ACTIVE_MAP_SIDE_MENU_ITEM,
        payload: active,
    };
}
