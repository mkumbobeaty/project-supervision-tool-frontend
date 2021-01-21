/**
 * @function
 * @name getSubProjectItemsSelector
 * @param {Object} state redux state
 */

export const getSubProjectItemsSelector = (state) => state.subProjectResources?.sub_project_items.data;

/**
 * @function
 * @name getSubProjectItemLoadingSelector
 * @param {Object} state redux state
 */
export const getSubProjectItemLoadingSelector = (state) => state?.subProjectResources?.sub_project_items?.loading;


/**
 * @function
 * @name getSectors
 * @param {Object} state redux state
 */

export const getSubProjectEquipmentsSelector = (state) => state.subProjectResources?.sub_project_equipments.data;

/**
 * @function
 * @name getSectors
 * @param {Object} state redux state
 */
export const getSubProjectEquipmentsLoadingSelector = (state) => state?.subProjectResources?.sub_project_equipments?.loading;
