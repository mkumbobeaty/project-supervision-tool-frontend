import { combineEpics } from "redux-observable";
import { mapRootEpic } from "./Map/duck/epics";
import { projectsRootEpic } from "./Projects/duck/epics";
import { regionsEpic, restoreAccessTokenEpic } from './duck/epics';
import { loginEpic } from "./Auth/duck/epics";
import { focalPeopleEpic } from "./FocalPeople/duck/epics";

export const rootEpic = combineEpics(
    loginEpic,
    restoreAccessTokenEpic,
    mapRootEpic,
    focalPeopleEpic,
    restoreAccessTokenEpic,
    mapRootEpic,
    projectsRootEpic,
    regionsEpic
)
