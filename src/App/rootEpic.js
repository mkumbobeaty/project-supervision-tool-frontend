import { combineEpics } from "redux-observable";
import { deleteProjectEpic, projectsListEpic, subProjectsEpic, deleteSubProjectEpic, createProjectPic } from "./Projects/duck/epics";
import { getProjectsOverviewEpic, handleMapLoaderEpic } from "./Map/duck/epics";
import { restoreAccessTokenEpic } from './duck/epics';
import { loginEpic } from "./Auth/duck/epics";

export const rootEpic = combineEpics(
    projectsListEpic,
    createProjectPic,
    deleteProjectEpic,
    subProjectsEpic,
    deleteSubProjectEpic,
    loginEpic,
    restoreAccessTokenEpic,
    getProjectsOverviewEpic,
    handleMapLoaderEpic,
)
