
/**
 * @function
 * @name getGeonodeLayersSelector
 * @param {Object} state redux state
 */
export const getGeonodeLayersSelector = (state) => state?.map?.dataSets?.layers?.data?.objects;
