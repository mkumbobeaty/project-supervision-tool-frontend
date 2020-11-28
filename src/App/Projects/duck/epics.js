import * as actions from './actions';
import { mapActions } from '../../Map/duck';
import * as types from './types';
import API from '../../../API';
import {ofType, combineEpics} from 'redux-observable';
import {of, from} from 'rxjs';
import {switchMap, catchError,} from "rxjs/operators";

export const projectsListEpic = action$ => {
    return action$.pipe(
        ofType(types.GET_PROJECTS_START),
        switchMap(() => {
            return from(API.getProjects()).pipe(
                switchMap(res => {
                    return of(actions.getProjectsSuccess(res.data))
                }),
                catchError(error => of(actions.getProjectsFailure(error)))
            );
        }),
    );
}

export const getProjectEpic = action$ => {
    return action$.pipe(
        ofType(types.GET_PROJECT_START),
        switchMap(({payload}) => {
            return from(API.getProject(payload)).pipe(
                switchMap(res => {
                    return from([actions.getProjectSuccess(res.data), mapActions.clearRegionProjects()])
                }),
                catchError(error => from([actions.getProjectFailure(error), mapActions.clearRegionProjects()]))
            );
        }),
    );
}


export const projectsRootEpic = combineEpics(projectsListEpic, getProjectEpic);


