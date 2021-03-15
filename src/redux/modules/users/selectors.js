/**
 * @function
 * @name getUsersSelector
 * @param {Object} state redux state
 */

export const getUsersSelector = (state) => state.users?.usersData?.data?.data || [];

/**
 * @function
 * @name getUsersLoadingSelector
 * @param {Object} state redux state
 */
export const getUsersLoadingSelector = (state) => state.users?.usersData?.loading;

/**
 * @function
 * @name getUsersPageSelector
 * @param {Object} state redux state
 */
 export const getUsersPageSelector = (state) => state.users?.usersData?.page;

 /**
 * @function
 * @name getUsersTotalSelector
 * @param {Object} state redux state
 */
  export const getUsersTotalSelector = (state) => state.users?.usersData?.total;