import { combineReducers } from "redux";
import { default as mapReducer } from './Map/duck';
import { default as projectReducer } from './ProjectsList/duck';
import { default as authReducer } from './Auth/duck';
import { default as focalPeopleReducer} from './FocalPeople/duck'
import { default as sectorReducer} from './ProjectsList/Projects/components/ProjectsSectors/duck'
import { default as projectDetailReducer } from './ProjectsList/Projects/components/ProjectsDetails/duck'

const rootReducer = combineReducers({
    ...projectReducer,
    ...mapReducer,
    ...authReducer,
    ...focalPeopleReducer,
    ...sectorReducer,
    ...projectDetailReducer,
});

export default rootReducer;
