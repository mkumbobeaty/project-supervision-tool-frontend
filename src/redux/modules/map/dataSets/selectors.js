
/**
 * @function
 * @name getGeonodeLayersSelector
 * @param {Object} state redux state
 */
export const getGeonodeLayersSelector = (state) => state?.map?.dataSets?.layers?.data?.objects;


/**
 * @function
 * @name getAddedDataSetSelector
 * @param {Object} state redux state
 */
export const getAddedDataSetSelector = (state) => state?.map?.dataSets?.selected.added;


/**
 * @function
 * @name getRemovedDataSetSelector
 * @param {Object} state redux state
 */
export const getRemovedDataSetSelector = (state) => state?.map?.dataSets?.selected.removed;


/**
 * @function
 * @name getTotalDataSetsSelector
 * @param {Object} state redux state
 */
export const getTotalDataSetsSelector = (state) => state?.map?.dataSets?.layers?.data?.meta.total_count;
