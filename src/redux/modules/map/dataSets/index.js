
import * as reducer from './reducers';

import * as mapDataSetsTypes from './types';
import * as mapDataSetsSelectors from './selectors';
import * as mapDataSetsActions from './actions';
import {mapDataSetsEpics } from './epics';

export { mapDataSetsTypes, mapDataSetsSelectors, mapDataSetsActions, mapDataSetsEpics };

export default reducer;
