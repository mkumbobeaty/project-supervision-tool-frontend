
import Axios from 'axios';

const geonodeUrl = 'https://geonode.project-supervision-tool.ga';
const baseUrl = `${geonodeUrl}/api`;

const axiosGeonode = Axios.create({
    headers: {
        Accept: "application/json",
    },
});

/**
 * @function
 * @name getLayers
 * @description get layers  fr  om Geonode
 */
const getLayers = ( params = {}) =>
    axiosGeonode.get(`${baseUrl}/layers`, { params: { ...params, limit: 10 } }).then((response) => response.data);

/**
 * @function
 * @name getCapabilities
 * @description get layers  fr  om Geonode
 */
const getCapabilities = ( params = {}) =>
    axiosGeonode.get(`${geonodeUrl}/geoserver/wms?service=wms&version=1.1.1&request=GetCapabilities`).then((response) => response.data);

/**
 * @function
 * @name getLayersCategories
 * @description get layers  from Geonode
 */
const getLayersCategories = (offset) =>
    axiosGeonode.get(`${baseUrl}/categories`, {params: { limit: 10, offset }}).then((response) => response.data);


export default {
    getLayers,
    getCapabilities,
    getLayersCategories,
}
