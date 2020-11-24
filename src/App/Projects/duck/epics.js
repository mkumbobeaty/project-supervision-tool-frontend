import * as actions from './actions';
import * as types from './types';
import API from '../../../API';
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
    );
}
