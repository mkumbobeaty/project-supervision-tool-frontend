
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

/**
 * @function
 * @name getAgencies
 * @description get project agencies
 * */
const getAgencies = () =>
    axios.get(`/implementing_agencies`).then((response) => response.data);


export default {
    getBorrowers,
    getFundingOrgs,
    getAgencies
}