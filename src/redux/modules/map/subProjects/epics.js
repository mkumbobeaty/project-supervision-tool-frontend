import {combineEpics, ofType} from "redux-observable";
import * as types from "./types";
import {catchError, switchMap} from "rxjs/operators";
import {from, of} from "rxjs";
import API from "../../../../API";
import * as actions from "./actions";
import {mapProjectActions} from "../projects";

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


export const mapSubProjectEpics = combineEpics(
    getSubProjectMapEpic,
    getSubProjectsStatistics,
);
