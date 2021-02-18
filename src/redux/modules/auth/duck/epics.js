import {ofType} from 'redux-observable';
import {catchError, switchMap} from 'rxjs/operators';
import * as Rx from 'rxjs';
import API from '../../../../API';
import * as actions from './actions';
import * as types from './types'


/**
 * @function loginEpic
 * @description performs login operation
 * @param   action$ stream of actions
 * @returns  returns stream of LOGIN_SUCCESS or LOGIN_FAILURE actions
 * @version 0.1.0
 * @since 0.1.0
 */
export const loginEpic = action$ => {
    return action$.pipe(
        ofType(types.LOGIN_START),
        switchMap(({payload}) => {
            return Rx.from(API.login(payload)).pipe(
                switchMap(({data}) => {
                    saveAccessToken(data?.access_token);
                    return Rx.of(actions.loginSuccess(data?.access_token));
                }),
                catchError(error => Rx.of(actions.loginFailure(error?.message)))
            )
        }),
    );
}


/**
 * @function
 * @name saveAccessToken
 * @description save  access token to local storage
 * @param {String} accessToken
 * */
const saveAccessToken = accessToken => localStorage.setItem('accessToken', accessToken);

