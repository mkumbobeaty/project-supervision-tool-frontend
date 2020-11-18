import { combineEpics } from "redux-observable";
import { projectsListEpic } from "./Projects/duck/epics";
import { restoreAccessTokenEpic } from './duck/epics';
import { loginEpic } from "./Auth/duck/epics";

export const rootEpic = combineEpics(
    projectsListEpic,
        loginEpic,
    restoreAccessTokenEpic,
)
