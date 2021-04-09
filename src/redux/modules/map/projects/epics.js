import {combineEpics, ofType} from "redux-observable";
import * as types from "./types";
import {catchError, switchMap} from "rxjs/operators";
import {from} from "rxjs";
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
                        mapActions.clearRegionDetails(),
                        mapActions.showProjectsOverview(false),
                        mapActions.showProjectDetails(true),
                    ])
                }),
                catchError(error => from([actions.getProjectFailure(error), mapActions.clearRegionDetails()]))
            );
        }),
    );
}

export const showProjectDetailsEpic = action$ => {
    return action$.pipe(
        ofType(mapSubProjectTypes.GET_SUB_PROJECTS_START),
        switchMap(() => from([
            mapActions.showProjectsOverview(false),
            mapActions.showProjectDetails(true),
        ])),
    );
}




export const mapProjectEpics = combineEpics(
    getProjectMapEpic,
    showProjectDetailsEpic,
);
