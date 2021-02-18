import { combineEpics } from "redux-observable";
import { mapRootEpic } from "../redux/modules/map/duck/epics";
import { projectsRootEpic } from "../redux/modules/projects/duck/epics";
import { restoreAccessTokenEpic } from '../redux/modules/app/duck/epics';
import { loginEpic } from "../redux/modules/auth/duck/epics";
import { focalPeopleEpic } from "./FocalPeople/duck/epics";
import { sectorsEpic } from './ProjectsList/Projects/components/ProjectsSectors/duck/epics';
import { projectDetailsEpic } from './ProjectsList/Projects/components/ProjectsDetails/duck/epics';
import {subProjectsEpic} from '../redux/modules/subProjects/duck/epics';

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
