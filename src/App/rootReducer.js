import { combineReducers } from "redux";
import { default as mapReducer } from './Map/duck';
import { default as projectReducer } from './Projects/duck';
import { default as authReducer } from './Auth/duck';

const rootReducer = combineReducers({
    ...projectReducer,
    ...mapReducer,
    ...authReducer,
});

export default rootReducer;
