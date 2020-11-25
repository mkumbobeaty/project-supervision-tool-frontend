import {combineEpics, ofType} from "redux-observable";
import * as types from "./types";
import {catchError, switchMap} from "rxjs/operators";
import {from, of} from "rxjs";
import API from "../../../API";
import * as actions from "./actions";

/**
 * @function
 * @name getProjectsOverviewEpic
 * @param action$ stream of actions
 */
const getProjectsOverviewEpic = action$ =>
{
    return action$.pipe(
        ofType(types.GET_PROJECTS_OVERVIEW_START),
        switchMap(() => {
            return from(API.getProjectOverview()).pipe(
                switchMap(res =>  from([actions.getProjectsOverviewSuccess(res.data), actions.showMapLoader(false)])),
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
const getProjectsByRegionEpic = action$ =>
{
    return action$.pipe(
        ofType(types.GET_PROJECTS_BY_REGION_START),
        switchMap(({ payload }) => {
            return from(API.getProjectsByRegion(payload)).pipe(
                switchMap(res =>  of(actions.getProjectsByRegionSuccess(res.data))),
                catchError(error => of(actions.getProjectsByRegionFailures(error)))
            );
        }),
    );
}


/**
 * @function
 * @name getRegionDetailEpic
 * @param action$ stream of actions
 */
const getRegionDetailEpic = action$ =>
{
    return action$.pipe(
        ofType(types.GET_REGION_START),
        switchMap(({ payload }) => {
            return from(API.getRegionDetails(payload)).pipe(
                switchMap(res =>  from([actions.getRegionSuccess(res.data), actions.clearProjectsOverview()])),
                catchError(error => of(actions.getRegionFailure(error)))
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
    switchMap(({ payload }) => of(actions.getRegionStart(payload)))
);




const handleMapLoaderEpic = actions$ => actions$.pipe(
    ofType(types.GET_PROJECTS_OVERVIEW_START),
    switchMap(() => of(actions.showMapLoader(true)))
);

export const mapRootEpic = combineEpics(
    getProjectsOverviewEpic,
    getProjectsByRegionEpic,
    triggerGetRegionDetailEpic,
    getRegionDetailEpic,
    handleMapLoaderEpic
);
