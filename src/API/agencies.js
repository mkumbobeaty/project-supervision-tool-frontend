
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
 * @name getSupervisingAgencies
 * @description get supervising agencies
 * */
const getSupervisingAgencies = () =>
    axios.get(`/supervising_agencies`).then((response) => response.data);

/**
 * @function
 * @name getAgencies
 * @description get project agencies
 * */
const getAgencies = () =>
    axios.get(`/implementing_agencies`).then((response) => response.data);
/**
 * @function
 * @name getAllAgencies
 * @description get agencies
 * */
const getAllAgencies = () =>
    axios.get(`/agencies`).then((response) => response.data);

/**
 * @function
 * @name getContractors
 * @description get contractors
 * */
const getContractors = () =>
    axios.get(`/contractors`).then((response) => response.data);

/**
 * @function
 * @name getActors
 * @description get actors
 * */
const getActors = () =>
    axios.get(`/actors`).then((response) => response.data);

/**
 * @function
 * @name getPhases
 * @description get phases
 * */
const getPhases = () =>
    axios.get(`/phases`).then((response) => response.data);

/**
 * @function
 * @name fetchAgencies
 * @description get agencies
 * */
const fetchAgencies = () =>
    axios.get(`/agencies`, { params: {per_page: 100 }}).then((response) => response.data);
 

export default {
    getBorrowers,
    getFundingOrgs,
    getActors,
    getPhases,
    getAgencies,
    getContractors,
    getAllAgencies,
    getSupervisingAgencies,
    fetchAgencies
}
