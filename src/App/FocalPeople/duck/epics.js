import * as actions from './actions';
import * as types from './types';
import API from '../../../API';
import { ofType } from 'redux-observable';
import { of, from } from 'rxjs';
import { switchMap, catchError, } from "rxjs/operators";

export const focalPeopleEpic = action$ => {
    return action$.pipe(
        ofType(types.GET_FOCAL_PEOPLE_START),
        switchMap(() => {
            return from(API.getFocalPeople()).pipe(
                switchMap(res => { return of(actions.getFocalPeopleSuccess(res)) }),
                catchError(error => of(actions.getFocalPeopleFailure(error)))
            );
        }),
    )
};