import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import API from '../../../API';
import * as actions from './actions';
import * as types from './types';

/**
 * @function
 * @name getUsersEpic
 * @description gets all users 
 * @param action$
 * @return actions
 */

export const getUsersEpic = action$  => {
    return action$.pipe(
        ofType(types.GET_USERS_START),
        switchMap(() => {
            return from(API.getUsers()).pipe(
                switchMap(res => {
                    return of(actions.getUsersSuccess(res.data))
                }),
                catchError(error => of(actions.getUsersFailure(error)))
            )
        }) 
    )
}

export const deleteUserEpic = action$ => {
    return action$.pipe(
        ofType(types.DELETE_USER_START),
        switchMap(({payload}) => {
            return from(API.deleteUser(payload)).pipe(
                switchMap(res => { return of(actions.deleteUserSuccess(res), actions.getUsersStart()) }),
            )
        }),
        catchError(error => of(actions.deleteUserFailure(error)))
    );
}
