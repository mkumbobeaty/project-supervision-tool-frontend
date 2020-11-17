import {ofType} from 'redux-observable';
import {catchError, switchMap, filter} from 'rxjs/operators';
import * as Rx from 'rxjs';
import * as API from '../../../API';
import * as actions from './actions';
import * as types from './types'


export const loginEpic = action$ =>
    action$.pipe(
        ofType(types.LOGIN_START),
        switchMap(({payload}) => {
            return Rx.from(API.login(payload))
        }),
        switchMap(res => { return Rx.of(actions.loginSuccess(res))}),
        catchError(error => Rx.of(actions.loginFailure(error))
        )
    );
