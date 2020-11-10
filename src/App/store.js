import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'; // eslint-disable-line import/no-extraneous-dependencies
import { createEpicMiddleware } from "redux-observable";
import { rootEpic } from "./rootEpic";
import rootReducer from "./rootReducer";

const epicMiddleware = createEpicMiddleware();

const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(epicMiddleware)
    )
);

epicMiddleware.run(rootEpic)

export default store;
