import * as actions from './actions';
import * as types from './types';
import API from '../../../API';
import { ofType, combineEpics } from 'redux-observable';
import { of, from } from 'rxjs';
import { switchMap, catchError, } from "rxjs/operators";
import * as projectActions from '../projects/actions';

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


/**
 * @function
 * @name createProjectTicketPic
 * @param action$
 * @return action$
 */
const createProjectTicketPic = action$ => {
    return action$.pipe(
        ofType(types.CREATE_PROJECT_TICKET_START),
        switchMap(({payload}) => {
            return from(API.openProjectTicket(payload))
        }),
        switchMap(res => {
            return of(actions.createProjectTicketSuccess(res), projectActions.getProjectsStart())
        }),
        catchError(error => of(actions.createProjectTicketFailure(error)))
    )
}

export const  ticketsEpic= combineEpics(
    getTicketsEpic,
    getTicketEpic,
    createProjectTicketPic
)