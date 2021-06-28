/**
 * @function
 * @name getProcuringEntities
 * @param {Object} state redux state
 */

export const getProcuringEntities = (state) => state?.procuringEntityResource?.procuringEntities?.data;

/**
 * @function
 * @name loading
 * @param {Boolean} state redux state
 */
export const loading = (state) => state?.procuringEntityResource?.procuringEntities?.loading;

/**
 * @function
 * @name selectedProcuringEntity
 * @param {Object} state redux state
 */
export const selectedProcuringEntity = (state) => state?.procuringEntityResource?.procuringEntities?.procuringEntity;

/**
 * @function
 * @name getProcuringEntitySelector
 * @param {Object} state redux state
 */
export const getProcuringEntitySelector = (state) => state?.procuringEntityResource?.procuringEntity.data;


/**
 * @function
 * @name getShowFormSelector
 * @param {Object} state redux state
 */
export const getShowFormSelector = (state) => state?.procuringEntityResource?.procuringEntities?.showForm;

/**
 * @function
 * @name getActors
 * @param {Object} state redux state
 * @return {Object} 
 */
export const getActorsSelector = (state) => state?.procuringEntityResource?.actors?.data?.data || [];

/**
 * @function
 * @name getPackages
 * @param {Object} state redux state
 */

export const getPackagesSelector = (state) => state?.procuringEntityResource?.packages?.data || [];

/**
 * @function
 * @name getPackages
 * @param {Object} state redux state
 */

export const getPackagesloaderSelector = (state) => state?.procuringEntityResource?.packages?.loading;

/**
 * @function
 * @name showPackageFormSelector
 * @param {Object} state redux state
 */
export const showPackageFormSelector = (state) => state?.procuringEntityResource?.packages?.showForm;

/**
 * @function
 * @name selectedProcuringEntity
 * @param {Object} state redux state
 */
export const selectedPackageSelector= (state) => state?.procuringEntityResource?.packages?.package;


/**
 * @function
 * @name loading
 * @param {Boolean} state redux state
 */
export const loadingPackages = (state) => state?.procuringEntityResource?.packages?.loading;
