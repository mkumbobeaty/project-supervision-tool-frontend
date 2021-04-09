import {combineEpics, ofType} from "redux-observable";
import * as types from "./types";
import {catchError, switchMap} from "rxjs/operators";
import {from, of} from "rxjs";
import API from "../../../../API";
import * as actions from "./actions";
import {mapActions} from '../index'
import {mapSubProjectTypes} from "../subProjects";

export const getProjectMapEpic = action$ => {
    return action$.pipe(
        ofType(types.GET_PROJECT_START),
        switchMap(({payload}) => {
            return from(API.getProject(payload)).pipe(
                switchMap(res => {
                    return from([
                        actions.getProjectSuccess(res.data),
                    ])
                }),
                catchError(error => from([actions.getProjectFailure(error)]))
            );
        }),
    );
}

export const projectsListMapEpic = action$ => {
    return action$.pipe(
        ofType(types.GET_PROJECTS_START),
        switchMap((action) => {
            return from(API.getProjects(action.payload)).pipe(
                switchMap(res => {
                    return of(actions.getProjectsSuccess(res.data))
                }),
                catchError(error => of(actions.getProjectsFailure(error)))
            );
        }),
    )
};

export const showProjectDetailsEpic = action$ => {
    return action$.pipe(
        ofType(mapSubProjectTypes.GET_SUB_PROJECTS_START),
        switchMap(() => from([
            mapActions.showProjectsOverview(false),
            mapActions.showProjectDetails(true),
            actions.clearProjects(true),
        ])),
    );
}




export const mapProjectEpics = combineEpics(
    getProjectMapEpic,
    showProjectDetailsEpic,
    projectsListMapEpic,
);
