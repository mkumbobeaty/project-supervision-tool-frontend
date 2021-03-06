import {combineEpics, ofType} from "redux-observable";
import * as types from "./types";
import {catchError, switchMap} from "rxjs/operators";
import {from, of} from "rxjs";
import API from "../../../API";
import * as actions from "./actions";
import {mapProjectActions, mapProjectEpics} from './projects/'
import {mapSubProjectActions, mapSubProjectEpics} from "./subProjects";
import { mapDataSetsEpics } from './dataSets'

/**
 * @function
 * @name getProjectsOverviewEpic
 * @param action$ stream of actions
 */
const getProjectsOverviewEpic = action$ => {
    return action$.pipe(
        ofType(types.GET_PROJECTS_OVERVIEW_START),
        switchMap(() => {
            return from(API.getProjectOverview()).pipe(
                switchMap(res => from([
                    actions.getProjectsOverviewSuccess(res.data),
                    actions.showMapLoader(false),
                    actions.getProjectsStatisticsStart(),
                    mapSubProjectActions.clearSubProjectOverview()
                ])),
                catchError(error => from([actions.getProjectsOverviewFailure(error), actions.showMapLoader(false)]))
            );
        }),
    );
}


/**
 *
 * @function
 * @name getProjectsByRegionEpic
 * @param action$ stream of actions
 */
const getProjectsByRegionEpic = action$ => {
    return action$.pipe(
        ofType(types.GET_PROJECTS_BY_REGION_START),
        switchMap(({payload}) => {
            return from(API.getProjectsByRegion(payload)).pipe(
                switchMap(res => from([
                    actions.getRegionProjectStatisticsStart(payload),
                    actions.getProjectsByRegionSuccess(res.data),
                    actions.clearProjectsStatistics(),
                    actions.showRegionalProjectsOverview(true),
                    actions.showNationalProjectsOverview(false),
                ])),
                catchError(error => of(actions.getProjectsByRegionFailures(error)))
            );
        }),
    );
}

/**
 *
 * @function
 * @name getRegionProjectStatisticsEpic
 * @param action$ stream of actions
 */
const getRegionProjectStatisticsEpic = action$ => {
    return action$.pipe(
        ofType(types.GET_REGION_PROJECT_STATISTICS_START),
        switchMap(({payload}) => {
            return from(API.getRegionProjectStatistics(payload)).pipe(
                switchMap(res => from([
                    actions.getRegionProjectStatisticsSuccess(res.data),
                ])),
                catchError(error => of(actions.getRegionProjectStatisticsFailure(error)))
            );
        }),
    );
}


/**
 *
 * @function
 * @name getProjectsStatistics
 * @param action$ stream of actions
 */
const getProjectsStatistics = action$ => {
    return action$.pipe(
        ofType(types.GET_PROJECTS_STATISTICS_START),
        switchMap(() => {
            return from(API.getProjectsStatistics()).pipe(
                switchMap(res => of(actions.getProjectsStatisticsSuccess(res.data))),
                catchError(error => of(actions.getProjectsStatisticsFailure(error)))
            );
        }),
    );
}


/**
 *
 * @function
 * @name getProjectStatistics
 * @param action$ stream of actions
 */
const getProjectStatistics = action$ => {
    return action$.pipe(
        ofType(types.GET_PROJECT_STATISTICS_START),
        switchMap(({payload}) => {
            return from(API.getProjectsStatistics(payload)).pipe(
                switchMap(res => of(actions.getProjectStatisticsSuccess(res.data))),
                catchError(error => of(actions.getProjectStatisticsFailure(error)))
            );
        }),
    );
}


/**
 * @function
 * @name getRegionDetailEpic
 * @param action$ stream of actions
 */
const getRegionDetailEpic = action$ => {
    return action$.pipe(
        ofType(types.GET_REGION_START),
        switchMap(({payload}) => {
            return from(API.getRegionDetails(payload)).pipe(
                switchMap(res => from([actions.getRegionSuccess(res.data), actions.clearProjectsOverview()])),
                catchError(error => of(actions.getRegionFailure(error)))
            );
        }),
    );
}


/**
 * @function
 * @name getWfsLayerDataEpic
 * @param action$ stream of actions
 */
const getWfsLayerDataEpic = action$ => {
    return action$.pipe(
        ofType(types.GET_WFS_LAYER_DATA_START),
        switchMap(({payload}) => {
            return from(API.getWfsLayerData(payload)).pipe(
                switchMap(res => from([actions.getWfsLayerDataSuccess(res)])),
                catchError(error => of(actions.getWfsLayerDataFailure(error)))
            );
        }),
    );
}


/**
 * @function
 * @name triggerGetRegionDetailEpic
 * @param actions$ stream of actions
 */
const triggerGetRegionDetailEpic = actions$ => actions$.pipe(
    ofType(types.GET_PROJECTS_BY_REGION_START),
    switchMap(({payload}) => of(actions.getRegionStart(payload)))
);


const handleMapLoaderEpic = actions$ => actions$.pipe(
    ofType(types.GET_PROJECTS_OVERVIEW_START),
    switchMap(() => of(actions.showMapLoader(true)))
);


// SIDE NAV MENU EPICS
const backFromSubProjectsToProjectsEpics = actions$ => actions$.pipe(
    ofType(types.BACK_SUB_PROJECTS_TO_PROJECTS),
    switchMap(({payload}) => from([
        mapProjectActions.getProjectsStart(payload),
        actions.showProjectDetails(false),
        actions.showProjectsOverview(true),
        mapSubProjectActions.clearSubProjects()
    ]))
);

const backFromSubProjectElementToSubProjectDetailsEpics = actions$ => actions$.pipe(
    ofType(types.BACK_SUB_PROJECT_ELEMENT_TO_SUB_PROJECT_DETAILS),
    switchMap(({payload}) => from([
        mapSubProjectActions.getSubProjectStart(payload),
        actions.showSubProjectDetails(true),
        actions.showSubProjectElementDetails(false),
        actions.clearWfsLayerData(),
    ]))
);


export const mapRootEpic = combineEpics(
    mapProjectEpics,
    mapSubProjectEpics,
    mapDataSetsEpics,
    getProjectsOverviewEpic,
    getProjectsByRegionEpic,
    triggerGetRegionDetailEpic,
    getRegionDetailEpic,
    handleMapLoaderEpic,
    getProjectsStatistics,
    getProjectStatistics,
    getRegionProjectStatisticsEpic,
    backFromSubProjectsToProjectsEpics,
    backFromSubProjectElementToSubProjectDetailsEpics,
    getWfsLayerDataEpic,
);
