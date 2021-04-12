import {combineEpics, ofType} from "redux-observable";
import * as types from "./types";
import {catchError, switchMap} from "rxjs/operators";
import {from, of} from "rxjs";
import API from "../../../../API";
import * as actions from "./actions";
import {mapProjectActions} from "../projects";
import { mapActions } from "..";
import { mapSubProjectActions } from ".";


/**
 * @function
 * @name getSubProjectMapEpic
 * @param action$
 * @return action$
 */
export const getSubProjectMapEpic = action$ => {
    return action$.pipe(
        ofType(types.GET_SUB_PROJECT_START),
        switchMap(({payload}) => {
            debugger
            return from(API.getSubProject(payload)).pipe(
                switchMap(res => {
                    return from([
                        actions.getSubProjectSuccess(res.data),
                        mapProjectActions.clearProject(),
                    ])
                }),
                catchError(error => of(actions.getSubProjectFailure(error)))
            );
        }),
    )
};

/**
 *
 * @function
 * @name getSubProjectsStatistics
 * @param action$ stream of actions
 */
const getSubProjectsStatistics = action$ => {
    return action$.pipe(
        ofType(types.GET_SUB_PROJECT_STATISTICS_START),
        switchMap(() => {
            return from(API.getSubProjectsStatistics()).pipe(
                switchMap(res => of(actions.getSubProjectStatisticsSuccess(res.data))),
                catchError(error => of(actions.getSubProjectStatisticsFailure(error)))
            );
        }),
    );
}

/**
 * @function
 * @name getSubProjectsOverviewEpic
 * @param action$ stream of actions
 */
const getSubProjectsOverviewEpic = action$ => {
    return action$.pipe(
        ofType(types.GET_SUB_PROJECTS_OVERVIEW_START),
        switchMap(() => {
            return from(API.getSubProjectOverview()).pipe(
                switchMap(res => from([
                    actions.getSubProjectOverviewSuccess(res.data),
                    actions.getSubProjectStatisticsStart()
                ])),
                catchError(error => from([actions.getSubProjectOverviewFailure(error)]))
            );
        }),
    );
}

/**
 *
 * @function
 * @name getSubProjectsByRegionEpic
 * @param action$ stream of actions
 */
const getSubProjectsByRegionEpic = action$ => {
    return action$.pipe(
        ofType(types.GET_SUB_PROJECTS_REGIONS_OVERVIEW_START),
        switchMap(({payload}) => {
            return from(API.getSubProjectsByRegion(payload)).pipe(
                switchMap(res => from([
                    actions.getRegionSubProjectStatisticsStart(payload),
                    actions.getSubProjectsByRegionSuccess(res.data),
                    actions.clearSubProjectOverview(),
                    mapActions.getRegionStart(payload),
                    actions.showRegionSubProjectsOverview(true),
                    actions.showNationalSubProjectsOverview(false)
                ])),
                catchError(error => of(actions.getSubProjectsByRegionFailures(error)))
            );
        }),
    );
}


/**
 *
 * @function
 * @name getRegionSubProjectStatisticsEpic
 * @param action$ stream of actions
 */
const getRegionSubProjectStatisticsEpic = action$ => {
    return action$.pipe(
        ofType(types.GET_REGION_SUB_PROJECT_STATISTICS_START),
        switchMap(({payload}) => {
            return from(API.getSubRegionProjectStatistics(payload)).pipe(
                switchMap(res => from([
                    actions.getRegionSubProjectStatisticsSuccess(res.data),
                ])),
                catchError(error => of(actions.getRegionSubProjectStatisticsFailure(error)))
            );
        }),
    );
}

/**
 *
 * @function
 * @name getDistrictsPerRegionEpic
 * @param action$ stream of actions
 */
const getDistrictsPerRegionEpic = action$ => {
    return action$.pipe(
        ofType(types.GET_DISRTRICTS_SUB_PROJECTS_OVERVIEW_START),
        switchMap(({payload}) => {
            return from(API.getDistrictsSubProjectOverview(payload)).pipe(
                switchMap(res =>  from([
                    actions.getDistrictsSubProjectsOverviewSuccess(res.data),
                    // actions.clearRegionSubProjects(),
                    actions.getDistrictsStart(payload),
                    actions.showDistrictsSubProjectsOverview(true),
                    actions.showRegionSubProjectsOverview(false),
                ])),
                catchError(error => of(actions.getDistrictsSubProjectsOverviewFailure(error)))
            );
        }),
    );
}

