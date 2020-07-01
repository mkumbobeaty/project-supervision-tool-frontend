import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'; // eslint-disable-line import/no-extraneous-dependencies

import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

export default store;
