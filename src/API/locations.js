
import axios from "./config";

/**
 * @function
 * @name getProjectOverview
 * @description get project overview per region
 * */
const getProjectOverview = () =>
    axios.get(`/locations/regions/projects_overview`).then((response) => response.data);


/**
 * @function
 * @name getProjectsByRegion
 * @param {string} region_id
 * @description get projects based on region
 * */
const getProjectsByRegion = (region_id) =>
    axios.get(`/locations/regions/${region_id}/projects`).then((response) => response.data);


/**
 * @function
 * @name getRegionProjectStatistics
 * @param {string} region_id
 * @description get projects statistics based on region
 * */
const getRegionProjectStatistics = (region_id) =>
    axios.get(`/locations/region/${region_id}/project_statistics`).then((response) => response.data);

/**
 * @function
 * @name getRegionDetails
 * @param {string} id
 * @description get details of a region
 * */
const getRegionDetails = (id) =>
    axios.get(`/locations/region/${id}`).then((response) => response.data);

/**
 * @function
 * @name getRegions
 * @description get list of regions
 * */
const getRegions = () =>
    axios.get(`/locations/regions`).then((response) => response.data);


/**
 * @function
 * @name getDistricts
 * @description get list of districts
 * */
const getDistricts = (regionId) =>
    axios.get(`/locations/districts/${regionId}`).then((response) => response.data);

export default {
    getProjectOverview,
    getProjectsByRegion,
    getRegionDetails,
    getRegions,
    getDistricts,
    getRegionProjectStatistics,
}
