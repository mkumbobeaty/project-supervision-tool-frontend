import {combineEpics, ofType} from "redux-observable";
import * as types from "./types";
import {catchError, switchMap} from "rxjs/operators";
import {from, of} from "rxjs";
import API from "../../../../API";
import * as actions from "./actions";
import {mapProjectActions} from "../projects";
import { showMapLoader } from "../actions";
import { act } from "react-dom/test-utils";

/**
 * @function
 * @name getSubProjectMapEpic
 * @param action$
 * @return action$
 */
export const getSubProjectMapEpic = action$ => {
    return action$.pipe(
        ofType(types.GET_SUB_PROJECT_START),
        switchMap(({payload}) => {
            return from(API.getSubProject(payload)).pipe(
                switchMap(res => {
                    return from([
                        actions.getSubProjectSuccess(res.data),
                        mapProjectActions.clearProject(),
                    ])
                }),
                catchError(error => of(actions.getSubProjectFailure(error)))
            );
        }),
    )
};

/**
 *
 * @function
 * @name getSubProjectsStatistics
 * @param action$ stream of actions
 */
const getSubProjectsStatistics = action$ => {
    return action$.pipe(
        ofType(types.GET_SUB_PROJECT_STATISTICS_START),
        switchMap(() => {
            return from(API.getSubProjectsStatistics()).pipe(
                switchMap(res => of(actions.getSubProjectStatisticsSuccess(res.data))),
                catchError(error => of(actions.getSubProjectStatisticsFailure(error)))
            );
        }),
    );
}

/**
 * @function
 * @name getSubProjectsOverviewEpic
 * @param action$ stream of actions
 */
const getSubProjectsOverviewEpic = action$ => {
    return action$.pipe(
        ofType(types.GET_SUB_PROJECTS_OVERVIEW_START),
        switchMap(() => {
            return from(API.getSubProjectOverview()).pipe(
                switchMap(res => from([
                    actions.getSubProjectOverviewSuccess(res.data),
                    actions.getSubProjectStatisticsStart()
                ])),
                catchError(error => from([actions.getSubProjectOverviewFailure(error)]))
            );
        }),
    );
}

/**
 *
 * @function
 * @name getSubProjectsByRegionEpic
 * @param action$ stream of actions
 */
const getSubProjectsByRegionEpic = action$ => {
    return action$.pipe(
        ofType(types.GET_SUB_PROJECTS_REGIONS_OVERVIEW_START),
        switchMap(({payload}) => {
            return from(API.getSubProjectsByRegion(payload)).pipe(
                switchMap(res => from([
                    actions.getSubProjectStatisticsStart(payload),
                    actions.getSubProjectsByRegionSuccess(res.data),
                    actions.clearSubProjectStatistics(),
                    actions.showRegionSubProjectsOverview(true),
                    actions.showNationalSubProjectsOverview(false)
                ])),
                catchError(error => of(actions.getSubProjectsByRegionFailures(error)))
            );
        }),
    );
}
export const mapSubProjectEpics = combineEpics(
    getSubProjectMapEpic,
    getSubProjectsStatistics,
    getSubProjectsOverviewEpic,
    getSubProjectsByRegionEpic
);
