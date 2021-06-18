import * as actions from './actions';
import * as types from './types';
import API from '../../../API';
import { ofType, combineEpics } from 'redux-observable';
import { of, from } from 'rxjs';
import { switchMap, catchError, } from "rxjs/operators";

const getTicketsEpic = action$ => {
    return action$.pipe(
        ofType(types.GET_TICKETS_START),
        switchMap(() =>  {
            return from(API.getTickets()).pipe(
            switchMap(res => { 
                return of(actions.getTicketsSuccess(res.data)) }),
            catchError(error => of(actions.getTicketsFailure(error)))
        )}
        ),
    )                                                                                                                                                                                                       
}

export const  ticketsEpic= combineEpics(
    getTicketsEpic,

)