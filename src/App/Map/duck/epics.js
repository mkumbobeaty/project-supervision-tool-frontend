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
                switchMap(res =>  of(actions.getProjectsOverviewSuccess(res.data))),
                catchError(error => of(actions.getProjectsOverviewFailure(error)))
            );
        }),
    );
}
