import { combineEpics } from "redux-observable";
import { deleteProjectEpic, projectsListEpic,subProjectsEpic } from "./Projects/duck/epics";
import { getProjectsOverviewEpic, handleMapLoaderEpic } from "./Map/duck/epics";
import { restoreAccessTokenEpic } from './duck/epics';
import { loginEpic } from "./Auth/duck/epics";

export const rootEpic = combineEpics(
    projectsListEpic,
    deleteProjectEpic,
    subProjectsEpic,
    loginEpic,
    restoreAccessTokenEpic,
    getProjectsOverviewEpic,
    handleMapLoaderEpic,
)
