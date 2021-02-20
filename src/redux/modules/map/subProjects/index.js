import * as reducer from './reducers';

import * as mapSubProjectTypes from './types';
import * as mapSubProjectSelectors from './selectors';
import * as mapSubProjectActions from './actions';
import {mapSubProjectEpics } from './epics';

export { mapSubProjectTypes, mapSubProjectSelectors, mapSubProjectActions, mapSubProjectEpics };

export default reducer;
