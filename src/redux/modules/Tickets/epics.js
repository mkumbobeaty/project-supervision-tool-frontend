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

const getTicketEpic = action$ => {
    return action$.pipe(
        ofType(types.GET_TICKET_START),
        switchMap(({payload}) => {
            return from(API.getTicket(payload)).pipe(
                switchMap(res => {
                    return of(actions.getTicketSuccess(res.data))
                }),
                catchError(error => of(actions.getTicketFailure(error)))
            );
        }),
    );
}

export const  ticketsEpic= combineEpics(
    getTicketsEpic,
    getTicketEpic,
)