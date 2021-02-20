import * as reducer from './reducers';

import * as mapProjectTypes from './types';
import * as mapProjectSelectors from './selectors';
import * as mapProjectActions from './actions';
import {mapProjectEpics } from './epics';

export { mapProjectTypes, mapProjectSelectors, mapProjectActions, mapProjectEpics };

export default reducer;
