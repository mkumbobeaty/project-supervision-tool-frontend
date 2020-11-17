import { combineEpics } from "redux-observable";
import { projectsListEpic } from "./Projects/duck/epics";

export const rootEpic = combineEpics(
    projectsListEpic
)