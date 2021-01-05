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


export const  projectDetailsEpic= combineEpics(
    getBorrowersEpic,
    getFundingOrgsEpic,
    getAgenciesEpic,
    getCurrenciesEpic,
)
