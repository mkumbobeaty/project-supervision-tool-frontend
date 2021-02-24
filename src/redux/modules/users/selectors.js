/**
 * @function
 * @name getUsersSelector
 * @param {Object} state redux state
 */

export const getUsersSelector = (state) => state.users?.data;

/**
 * @function
 * @name getUsersLoadingSelector
 * @param {Object} state redux state
 */
export const getUsersLoadingSelector = (state) => state?.users?.loading
