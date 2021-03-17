/**
 * @function
 * @name getContractsSelector
 * @param {Object} state redux state
 */

export const getContractsSelector = (state) => state.contracts?.contractsData?.data?.data || [];

/**
 * @function
 * @name getContractsLoadingSelector
 * @param {Object} state redux state
 */
export const getContractsLoadingSelector = (state) => state.contracts?.contractsData?.loading;


/**
 * @function
 * @name getContractsPageSelector
 * @param {Object} state redux state
 */
 export const getContractsPageSelector = (state) => state.Contracts?.ContractsData?.page;

 /**
 * @function
 * @name getContractsTotalSelector
 * @param {Object} state redux state
 */
  export const getContractsTotalSelector = (state) => state.Contracts?.ContractsData?.total;