import { combineReducers } from "redux";
import { default as mapReducer } from '../redux/modules/map/duck';
import { default as projectReducer } from '../redux/modules/projects/duck';
import { default as authReducer } from '../redux/modules/auth/duck';
import { default as focalPeopleReducer} from './FocalPeople/duck'
import { default as sectorReducer} from './ProjectsList/Projects/components/ProjectsSectors/duck'
import { default as projectDetailReducer } from './ProjectsList/Projects/components/ProjectsDetails/duck'
import { default as subProjectReducer } from '../redux/modules/subProjects/duck'

const rootReducer = combineReducers({
    ...projectReducer,
    ...mapReducer,
    ...authReducer,
    ...focalPeopleReducer,
    ...sectorReducer,
    ...projectDetailReducer,
    ...subProjectReducer
});

export default rootReducer;
