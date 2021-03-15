import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import API from '../../../API';
import * as actions from './actions';
import * as types from './types';

/**
 * @function
 * @name getItemsEpic
 * @description gets all items 
 * @param action$
 * @return actions
 */

export const getItemsEpic = action$  => {
    return action$.pipe(
        ofType(types.GET_ITEMS_START),
        switchMap(() => {
            return from(API.getItems()).pipe(
                switchMap(res => {
                    return of(actions.getItemsSuccess(res.data))
                }),
                catchError(error => of(actions.getItemsFailure(error)))
            )
        }) 
    )
}

/**
 * @function
 * @name createItemEPic
 * @param action$
 * @return action$
 */
 export const createItemEPic = action$ => {
    return action$.pipe(
        ofType(types.CREATE_ITEM_START),
        switchMap(({payload}) => {
            return from(API.createItems(payload))
        }),
        switchMap(res => { return of(actions.createItemSuccess(res)) }),
        catchError(error => of(actions.createItemFailure(error)))
    )
}

/**
 * @function
 * @name editItemEpic
 * @param action$
 * @return action$
 */
 export const editItemEpic = action$ => {
    return action$.pipe(
        ofType(types.EDIT_ITEM_START),
        switchMap(({payload}) => {
            return from(API.editItem(payload, payload.id)).pipe(
                switchMap(res => { return of(actions.editItemSuccess(res), actions.getItemsStart()) }),
            )
        }),
        catchError(error => of(actions.editItemFailure(error)))
    );
}

/**
 * @function
 * @name deleteItemEpic
 * @param action$
 * @return action$
 */
export const deleteItemEpic = action$ => {
    return action$.pipe(
        ofType(types.DELETE_ITEM_START),
        switchMap(({payload}) => {
            return from(API.deleteItem(payload)).pipe(
                switchMap(res => { return of(actions.deleteItemSuccess(res), actions.getItemsStart()) }),
            )
        }),
        catchError(error => of(actions.deleteItemFailure(error)))
    );
}

