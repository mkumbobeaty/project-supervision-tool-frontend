import {ofType} from 'redux-observable';
import {switchMap} from 'rxjs/operators';
import * as Rx from 'rxjs';
import * as actions from './actions';
import * as types from './types'


export const restoreAccessTokenEpic = action$ => {
    return action$.pipe(
        ofType(types.RELOAD_PAGE),
        switchMap(() => {
            const accessToken = localStorage.getItem('accessToken');
            return Rx.of(actions.restoreAccessToken(accessToken));
        }),
    );
}
