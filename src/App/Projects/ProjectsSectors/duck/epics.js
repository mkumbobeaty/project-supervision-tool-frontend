import * as actions from './actions';
import * as types from './types';
import API from '../../../../API';
import { ofType, combineEpics } from 'redux-observable';
import { of, from } from 'rxjs';
import { switchMap, catchError, } from "rxjs/operators";

const getsectorsEpic = action$ => {
    return action$.pipe(
        ofType(types.GET_SECTORS_START),
        switchMap(() =>  {
            return from(API.getSectors()).pipe(
            switchMap(res => { 
                return of(actions.getSectorsSuccess(res.data)) }),
            catchError(error => of(actions.getSectorsFailure(error)))
        )}
        ),
    )                                                                                                                                                                                                       
}

export const  sectorsEpic= combineEpics(
    getsectorsEpic
)
