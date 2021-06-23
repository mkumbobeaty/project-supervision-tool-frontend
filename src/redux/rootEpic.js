import { combineEpics } from "redux-observable";
import { mapRootEpic } from "./modules/map/epics";
import { projectsRootEpic } from "./modules/projects/epics";
import { restoreAccessTokenEpic } from './modules/app/epics';
import { authRootEpic } from "./modules/auth/epics";
import { focalPeopleEpic } from "../App/FocalPeople/duck/epics";
import { sectorsEpic } from '../App/Projects/components/ProjectsSectors/duck/epics';
import { projectDetailsEpic } from './modules/projectDetails/epics';
import {subProjectsEpic} from './modules/subProjects/epics';
import { getUsersEpic, createUserEPic, editUserEpic, deleteUserEpic } from "./modules/users/epics";
import { getContractsEpic, createContractEPic, editContractEpic, deleteContractEpic } from "./modules/contracts/epics";
import { ticketsEpic } from './modules/Tickets/epics';

export const rootEpic = combineEpics(
    authRootEpic,
    restoreAccessTokenEpic,
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
    ticketsEpic,
)
