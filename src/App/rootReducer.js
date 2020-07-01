import { combineReducers } from "redux";
import { default as initReducers } from './duck';
import { default as resourcesReducer } from './Resources/duck';
const rootReducer = combineReducers({
    ...initReducers,
    ...resourcesReducer
});

export default rootReducer;
