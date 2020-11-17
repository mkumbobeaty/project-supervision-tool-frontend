import { combineReducers } from "redux";
import { default as initReducers } from './duck';
import { default as mapReducer } from './Map/duck';
import { default as projectReducer } from './Projects/duck';

const rootReducer = combineReducers({
    ...projectReducer,
    ...initReducers,
    ...mapReducer,
});

export default rootReducer;
