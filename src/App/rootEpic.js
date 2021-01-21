import { combineEpics } from "redux-observable";
import { mapRootEpic } from "./Map/duck/epics";
import { projectsRootEpic } from "./ProjectsList/duck/epics";
import { restoreAccessTokenEpic } from './duck/epics';
import { loginEpic } from "./Auth/duck/epics";
import { focalPeopleEpic } from "./FocalPeople/duck/epics";
import { sectorsEpic } from './ProjectsList/Projects/components/ProjectsSectors/duck/epics';
import { projectDetailsEpic } from './ProjectsList/Projects/components/ProjectsDetails/duck/epics';
import {subProjectsEpic} from './ProjectsList/Sub-projects/duck/epics';

export const rootEpic = combineEpics(
    loginEpic,
    restoreAccessTokenEpic,
    mapRootEpic,
    focalPeopleEpic,
    restoreAccessTokenEpic,
    mapRootEpic,
    projectsRootEpic,
    sectorsEpic,
    projectDetailsEpic,
    subProjectsEpic
)
