import { combineEpics } from "redux-observable";
import { mapRootEpic } from "./modules/map/epics";
import { projectsRootEpic } from "./modules/projects/epics";
import { restoreAccessTokenEpic } from './modules/app/epics';
import { loginEpic } from "./modules/auth/epics";
import { focalPeopleEpic } from "../App/FocalPeople/duck/epics";
import { sectorsEpic } from '../App/Projects/components/ProjectsSectors/duck/epics';
import { projectDetailsEpic } from '../App/Projects/components/ProjectsDetails/duck/epics';
import {subProjectsEpic} from './modules/subProjects/epics';
import { getUsersEpic, createUserEPic, editUserEpic, deleteUserEpic } from "./modules/users/epics";
import { getContractsEpic, createContractEPic, editContractEpic, deleteContractEpic } from "./modules/contracts/epics";

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
    subProjectsEpic,
    getUsersEpic,
    createUserEPic,
    editUserEpic,
    deleteUserEpic,
    getContractsEpic,
    createContractEPic,
    editContractEpic,
    deleteContractEpic,
)
