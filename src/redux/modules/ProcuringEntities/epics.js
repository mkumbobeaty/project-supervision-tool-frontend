import * as actions from './actions';
import * as types from './types';
import API from '../../../API';
import { ofType, combineEpics } from 'redux-observable';
import { of, from } from 'rxjs';
import { switchMap, catchError, } from "rxjs/operators";

const getProcuringEntitiesEpic = action$ => {
    return action$.pipe(
        ofType(types.GET_PROCURING_ENTITIES_START),
        switchMap(() =>  {
            return from(API.getProcuringEntities()).pipe(
            switchMap(res => { 
                return of(actions.getProcuringEntitiesSuccess(res.data)) }),
            catchError(error => of(actions.getProcuringEntitiesFailure(error)))
        )}
        ),
    )                                                                                                                                                                                                       
}


export const  procuringEntitiesEpic= combineEpics(
    getProcuringEntitiesEpic,
)