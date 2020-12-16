import * as actions from './actions';
import { mapActions } from '../../Map/duck';
import * as types from './types';
import API from '../../../API';
import { ofType, combineEpics } from 'redux-observable';
import { of, from } from 'rxjs';
import { switchMap, catchError, } from "rxjs/operators";

const projectsListEpic = action$ => {
    return action$.pipe(
        ofType(types.GET_PROJECTS_START),
        switchMap(() => {
            return from(API.getProjects()).pipe(
                switchMap(res => { return of(actions.getProjectsSuccess(res.data)) }),
                catchError(error => of(actions.getProjectsFailure(error)))
            );
        }),
    )
};

const createProjectPic = action$ => {
    return action$.pipe(
        ofType(types.CREATE_PROJECT_START),
        switchMap(({payload}) => {
            return from(API.createProjects(payload))
        }),
        switchMap(res => { return of(actions.createProjectSuccess(res)) }),
        catchError(error => of(actions.createProjectFailure(error)))
    )
}

const deleteProjectEpic = action$ => {
    return action$.pipe(
        ofType(types.DELETE_PROJECT_START),
        switchMap(data => {
            return from(API.deleteProject(data.payload)).pipe(
                switchMap(res => { return of(actions.deleteProjectSuccess(res)) }),
            )
        }),
        catchError(error => of(actions.deleteProjectFailure(error)))
    );
}

const subProjectsEpic = action$ =>
    action$.pipe(
        ofType(types.GET_SUB_PROJECTS_START),
        switchMap(() => {
            return from(API.getSubProjects())
        }),
        switchMap(result => {
            return of(actions.getSubProjectsSuccess(result.data))
        }),
        catchError(error => of(actions.getSubProjectsFailure(error))
        )
    );

const deleteSubProjectEpic = action$ =>
    action$.pipe(
        ofType(types.DELETE_SUB_PROJECT_START),
        switchMap(data => {
            return from(API.deleteSubProject(data.payload)).pipe(
                switchMap(res => { return of(actions.deleteSubProjectSuccess(res)) }),
                catchError(error => of(actions.deleteSubProjectFailure(error)))
            )
        }),
        switchMap(() => of(actions.getSubProjectsStart()))
    );

const getProjectEpic = action$ => {
    return action$.pipe(
        ofType(types.GET_PROJECT_START),
        switchMap(({ payload }) => {
            return from(API.getProject(payload)).pipe(
                switchMap(res => {
                    return from([actions.getProjectSuccess(res.data), mapActions.clearRegionProjects()])
                }),
                catchError(error => from([actions.getProjectFailure(error), mapActions.clearRegionProjects()]))
            );
        }),
    );
}


const regionsEpic = action$ => {
    return action$.pipe(
        ofType(types.GET_REGIONS_START),
        switchMap(() => from(API.getRegions()).pipe(
            switchMap(res => { return of(actions.getRegionsSuccess(res.data)) }),
            catchError(error => of(actions.getRegionsFailure(error)))
        )),
    )
}

const districtsEpic = action$ => {
    return action$.pipe(
        ofType(types.GET_DISTRICTS_START),
        switchMap(({payload}) =>  {
            return from(API.getDistricts(payload)).pipe(
            switchMap(res => { return of(actions.getDistrictsSuccess(res.data)) }),
            catchError(error => of(actions.getDistrictsFailure(error)))
        )}
        ),
    )                                                                                                                                                                                                       
}


const locationsEpic = action$ => {
    return action$.pipe(
        ofType(types.GET_LOCATIONS_START),
        switchMap(() =>  {
            return from(API.getLocations()).pipe(
            switchMap(res => { return of(actions.getLocationsSuccess(res.data)) }),
            catchError(error => of(actions.getLocationsFailure(error)))
        )}
        ),
    )                                                                                                                                                                                                       
}


export const projectsRootEpic = combineEpics(
    projectsListEpic,
    getProjectEpic,
    deleteProjectEpic,
    createProjectPic,
    subProjectsEpic,
    deleteSubProjectEpic,
    regionsEpic,
    districtsEpic,
    locationsEpic,
);


