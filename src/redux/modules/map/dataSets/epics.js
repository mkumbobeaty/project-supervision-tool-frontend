import {combineEpics, ofType} from "redux-observable";
import * as types from "./types";
import {catchError, switchMap} from "rxjs/operators";
import {from} from "rxjs";
import API from "../../../../API";
import * as actions from "./actions";

export const getGeonodeLayersEpic = action$ => {
    return action$.pipe(
        ofType(types.GET_GEONODE_LAYERS_START),
        switchMap(() => {
            return from(API.getLayers()).pipe(
                switchMap(res => {
                    return from([
                        actions.getGeonodeLayersSuccess(res),
                    ])
                }),
                catchError(error => from([actions.getGeonodeLayersFailure(error)]))
            );
        }),
    );
}


export const mapDataSetsEpics = combineEpics(
    getGeonodeLayersEpic,
);
