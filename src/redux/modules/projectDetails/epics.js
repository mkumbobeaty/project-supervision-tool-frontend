import * as actions from './actions';
import * as types from './types';
import API from '../../../API';
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

const getFundingOrgsEpic = action$ => {
    return action$.pipe(
        ofType(types.GET_FUNDING_ORG_START),
        switchMap(() =>  {
            return from(API.getFundingOrgs()).pipe(
            switchMap(res => { 
                return of(actions.getFundingOrgSuccess(res.data)) }),
            catchError(error => of(actions.getFundingOrgFailure(error)))
        )}
        ),
    )                                                                                                                                                                                                       
}

const getAgenciesEpic = action$ => {
    return action$.pipe(
        ofType(types.GET_AGENCIES_START),
        switchMap(() =>  {
            return from(API.getAgencies()).pipe(
            switchMap(res => { 
                return of(actions.getAgenciesSuccess(res.data)) }),
            catchError(error => of(actions.getAgenciesFailure(error)))
        )}
        ),
    )                                                                                                                                                                                                       
}
const getCurrenciesEpic = action$ => {
    return action$.pipe(
        ofType(types.GET_CURRENCIES_START),
        switchMap(() =>  {
            return from(API.getCurrencies()).pipe(
            switchMap(res => { 
                return of(actions.getCurrenciesSuccess(res.data)) }),
            catchError(error => of(actions.getCurrenciesFailure(error)))
        )}
        ),
    )                                                                                                                                                                                                       
}

const createTotalCostPic = action$ => {
    return action$.pipe(
        ofType(types.CREATE_TOTAL_COST_START),
        switchMap(({payload}) => {
            return from(API.postTotalCost(payload))
        }),
        switchMap(res => { return of(actions.createTotalCostSuccess(res)) }),
        catchError(error => of(actions.createTotalCostFailure(error)))
    )
}

const createCommitmentCostPic = action$ => {
    return action$.pipe(
        ofType(types.CREATE_COMMITMENT_COST_START),
        switchMap(({payload}) => {
            return from(API.postTotalCost(payload))
        }),
        switchMap(res => { return of(actions.createCommitmentCostSuccess(res)) }),
        catchError(error => of(actions.createCommitmentCostFailure(error)))
    )
}

const createProjectDetailsPic = action$ => {
    return action$.pipe(
        ofType(types.CREATE_PROJECT_DETAILS_START),
        switchMap(({payload}) => {
            return from(API.createProjectDetails(payload)).pipe(
                switchMap(({ data}) => {return of(actions.createProjectDetailsSuccess(data))}),
                catchError(error => of(actions.createProjectDetailsFailure(error)))
            )
        }),

    )
}


export const  projectDetailsEpic= combineEpics(
    getBorrowersEpic,
    getFundingOrgsEpic,
    getAgenciesEpic,
    getCurrenciesEpic,
    createTotalCostPic,
    createCommitmentCostPic,
    createProjectDetailsPic,
)
