/**
 * @function
 * @name getBorrowers
 * @param {Object} state redux state
 */

export const getBorrowers = (state) => state.projectDetails?.borrowers

/**
 * @function
 * @name getFundingOrgs
 * @param {Object} state redux state
 */

export const getFundingOrgs = (state) => state.projectDetails?.funding_orgs

/**
 * @function
 * @name getAgencies
 * @param {Object} state redux state
 */

export const getAgencies = (state) => state.projectDetails?.agencies

/**
 * @function
 * @name getAgencies
 * @param {Object} state redux state
 */

export const getCurrencies = (state) => state.projectDetails?.currencies

/**
 * @function
 * @name getCreatedAmountCost
 * @param {Object} state redux state
 */
export const getCreatedAmountCost = (state) => state?.projectDetails?.project_total_cost?.amount_cost?.data;

/**
 * @function
 * @name getCreatedCommitmentCost
 * @param {Object} state redux state
 */
export const getCreatedCommitmentCost = (state) => state?.projectDetails?.project_commitment_cost?.commitment_cost?.data;
