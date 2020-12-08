import { combineReducers } from "redux";
import { default as mapReducer } from './Map/duck';
import { default as projectReducer } from './Projects/duck';
import { default as authReducer } from './Auth/duck';
import { default as focalPeopleReducer} from './FocalPeople/duck'
import {default as initReducer } from './duck';

const rootReducer = combineReducers({
    ...projectReducer,
    ...mapReducer,
    ...authReducer,
    ...focalPeopleReducer,
    ...initReducer
});

export default rootReducer;
