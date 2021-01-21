import * as actions from './actions';
import * as types from './types';
import API from '../../../../API';
import { ofType, combineEpics } from 'redux-observable';
import { of, from } from 'rxjs';
import { switchMap, catchError, } from "rxjs/operators";

/**
 * @function
 * @name getSubProjectItems
 * @description gets all sub projects items 
 * @param action$
 * @return actions
 */
const getSubProjectItems = action$ => {
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
 * @name getSubProjectItems
 * @description gets all sub projects items 
 * @param action$
 * @return actions
 */
const getSubProjectEquipments = action$ => {
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



export const  subProjectsEpic= combineEpics(
    getSubProjectItems,
)
