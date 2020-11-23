import * as actions from './actions';
import * as types from './types';
import * as API from '../../../API';
import { ofType } from 'redux-observable';
import { of, from } from 'rxjs';
import { switchMap, catchError, } from "rxjs/operators";

export const projectsListEpic = action$ =>
{
    return action$.pipe(
        ofType(types.GET_PROJECTS_START),
        switchMap(() => {
            return from(API.getProjects()).pipe(
                switchMap(res => { return of(actions.getProjectsSuccess(res.data))}),
                catchError(error => of(actions.getProjectsFailure(error)))
            );
        }),
    )
};


export const deleteProjectEpic = action$ => {
    return action$.pipe(
        ofType(types.DELETE_PROJECT_START),
        switchMap(data => {
            return from(API.deleteProject(data.payload)).pipe(
                switchMap(res => { return of(actions.deleteProjectSuccess(res)) }),
                catchError(error => of(actions.deleteProjectFailure(error)))
            )
        }),

    );
}

export const subProjectsEpic = action$ =>
    action$.pipe(
        ofType(types.GET_SUB_PROJECTS_START),
        switchMap(() => {
            return from(API.getSubProjects())
        }),
        switchMap(result => {
            return of(actions.getSubProjectsSuccess(result.data))
         }),
        catchError(error => of(actions.getSubProjectsFailure(error))
        )
    );

export const deleteSubProjectEpic = action$ =>
    action$.pipe(
        ofType(types.DELETE_SUB_PROJECT_START),
        switchMap(data => {
            return from(API.deleteSubProject(data.payload)).pipe(
                switchMap(res => { return of(actions.deleteSubProjectSuccess(res)) }),
                catchError(error => of(actions.deleteSubProjectFailure(error)))
            )
        }),
        
    )