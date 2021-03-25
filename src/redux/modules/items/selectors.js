/**
 * @function
 * @name getItemsSelector
 * @param {Object} state redux state
 */

export const getItemsSelector = (state) => {
    return state.resources?.items?.data
}

/**
 * @function
 * @name getItemsLoadingSelector
 * @param {Object} state redux state
 */
export const getItemsLoadingSelector = (state) => state.resources?.items?.loading;

