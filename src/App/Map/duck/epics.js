import {ofType} from "redux-observable";
import * as types from "./types";
import {catchError, switchMap} from "rxjs/operators";
import {from, of} from "rxjs";
import * as API from "../../../API";
import * as actions from "./actions";


export const getProjectsOverviewEpic = action$ =>
{
    return action$.pipe(
        ofType(types.GET_PROJECTS_OVERVIEW_START),
        switchMap(() => {
            return from(API.getProjectOverview()).pipe(
                switchMap(res =>  from([actions.getProjectsOverviewSuccess(res.data), actions.showMapLoader(false)])),
                catchError(error => from([actions.getProjectsOverviewFailure(error), actions.showMapLoader(false)]))
            );
        }),
    );
}

export const handleMapLoaderEpic = actions$ => actions$.pipe(
    ofType(types.GET_PROJECTS_OVERVIEW_START),
    switchMap(() => of(actions.showMapLoader(true)))
);
