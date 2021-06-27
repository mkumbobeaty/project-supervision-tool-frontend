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
        switchMap(() => {
            return from(API.getTickets()).pipe(
                switchMap(res => {
                    return of(actions.getTicketsSuccess(res.data))
                }),
                catchError(error => of(actions.getTicketsFailure(error)))
            )
        }
        ),
    )
}

const getTicketEpic = action$ => {
    return action$.pipe(
        ofType(types.GET_TICKET_START),
        switchMap(({ payload }) => {
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
        switchMap(({ payload }) => {
            return from(API.openProjectTicket(payload))
        }),
        switchMap(res => {
            return of(actions.createProjectTicketSuccess(res), projectActions.getProjectsStart())
        }),
        catchError(error => of(actions.createProjectTicketFailure(error)))
    )
}

/**
 *
 * @function
 * @name getTicketByProjectEpic
 * @param action$ stream of actions
 */
const getTicketByProjectEpic = action$ => {
    return action$.pipe(
        ofType(types.GET_TICKET_BY_PROJECT_START),
        switchMap(({ payload }) => {
            return from(API.getTicketsByProject(payload)).pipe(
                switchMap(res => from([
                    actions.getTicketByProjectSuccess(res.data),
                ])),
                catchError(error => of(actions.getTicketByProjectFailure(error)))
            );
        }),
    );
}

const fetchAgenciesEpic = action$ => {
    return action$.pipe(
        ofType(types.GET_AGENCY_START),
        switchMap(() => {
            return from(API.fetchAgencies()).pipe(
                switchMap(res => {
                    return of(actions.fetchAgenciesSuccess(res.data))
                }),
                catchError(error => of(actions.fetchAgenciesFailure(error)))
            )
        }
        ),
    )
}

/**
 * @function
 * @name createSubProjectTicketPic
 * @param action$
 * @return action$
 */
const createSubProjectTicketPic = action$ => {
    return action$.pipe(
        ofType(types.CREATE_SUB_PROJECT_TICKET_START),
        switchMap(({ payload }) => {
            return from(API.openSubProjectTicket(payload))
        }),
        switchMap(res => {
            return of(actions.createSubProjectTicketSuccess(res))
        }),
        catchError(error => of(actions.createSubProjectTicketFailure(error)))
    )
}

/**
 *
 * @function
 * @name getTicketBySubProjectEpic
 * @param action$ stream of actions
 */
const getTicketBySubProjectEpic = action$ => {
    return action$.pipe(
        ofType(types.GET_TICKET_BY_SUB_PROJECT_START),
        switchMap(({ payload }) => {
            return from(API.getTicketsBySubProjectId(payload)).pipe(
                switchMap(res => from([
                    actions.getTicketBySubProjectSuccess(res.data),
                ])),
                catchError(error => of(actions.getTicketBySubProjectFailure(error)))
            );
        }),
    );
}


export const ticketsEpic = combineEpics(
    getTicketsEpic,
    getTicketEpic,
    createProjectTicketPic,
    getTicketByProjectEpic,
    fetchAgenciesEpic,
    getTicketBySubProjectEpic,
    createSubProjectTicketPic
)