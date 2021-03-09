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