const districtsEpic = action$ => {
    return action$.pipe(
        ofType(types.GET_DISTRICTS_START),
        switchMap(({payload}) =>  {
            return from(API.getDistricts(payload)).pipe(
            switchMap(res => { 
                return of(actions.getDistrictsSuccess(res.data)) }),
            catchError(error => of(actions.getDistrictsFailure(error)))
        )}
        ),
    )                                                                                                                                                                                                       
}

/**
 *
 * @function
 * @name getSubProjectTypesEpic
 * @param action$ stream of actions
 */
const getSubProjectTypesEpic = action$ => {
    return action$.pipe(
        ofType(types.GET_SUB_PROJECT_TYPES_START),
        switchMap(() => {
            return from(API.getSubProjectTypes()).pipe(
                switchMap(res => of(actions.getSubProjectTypesSuccess(res.data))),
                catchError(error => of(actions.getSubProjectTypesFailure(error)))
            );
        }),
    );
}

/**
 *
 * @function
 * @name getSubProjectStatusEpic
 * @param action$ stream of actions
 */
const getSubProjectStatusEpic = action$ => {
    return action$.pipe(
        ofType(types.GET_SUB_PROJECT_STATUS_START),
        switchMap(() => {
            return from(API.getSubProjectStatus()).pipe(
                switchMap(res => of(actions.getSubProjectStatusSuccess(res.data))),
                catchError(error => of(actions.getSubProjectStatusFailure(error)))
            );
        }),
    );
}

/**
 *
 * @function
 * @name getContractorEpic
 * @param action$ stream of actions
 */
const getContractorEpic = action$ => {
    return action$.pipe(
        ofType(types.GET_CONTRACTORS_START),
        switchMap(() => {
            return from(API.getContractors()).pipe(
                switchMap(res => of(actions.getContractorsSuccess(res.data))),
                catchError(error => of(actions.getContractorsFailure(error)))
            );
        }),
    );
}

const filterSubProjectTypesEpic = (action$, state$) => {
    return action$.pipe(
        ofType(types.SET_SUB_PROJECT_TYPES_FILTER),
        switchMap(() => {
            return of(mapSubProjectActions.getSubProjectsStart(state$.value.map.subProjects.filters))
        }),
    )
};

const filterSubProjectStatusEpic = (action$, state$) => {
    return action$.pipe(
        ofType(types.SET_SUB_PROJECT_STATUS_FILTER),
        switchMap(() => {
            return of(mapSubProjectActions.getSubProjectsStart(state$.value.map.subProjects.filters))
        }),
    )
};

const filterSubProjectByDistrictsEpic = (action$, state$) => {
    return action$.pipe(
        ofType(types.SET_SUB_PROJECT_DISTRICT_FILTER),
        switchMap(() => {
            return of(mapSubProjectActions.getSubProjectsStart(state$.value.map.subProjects.filters))
        }),
    )
};

const filterSubProjectByRegionEpic = (action$, state$) => {
    return action$.pipe(
        ofType(types.SET_SUB_PROJECT_REGIONS_FILTER),
        switchMap(() => {
            return of(mapSubProjectActions.getSubProjectsStart(state$.value.map.subProjects.filters))
        }),
    )
};

const filterSubProjectContractorEpic = (action$, state$) => {
    return action$.pipe(
        ofType(types.SET_SUB_PROJECT_CONTRACTOR_FILTER),
        switchMap(() => {
            return of(mapSubProjectActions.getSubProjectsStart(state$.value.map.subProjects.filters))
        }),
    )
};

const filterSubProjectComponentEpic = (action$, state$) => {
    return action$.pipe(
        ofType(types.SET_SUB_PROJECT_COMPONENT_FILTER),
        switchMap(() => {
            return of(mapSubProjectActions.getSubProjectsStart(state$.value.map.subProjects.filters))
        }),
    )
};

export const mapSubProjectEpics = combineEpics(
    getSubProjectMapEpic,
    getSubProjectsStatistics,
    getSubProjectsOverviewEpic,
    getSubProjectsByRegionEpic,
    getRegionSubProjectStatisticsEpic,
    getDistrictsPerRegionEpic,
    districtsEpic,
    getSubProjectTypesEpic,
    getSubProjectStatusEpic,
    filterSubProjectByDistrictsEpic,
    filterSubProjectByRegionEpic,
    filterSubProjectContractorEpic,
    filterSubProjectTypesEpic,
    filterSubProjectStatusEpic,
    filterSubProjectComponentEpic,
    getContractorEpic
);
