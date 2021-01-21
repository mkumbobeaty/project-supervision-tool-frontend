/**
 * @function
 * @name getSectors
 * @param {Object} state redux state
 */

export const getSubProjectItemsSelector = (state) => state.subProjectResources?.sub_project_items.data;

/**
 * @function
 * @name getSectors
 * @param {Object} state redux state
 */
export const getSubProjectLoadingSelector = (state) => state?.subProjectResources?.sub_project_items?.loading;
