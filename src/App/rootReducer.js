import { combineReducers } from "redux";
import { default as initReducers } from './duck';
import { default as resourcesReducer } from './Projects/duck';
import { default as mapReducer } from './Map/duck';
const rootReducer = combineReducers({
    ...initReducers,
    ...resourcesReducer,
    ...mapReducer,
});

export default rootReducer;
