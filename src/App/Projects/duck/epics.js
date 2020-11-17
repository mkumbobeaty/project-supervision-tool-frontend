import * as actions from './actions';
import * as types from './types';
import * as API from '../../../API';
import { ofType } from 'redux-observable';
import { of, from } from 'rxjs';
import { switchMap, catchError, } from "rxjs/operators";

export const projectsListEpic = action$ =>
    action$.pipe(
        ofType(types.GET_PROJECTS_START),
        switchMap(() => {
            return from(API.getProjects())
        }),
        switchMap(data => { return of(actions.getProjectsSuccess(data))}),
        catchError(error => of(actions.getProjectsFailure(error))
        )
    );