import { combineReducers } from "redux";
import { default as mapReducer } from './modules/map';
import { default as projectReducer } from './modules/projects';
import { default as authReducer } from './modules/auth';
import { default as focalPeopleReducer} from '../App/FocalPeople/duck'
import { default as sectorReducer} from '../App/Projects/components/ProjectsSectors/duck'
import { default as projectDetailReducer } from './modules/projectDetails'
import { default as subProjectReducer } from './modules/subProjects'
import { default as usersReducer } from './modules/users';
import { default as contractsReducer } from './modules/contracts';
import { default as ticketsReducer } from './modules/Tickets';
import { default as procuringEntitiesReducer } from './modules/ProcuringEntities';

const rootReducer = combineReducers({
    ...projectReducer,
    ...mapReducer,
    ...authReducer,
    ...focalPeopleReducer,
    ...sectorReducer,
    ...projectDetailReducer,
    ...subProjectReducer,
    ...usersReducer,
    ...contractsReducer,
    ...ticketsReducer,
    ...procuringEntitiesReducer
});

export default rootReducer;
