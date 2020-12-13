


/**
 * @function
 * @name getProjectSelector
 * @param {Object} state redux state
 */
export const getProjectSelector = (state) => state?.resources?.project?.data;

/**
 * @function
 * @name getProjectsSelector
 * @param {Object} state redux state
 */
export const getProjectsSelector = (state) => state?.resources?.projects?.data;

/**
 * @function
 * @name getProjectsLoadingSelector
 * @param {Object} state redux state
 */
export const getProjectsLoadingSelector = (state) => state?.resources?.projects?.loading;

/**
 * @function
 * @name getProjectsPageSelector
 * @param {Object} state redux state
 */
export const getProjectsPageSelector = (state) => 1;

/**
 * @function
 * @name getProjectsTotalSelector
 * @param {Object} state redux state
 */
export const getProjectsTotalSelector = (state) => 10;

/**
 * @function
 * @name getProjectsShowFormSelector
 * @param {Object} state redux state
 */
export const getProjectsShowFormSelector = (state) => false;
