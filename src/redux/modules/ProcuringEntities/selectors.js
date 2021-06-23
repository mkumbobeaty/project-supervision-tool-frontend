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
