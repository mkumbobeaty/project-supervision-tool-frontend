import { combineReducers } from "redux";
import { default as humanResourcesReducer } from './duck';
const rootReducer = combineReducers({
    ...humanResourcesReducer,
});

export default rootReducer;
