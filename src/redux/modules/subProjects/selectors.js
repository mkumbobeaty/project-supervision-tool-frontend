
/**
 * @function
 * @name getSubProjectsSelector
 * @param {Object} state redux state
 * @return {Object} sub project
 */
export const getSubProjectsSelector = (state) => state?.subProjectResources?.subProjects?.data;

/**
 * @function
 * @name getSubProjectsLoadingSelector
 * @param {Object} state redux state
 */
export const getSubProjectsLoadingSelector = (state) => state?.subProjectResources?.subProjects?.loading;

/**
 * @function
 * @name getSubProjectsTotalSelector
 * @param {Object} state redux state
 * @return {Object} sub project
 */
export const getSubProjectsTotalSelector = (state) => state?.subProjectResources?.subProjects?.total;

/**
 * @function
 * @name getSubProjectsPageSelector
 * @param {Object} state redux state
 * @return {Object} sub project
 */
export const getSubProjectsPageSelector = (state) => state?.subProjectResources?.subProjects?.page;

// /**
//  * @function
//  * @name getSubProjectShowFormSelector
//  * @param {Object} state redux state
//  * @return {Object} sub project
//  */
// export const getSubProjectShowFormSelector = (state) => state?.subProjectResources?.subProjects?.showForm;

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
 * @name getShowFormSelector
 * @param {Object} state redux state
 */
export const getShowFormSelector = (state) => state?.subProjectResources?.sub_project_items?.showForm;

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

/**
 * @function
 * @name selectedSubProject
 * @param {Object} state redux state
 */
export const selectedSubProject = (state) => state?.subProjectResources?.selectedSubProject