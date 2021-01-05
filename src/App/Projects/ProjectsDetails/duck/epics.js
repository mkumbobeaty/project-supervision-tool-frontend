import * as actions from './actions';
import * as types from './types';
import API from '../../../../API';
import { ofType, combineEpics } from 'redux-observable';
import { of, from } from 'rxjs';
import { switchMap, catchError, } from "rxjs/operators";

const getBorrowersEpic = action$ => {
    return action$.pipe(
        ofType(types.GET_BORROWERS_START),
        switchMap(() =>  {
            return from(API.getBorrowers()).pipe(
            switchMap(res => { 
                return of(actions.getBorrowersSuccess(res.data)) }),
            catchError(error => of(actions.getBorrowersFailure(error)))
        )}
        ),
    )                                                                                                                                                                                                       
}


export const  projectDetailsEpic= combineEpics(
    getBorrowersEpic
)
