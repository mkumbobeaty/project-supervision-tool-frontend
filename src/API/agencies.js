
import axios from "./config";

/**
 * @function
 * @name getBorrower
 * @description get project borrower
 * */
const getBorrowers = () =>
    axios.get(`/borrowers`).then((response) => response.data);

/**
 * @function
 * @name getFundingOrgs
 * @description get project funding organization
 * */
const getFundingOrgs = () =>
    axios.get(`/funding_organisations`).then((response) => response.data);

export default {
    getBorrowers,
    getFundingOrgs,
}