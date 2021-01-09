/**
 * @function
 * @name getBorrowers
 * @param {Object} state redux state
 */

export const getBorrowersSelector = (state) => state.projectDetails?.borrowers

/**
 * @function
 * @name getFundingOrgs
 * @param {Object} state redux state
 */

export const getFundingOrgsSelector = (state) => state.projectDetails?.funding_orgs

/**
 * @function
 * @name getAgencies
 * @param {Object} state redux state
 */

export const getAgenciesSelector = (state) => state.projectDetails?.agencies

/**
 * @function
 * @name getAgencies
 * @param {Object} state redux state
 */

export const getCurrenciesSelector = (state) => state.projectDetails?.currencies

/**
 * @function
 * @name getCreatedAmountCost
 * @param {Object} state redux state
 */
export const getCreatedAmountCostSelector = (state) => state?.projectDetails?.project_total_cost?.amount_cost?.data;

/**
 * @function
 * @name getCreatedCommitmentCost
 * @param {Object} state redux state
 */
export const getCreatedCommitmentCostSelector = (state) => state?.projectDetails?.project_commitment_cost?.commitment_cost?.data;
