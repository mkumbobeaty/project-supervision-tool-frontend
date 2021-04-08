import * as actions from './actions';
import * as types from './types';
import API from '../../../API';
import {ofType, combineEpics} from 'redux-observable';
import {of, from} from 'rxjs';
import {switchMap, catchError,} from "rxjs/operators";

export const projectsListEpic = action$ => {
    return action$.pipe(
        ofType(types.GET_PROJECTS_START),
        switchMap((action) => {
            return from(API.getProjects(action.payload)).pipe(
                switchMap(res => {
                    return of(actions.getProjectsSuccess(res.data))
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
                    return of(actions.getSubProjectSuccess(res.data))
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
                        actions.clearSubProject()
                    ])
                }),
                catchError(error => of(actions.getSubProjectElementFailure(error)))
            );
        }),
    )
};


/**
 * @function
 * @name createProjectPic
 * @param action$
 * @return action$
 */
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


/**
 * @function
 * @name createSubProjectEpic
 * @param action$
 * @return action$
 */
const createSubProjectEpic = action$ => {
    return action$.pipe(
        ofType(types.CREATE_SUB_PROJECT_START),
        switchMap(({payload}) => {
            return from(API.createSubProject(payload))
        }),
        switchMap(res => { return of(actions.createSubProjectSuccess(res)) }),
        catchError(error => of(actions.createSubProjectFailure(error)))
    )
}

const deleteProjectEpic = action$ => {
    return action$.pipe(
        ofType(types.DELETE_PROJECT_START),
        switchMap(({payload}) => {
            return from(API.deleteProject(payload)).pipe(
                switchMap(res => { return of(actions.deleteProjectSuccess(res), actions.getProjectsStart()) }),
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
                    return of( actions.getProjectSuccess(res.data))
                }),
                catchError(error => of(actions.getProjectFailure(error)))
            );
        }),
    );
}



/**
 * @function
 * @name regionsEpic
 * @description gets all regions
 * @param action$
 * @return actions
 */
const regionsEpic = action$ => {
    return action$.pipe(
        ofType(types.GET_REGIONS_START),
        switchMap(() => from(API.getRegions()).pipe(
            switchMap(res => { return of(actions.getRegionsSuccess(res.data)) }),
            catchError(error => of(actions.getRegionsFailure(error)))
        )),
    )
}


/**
 * @function
 * @name getEnvironmentalCategoriesEpic
 * @description gets all environmental categories
 * @param action$
 * @return actions
 */
const getEnvironmentalCategoriesEpic = action$ => {
    return action$.pipe(
        ofType(types.GET_ENVIRONMENTAL_CATEGORIES_START),
        switchMap(() => from(API.getEnvironmentalCategories()).pipe(
            switchMap(res => { return of(actions.getEnvironmentalCategoriesSuccess(res.data)) }),
            catchError(error => of(actions.getEnvironmentalCategoriesFailure(error)))
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

const deleteSubProjectEpic = action$ => {
    return action$.pipe(
        ofType(types.DELETE_SUB_PROJECT_START),
        switchMap(({payload}) => {
            return from(API.deleteSubProject(payload)).pipe(
                switchMap(res => { return of(actions.deleteSubProjectSuccess(res)) }),
            )
        }),
        catchError(error => of(actions.deleteSubProjectFailure(error)))
    );
}

/**
 * @function
 * @name getItemsEpic
 * @description gets all sub projects items 
 * @param action$
 * @return actions
 */
const getItemsEpic = action$ => {
    return action$.pipe(
        ofType(types.GET_ITEMS_START),
        switchMap(() =>  {
            return from(API.getItems()).pipe(
            switchMap(res => { 
                return of(actions.getItemsSuccess(res.data)) }),
            catchError(error => of(actions.getItemsFailure(error)))
        )}
        ),
    )                                                                                                                                                                                                       
}

/**
 * @function
 * @name getProgressEpic
 * @description gets all progress
 * @param action$
 * @return actions
 */
const getProgressEpic = action$ => {
    return action$.pipe(
        ofType(types.GET_PROGRESS_START),
        switchMap(() =>  {
            return from(API.getProgress()).pipe(
            switchMap(res => { 
                return of(actions.getProgressSuccess(res.data)) }),
            catchError(error => of(actions.getProgressFailure(error)))
        )}
        ),
    )                                                                                                                                                                                                       
}

const projectStatusEpic = action$ => {
    return action$.pipe(
        ofType(types.GET_PROJECT_STATUS_START),
        switchMap((action) => {
            return from(API.getProjectStatus(action.payload)).pipe(
                switchMap(res => {
                    return of(actions.getProjectStatusSuccess(res.data))
                }),
                catchError(error => of(actions.getProjectStatusFailure(error)))
            );
        }),
    )
};


export const projectsRootEpic = combineEpics(
    projectsListEpic,
    getProjectEpic,
    deleteProjectEpic,
    createProjectPic,
    deleteSubProjectEpic,
    regionsEpic,
    districtsEpic,
    locationsEpic,
    createProjectLocationPic,
    getSubProjectEpic,
    createSubProjectEpic,
    getSubProjectElementEpic,
    getEnvironmentalCategoriesEpic,
    getItemsEpic,
    getProgressEpic,
    projectStatusEpic
    );


