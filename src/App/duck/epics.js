import { ofType } from 'redux-observable';
import { catchError, switchMap } from 'rxjs/operators';
import * as Rx from 'rxjs';
import * as actions from './actions';
import * as types from './types'
import API from '../../API';


export const restoreAccessTokenEpic = action$ => {
    return action$.pipe(
        ofType(types.RELOAD_PAGE),
        switchMap(() => {
            const accessToken = localStorage.getItem('accessToken');
            return Rx.of(actions.restoreAccessToken(accessToken));
        }),
    );
}

export const regionsEpic = action$ => {
    return action$.pipe(
        ofType(types.GET_REGIONS_START),
        switchMap(() => Rx.from(API.getRegions()).pipe(
            switchMap(res => {return Rx.of(actions.getRegionsSuccess(res.data))}),
            catchError(error => Rx.of(actions.getRegionsFailure(error)))
          )),
    )
}



