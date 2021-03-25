import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import API from '../../../API';
import * as actions from './actions';
import * as types from './types';

/**
 * @function
 * @name getContractsEpic
 * @description gets all contracts 
 * @param action$
 * @return actions
 */

export const getContractsEpic = action$  => {
    return action$.pipe(
        ofType(types.GET_CONTRACTS_START),
        switchMap(({payload}) => {
            return from(API.getContracts(payload)).pipe(
                switchMap(res => {
                    return of(actions.getContractsSuccess(res.data))
                }),
                catchError(error => of(actions.getContractsFailure(error)))
            )
        }) 
    )
}

/**
 * @function
 * @name createContractEPic
 * @param action$
 * @return action$
 */
export const createContractEPic = action$ => {
    return action$.pipe(
        ofType(types.CREATE_CONTRACT_START),
        switchMap(({payload}) => {
            return from(API.createContracts(payload))
        }),
        switchMap(res => { return of(actions.createContractSuccess(res), actions.getContractsStart()) }),
        catchError(error => of(actions.createContractFailure(error)))
    )
}

/**
 * @function
 * @name editContractEpic
 * @param action$
 * @return action$
 */
 export const editContractEpic = action$ => {
    return action$.pipe(
        ofType(types.EDIT_CONTRACT_START),
        switchMap(({payload}) => {
            return from(API.editContract(payload, payload.id)).pipe(
                switchMap(res => { return of(actions.editContractSuccess(res), actions.getContractsStart()) }),
            )
        }),
        catchError(error => of(actions.editContractFailure(error)))
    );
}

/**
 * @function
 * @name deleteContractEpic
 * @param action$
 * @return action$
 */
export const deleteContractEpic = action$ => {
    return action$.pipe(
        ofType(types.DELETE_CONTRACT_START),
        switchMap(({payload}) => {
            return from(API.deleteContract(payload)).pipe(
                switchMap(res => { return of(actions.deleteContractSuccess(res), actions.getContractsStart()) }),
            )
        }),
        catchError(error => of(actions.deleteContractFailure(error)))
    );
}
