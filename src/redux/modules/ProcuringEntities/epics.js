import * as actions from './actions';
import * as types from './types';
import API from '../../../API';
import { ofType, combineEpics } from 'redux-observable';
import { of, from } from 'rxjs';
import { switchMap, catchError, } from "rxjs/operators";

const getProcuringEntitiesEpic = action$ => {
    return action$.pipe(
        ofType(types.GET_PROCURING_ENTITIES_START),
        switchMap(() => {
            return from(API.getProcuringEntities()).pipe(
                switchMap(res => {
                    return of(actions.getProcuringEntitiesSuccess(res.data))
                }),
                catchError(error => of(actions.getProcuringEntitiesFailure(error)))
            )
        }
        ),
    )
}

const deleteProcuringEntityEpic = action$ => {
    return action$.pipe(
        ofType(types.DELETE_PROCURING_ENTITY_START),
        switchMap(({ payload }) => {
            return from(API.deleteProcuringEntity(payload)).pipe(
                switchMap(res => {
                    return of(actions.deleteProcuringEntitySuccess(res), actions.getProcuringEntitiesStart())
                }),
            )
        }),
        catchError(error => of(actions.deleteProcuringEntityFailure(error)))
    );
}

const createProcuringEntityPic = action$ => {
    return action$.pipe(
        ofType(types.CREATE_PROCURING_ENTITY_START),
        switchMap(({ payload }) => {
            return from(API.createProcuringEntity(payload))
        }),
        switchMap(res => {
            return of(actions.createProcuringEntitySuccess(res), actions.getProcuringEntitiesStart())
        }),
        catchError(error => of(actions.createProcuringEntityFailure(error)))
    )
}

/**
 * @function
 * @name updateProcuringEntityPic
 * @param action$
 * @return action$
 */
const updateProcuringEntityPic = action$ => {
    return action$.pipe(
        ofType(types.UPDATE_PROCURING_ENTITY_START),
        switchMap(({ payload }) => {
            debugger
            return from(API.updateProcuringEntity(payload.procuringEntity, payload.id)).pipe(
                switchMap(res => {
                    return of(actions.updateProcuringEntitySuccess(res), actions.getProcuringEntitiesStart())
                }),
            )
        }),
        catchError(error => of(actions.updateProcuringEntityFailure(error)))
    )
}

export const procuringEntitiesEpic = combineEpics(
    getProcuringEntitiesEpic,
    deleteProcuringEntityEpic,
    createProcuringEntityPic,
    updateProcuringEntityPic
);