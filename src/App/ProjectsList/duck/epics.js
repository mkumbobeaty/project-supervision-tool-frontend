import * as actions from './actions';
import { mapActions } from '../../Map/duck';
import * as types from './types';
import API from '../../../API';
import {ofType, combineEpics} from 'redux-observable';
import {of, from} from 'rxjs';
import {switchMap, catchError,} from "rxjs/operators";

export const projectsListEpic = action$ => {
    return action$.pipe(
        ofType(types.GET_PROJECTS_START),
        switchMap(() => {
            return from(API.getProjects()).pipe(
                switchMap(res => {
                    return from([actions.getProjectsSuccess(res.data), mapActions.clearRegionDetails()])
                }),
                catchError(error => of(actions.getProjectsFailure(error)))
            );
        }),
    )
};


/**
 * @function
 * @name getSubProjectEpic
 * @param action$
 * @return action$
 */
export const getSubProjectEpic = action$ => {
    return action$.pipe(
        ofType(types.GET_SUB_PROJECT_START),
        switchMap(({payload}) => {
            return from(API.getSubProject(payload)).pipe(
                switchMap(res => {
                    return from([
                        actions.getSubProjectSuccess(res.data),
                        actions.clearProject(),
                    ])
                }),
                catchError(error => of(actions.getSubProjectFailure(error)))
            );
        }),
    )
};


/**
 * @function
 * @name getSubProjectElementEpic
 * @param action$
 * @return action$
 */
export const getSubProjectElementEpic = action$ => {
    return action$.pipe(
        ofType(types.GET_SUB_PROJECT_ELEMENT_START),
        switchMap(({payload}) => {
            return from(API.getSubProjectElement(payload)).pipe(
                switchMap(res => {
                    return from([
                        actions.getSubProjectElementSuccess(res.data),
                        actions.clearSubProject(),
                        mapActions.showSubProjectElementDetails(true),
                        mapActions.showSubProjectDetails(false)
                    ])
                }),
                catchError(error => of(actions.getSubProjectElementFailure(error)))
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
        switchMap(({payload}) => {
            return from(API.deleteProject(payload)).pipe(
                switchMap(res => { return of(actions.deleteProjectSuccess(res)) }),
            )
        }),
        catchError(error => of(actions.deleteProjectFailure(error)))
    );
}

export const getProjectEpic = action$ => {
    return action$.pipe(
        ofType(types.GET_PROJECT_START),
        switchMap(({payload}) => {
            return from(API.getProject(payload)).pipe(
                switchMap(res => {
                    return from([
                        actions.getProjectSuccess(res.data),
                        mapActions.clearRegionDetails(),
                        mapActions.showProjectsOverview(false),
                        mapActions.showProjectDetails(true),
                    ])
                }),
                catchError(error => from([actions.getProjectFailure(error), mapActions.clearRegionDetails()]))
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


const createProjectLocationPic = action$ => {
    return action$.pipe(
        ofType(types.CREATE_PROJECT_LOCATION_START),
        switchMap(({payload}) => {
            return from(API.createProjectLocation(payload))
        }),
        switchMap(res => { return of(actions.createProjectLocationSuccess(res)) }),
        catchError(error => of(actions.createProjectLocationFailure(error)))
    )
}

const subProjectsEpic = action$ => {
        return action$.pipe(
            ofType(types.GET_SUB_PROJECTS_START),
            switchMap(() => {
                return from(API.getSubProjects()).pipe(
                    switchMap(res => {
                        return from([actions.getSubProjectsSuccess(res.data), mapActions.clearRegionDetails()])
                    }),
                    catchError(error => of(actions.getSubProjectsFailure(error)))
                );
            }),
        )
    };
    

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
    createProjectLocationPic,
    getSubProjectEpic,
    getSubProjectElementEpic,
);


