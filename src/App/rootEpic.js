import { combineEpics } from "redux-observable";
import { resourceOperations } from "./Projects/duck";

export const rootEpic = combineEpics(
    resourceOperations.getProjectsEpic
)