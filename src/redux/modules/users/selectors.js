/**
 * @function
 * @name getUsersSelector
 * @param {Object} state redux state
 */

export const getUsersSelector = (state) => {
    return state.users?.usersData?.data;
}

/**
 * @function
 * @name getUsersLoadingSelector
 * @param {Object} state redux state
 */
export const getUsersLoadingSelector = (state) => state.users?.usersData?.loading
