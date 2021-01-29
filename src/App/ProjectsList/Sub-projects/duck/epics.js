import * as actions from './actions';
import * as types from './types';
import API from '../../../../API';
import { ofType, combineEpics } from 'redux-observable';
import { of, from, pipe } from 'rxjs';
import { switchMap, catchError, } from "rxjs/operators";
import { act } from 'react-dom/test-utils';

/**
 * @function
 * @name getSubProjectItemsEpic
 * @description gets all sub projects items 
 * @param action$
 * @return actions
 */
const getSubProjectItemsEpic = action$ => {
    return action$.pipe(
        ofType(types.GET_SUB_PROJECT_ITEMS_START),
        switchMap(() =>  {
            return from(API.getSubProjectItems()).pipe(
            switchMap(res => { 
                return of(actions.getSubProjectItemsSuccess(res.data)) }),
            catchError(error => of(actions.getSubProjectItemsFailure(error)))
        )}
        ),
    )                                                                                                                                                                                                       
}

/**
 * @function
 * @name createSubProjectItemEpic
 * @description create sub project item 
 * @param action$
 * @return actions
 */
const createSubProjectItemEpic = action$ => {
    return action$.pipe(
        ofType(types.CREATE_SUB_PROJECT_ITEM_START),
        switchMap(({payload}) => {
            return from(API.createSubProjectItem(payload))
        }),
        switchMap(res => {return of(actions.createSubProjectItemSuccess(res))}),
        catchError(error => {return of(actions.getSubProjectEquipmentsFailure(error))})
    )
}

/**
 * @function
 * @name getSubProjectEquipmentsEpic
 * @description gets all sub projects items 
 * @param action$
 * @return actions
 */
const getSubProjectEquipmentsEpic = action$ => {
    return action$.pipe(
        ofType(types.GET_SUB_PROJECT_EQUIPMENTS_START),
        switchMap(() =>  {
            return from(API.getSubProjectEquipments()).pipe(
            switchMap(res => { 
                return of(actions.getSubProjectEquipmentsSuccess(res.data)) }),
            catchError(error => of(actions.getSubProjectEquipmentsFailure(error)))
        )}
        ),
    )                                                                                                                                                                                                       
}





export const subProjectsEpic= combineEpics(
    getSubProjectItemsEpic,
    createSubProjectItemEpic,
    getSubProjectEquipmentsEpic
)
