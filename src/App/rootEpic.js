import { combineEpics } from "redux-observable";
import { deleteProjectEpic, projectsListEpic,subProjectsEpic } from "./Projects/duck/epics";
import { loginEpic } from "./Auth/duck/epics";

export const rootEpic = combineEpics(
    projectsListEpic,
    loginEpic,
    deleteProjectEpic,
    subProjectsEpic,
)
