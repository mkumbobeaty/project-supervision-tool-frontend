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

/**
 * @function
 * @name createUserEPic
 * @param action$
 * @return action$
 */
export const createUserEPic = action$ => {
    return action$.pipe(
        ofType(types.CREATE_USER_START),
        switchMap(({payload}) => {
            return from(API.createUsers(payload))
        }),
        switchMap(res => { return of(actions.createUserSuccess(res), actions.getUsersStart()) }),
        catchError(error => of(actions.createUserFailure(error)))
    )
}

/**
 * @function
 * @name editUserEpic
 * @param action$
 * @return action$
 */
 export const editUserEpic = action$ => {
    return action$.pipe(
        ofType(types.EDIT_USER_START),
        switchMap(({payload}) => {
            return from(API.editUser(payload, payload.id)).pipe(
                switchMap(res => { return of(actions.editUserSuccess(res), actions.getUsersStart()) }),
            )
        }),
        catchError(error => of(actions.editUserFailure(error)))
    );
}

/**
 * @function
 * @name deleteUserEpic
 * @param action$
 * @return action$
 */
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
